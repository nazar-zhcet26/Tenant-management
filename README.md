# 🏠 PropertyCare Maintenance Reporter (React + Supabase)

A full-stack React app that lets tenants submit maintenance reports, upload photos/videos, and stores data on Supabase.

## 🚀 Setup Instructions

### 1. Clone or upload to GitHub

Make sure this structure exists:

```
your-repo/
├── package.json
├── .env.local          # 🔐 DO NOT commit this to GitHub
├── tailwind.config.js
├── public/
│   └── index.html
└── src/
    ├── App.js
    ├── App.css
    ├── index.js
    ├── index.css
    ├── MaintenanceReporter.js
    └── supabase.js
```

### 2. Fill in your `.env.local`

```env
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
REACT_APP_OPENCAGE_API_KEY=your-opencage-key  # optional
```

### 3. Install dependencies

```bash
npm install
npm start
```

### 4. Deploy to Vercel

- Push to GitHub
- Import repo on [vercel.com](https://vercel.com)
- Add the same environment variables
- Click **Deploy**

Enjoy! 🎉
