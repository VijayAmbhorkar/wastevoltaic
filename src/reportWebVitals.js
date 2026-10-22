const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((vitals) => {
      vitals.getCLS(onPerfEntry);
      vitals.getFCP(onPerfEntry);
      vitals.getLCP(onPerfEntry);
      vitals.getTTFB(onPerfEntry);
      if (typeof vitals.getFID === 'function') vitals.getFID(onPerfEntry);
    });
  }
};

export default reportWebVitals;
