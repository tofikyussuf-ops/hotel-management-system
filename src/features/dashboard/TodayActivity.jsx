import { useTodayActivity } from './useTodayActivity';
import Spinner from '../../ui/Spinner';
import TodayItem from './TodayItem';

function TodayActivity() {
  const { activities, isPending } = useTodayActivity();

  return (
    <div className="flex flex-col gap-6 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 pt-6 shadow-sm lg:col-span-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[var(--color-grey-700)]">
          Today
        </h2>
      </div>

      {!isPending ? (
        activities?.length > 0 ? (
          <ul className="scrollbar-none overflow-y-auto overflow-x-hidden">
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-center text-lg font-medium">
            No activity today...
          </p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default TodayActivity;
