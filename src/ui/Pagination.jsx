function Pagination({ count }) {
  // Logic for page calculation would go here
  return (
    <div className="flex w-full items-center justify-between">
      <p className="ml-[0.8rem] text-[1.4rem] [&_span]:font-semibold">
        Showing <span>1</span> to <span>10</span> of <span>{count}</span>{' '}
        results
      </p>

      <div className="flex gap-[0.6rem]">
        <PaginationButton>
          <svg>...</svg> <span>Previous</span>
        </PaginationButton>

        <PaginationButton active>
          <span>Next</span> <svg>...</svg>
        </PaginationButton>
      </div>
    </div>
  );
}

function PaginationButton({ active, children, disabled, onClick }) {
  const activeClass = active
    ? 'bg-brand-600 text-brand-50'
    : 'bg-grey-50 text-inherit';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` ${activeClass} hover:not(:disabled):bg-brand-600 hover:not(:disabled):text-brand-50 flex items-center justify-center gap-[0.4rem] rounded-sm border-none px-[1.2rem] py-[0.6rem] text-[1.4rem] font-medium transition-all duration-300 has-[span:first-child]:pr-[0.4rem] has-[span:last-child]:pl-[0.4rem] [&_svg]:h-[1.8rem] [&_svg]:w-[1.8rem]`}
    >
      {children}
    </button>
  );
}
