/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { ScrollToTop } from './components/common/ScrollToTop.tsx';
import { SEO } from './components/common/SEO.tsx';
import { Button } from './components/ui/Button.tsx';

// Pages
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Services } from './pages/Services.tsx';
import { Pricing } from './pages/Pricing.tsx';
import { Contact } from './pages/Contact.tsx';
import { Terms } from './pages/Terms.tsx';
import { Privacy } from './pages/Privacy.tsx';
import { RefundPolicy } from './pages/RefundPolicy.tsx';
import { ServiceDescription } from './pages/ServiceDescription.tsx';
import { DeleteAccount } from './pages/DeleteAccount.tsx';
import { DriverTerms } from './pages/DriverTerms.tsx';
import { Leads } from './pages/Leads.tsx';
import { AppLaunchModalProvider } from './context/AppLaunchModalContext.tsx';
import { NotifyMeModal } from './components/common/NotifyMeModal.tsx';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <SEO title="Page Not Found – DriverConnect" description="The page you requested could not be found." />
      <div className="text-center max-w-md space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2F6FED]">404 Error</span>
        <h1 className="text-3xl font-bold text-[#1F2430]">Page not found</h1>
        <p className="text-sm text-[#6B7280]">
          The page you are looking for doesn't exist or has moved. Return to DriverConnect homepage or explore our pricing.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link to="/">
            <Button variant="primary" size="md">
              Return Home
            </Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline" size="md">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLaunchModalProvider>
        <ScrollToTop />
        <NotifyMeModal />
        <div className="min-h-screen flex flex-col bg-[#FAFAFB] text-[#1F2430]">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/service-description" element={<ServiceDescription />} />
              <Route path="/delete-account" element={<DeleteAccount />} />
              <Route path="/driver-terms" element={<DriverTerms />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/admin" element={<Leads />} />
              <Route path="/admin/leads" element={<Leads />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppLaunchModalProvider>
    </BrowserRouter>
  );
}
