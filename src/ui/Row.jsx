function Row({ type = 'vertical', children, className = '' }) {
  const base = 'flex';

  const variations = {
    // 1. Mobile-first: start as a column with a gap
    // 2. sm: Desktop: switch to row, justify between, and center items
    horizontal:
      'flex-col gap-[1.6rem] sm:flex-row sm:justify-between sm:items-center sm:gap-0',

    // Vertical remains a column regardless of screen size
    vertical: 'flex-col gap-[1.6rem]',
  };

  return (
    <div className={`${base} ${variations[type]} ${className}`}>{children}</div>
  );
}

export default Row;
