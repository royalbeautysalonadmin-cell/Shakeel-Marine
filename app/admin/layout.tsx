import type { Metadata } from 'next';
import { AdminProvider } from '@/components/admin/AdminProvider';
import { AdminLayoutClient } from './AdminLayoutClient';

export const metadata: Metadata = {
  title: 'Admin Panel | Shakeel Marine',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <AdminLayoutClient>{children}</AdminLayoutClient>
    </AdminProvider>
  );
}
