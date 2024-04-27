import { SelectorProvider } from '../contexts/SelectorContext';

function MyApp({ Component, pageProps }) {
  return (
    <SelectorProvider>
      <Component {...pageProps} />
    </SelectorProvider>
  );
}

export default MyApp;
