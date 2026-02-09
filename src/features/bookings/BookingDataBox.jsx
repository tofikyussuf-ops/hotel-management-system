import { format, isToday } from 'date-fns';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';

import DataItem from '../../ui/DataItem';
import Flag from '../../ui/Flag';
import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className="overflow-hidden rounded-md border border-grey-100 bg-grey-0">
      {/* HEADER */}
      <header className="flex items-center justify-between bg-brand-500 px-[4rem] py-[2rem] text-[1.8rem] font-medium text-brand-100">
        <div className="flex items-center gap-[1.6rem] text-[1.8rem] font-semibold">
          <HiOutlineHomeModern className="h-[3.2rem] w-[3.2rem]" />
          <p>
            {numNights} nights in Cabin{' '}
            <span className="ml-1 font-sono text-[2rem]">{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>
      </header>

      {/* BODY SECTION */}
      <section className="px-[4rem] pb-[1.2rem] pt-[3.2rem]">
        <div className="mb-[1.6rem] flex items-center gap-[1.2rem] text-grey-500">
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p className="font-medium text-grey-700">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>

        {observations && (
          <DataItem
            icon={
              <HiOutlineChatBubbleBottomCenterText className="h-[2.4rem] w-[2.4rem] text-brand-600" />
            }
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem
          icon={
            <HiOutlineCheckCircle className="h-[2.4rem] w-[2.4rem] text-brand-600" />
          }
          label="Breakfast included?"
        >
          {hasBreakfast ? 'Yes' : 'No'}
        </DataItem>

        {/* PRICE BOX (Dynamic Colors) */}
        <div
          className={`mt-[2.4rem] flex items-center justify-between rounded-sm px-[3.2rem] py-[1.6rem] ${isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
        >
          <DataItem
            icon={<HiOutlineCurrencyDollar className="h-[2.4rem] w-[2.4rem]" />}
            label={`Total price`}
          >
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p className="text-[1.4rem] font-semibold uppercase">
            {isPaid ? 'Paid' : 'Will pay at property'}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-[4rem] py-[1.6rem] text-right text-[1.2rem] text-grey-500">
        <p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
