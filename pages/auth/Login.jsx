import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/yupSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const logIn = async (formData) => {
    try {
      await axios.post("/api/login", {
        identifier: formData.email,
        password: formData.password,
      });
      router.push("/");
    } catch (err) {
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
