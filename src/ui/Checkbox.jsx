function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div className="flex gap-[1.6rem]">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        /* origin-[0] is the tailwind equivalent of transform-origin: 0 
           accent-brand-600 handles the checkbox color 
        */
        className="h-[2.4rem] w-[2.4rem] origin-[0] accent-brand-600 outline-offset-2 disabled:accent-brand-600"
      />
      <label
        htmlFor={!disabled ? id : ''}
        className="flex flex-1 items-center gap-[0.8rem]"
      >
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
