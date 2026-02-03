function Row({ type = 'vertical', children, className = '' }) {
  const base = 'flex';

  const variations = {
    horizontal: 'justify-between items-center',
    vertical: 'flex-col gap-[1.6rem]',
  };

  return (
    <div className={`${base} ${variations[type]} ${className}`}>{children}</div>
  );
}
export default Row;
