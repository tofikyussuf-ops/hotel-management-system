import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState'; // Custom hook for localStorage

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  // 1. Check if the user's OS prefers dark mode
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // 2. Set the default based on OS preference if LocalStorage is empty
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    prefersDark,
    'isDarkMode'
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    },
    [isDarkMode]
  );

  // ... rest of your code

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error('DarkModeContext used outside provider');
  return context;
}

export { DarkModeProvider, useDarkMode };
