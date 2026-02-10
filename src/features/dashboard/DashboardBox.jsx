function DashboardBox({ children }) {
  return (
    <div className="flex flex-col gap-6 rounded-md border border-[var(--color-grey-100)] bg-[var(--color-grey-0)] p-8 shadow-sm transition-all duration-300">
      {children}
    </div>
  );
}

export default DashboardBox;
