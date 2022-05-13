import { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/yupSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import nookies from "nookies";

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
  const router = useRouter();

  console.log(auth);

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, []);

  const logIn = async (formData) => {
    try {
      const res = await axios.post("/api/login", {
        identifier: formData.email,
        password: formData.password,
      });
      if (res.status === 200) {
        setAuth(true);
        setError(false);
        router.push("/");
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const onSubmit = (formData) => {
    logIn(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        {error && <h3>Wrong username or password</h3>}
        <div>
          <input {...register("email")} placeholder="Email" />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button>log in</button>
      </form>
    </>
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
