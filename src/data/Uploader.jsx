import { isFuture, isPast, isToday } from 'date-fns';
import { useState } from 'react';
import supabase from '../services/supabase';
import Button from '../ui/Button';
import { subtractDates } from '../utils/helpers';

import { bookings } from './data-bookings';
import { cabins } from './data-cabins';
import { guests } from './data-guests';

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

async function deleteGuests() {
  const { error } = await supabase.from('guests').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteCabins() {
  const { error } = await supabase.from('cabins').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from('bookings').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function createGuests() {
  const { error } = await supabase.from('guests').insert(guests);
  if (error) console.log(error.message);
}

async function createCabins() {
  const { error } = await supabase.from('cabins').insert(cabins);
  if (error) console.log(error.message);
}
async function createBookings() {
  // 1. Fetch IDs
  const { data: guestsData } = await supabase
    .from('guests')
    .select('id')
    .order('id');
  const { data: cabinsData } = await supabase
    .from('cabins')
    .select('id')
    .order('id');

  const allGuestIds = guestsData.map((g) => g.id);
  const allCabinIds = cabinsData.map((c) => c.id);

  console.log('DB Guests Count:', allGuestIds.length);
  console.log(
    'Local Bookings Max Guest ID reference:',
    Math.max(...bookings.map((b) => b.guestId))
  );

  const finalBookings = bookings.map((booking) => {
    const cabin = cabins.at(booking.cabinId - 1);

    // The Mapping
    const gId = allGuestIds.at(booking.guestId - 1);
    const cId = allCabinIds.at(booking.cabinId - 1);

    // If this triggers, your JSON data is referencing a guest that doesn't exist
    if (gId === undefined) {
      console.error(
        `CRITICAL: Booking for Guest #${booking.guestId} failed mapping because only ${allGuestIds.length} guests exist in DB.`
      );
    }

    const numNights = subtractDates(booking.endDate, booking.startDate);
    const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
    const extrasPrice = booking.hasBreakfast
      ? numNights * 15 * booking.numGuests
      : 0;
    const totalPrice = cabinPrice + extrasPrice;

    let status;
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    )
      status = 'checked-out';
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    )
      status = 'unconfirmed';
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    )
      status = 'checked-in';

    return {
      ...booking,
      numNights,
      cabinPrice,
      extrasPrice,
      totalPrice,
      guestId: gId, // Will be NULL in DB if undefined here
      cabinId: cId,
      status,
    };
  });

  const { error } = await supabase.from('bookings').insert(finalBookings);
  if (error) console.log('Final Error:', error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteBookings();
    await deleteGuests();
    await deleteCabins();

    // Bookings need to be created LAST
    await createGuests();
    await createCabins();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: 'auto',
        backgroundColor: 'var(--color-indigo-100)',
        padding: '8px',
        borderRadius: 'var(--border-radius-sm)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        /* We keep the text color for contrast, but the border is gone */
        color: 'var(--color-indigo-700)',
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button>
    </div>
  );
}

export default Uploader;
