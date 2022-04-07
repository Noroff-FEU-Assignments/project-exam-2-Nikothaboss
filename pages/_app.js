import "../styles/globals.css";
import { ClientWrapper } from "../contexts/clientContext";

function MyApp({ Component, pageProps }) {
  return (
    <ClientWrapper>
      <Component {...pageProps} />
    </ClientWrapper>
  );
}

export default MyApp;
