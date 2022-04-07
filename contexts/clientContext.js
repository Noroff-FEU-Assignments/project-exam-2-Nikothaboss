import requestClient from "../client/index";
import { useState, useContext, createContext } from "react";

export const ClientContext = createContext();

export const useClient = () => useContext(ClientContext);

export const ClientWrapper = ({ children }) => {
  const [client] = useState(requestClient);

  return (
    <ClienntProvider.Provider value={client}>
      {children}
    </ClienntProvider.Provider>
  );
};
