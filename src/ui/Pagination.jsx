import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../utils/constants';

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

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Current Page Logic
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  // 2. Page Count Calculation
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  // Hide if there's only one page (or zero)
  if (pageCount <= 1) return null;

  return (
    <div className="flex w-full items-center justify-between">
      <p className="ml-[0.8rem] text-[1.4rem] [&_span]:font-semibold">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>
          {/* Ensure we don't show a number higher than total count */}
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results
      </p>

      <div className="flex gap-[0.6rem]">
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span> <HiChevronRight />
        </PaginationButton>
      </div>
    </div>
  );
}

export default Pagination;
