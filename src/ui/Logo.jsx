function Logo() {
  return (
    <div className="text-center">
      <img
        src="/logo-light.png"
        alt="Horizon Hotel Suite Logo"
        /* 1. We use w-full to let it take up the available width 
           2. max-w-[24rem] ensures it doesn't get TOO huge on giant screens
           3. h-auto ensures the proportions stay perfect
        */
        className="mx-auto h-auto w-full max-w-[20rem] px-4"
      />
    </div>
  );
}

export default Logo;
