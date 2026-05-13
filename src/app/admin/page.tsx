import { getLeads, getStats } from '@/lib/db';
import { Users, Mail, MessageSquare, TrendingUp } from 'lucide-react';

export default async function AdminDashboard() {
  const stats = await getStats();
  const leads = await getLeads();

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <nav className="bg-navy text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold font-montserrat">Stockwell Admin</h1>
          <div className="text-sm font-medium opacity-80 font-inter">Outreach Dashboard</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
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
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Outreached</span>
            </div>
            <div className="text-2xl font-bold text-navy">{stats.outreached}</div>
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
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-navy font-montserrat">Recent Leads</h2>
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
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors text-sm">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{lead.business_name}</div>
                      <div className="text-xs text-gray-500">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{lead.town}</td>
                    <td className="px-6 py-4 text-gray-600">{lead.vertical}</td>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
