function Form({ type = 'default', children, ...props }) {
  const baseStyles = 'overflow-hidden text-[1.4rem]';

  const variations = {
    default:
      'py-[2.4rem] px-[4rem] bg-grey-0 border border-grey-100 rounded-md',
    modal: 'w-[80rem]',
  };

  const className = `${baseStyles} ${variations[type]}`;

  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
}

export default Form;
