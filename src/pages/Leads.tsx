/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Database, RefreshCw, Download, CheckCircle2, Smartphone, Users, MapPin, Car } from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { Breadcrumb } from '../components/ui/Breadcrumb.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Table, Column } from '../components/ui/Table.tsx';
import { Card } from '../components/ui/Card.tsx';
import { useAppLaunchModal } from '../context/AppLaunchModalContext.tsx';

interface WaitlistLead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  platform: string;
  area: string;
  carType?: string;
  createdAt: string;
}

export const Leads: React.FC = () => {
  const { openModal } = useAppLaunchModal();
  const [leads, setLeads] = useState<WaitlistLead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/waitlist');
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      } else {
        const local = localStorage.getItem('driverconnect_waitlist_leads');
        if (local) setLeads(JSON.parse(local));
      }
    } catch {
      const local = localStorage.getItem('driverconnect_waitlist_leads');
      if (local) setLeads(JSON.parse(local));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const exportCsv = () => {
    if (leads.length === 0) return;
    const headers = ['Reference ID', 'Name', 'Phone', 'Email', 'Platform', 'Area', 'Car Type', 'Registered At'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name.replace(/"/g, '""')}"`,
      `"+91 ${l.phone}"`,
      `"${l.email || ''}"`,
      `"${l.platform}"`,
      `"${l.area}"`,
      `"${l.carType || ''}"`,
      new Date(l.createdAt).toLocaleString(),
    ]);

    const csvContent = [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `driverconnect_launch_waitlist_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns: Column<WaitlistLead>[] = [
    {
      header: 'Reference ID',
      accessor: (row) => (
        <span className="font-mono text-xs font-bold text-[#2F6FED] bg-[#EAF2FF] px-2.5 py-1 rounded-full">
          {row.id}
        </span>
      ),
    },
    {
      header: 'Customer Name',
      accessor: 'name',
      className: 'font-semibold text-[#1F2430]',
    },
    {
      header: 'Mobile (WhatsApp / SMS)',
      accessor: (row) => (
        <span className="text-[#1F2430] font-mono text-xs">
          +91 {row.phone}
        </span>
      ),
    },
    {
      header: 'Platform',
      accessor: (row) => (
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FAFAFB] border border-[#E4E6EA] font-medium text-[#4B5563]">
          {row.platform}
        </span>
      ),
    },
    {
      header: 'Surat Area',
      accessor: 'area',
      className: 'text-xs text-[#4B5563]',
    },
    {
      header: 'Car Type',
      accessor: (row) => row.carType || 'Sedan',
      className: 'text-xs text-[#6B7280]',
    },
    {
      header: 'Registered Date',
      accessor: (row) => new Date(row.createdAt).toLocaleDateString(),
      className: 'text-xs text-[#6B7280]',
    },
    {
      header: 'Quick Contact',
      accessor: (row) => (
        <div className="flex items-center gap-1.5">
          <a
            href={`https://wa.me/91${row.phone}?text=${encodeURIComponent(`Hello ${row.name}, thank you for your interest in DriverConnect Surat! We noticed you requested launch notification for our ${row.platform} app.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#E8F8F0] text-[#1FAE6B] hover:bg-[#1FAE6B] hover:text-white text-[11px] font-semibold transition-colors"
            title="Chat on WhatsApp"
          >
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:+91${row.phone}`}
            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#FAFAFB] border border-[#E4E6EA] text-[#1F2430] hover:border-[#2F6FED] hover:text-[#2F6FED] text-[11px] font-medium transition-colors"
            title="Call"
          >
            <span>Call</span>
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="App Launch Waitlist Database – DriverConnect"
        description="Private internal dashboard for registered launch notification leads stored in the DriverConnect database for Surat, Gujarat."
        canonicalPath="/leads"
        noIndex={true}
      />

      <div className="py-8 md:py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumb items={[{ label: 'App Launch Waitlist Database' }]} />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E4E6EA]">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F6FED] mb-1">
                <Database className="w-3.5 h-3.5" />
                <span>Live Database Records</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#1F2430]">
                App Launch Notification Waitlist
              </h1>
              <p className="text-xs text-[#6B7280] mt-1">
                Customer leads collected when clicking &quot;Get it on Google Play&quot; or &quot;Download on App Store&quot; and requesting launch notification.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={fetchLeads} disabled={isLoading}>
                <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </Button>
              <Button variant="outline" size="sm" onClick={exportCsv} disabled={leads.length === 0}>
                <Download className="w-3.5 h-3.5 mr-1.5" />
                <span>Export CSV</span>
              </Button>
              <Button variant="primary" size="sm" onClick={() => openModal('android')}>
                <span>+ Add Notification Lead</span>
              </Button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-5 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#2F6FED] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1F2430]">{leads.length}</div>
                  <div className="text-xs text-[#6B7280]">Total Registered Leads</div>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F8F0] text-[#1FAE6B] flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1F2430]">
                    {leads.filter((l) => l.platform.includes('Android')).length} Android /{' '}
                    {leads.filter((l) => l.platform.includes('iOS')).length} iOS
                  </div>
                  <div className="text-xs text-[#6B7280]">Platform Distribution</div>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAFAFB] text-[#2F6FED] border border-[#E4E6EA] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1F2430]">Surat</div>
                  <div className="text-xs text-[#6B7280]">Launch Operational Zone</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Leads Table */}
          {leads.length === 0 ? (
            <Card className="p-12 text-center space-y-4 bg-white">
              <div className="w-12 h-12 rounded-full bg-[#EAF2FF] text-[#2F6FED] flex items-center justify-center mx-auto">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#1F2430]">No leads stored yet</h3>
              <p className="text-xs text-[#6B7280] max-w-sm mx-auto">
                Click &quot;Get it on Google Play&quot; or &quot;Download on App Store&quot; on the homepage or click &quot;+ Add Notification Lead&quot; above to submit an entry into the database.
              </p>
              <Button variant="primary" size="md" onClick={() => openModal('android')}>
                Submit Test Lead
              </Button>
            </Card>
          ) : (
            <>
              <Table
                columns={columns}
                data={leads}
                keyExtractor={(row) => row.id}
                caption="Live DriverConnect App Launch Waitlist Database"
              />

              {/* Data Access Guide for Business Owner */}
              <div className="rounded-xl border border-[#E4E6EA] bg-white p-6 space-y-4">
                <h3 className="text-sm font-bold text-[#1F2430] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B]" />
                  <span>3 Ways to Access &amp; Use Your Customer Leads</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-lg bg-[#FAFAFB] border border-[#E4E6EA] space-y-1.5">
                    <div className="font-semibold text-[#1F2430]">1. Export to Excel / CSV</div>
                    <p className="text-[#6B7280]">
                      Click the <strong className="text-[#1F2430]">Export CSV</strong> button at the top right to instantly download all customer names, phone numbers, and Surat areas into a spreadsheet.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#FAFAFB] border border-[#E4E6EA] space-y-1.5">
                    <div className="font-semibold text-[#1F2430]">2. Direct WhatsApp &amp; Call</div>
                    <p className="text-[#6B7280]">
                      Click the green <strong className="text-[#1FAE6B]">WhatsApp</strong> button next to any lead above to open a direct pre-filled chat with that customer, or click <strong className="text-[#1F2430]">Call</strong>.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#FAFAFB] border border-[#E4E6EA] space-y-1.5">
                    <div className="font-semibold text-[#1F2430]">3. Server Database &amp; API</div>
                    <p className="text-[#6B7280]">
                      Stored permanently in <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">/data/waitlist.json</code> and queryable in real-time via <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">GET /api/waitlist</code>.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
