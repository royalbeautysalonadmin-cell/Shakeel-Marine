'use client';

import { useEffect, useState } from 'react';
import { FileText, MessageSquare, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';

interface Stats {
  totalQuotes: number;
  newQuotes: number;
  totalContacts: number;
  newContacts: number;
  recentQuotes: Record<string, unknown>[];
  recentContacts: Record<string, unknown>[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((r) => r.json())
      .then((data) => { setStats(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-ocean border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!stats) {
    return <div className="text-center py-20 text-muted">Failed to load dashboard data.</div>;
  }

  const statCards = [
    { label: 'Total Quotes', value: stats.totalQuotes, icon: FileText, color: 'bg-ocean/10 text-ocean' },
    { label: 'New Quotes', value: stats.newQuotes, icon: Clock, color: 'bg-yellow-500/10 text-yellow-600' },
    { label: 'Total Contacts', value: stats.totalContacts, icon: MessageSquare, color: 'bg-green-500/10 text-green-600' },
    { label: 'New Contacts', value: stats.newContacts, icon: TrendingUp, color: 'bg-purple-500/10 text-purple-600' },
  ];

  return (
    <div>
      <h1 className="font-heading font-bold text-2xl text-charcoal mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.color}`}>
                <card.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-charcoal">{card.value}</p>
                <p className="text-sm text-muted">{card.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Quotes */}
        <div className="bg-white rounded-xl border border-border">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-heading font-bold text-charcoal">Recent Quotes</h2>
            <Link href="/admin/quotes" className="text-ocean text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-border">
            {stats.recentQuotes.length === 0 ? (
              <p className="p-6 text-muted text-sm">No quotes yet.</p>
            ) : (
              stats.recentQuotes.map((q: Record<string, unknown>) => (
                <div key={String(q._id)} className="p-4 hover:bg-off-white/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-charcoal text-sm">{String(q.fullName)}</p>
                      <p className="text-xs text-muted">{String(q.email)} &bull; {String(q.service)}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      q.status === 'new' ? 'bg-yellow-100 text-yellow-700' :
                      q.status === 'read' ? 'bg-blue-100 text-blue-700' :
                      q.status === 'replied' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {String(q.status)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Contacts */}
        <div className="bg-white rounded-xl border border-border">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-heading font-bold text-charcoal">Recent Contacts</h2>
            <Link href="/admin/contacts" className="text-ocean text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-border">
            {stats.recentContacts.length === 0 ? (
              <p className="p-6 text-muted text-sm">No contacts yet.</p>
            ) : (
              stats.recentContacts.map((c: Record<string, unknown>) => (
                <div key={String(c._id)} className="p-4 hover:bg-off-white/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-charcoal text-sm">{String(c.name)}</p>
                      <p className="text-xs text-muted">{String(c.email)} &bull; {String(c.service)}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      c.status === 'new' ? 'bg-yellow-100 text-yellow-700' :
                      c.status === 'read' ? 'bg-blue-100 text-blue-700' :
                      c.status === 'replied' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {String(c.status)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
