import { getLeads, getStats, getFilterOptions } from '@/lib/db';
import { Users, Mail, MessageSquare, TrendingUp, Filter, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ town?: string; vertical?: string }>;
}) {
  const { town, vertical } = await searchParams;
  const filters = { town, vertical };

  const stats = await getStats(filters);
  const leads = await getLeads(filters);
  const filterOptions = await getFilterOptions();

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <nav className="bg-navy text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold font-montserrat">Stockwell Admin</h1>
          <div className="text-sm font-medium opacity-80 font-inter">Outreach Dashboard</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Filter Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <form className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label htmlFor="town" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Town</label>
              <select 
                name="town" 
                id="town"
                defaultValue={town || ""}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                <option value="">All Towns</option>
                {filterOptions.towns.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 w-full">
              <label htmlFor="vertical" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Vertical</label>
              <select 
                name="vertical" 
                id="vertical"
                defaultValue={vertical || ""}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                <option value="">All Verticals</option>
                {filterOptions.verticals.map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button 
                type="submit"
                className="flex-1 md:flex-none bg-navy text-white px-6 py-2 rounded-lg font-bold text-sm font-montserrat hover:bg-slate transition-colors flex items-center justify-center gap-2"
              >
                <Filter size={16} />
                Filter
              </button>
              <Link 
                href="/admin"
                className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-bold text-sm font-montserrat hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={16} />
              </Link>
            </div>
          </form>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Users className="text-navy h-5 w-5" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Leads</span>
            </div>
            <div className="text-2xl font-bold text-navy">{stats.total}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Mail className="text-navy h-5 w-5" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Open Rate</span>
            </div>
            <div className="text-2xl font-bold text-navy">{stats.openRate}%</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <MessageSquare className="text-navy h-5 w-5" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Replies</span>
            </div>
            <div className="text-2xl font-bold text-navy">{stats.replied}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="text-navy h-5 w-5" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Conversion</span>
            </div>
            <div className="text-2xl font-bold text-navy">{stats.conversionRate}%</div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-navy font-montserrat">
              {town || vertical ? 'Filtered Leads' : 'Recent Leads'}
            </h2>
            <span className="text-xs font-medium text-gray-400 font-inter">
              Showing {leads.length} results
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-inter">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-bold">Business</th>
                  <th className="px-6 py-4 font-bold">Town</th>
                  <th className="px-6 py-4 font-bold">Vertical</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.length > 0 ? (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors text-sm">
                      <td className="px-6 py-4">
                        <div className="font-bold text-gray-900">{lead.business_name}</div>
                        <div className="text-xs text-gray-500">{lead.email || "No email found"}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{lead.town}</td>
                      <td className="px-6 py-4 text-gray-600 uppercase text-[10px] font-bold tracking-wider">{lead.vertical}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                          lead.status === 'replied' ? 'bg-green-100 text-green-700' : 
                          lead.status === 'outreach_started' ? 'bg-blue-100 text-blue-700' : 
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {lead.status.replace('_', ' ')}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400 font-inter">
                      No leads found matching these filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
