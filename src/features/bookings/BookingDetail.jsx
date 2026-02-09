import { useNavigate, useParams } from 'react-router-dom';
import { useMoveBack } from '../../hooks/useMoveBack';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import ButtonText from '../../ui/ButtonText';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Spinner from '../../ui/Spinner';
import Tag from '../../ui/Tag';
import { useCheckout } from '../check-in-out/useCheckedout';
import BookingDataBox from './BookingDataBox';
import { useBooking } from './useBooking';

function BookingDetail() {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const moveBack = useMoveBack();

  const { isLoading, booking } = useBooking(bookingId);
  const { checkout, isCheckingOut } = useCheckout();
  if (isLoading) return <Spinner />;

  // 2. IMPORTANT: Check if booking actually exists before trying to use it
  if (!booking) return <p>No booking data found for ID #{bookingId}</p>;

  // 3. NOW you can safely destructure
  const { status, id } = booking;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      <Row type="horizontal">
        {/* Replaced HeadingGroup styled component with a simple div */}
        <div className="flex items-center gap-[2.4rem]">
          <Heading as="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${id}`)}>Check in</Button>
        )}

        {status === 'checked-in' && (
          <Button onClick={() => checkout(id)} disabled={isCheckingOut}>
            Check out
          </Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
