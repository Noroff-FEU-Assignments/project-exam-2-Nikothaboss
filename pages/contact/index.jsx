import ContactForm from "../../components/contactForm/ContactForm";
import nookies from "nookies";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>PE2 Nikolai | Contact Us</title>
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let loggedIn;
  if (cookies?.jwt) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  return {
    props: {
      loggedIn: loggedIn,
    },
  };
};
