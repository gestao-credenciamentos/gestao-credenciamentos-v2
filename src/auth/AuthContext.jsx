import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("auth_user");
    return saved ? JSON.parse(saved) : null;
  });

  function login(usuario, senha) {
    if (usuario === "admin" && senha === "123") {
      const userData = { nome: "Administrador" };
      setUser(userData);
      localStorage.setItem("auth_user", JSON.stringify(userData));
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("auth_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
