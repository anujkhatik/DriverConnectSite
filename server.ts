/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Ensure data directory exists
const DATA_DIR = path.resolve(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const WAITLIST_FILE = path.resolve(DATA_DIR, 'waitlist.json');
const MESSAGES_FILE = path.resolve(DATA_DIR, 'messages.json');

// Initialize database files if not present
if (!fs.existsSync(WAITLIST_FILE)) {
  fs.writeFileSync(WAITLIST_FILE, JSON.stringify([], null, 2), 'utf-8');
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Helpers to read/write JSON database
function readDatabase<T>(filePath: string): T[] {
  try {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as T[];
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return [];
  }
}

function writeDatabase<T>(filePath: string, data: T[]): boolean {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
    return false;
  }
}

// Middleware
app.use(express.json());

// API Routes

/**
 * POST /api/waitlist
 * Store "Notify Me" early-access waitlist info in database
 */
app.post('/api/waitlist', (req: Request, res: Response) => {
  const { name, phone, email, platform, area, carType } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    res.status(400).json({ success: false, error: 'Valid full name is required' });
    return;
  }

  // Clean phone number: remove non-digits
  const cleanPhone = String(phone || '').replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    res.status(400).json({ success: false, error: 'Valid 10-digit mobile number is required' });
    return;
  }

  const existingLeads = readDatabase<{ id: string; phone: string; platform: string }>(WAITLIST_FILE);

  // Check if phone is already registered for this platform
  const existing = existingLeads.find((lead) => lead.phone === cleanPhone);

  const referenceId = `DC-${Math.floor(1000 + Math.random() * 9000)}`;
  const record = {
    id: referenceId,
    name: name.trim(),
    phone: cleanPhone,
    email: (email || '').trim().toLowerCase(),
    platform: platform === 'ios' ? 'iOS (App Store)' : 'Android (Google Play)',
    area: (area || 'Surat').trim(),
    carType: (carType || 'Not specified').trim(),
    createdAt: new Date().toISOString(),
    status: 'PENDING_LAUNCH_NOTIFICATION',
    ip: req.ip || req.headers['x-forwarded-for'] || 'local',
  };

  if (!existing) {
    existingLeads.unshift(record);
    writeDatabase(WAITLIST_FILE, existingLeads);
  }

  res.status(200).json({
    success: true,
    message: 'Registered successfully for DriverConnect app launch notification.',
    record: existing || record,
    alreadyRegistered: !!existing,
  });
});

/**
 * GET /api/waitlist
 * Retrieve all registered notification leads
 */
app.get('/api/waitlist', (_req: Request, res: Response) => {
  const leads = readDatabase(WAITLIST_FILE);
  res.status(200).json({
    success: true,
    total: leads.length,
    leads,
  });
});

/**
 * POST /api/contact
 * Store contact enquiries in database
 */
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ success: false, error: 'All fields are required' });
    return;
  }

  const messages = readDatabase<{ id: string }>(MESSAGES_FILE);
  const msgRecord = {
    id: `MSG-${Date.now()}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    status: 'UNREAD',
  };

  messages.unshift(msgRecord);
  writeDatabase(MESSAGES_FILE, messages);

  res.status(200).json({
    success: true,
    message: 'Message securely recorded in DriverConnect database.',
    record: msgRecord,
  });
});

/**
 * GET /api/contact
 * Retrieve contact messages
 */
app.get('/api/contact', (_req: Request, res: Response) => {
  const messages = readDatabase(MESSAGES_FILE);
  res.status(200).json({
    success: true,
    total: messages.length,
    messages,
  });
});

// Dev vs Prod Vite Integration
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`DriverConnect server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
