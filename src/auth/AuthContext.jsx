import { createContext, useContext, useState } from "react";
import { loginUsuario } from "../services/loginUsuario";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function login(usuario, senha) {
    setLoading(true);

    const userData = await loginUsuario(usuario, senha);

    setLoading(false);

    if (!userData) {
      setUser(null);
      localStorage.removeItem("auth_user");
      return false;
    }

    setUser(userData);
    localStorage.setItem("auth_user", JSON.stringify(userData));
    return true;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("auth_user");
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
