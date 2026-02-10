function FormRow({ label, error, children }) {
  return (
    <div
      className={`grid items-center gap-6 border-b border-grey-100 py-5 first:pt-0 last:border-0 last:pb-0 ${
        label ? 'grid-cols-[24rem_1fr_1.2fr]' : 'flex justify-end gap-3' // Removed flex-col and sm:flex-row
      }`}
    >
      {label && (
        <label
          className="font-medium text-grey-700"
          htmlFor={
            Array.isArray(children) ? children[0].props?.id : children.props?.id
          }
        >
          {label}
        </label>
      )}

      {/* Wrap children in a div if it's the button row to control their layout specifically */}
      <div className={!label ? 'flex justify-end gap-3 whitespace-nowrap' : ''}>
        {children}
      </div>

      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}
export default FormRow;
