import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const useAuthProvider = () => {
  const [user, setUser] = useState("");
  return { user, setUser };
};

const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  useContext(AuthContext);
};

export { useAuth };
export default AuthProvider;
