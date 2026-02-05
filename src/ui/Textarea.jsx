import React from 'react';

const Textarea = React.forwardRef(function Textarea(props, ref) {
  return (
    <textarea
      ref={ref} // Attach the forwarded ref
      className="block h-[8rem] w-full rounded-[5px] border border-grey-300 bg-grey-0 px-[1.2rem] py-[0.8rem] shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
      {...props} // Spread all props (onChange, onBlur, name, etc.)
    />
  );
});

export default Textarea;
