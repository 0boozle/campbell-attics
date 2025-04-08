// Performance monitoring utilities
export const measureCLS = () => {
  if ('web-vital' in window) {
    // @ts-ignore
    new window.webVitals.getCLS(console.log);
  }
};

export const measureFID = () => {
  if ('web-vital' in window) {
    // @ts-ignore
    new window.webVitals.getFID(console.log);
  }
};

export const measureLCP = () => {
  if ('web-vital' in window) {
    // @ts-ignore
    new window.webVitals.getLCP(console.log);
  }
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  measureCLS();
  measureFID();
  measureLCP();
};