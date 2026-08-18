'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdmin } from './AdminProvider';
import { LayoutDashboard, FileText, MessageSquare, LogOut, Anchor } from 'lucide-react';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/quotes', label: 'Quotes', icon: FileText },
  { href: '/admin/contacts', label: 'Contacts', icon: MessageSquare },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAdmin();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-navy-deep border-r border-white/10 z-50 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <Anchor className="w-6 h-6 text-ocean" />
          <div>
            <span className="text-white font-heading font-bold text-sm block">SHAKEEL</span>
            <span className="text-ocean text-[9px] font-semibold tracking-[0.2em] uppercase">ADMIN</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-ocean/20 text-ocean'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="text-white/40 text-xs mb-3 px-4">
          Signed in as <span className="text-white/60">{user?.email}</span>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-white/60 hover:text-red-400 hover:bg-white/5 transition-all"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
