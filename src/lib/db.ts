import { execSync } from 'child_process';

export interface Lead {
  id: string;
  business_name: string;
  vertical: string;
  town: string;
  website: string | null;
  phone: string | null;
  email: string | null;
  contact_name: string | null;
  status: string;
  website_check_result: string | null;
  created_at: string;
  updated_at: string;
}

export async function getLeads(): Promise<Lead[]> {
  try {
    const result = execSync('team-db "SELECT * FROM leads ORDER BY created_at DESC"').toString();
    return JSON.parse(result);
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
}

export async function getStats() {
  try {
    const totalResult = execSync('team-db "SELECT COUNT(*) as count FROM leads"').toString();
    const repliedResult = execSync('team-db "SELECT COUNT(*) as count FROM leads WHERE status = \'replied\'"').toString();
    const outreachedResult = execSync('team-db "SELECT COUNT(*) as count FROM leads WHERE status != \'new\'"').toString();
    
    const total = JSON.parse(totalResult)[0].count;
    const replied = JSON.parse(repliedResult)[0].count;
    const outreached = JSON.parse(outreachedResult)[0].count;
    
    return {
      total,
      replied,
      outreached,
      conversionRate: outreached > 0 ? ((replied / outreached) * 100).toFixed(1) : 0
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return { total: 0, replied: 0, outreached: 0, conversionRate: 0 };
  }
}
