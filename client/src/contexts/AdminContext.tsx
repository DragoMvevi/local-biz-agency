import React, { createContext, useContext, useState } from "react";

interface AdminContextType {
  isLoggedIn: boolean;
  adminEmail: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Simple admin credentials (in production, use proper backend authentication)
const ADMIN_EMAIL = "admin@gdevalop.com";
const ADMIN_PASSWORD = "GdevalopAdmin2026!";

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setAdminEmail(email);
      localStorage.setItem("admin_session", JSON.stringify({ email, timestamp: Date.now() }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAdminEmail(null);
    localStorage.removeItem("admin_session");
  };

  // Check for existing session on mount
  React.useEffect(() => {
    const session = localStorage.getItem("admin_session");
    if (session) {
      try {
        const { email } = JSON.parse(session);
        setIsLoggedIn(true);
        setAdminEmail(email);
      } catch (e) {
        localStorage.removeItem("admin_session");
      }
    }
  }, []);

  return (
    <AdminContext.Provider value={{ isLoggedIn, adminEmail, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
}
