'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface AdminUser {
  name: string;
  email: string;
}

interface AdminContextType {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType>({
  user: null,
  loading: true,
  login: async () => ({ success: false }),
  logout: async () => {},
});

export function useAdmin() {
  return useContext(AdminContext);
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        setUser({ name: 'Admin', email: 'admin' });
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setUser({ name: data.name, email });
        return { success: true };
      }
      return { success: false, error: data.error };
    } catch {
      return { success: false, error: 'Network error' };
    }
  };

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    setUser(null);
  };

  return (
    <AdminContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}
