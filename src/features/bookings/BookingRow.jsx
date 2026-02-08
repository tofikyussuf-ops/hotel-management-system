import { format, isToday } from 'date-fns';
import Tag from '../../ui/Tag';
import Table from '../../ui/Table';
import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email } = {},
    cabins: { name: cabinName } = {},
  },
}) {
  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <Table.Row>
      {/* Cabin Name */}
      <div className="font-sono text-[1.6rem] font-semibold text-grey-600">
        {cabinName}
      </div>

      {/* Guest Info */}
      <div className="flex flex-col gap-1">
        <span className="font-medium text-grey-700">{guestName}</span>
        <span className="text-[1.2rem] text-grey-500">{email}</span>
      </div>

      {/* Date Details */}
      <div className="flex flex-col gap-1">
        <span className="font-medium">
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}{' '}
          &rarr; {numNights} night stay
        </span>
        <span className="text-[1.2rem] text-grey-500">
          {format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
          {format(new Date(endDate), 'MMM dd yyyy')}
        </span>
      </div>

      {/* Status Tag */}
      <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

      {/* Price */}
      <div className="font-sono font-medium">{formatCurrency(totalPrice)}</div>

      {/* Action menu will go here later */}
    </Table.Row>
  );
}

export default BookingRow;
