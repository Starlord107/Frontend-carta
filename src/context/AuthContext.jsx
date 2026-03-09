import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [nombre, setNombre] = useState(null);

  const login = (nombre) => {
    setNombre(nombre);
  };

  const logout = () => {
    setNombre(null);
  };

  const isAuthenticated = !!nombre;

  return (
    <AuthContext.Provider value={{ nombre, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
