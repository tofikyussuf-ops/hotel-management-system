import { useEffect, useState } from 'react';
import { useMoveBack } from '../../hooks/useMoveBack';
import { formatCurrency } from '../../utils/helpers';
import { useBooking } from '../bookings/useBooking';
import { useCheckin } from '../bookings/useCheckin';

import BookingDataBox from '../../features/bookings/BookingDataBox';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import ButtonText from '../../ui/ButtonText';
import Checkbox from '../../ui/Checkbox';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Spinner from '../../ui/Spinner';

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const moveBack = useMoveBack();
  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckin();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);
  if (isLoading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {
    if (!confirmPaid) return;
    // Call the mutation function from our hook
    checkin(bookingId);
  }

  return (
    <div className="flex flex-col gap-8">
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {/* Tailwind optimized Box */}
      <div className="rounded-md border border-gray-100 bg-white px-10 py-6">
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((s) => !s)}
          id="confirm"
          disabled={confirmPaid}
        >
          I confirm that{' '}
          <span className="font-semibold">{guests.fullName}</span> has paid the
          total amount of
          <span className="font-sono font-medium">
            {formatCurrency(totalPrice)}
          </span>
        </Checkbox>
      </div>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default CheckinBooking;
