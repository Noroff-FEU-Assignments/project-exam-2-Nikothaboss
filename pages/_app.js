import "../styles/globals.css";
import { AuthProvider } from "../contexts/authContext";
import nookies from "nookies";
import Header from "../components/header/Header";
import { useContext } from "react";
import App from "next/app";
import AuthContext from "../contexts/authContext";

function MyApp({ Component, pageProps, loggedIn }) {
  const [auth, setAuth] = useContext(AuthContext);
  console.log("logged in: " + loggedIn);
  setAuth(loggedIn);
  // console.log("authContext: ", auth);
  return (
    <AuthProvider>
      <div className="app_container">
        <Header user={loggedIn} />
        <Component {...pageProps} />
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

  return { ...appProps, loggedIn: loggedIn };
};
