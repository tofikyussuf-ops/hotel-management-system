// src/context/SidebarContext.jsx
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((open) => !open);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined)
    throw new Error('SidebarContext used outside provider');
  return context;
}
