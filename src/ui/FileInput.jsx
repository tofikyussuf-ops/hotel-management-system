import React from 'react';

const FileInput = React.forwardRef(function FileInput(props, ref) {
  return (
    <input
      type="file"
      ref={ref} // 👈 This is the missing link!
      className="rounded-sm text-[1.4rem] file:mr-[1.2rem] file:cursor-pointer file:rounded-sm file:border-none file:bg-brand-600 file:px-[1.2rem] file:py-[0.8rem] file:font-medium file:text-brand-50 file:transition-colors file:duration-200 file:hover:bg-brand-700"
      {...props}
    />
  );
});

export default FileInput;
