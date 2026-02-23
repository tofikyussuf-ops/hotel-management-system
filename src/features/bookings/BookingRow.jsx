import { format, isToday } from 'date-fns';
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Menus from '../../ui/Menus';
import Modal from '../../ui/Modal';
import Table from '../../ui/Table';
import Tag from '../../ui/Tag';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';
import { useCheckout } from '../check-in-out/useCheckedout';
import { useDeleteBooking } from './useDeleteBooking';
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
    guests, // 1. Pull the guests object out first
    cabins, // 2. Pull the cabins object out first
  },
}) {
  // 3. Destructure safely with fallbacks
  const { fullName: guestName, email } = guests || {};
  const { name: cabinName } = cabins || {};

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  const { deleteBooking, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Table.Row>
      <div className="font-sono text-[1.6rem] font-semibold text-grey-600">
        {cabinName || 'N/A'}
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-medium text-grey-700">
          {guestName || 'Deleted Guest'}
        </span>
        <span className="text-[1.2rem] text-grey-500">{email || ''}</span>
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

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={bookingId} />

            <Menus.List id={bookingId}>
              <Menus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/bookings/${bookingId}`)} // Ensure lowercase 'bookings'
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
                <Menus.Button
                  icon={<HiArrowUpOnSquare />}
                  onClick={() => checkout(bookingId)}
                  disabled={isCheckingOut}
                >
                  Check out
                </Menus.Button>
              )}

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default BookingRow;
