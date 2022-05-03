import axios from "axios";
import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { axiosJWT, getRefreshToken } from "../utils/axiosInstances";
import jwtDecode from "jwt-decode";

const AuthContext = createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("jwt", null);
  console.log(auth);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
