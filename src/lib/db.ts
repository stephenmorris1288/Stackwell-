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

export async function getLeads(filters?: { town?: string, vertical?: string }): Promise<Lead[]> {
  try {
    let query = 'SELECT * FROM leads';
    const conditions: string[] = [];
    
    if (filters?.town) conditions.push(`town = '${filters.town}'`);
    if (filters?.vertical) conditions.push(`vertical = '${filters.vertical}'`);
    
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    
    query += ' ORDER BY created_at DESC';

    if (client) {
      const result = await client.execute(query);
      return result.rows as unknown as Lead[];
    }
    const result = execSync(`team-db "${query}"`).toString();
    return JSON.parse(result);
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
}

export async function getStats(filters?: { town?: string, vertical?: string }) {
  try {
    let whereClause = '';
    const conditions: string[] = [];
    if (filters?.town) conditions.push(`town = '${filters.town}'`);
    if (filters?.vertical) conditions.push(`vertical = '${filters.vertical}'`);
    
    if (conditions.length > 0) {
      whereClause = ' WHERE ' + conditions.join(' AND ');
    }

    if (client) {
      const totalResult = await client.execute(`SELECT COUNT(*) as count FROM leads${whereClause}`);
      const repliedResult = await client.execute(`SELECT COUNT(*) as count FROM leads ${whereClause ? whereClause + ' AND' : 'WHERE'} status = 'replied'`);
      const outreachedResult = await client.execute(`SELECT COUNT(*) as count FROM leads ${whereClause ? whereClause + ' AND' : 'WHERE'} status != 'new'`);
      const openedResult = await client.execute(`SELECT COUNT(*) as count FROM leads ${whereClause ? whereClause + ' AND' : 'WHERE'} opened > 0`);
      
      const total = Number(totalResult.rows[0].count);
      const replied = Number(repliedResult.rows[0].count);
      const outreached = Number(outreachedResult.rows[0].count);
      const opened = Number(openedResult.rows[0].count);
      
      return {
        total,
        replied,
        outreached,
        opened,
        conversionRate: outreached > 0 ? ((replied / outreached) * 100).toFixed(1) : 0,
        openRate: outreached > 0 ? ((opened / outreached) * 100).toFixed(1) : 0
      };
    }
    
    const totalResult = execSync(`team-db "SELECT COUNT(*) as count FROM leads${whereClause}"`).toString();
    const repliedResult = execSync(`team-db "SELECT COUNT(*) as count FROM leads ${whereClause ? whereClause + ' AND' : 'WHERE'} status = 'replied'"`).toString();
    const outreachedResult = execSync(`team-db "SELECT COUNT(*) as count FROM leads ${whereClause ? whereClause + ' AND' : 'WHERE'} status != 'new'"`).toString();
    const openedResult = execSync(`team-db "SELECT COUNT(*) as count FROM leads ${whereClause ? whereClause + ' AND' : 'WHERE'} opened > 0"`).toString();
    
    const total = JSON.parse(totalResult)[0].count;
    const replied = JSON.parse(repliedResult)[0].count;
    const outreached = JSON.parse(outreachedResult)[0].count;
    const opened = JSON.parse(openedResult)[0].count;
    
    return {
      total,
      replied,
      outreached,
      opened,
      conversionRate: outreached > 0 ? ((replied / outreached) * 100).toFixed(1) : 0,
      openRate: outreached > 0 ? ((opened / outreached) * 100).toFixed(1) : 0
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return { total: 0, replied: 0, outreached: 0, conversionRate: 0 };
  }
}

export async function getFilterOptions() {
  try {
    if (client) {
      const townsResult = await client.execute('SELECT DISTINCT town FROM leads WHERE town IS NOT NULL ORDER BY town ASC');
      const verticalsResult = await client.execute('SELECT DISTINCT vertical FROM leads WHERE vertical IS NOT NULL ORDER BY vertical ASC');
      return {
        towns: townsResult.rows.map(r => r.town as string),
        verticals: verticalsResult.rows.map(r => r.vertical as string)
      };
    }
    const townsResult = execSync('team-db "SELECT DISTINCT town FROM leads WHERE town IS NOT NULL ORDER BY town ASC"').toString();
    const verticalsResult = execSync('team-db "SELECT DISTINCT vertical FROM leads WHERE vertical IS NOT NULL ORDER BY vertical ASC"').toString();
    return {
      towns: JSON.parse(townsResult).map((r: any) => r.town),
      verticals: JSON.parse(verticalsResult).map((r: any) => r.vertical)
    };
  } catch (error) {
    console.error('Error fetching filter options:', error);
    return { towns: [], verticals: [] };
  }
}
