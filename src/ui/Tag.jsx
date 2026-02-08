// src/ui/Tag.jsx
function Tag({ type, children }) {
  const colorClasses = {
    // Make sure these classes exist
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    silver: 'bg-grey-100 text-grey-700',
    yellow: 'bg-yellow-100 text-yellow-700',
  };

  return (
    <span
      className={`w-fit rounded-full px-3 py-1 text-[1.1rem] font-semibold uppercase ${colorClasses[type]}`}
    >
      {children}
    </span>
  );
}

export default Tag;
