import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // If the ref exists and the click target is NOT inside the ref element
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      // We use 'true' for the capturing phase so the click doesn't
      // bubble up and immediately close the modal when it opens
      document.addEventListener('click', handleClick, listenCapturing);

      return () =>
        document.removeEventListener('click', handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
