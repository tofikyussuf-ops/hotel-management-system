// src/ui/FormRow.jsx
function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 border-b border-grey-100 py-5 first:pt-0 last:border-0 last:pb-0">
      {label && (
        <label
          className="font-medium text-grey-700"
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
