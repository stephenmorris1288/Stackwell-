import { execSync } from 'child_process';
import { createClient } from '@libsql/client';

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

const client = url ? createClient({ url, authToken }) : null;

export interface Lead {
  id: string;
  business_name: string;
  vertical: string;
  town: string;
  website: string | null;
  phone: string | null;
  google_maps_url: string | null;
  email: string | null;
  contact_name: string | null;
  status: string;
  website_check_result: string | null;
  created_at: string;
  updated_at: string;
}

export async function getLeads(): Promise<Lead[]> {
  try {
    if (client) {
      const result = await client.execute('SELECT * FROM leads ORDER BY created_at DESC');
      return result.rows as unknown as Lead[];
    }
    const result = execSync('team-db "SELECT * FROM leads ORDER BY created_at DESC"').toString();
    return JSON.parse(result);
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
}

export async function getStats() {
  try {
    if (client) {
      const totalResult = await client.execute('SELECT COUNT(*) as count FROM leads');
      const repliedResult = await client.execute('SELECT COUNT(*) as count FROM leads WHERE status = \'replied\'');
      const outreachedResult = await client.execute('SELECT COUNT(*) as count FROM leads WHERE status != \'new\'');
      
      const total = Number(totalResult.rows[0].count);
      const replied = Number(repliedResult.rows[0].count);
      const outreached = Number(outreachedResult.rows[0].count);
      
      return {
        total,
        replied,
        outreached,
        conversionRate: outreached > 0 ? ((replied / outreached) * 100).toFixed(1) : 0
      };
    }
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
