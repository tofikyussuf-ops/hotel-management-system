import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import App from './App.jsx';
import ErrorFallback from './ui/ErrorFallback';
import './styles/index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* 🛡️ This protects your entire application */}
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
