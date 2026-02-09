import { BiLoaderAlt } from 'react-icons/bi';

function SpinnerMini() {
  return (
    // Added 'inline' and simplified the animation class
    <BiLoaderAlt className="inline-block h-6 w-6 animate-spin" />
  );
}

export default SpinnerMini;
