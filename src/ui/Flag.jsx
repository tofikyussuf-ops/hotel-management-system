function Flag({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="block max-w-[2rem] rounded-tiny border border-grey-100"
    />
  );
}

export default Flag;
