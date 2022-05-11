import { createContext } from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState } from "react";
const AuthContext = createContext([{}, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
