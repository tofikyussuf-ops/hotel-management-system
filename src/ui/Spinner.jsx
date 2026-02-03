function Spinner() {
  return (
    <div className="animate-spinner-rotate mx-auto my-[4.8rem] aspect-square w-[6.4rem] rounded-full bg-[radial-gradient(farthest-side,var(--color-brand-600)_94%,#0000)_top/10px_10px_no-repeat,conic-gradient(#0000_30%,var(--color-brand-600))] [-webkit-mask-image:radial-gradient(farthest-side,#0000_calc(100%-10px),#000_0)] [mask-image:radial-gradient(farthest-side,#0000_calc(100%-10px),#000_0)]" />
  );
}

export default Spinner;
