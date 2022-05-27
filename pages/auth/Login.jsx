import { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/yupSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import nookies from "nookies";
import { LoginStyled } from "../../styles/login.styled";
import Head from "next/head";

const Login = ({ loggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [auth, setAuth] = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const logIn = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/login", {
        identifier: formData.email,
        password: formData.password,
      });
      if (res.status === 200) {
        setLoading(false);
        setAuth(true);
        setError(false);
        router.push("/");
      }
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  };

  const onSubmit = (formData) => {
    logIn(formData);
  };
  return (
    <LoginStyled>
      <Head>
        <title>PE2 Nikolai | Login</title>
      </Head>
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <h4>Wrong username or password</h4>}
          <div>
            {errors.email && <span>{errors.email.message}</span>}
            <input {...register("email")} placeholder="Email" />
          </div>
          <div>
            {errors.password && <span>{errors.password.message}</span>}
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
          </div>
          <button>
            {loading ? (
              <img
                class="spinner"
                src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C?v=v2"
              />
            ) : (
              "Log In"
            )}
          </button>
        </form>
      </fieldset>
    </LoginStyled>
  );
};

export default Login;

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let loggedIn;
  console.log(cookies);
  if (cookies?.jwt) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  if (loggedIn) {
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
