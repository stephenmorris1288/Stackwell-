# Stockwell Website & Admin Dashboard

## Overview
Stockwell provides professional website design services tailored for local trades and small businesses. This repository contains a high-performance, mobile-first Next.js landing page and an integrated admin dashboard for tracking automated outreach leads.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database**: [Turso](https://turso.tech/) (LibSQL)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Deployment Instructions

### 1. Database Setup (Turso)
Stockwell uses Turso as its primary database for lead tracking.
1. **Create Account**: Sign up at [turso.tech](https://turso.tech).
2. **Install CLI**: Follow the Turso installation guide for your OS.
3. **Create Database**:
   ```bash
   turso db create stockwell-db
   ```
4. **Get Credentials**:
   - URL: `turso db show stockwell-db --url`
   - Token: `turso db tokens create stockwell-db`
5. **Initialize Schema**:
   Run the following SQL command using the Turso CLI to create the `leads` table:
   ```bash
   turso db shell stockwell-db "CREATE TABLE leads (id TEXT PRIMARY KEY, business_name TEXT NOT NULL, vertical TEXT, town TEXT, website TEXT, phone TEXT, google_maps_url TEXT, email TEXT, contact_name TEXT, status TEXT DEFAULT 'new', website_check_result TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP);"
   ```

### 2. Deploy to Vercel
1. **Push to GitHub**: Fork or push this repository to your own GitHub account.
2. **Import to Vercel**: Connect your GitHub account to Vercel and import the `stockwell-website` project.
3. **Configure Environment Variables**:
   In the Vercel project settings, add the following under **Environment Variables**:
   - `TURSO_DATABASE_URL`: (Your Turso Database URL)
   - `TURSO_AUTH_TOKEN`: (Your Turso Auth Token)
4. **Deploy**: Vercel will automatically detect Next.js and deploy the site.

### 3. Custom Domain Configuration
To use a professional domain like `stockwell.studio`:
1. In Vercel, go to **Settings > Domains**.
2. Enter your domain name and click **Add**.
3. Follow the DNS instructions provided by Vercel to update your domain's A and CNAME records at your registrar (e.g., Namecheap, GoDaddy).

---

## Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/stephenmorris1288/Stockwell-.git
   cd stockwell-website
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up Local Env**:
   Create a `.env.local` file in the root and add your Turso credentials:
   ```env
   TURSO_DATABASE_URL=libsql://...
   TURSO_AUTH_TOKEN=...
   ```
4. **Run the app**:
   ```bash
   npm run dev
   ```
   - Landing Page: `http://localhost:3000`
   - Admin Dashboard: `http://localhost:3000/admin`

---

## Project Structure
- `src/app/page.tsx`: Main landing page assembly.
- `src/app/admin/page.tsx`: Mobile-friendly admin dashboard for lead tracking.
- `src/components/`: Reusable UI components (Hero, Services, Contact, etc.).
- `src/lib/db.ts`: Shared database logic using `@libsql/client`.

---
**"Websites that work as hard as you do"**
