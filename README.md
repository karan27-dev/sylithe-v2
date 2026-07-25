# Sylithe v2

Monorepo containing the Sylithe platform — a forest carbon & tree inventory web application.

## Structure

```
sylithe-v2/
├── frontend/   # React + Vite + Tailwind CSS
└── backend/    # Python Flask REST API
```

---

## Frontend

**Stack:** React 19, Vite, Tailwind CSS, React Router, Leaflet (maps), Recharts, Radix UI, Framer Motion

### Setup

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
```

### Key features
- Interactive map for drawing and uploading project boundaries (GeoJSON, KML, SHP)
- CHM (Canopy Height Model) analysis
- Carbon credit registry explorer
- Tree inventory management
- PDF report generation
- hCaptcha-protected auth flows

---

## Backend

**Stack:** Python, Flask, MongoDB, PyMongo, JWT auth, Google Earth Engine, Resend (email), DeepSeek AI

### Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env       # fill in your values
python app.py
```

### Environment variables

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for signing JWTs |
| `RESEND_API_KEY` | [Resend](https://resend.com) API key for transactional email |
| `HCAPTCHA_SECRET` | hCaptcha server-side secret |
| `DEEPSEEK_API_KEY` | DeepSeek API key for AI-powered analysis |
| `ADMIN_EMAILS` | Comma-separated list of admin email addresses |
| `GEE_SERVICE_ACCOUNT_PATH` | Path to Google Earth Engine service account JSON key |

### API routes

| Prefix | Module | Description |
|---|---|---|
| `/api/auth` | `routes/auth.py` | Registration, login, OTP, password reset |
| `/api/admin` | `routes/admin.py` | Admin user management |
| `/api/analytics` | `routes/analytics.py` | GEE-powered analytics |
| `/api/chm` | `routes/chm.py` | Canopy height model processing |
| `/api/projects` | `routes/projects.py` | Carbon project management |
| `/api/developer-projects` | `routes/developer_projects.py` | Developer project tools |
| `/api/reports` | `routes/reports.py` | Report generation |
| `/api/tree-inventory` | `routes/tree_inventory.py` | Tree inventory CRUD |
| `/api/free-tier` | `routes/free_tier.py` | Free-tier access endpoints |
| `/api/newsletter` | `routes/newsletter.py` | Newsletter subscription |

### Google Earth Engine

See [`README_GEE_SETUP.md`](backend/README_GEE_SETUP.md) for full GEE service account setup instructions.

---

## Deployment

- **Frontend:** Vercel (`vercel.json` included)
- **Backend:** Any WSGI host; `gunicorn.conf.py` included for Gunicorn

---

## License

Private — all rights reserved.
