import { format, isToday } from 'date-fns';
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from 'react-icons/hi2';

import { useNavigate } from 'react-router-dom';
import Menus from '../../ui/Menus';
import Table from '../../ui/Table';
import Tag from '../../ui/Tag';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';

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
  const navigate = useNavigate(); // Initialize navigat
  return (
    <Table.Row>
      <div className="font-sono text-[1.6rem] font-semibold text-grey-600">
        {cabinName}
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-medium text-grey-700">{guestName}</span>
        <span className="text-[1.2rem] text-grey-500">{email}</span>
      </div>

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

      <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

      <div className="font-sono font-medium">{formatCurrency(totalPrice)}</div>

      {/* 2. The Menu implementation */}
      <div>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />

          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/Bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>

            {status === 'unconfirmed' && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )}

            {status === 'checked-in' && (
              <Menus.Button icon={<HiArrowUpOnSquare />}>
                Check out
              </Menus.Button>
            )}

            <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </Table.Row>
  );
}

export default BookingRow;
