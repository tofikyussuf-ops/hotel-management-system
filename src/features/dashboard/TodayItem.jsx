import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import Flag from '../../ui/Flag';
import Tag from '../../ui/Tag';
import { useCheckout } from '../check-in-out/useCheckedout';

function TodayItem({ activity }) {
  if (!activity) return null;

  const { id, status, guests, numNights } = activity;
  const { checkout, isCheckingOut } = useCheckout();

  // 1. SAFE DATA ACCESS
  // We use optional chaining (?.) in case 'guests' is null in the database
  const fullName = guests?.fullName || 'Unknown Guest';
  const countryFlag = guests?.countryFlag || '';
  const nationality = guests?.nationality || '';

  return (
    <li className="grid grid-cols-[9rem_2rem_1fr_7rem_9rem] items-center gap-5 border-b border-[var(--color-grey-100)] py-3 text-sm first:border-t last:border-b-0">
      {status === 'unconfirmed' && <Tag type="green">Arriving</Tag>}
      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}

      {/* 2. CORRECTION: Use the safe variables here! */}
      <Flag
        src={countryFlag}
        alt={nationality ? `Flag of ${nationality}` : ''}
      />

      {/* 3. CORRECTION: Use the safe fullName variable here */}
      <div className="font-semibold">{fullName}</div>

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
          onClick={() => checkout(id)}
          disabled={isCheckingOut}
        >
          Check out
        </Button>
      )}
    </li>
  );
}

export default TodayItem;
