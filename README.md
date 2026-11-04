# DriverConnect – Marketing & Legal Website

Production-ready marketing and statutory legal website for **DriverConnect**, a time-based driver booking service for personal car owners in **Surat, Gujarat, India**.

Built to pass **Razorpay Merchant Onboarding Review** and comply with the **Digital Personal Data Protection Act, 2023 (DPDP Act)**, the **Information Technology Act, 2000**, and the **Consumer Protection (E-Commerce) Rules, 2020**.

---

## 🏢 Business Identity (Exact Details)

- **Brand Name:** DriverConnect
- **Registered Office:** 24 Cars, Vesu, Surat, Gujarat 395007
- **Official Support Email:** `driverconnect139@gmail.com`
- **Grievance Officer:** Anuj Khatik, Founder (`khatikanuj914@gmail.com`)
- **Support Working Hours:** 9:00 AM to 9:00 PM, all days
- **Court Jurisdiction:** Surat, Gujarat
- **Service Area:** Surat Municipal Corporation limits (all bookings originate in Surat)
- **Payment Processing:** Powered by Razorpay Checkout (UPI, Visa, Mastercard, Net banking)

---

## 💰 Official Fare Schedule & Razorpay Compliance

All prices in Indian Rupees (INR). Prices shown are the final amount payable.

| Service Category | Package / Duration | Total Price | 30% Advance (at Booking) | 70% Balance (at Drop) |
|---|---|---|---|---|
| InCity Hourly | 3 Hours | ₹600 | ₹180 | ₹420 |
| InCity Hourly | 6 Hours | ₹1,000 | ₹300 | ₹700 |
| InCity Hourly | 12 Hours | ₹1,800 | ₹540 | ₹1,260 |
| OutStation Daily | Day 1 | ₹2,200 | ₹660 | ₹1,540 |
| OutStation Daily | Each Extra Day | *As shown in app at booking* | 30% of fare | 70% of fare |
| OutStation Drop | Drop in another city | +₹500 flat | +₹150 | +₹350 |

---

## 🧭 Page Architecture & Stable URL Routes

Every page operates on a real URL path without hash fragments (`#`), ensuring seamless indexing by search engines and approval by payment gateway compliance reviewers:

1. `/` – **Home Page:** Hero, Trust strip, InCity packages (3h, 6h, 12h), Outstation banner, How it works, Why DriverConnect, Store buttons, Driver pitch, FAQ accordion, Final CTA.
2. `/about` – **About Us:** Founder mission, "Who we are" (Families, Professionals, Business owners), base at 24 Cars Vesu, core values, driver community, 24h response closing box.
3. `/services` – **Services:** InCity & OutStation tabs, inclusions and exclusions, booking workflow, Surat geographic scope.
4. `/pricing` – **Pricing:** Fare schedule table, payment terms, interactive fare & advance estimator, Razorpay security badges.
5. `/contact` – **Contact Us:** Registered office address, grievance officer box, validated enquiry form, 24h response guarantee.
6. `/terms` – **Terms & Conditions:** 20 statutory clauses with table of contents.
7. `/privacy` – **Privacy Policy:** DPDP Act 2023 aligned, location rules, 90-day retention, masked Aadhaar handling, data retention table.
8. `/refund-policy` – **Refund & Cancellation Policy:** 30% advance rules, 50% wallet credit before OTP, 0% after OTP, 100% full refund within 7-10 working days on driver/platform cancellation.
9. `/service-description` – **Service Description:** Specifications of what customer buys, car criteria, Surat zones.
10. `/delete-account` – **Delete Account:** App steps, 30-day grace period, data erasure vs retention table, email fallback.
11. `/driver-terms` – **Driver Terms:** 12-point driver partner agreement.
12. `/leads` – **App Launch Waitlist Database:** View stored customer notification leads, filter by Android/iOS, and export to CSV.

---

## 🗄️ Database & Lead Collection API

When users click **"Get it on Google Play"** or **"Download on the App Store"**, a native **"Launching Soon in Surat"** notification dialog opens:
- Collects: Full Name, 10-digit Mobile Number (WhatsApp / SMS), Platform Preference (Android / iOS), Surat Area, and Car Type.
- Persists to database via `POST /api/waitlist` and syncs with `localStorage`.
- All leads are visible at `/leads` with CSV export.
- Contact messages from `/contact` are securely recorded via `POST /api/contact` into `data/messages.json`.

## 🚀 Setup & Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### Run Unit Tests
```bash
npx --yes tsx --test src/utils/pricing.test.ts
```

---

## 📦 Deployment Instructions

### 1. Hostinger (Shared / Cloud Hosting – `public_html`)

1. Build the static production bundle:
   ```bash
   npm run build
   ```
2. The compiled assets will be placed in the `dist/` directory.
3. Ensure a `.htaccess` file is present in `public_html` so deep links (e.g. `/terms`, `/privacy`) route to `index.html`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
4. Upload all files from `dist/` into your Hostinger `public_html` folder using FTP, Git, or the Hostinger File Manager.

---

### 2. Netlify Deployment

1. Connect your repository to Netlify.
2. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Add a `public/_redirects` file with the following rule:
   ```
   /*    /index.html   200
   ```
   *(This ensures client-side routing works for all deep URLs like `/terms` and `/privacy`)*.
4. Deploy!

---

### 3. Vercel Deployment

1. Import your project into Vercel.
2. Vercel automatically detects Vite. Set:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. For SPA rewrites, create a `vercel.json`:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
4. Deploy!

---

## 🛠 Centralized Content & Price Configuration

All business details, office addresses, emails, and package prices are managed in a single configuration file:
- **`src/content.ts`**

To adjust a package price or address in the future, simply edit `src/content.ts` without modifying layout templates or component markup.

---

## ✅ Razorpay Compliance Checklist

- [x] **Brand Name & Office Address:** Exact match with commercial records (24 Cars, Vesu, Surat, Gujarat 395007).
- [x] **Support Email & Working Hours:** `driverconnect139@gmail.com`, 9:00 AM to 9:00 PM all days.
- [x] **Grievance Officer:** Anuj Khatik (`khatikanuj914@gmail.com`), Surat jurisdiction.
- [x] **Exact Pricing in INR:** InCity 3h ₹600, 6h ₹1,000, 12h ₹1,800. OutStation Day 1 ₹2,200.
- [x] **30% Advance Stated Everywhere:** Advance and 70% balance explicitly explained.
- [x] **Refund Policy Explicitly Linked in Footer:** Bank refunds credited within 7-10 working days.
- [x] **Zero GST Shown:** Strictly compliant with no unverified tax lines.
- [x] **No Invented Phones or Cabs:** Honest description of customer-owned car driver service.
- [x] **All 6 Policies in Footer:** Terms, Privacy, Refund, Service Description, Delete Account, Driver Terms.
"# DriverConnectSite" 
