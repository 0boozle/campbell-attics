import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initPerformanceMonitoring } from './utils/performance';
import { ErrorBoundary } from './components/ErrorBoundary';

// Initialize performance monitoring in production
if (import.meta.env.PROD) {
  initPerformanceMonitoring();
}

const root = createRoot(document.getElementById('root')!);

// Only load axe-core in development
if (import.meta.env.DEV) {
  Promise.all([
    import('react'),
    import('react-dom'),
    import('@axe-core/react')
  ]).then(([React, ReactDOM, axe]) => {
    axe.default(React, ReactDOM, 1000);
  }).catch(err => {
    console.warn('Unable to initialize axe-core:', err);
  });
}

root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);