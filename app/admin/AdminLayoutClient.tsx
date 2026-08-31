'use client';

import { useAdmin } from '@/components/admin/AdminProvider';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAdmin();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading && pathname !== '/admin/login' && !user) {
      router.replace('/admin/login');
    }
  }, [loading, pathname, router, user]);

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
