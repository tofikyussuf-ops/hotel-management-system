function DashboardLayout() {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_34rem_auto] gap-10 md:grid-cols-2 lg:grid-cols-4">
      {/* 1. Statistics Row (Spans 4 columns) */}
      <div className="col-span-full flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-[var(--color-grey-700)]">
          Statistics
        </h2>
        {/* Statistics Content would go here */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Place your <Stat /> components here */}
          <div className="h-32 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] shadow-sm">
            Stat 1
          </div>
          <div className="h-32 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] shadow-sm">
            Stat 2
          </div>
          <div className="h-32 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] shadow-sm">
            Stat 3
          </div>
          <div className="h-32 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] shadow-sm">
            Stat 4
          </div>
        </div>
      </div>

      {/* 2. Charts Row */}
      <div className="col-span-full rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 shadow-sm lg:col-span-2">
        <h3 className="mb-4 text-xl font-semibold">Stay Duration</h3>
        {/* Chart Component */}
      </div>

      <div className="col-span-full rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 shadow-sm lg:col-span-2">
        <h3 className="mb-4 text-xl font-semibold">Sales</h3>
        {/* Chart Component */}
      </div>

      {/* 3. Final Row (e.g., Today's Activity) */}
      <div className="col-span-full rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 shadow-sm">
        Today's Activity / Bookings Table
      </div>
    </div>
  );
}

export default DashboardLayout;
