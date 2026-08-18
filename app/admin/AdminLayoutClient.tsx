'use client';

import { useAdmin } from '@/components/admin/AdminProvider';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { usePathname } from 'next/navigation';

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAdmin();
  const pathname = usePathname();

  if (loading) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-ocean border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!user) {
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/login';
    }
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-ocean border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white">
      <AdminSidebar />
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}
