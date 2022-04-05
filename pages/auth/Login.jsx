import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/yupSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

import { login } from "../../utils/gqlRequests";

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
  return (
    <>
      <form onSubmit={handleSubmit()}>
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
