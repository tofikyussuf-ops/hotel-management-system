import { useTodayActivity } from './useTodayActivity';
import Spinner from '../../ui/Spinner';
import TodayItem from './TodayItem';
function TodayActivity() {
  const { activities, isPending } = useTodayActivity();

  return (
    <div className="flex w-full flex-col gap-14 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 pt-6 shadow-sm">
      <h2 className="pt-4 text-2xl font-semibold text-[var(--color-grey-700)]">
        Today
      </h2>

      {!isPending ? (
        activities?.length > 0 ? (
          /* Use flex-1 to make the list expand to fill available space */
          <ul className="scrollbar-none flex flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden">
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          /* Center the empty message if there's no data */
          <div className="flex flex-1 items-center justify-center">
            <p className="text-lg font-medium text-[var(--color-grey-500)]">
              No activity today...
            </p>
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}
export default TodayActivity;
