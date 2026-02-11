import { Link } from 'react-router-dom';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import Flag from '../../ui/Flag';
import { useCheckout } from '../check-in-out/useCheckedout';

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <li className="grid grid-cols-[9rem_2rem_1fr_7rem_9rem] items-center gap-5 border-b border-[var(--color-grey-100)] py-3 text-sm first:border-t last:border-b-0">
      {status === 'unconfirmed' && <Tag type="green">Arriving</Tag>}
      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.nationality}`} />
      <div className="font-semibold">{guests.fullName}</div>
      <div>{numNights} nights</div>

      {status === 'unconfirmed' && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === 'checked-in' && (
        <Button
          size="small"
          variation="primary"
          onClick={() => checkout(id)} // 👈 2. Trigger mutation on click
          disabled={isCheckingOut}
        >
          Check out
        </Button>
      )}
    </li>
  );
}

export default TodayItem;
