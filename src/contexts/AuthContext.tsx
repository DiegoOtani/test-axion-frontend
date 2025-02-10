"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  role: { name: string };
}

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUserFromCookies = () => {
      const match = document.cookie
        .split("; ")
        .find((row) => row.startsWith("user="));

      if (!match) return null;

      try {
        return JSON.parse(decodeURIComponent(match.split("=")[1]));
      } catch (error) {
        console.error("Erro ao parsear o usuário:", error);
        return null;
      }
    };

    const storedUser = getUserFromCookies();
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
};
