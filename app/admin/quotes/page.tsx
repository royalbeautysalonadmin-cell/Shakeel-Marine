'use client';

import { useEffect, useState, useCallback } from 'react';
import { Search, ChevronLeft, ChevronRight, Trash2, Eye, Mail, Phone, X } from 'lucide-react';

interface Quote {
  _id: string;
  fullName: string;
  phone: string;
  whatsapp?: string;
  email: string;
  service: string;
  vesselType: string;
  vesselDetails?: string;
  projectDescription: string;
  preferredColor?: string;
  preferredDesign?: string;
  preferredContactMethod: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  notes?: string;
  createdAt: string;
}

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  const fetchQuotes = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: '15' });
    if (status !== 'all') params.set('status', status);
    if (search) params.set('search', search);
    const res = await fetch(`/api/admin/quotes?${params}`);
    const data = await res.json();
    setQuotes(data.quotes || []);
    setTotal(data.total || 0);
    setTotalPages(data.totalPages || 1);
    setLoading(false);
  }, [page, status, search]);

  useEffect(() => { fetchQuotes(); }, [fetchQuotes]);

  const updateStatus = async (id: string, newStatus: string) => {
    await fetch(`/api/admin/quotes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchQuotes();
    if (selectedQuote?._id === id) setSelectedQuote({ ...selectedQuote!, status: newStatus as Quote['status'] });
  };

  const deleteQuote = async (id: string) => {
    if (!confirm('Delete this quote?')) return;
    await fetch(`/api/admin/quotes/${id}`, { method: 'DELETE' });
    setSelectedQuote(null);
    fetchQuotes();
  };

  const serviceLabels: Record<string, string> = {
    'jet-ski-seat-cover': 'Jet Ski Seat Cover',
    'boat-seat': 'Boat Seat',
    'ship-seat': 'Ship Seat',
    'marine-upholstery': 'Marine Upholstery',
    'canopy-cover': 'Canopy Cover',
    'other': 'Other',
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading font-bold text-2xl text-charcoal">Quote Requests</h1>
        <span className="text-sm text-muted">{total} total</span>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search by name, email, phone..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean"
          />
        </div>
        <select
          value={status}
          onChange={(e) => { setStatus(e.target.value); setPage(1); }}
          className="px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-border overflow-hidden">
        {loading ? (
          <div className="p-12 text-center">
            <div className="w-8 h-8 border-2 border-ocean border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        ) : quotes.length === 0 ? (
          <div className="p-12 text-center text-muted">No quotes found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-off-white border-b border-border">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-muted">Name</th>
                  <th className="text-left px-4 py-3 font-medium text-muted hidden sm:table-cell">Service</th>
                  <th className="text-left px-4 py-3 font-medium text-muted hidden md:table-cell">Vessel</th>
                  <th className="text-left px-4 py-3 font-medium text-muted">Status</th>
                  <th className="text-left px-4 py-3 font-medium text-muted hidden lg:table-cell">Date</th>
                  <th className="text-right px-4 py-3 font-medium text-muted">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {quotes.map((q) => (
                  <tr key={q._id} className="hover:bg-off-white/50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-charcoal">{q.fullName}</p>
                      <p className="text-xs text-muted">{q.email}</p>
                    </td>
                    <td className="px-4 py-3 text-muted hidden sm:table-cell">{serviceLabels[q.service] || q.service}</td>
                    <td className="px-4 py-3 text-muted capitalize hidden md:table-cell">{q.vesselType}</td>
                    <td className="px-4 py-3">
                      <select
                        value={q.status}
                        onChange={(e) => updateStatus(q._id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full font-medium border-0 focus:ring-2 focus:ring-ocean/30 ${
                          q.status === 'new' ? 'bg-yellow-100 text-yellow-700' :
                          q.status === 'read' ? 'bg-blue-100 text-blue-700' :
                          q.status === 'replied' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-500'
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                        <option value="archived">Archived</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-muted text-xs hidden lg:table-cell">
                      {new Date(q.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button onClick={() => setSelectedQuote(q)} className="p-1.5 text-ocean hover:bg-ocean/10 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-border">
            <span className="text-xs text-muted">Page {page} of {totalPages}</span>
            <div className="flex gap-2">
              <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                className="p-2 rounded-lg border border-border hover:bg-off-white disabled:opacity-40 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}
                className="p-2 rounded-lg border border-border hover:bg-off-white disabled:opacity-40 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedQuote(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-heading font-bold text-lg text-charcoal">{selectedQuote.fullName}</h2>
              <button onClick={() => setSelectedQuote(null)} className="p-1 hover:bg-off-white rounded-lg">
                <X className="w-5 h-5 text-muted" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-ocean" />
                  <a href={`mailto:${selectedQuote.email}`} className="text-ocean hover:underline">{selectedQuote.email}</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-ocean" />
                  <a href={`tel:${selectedQuote.phone}`} className="text-ocean hover:underline">{selectedQuote.phone}</a>
                </div>
              </div>
              {selectedQuote.whatsapp && (
                <p className="text-sm text-muted">WhatsApp: {selectedQuote.whatsapp}</p>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div><span className="text-xs text-muted uppercase">Service</span><p className="text-sm font-medium">{serviceLabels[selectedQuote.service] || selectedQuote.service}</p></div>
                <div><span className="text-xs text-muted uppercase">Vessel</span><p className="text-sm font-medium capitalize">{selectedQuote.vesselType}</p></div>
              </div>
              {selectedQuote.vesselDetails && (
                <div><span className="text-xs text-muted uppercase">Vessel Details</span><p className="text-sm">{selectedQuote.vesselDetails}</p></div>
              )}
              <div>
                <span className="text-xs text-muted uppercase">Project Description</span>
                <p className="text-sm mt-1 whitespace-pre-wrap">{selectedQuote.projectDescription}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selectedQuote.preferredColor && <div><span className="text-xs text-muted uppercase">Color</span><p className="text-sm">{selectedQuote.preferredColor}</p></div>}
                {selectedQuote.preferredDesign && <div><span className="text-xs text-muted uppercase">Design</span><p className="text-sm">{selectedQuote.preferredDesign}</p></div>}
              </div>
              <div><span className="text-xs text-muted uppercase">Preferred Contact</span><p className="text-sm capitalize">{selectedQuote.preferredContactMethod}</p></div>
              <div><span className="text-xs text-muted uppercase">Submitted</span><p className="text-sm">{new Date(selectedQuote.createdAt).toLocaleString()}</p></div>
            </div>
            <div className="flex items-center justify-between p-6 border-t border-border">
              <select
                value={selectedQuote.status}
                onChange={(e) => updateStatus(selectedQuote._id, e.target.value)}
                className="px-3 py-2 rounded-lg border border-border text-sm focus:ring-2 focus:ring-ocean/30"
              >
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
                <option value="archived">Archived</option>
              </select>
              <button onClick={() => deleteQuote(selectedQuote._id)} className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors">
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
