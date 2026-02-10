function Stat({ icon, title, value, color }) {
  return (
    <div className="grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-4 shadow-sm">
      {/* Icon Container */}
      <div
        className="row-span-full flex aspect-square items-center justify-center rounded-full"
        style={{ backgroundColor: `var(--color-${color}-100)` }}
      >
        <span
          className="h-8 w-8"
          style={{ color: `var(--color-${color}-700)` }}
        >
          {icon}
        </span>
      </div>

      {/* Title */}
      <h5 className="self-end text-[1.2rem] font-semibold uppercase tracking-widest text-[var(--color-grey-500)]">
        {title}
      </h5>

      {/* Value */}
      <p className="text-[2.4rem] font-medium leading-none text-[var(--color-grey-700)]">
        {value}
      </p>
    </div>
  );
}

export default Stat;
