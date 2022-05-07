import "../styles/globals.css";
import { AuthProvider } from "../contexts/authContext";
import Head from "next/head";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
