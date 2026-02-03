function Heading({ as = 'h1', children, className = '' }) {
  const base = 'font-semibold leading-[1.2]';

  const variations = {
    h1: 'text-[3rem]',
    h2: 'text-[2rem]',
    h3: 'text-[2rem] font-medium',
    h4: 'text-[3rem] font-semibold text-center',
  };

  const Component = as;

  return (
    <Component className={`${base} ${variations[as]} ${className}`}>
      {children}
    </Component>
  );
}
export default Heading;
