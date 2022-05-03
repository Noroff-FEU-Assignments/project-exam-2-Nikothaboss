import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/yupSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Router from "next/router";
import { axiosJWT, getRefreshToken } from "../../utils/axiosInstances";
import { baseUrl } from "../../utils/API_CONSTANTS";

// https://github.com/bahdcoder/jwt-best-practices
// https://www.youtube.com/watch?v=0hAmccuaK5Q&t=18s&ab_channel=Strapi

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  const logIn = async (formData) => {
    const request = await axios.post(baseUrl + "api/auth/local", {
      identifier: formData.email,
      password: formData.password,
    });
    console.log(request);
    if (request.status === 200) {
      setAuth(request.data.jwt);
      console.log(auth);
    }
  };

  const onSubmit = (formData) => {
    logIn(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
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
