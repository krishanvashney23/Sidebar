import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css';
import '@/styles/sidebar.css';
import '@/styles/index.css';
import '@/styles/dashboard.css';
import '@/styles/reportone.css';
import '@/styles/adduser.css';
import '@/styles/allreport.css';
import Toast from '../components/Toast';
import Head from 'next/head';
import BootstrapJSLoader from '@/components/BootstrapJsLoader';
import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BootstrapJSLoader />
      <Toast />
      
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
