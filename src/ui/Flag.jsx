function Flag({ src, alt }) {
  // If there's no source, don't render a broken image box
  if (!src) return null;

  return (
    <img
      src={src}
      alt={alt}
      className="block max-w-[2rem] rounded-tiny border border-grey-100"
    />
  );
}

export default Flag;
