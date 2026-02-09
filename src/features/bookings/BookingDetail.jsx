import { useParams } from 'react-router-dom';
import { useMoveBack } from '../../hooks/useMoveBack';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import ButtonText from '../../ui/ButtonText';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Tag from '../../ui/Tag';
import BookingDataBox from './BookingDataBox';
import { useBooking } from './useBooking';
import Spinner from '../../ui/Spinner';

function BookingDetail() {
  // We'll replace these with useBooking() hook later
  const { bookingId } = useParams(); // Grabs the ID from the URL
  const { isLoading, booking } = useBooking(bookingId);
  const status = 'checked-in';

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };
  if (isLoading) return <Spinner />;
  return (
    <>
      <Row type="horizontal">
        {/* Replaced HeadingGroup styled component with a simple div */}
        <div className="flex items-center gap-[2.4rem]">
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {/* You can add Check-in or Check-out buttons here later */}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
