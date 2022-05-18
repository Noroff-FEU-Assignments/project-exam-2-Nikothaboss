import nookies from "nookies";

const Admin = () => {
  return <div>Admin</div>;
};

export default Admin;

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let loggedIn;
  if (cookies?.jwt) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  if (!loggedIn) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      loggedIn: loggedIn,
    },
  };
};
