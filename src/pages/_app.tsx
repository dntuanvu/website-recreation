import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { CssBaseline } from '@mui/material';
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
