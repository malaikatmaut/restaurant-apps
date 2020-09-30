const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('../sw.js');
      return;
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError);
      return;
    }
  }
  console.log('Service worker is not supported in this browser');
};

export default swRegister;
