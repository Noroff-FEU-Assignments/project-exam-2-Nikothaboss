import axios from "axios";
import App from "next/app";
import "../styles/globals.css";
import { AuthProvider } from "../contexts/authContext";
import { baseUrl } from "../utils/API_CONSTANTS";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import favicon from "../img/BB-logo.svg";
import Head from "next/head";

function MyApp({ Component, pageProps, loggedIn, hotels }) {
  return (
    <AuthProvider>
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>
      <div className="app_container">
        <Header user={loggedIn} searchData={hotels} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const jwt = appContext.ctx.res?.req.cookies.jwt;

  let loggedIn = null;
  if (jwt) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  const res = await axios.get(baseUrl + "hotels");
  const hotels = res.data.data;

  return { ...appProps, loggedIn: loggedIn, hotels };
};
