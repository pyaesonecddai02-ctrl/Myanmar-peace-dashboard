# Myanmar Peace Process REST API (Railway Backend)

Fast, secure REST API service powering the Myanmar Peace Process & Conflict Intelligence Platform. Designed for 1-click cloud deployment on [Railway](https://railway.app).

---

## 🚀 Quick Deployment to Railway

1. Sign in to [Railway.app](https://railway.app) using your GitHub account (`pyaesonecddai02-ctrl`).
2. Click **"+ New Project"** -> **"Deploy from GitHub repo"**.
3. Select your repository: **`pyaesonecddai02-ctrl/Myanmar-peace-dashboard`**.
4. In project settings:
   - **Root Directory**: `api`
   - **Start Command**: `node server.js` (or automatically detected from `package.json`)
5. Railway will automatically provision an HTTPS URL (e.g. `https://myanmar-peace-api-production.up.railway.app`).
6. Copy that URL and paste it into Netlify's environment variable `VITE_API_URL`!

---

## 📡 Available Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API status, metadata & endpoint directory |
| `GET` | `/health` | Live health probe (uptime, status) |
| `GET` | `/api/overview` | Core conflict KPIs, SitReps, battle statistics |
| `GET` | `/api/eaos` | 25+ EAO directory (supports `?category=`, `?region=`, `?search=`) |
| `GET` | `/api/eaos/:id` | Specific EAO dossier by ID or acronym |
| `GET` | `/api/scef` | Special Committee for Ethnic Affairs (SCEF) dossiers & roadmap |
| `GET` | `/api/townships` | 85+ Townships control matrix (supports `?status=`, `?state=`) |
| `GET` | `/api/military` | Operation 1027, 1111, 0307, Haigeng peace talks |
| `GET` | `/api/humanitarian` | 3.55M+ IDPs breakdown & 3 cross-border CSO corridors |
| `GET` | `/api/border-gates` | 10 major international border gates & trade revenue control |
| `GET` | `/api/air-strikes` | SAC air strikes count, civilian casualties, jet fleet breakdown |
| `GET` | `/api/federal-governance` | State Interim Executive Councils (IEC, Chinland, ULA, KNU) |
| `GET` | `/api/timeline` | 1947 to 2026 historical peace process timeline |
| `GET` | `/api/accords` | Panglong, NCA, Federal Democracy Charter library |
| `GET` | `/api/stakeholders` | Multi-party policy comparison matrix |
| `GET` | `/api/regions` | 15 States and Regions geographical intelligence |
| `GET` | `/api/time-lapse` | 2021-2026 conflict phase time-lapse data |

---

## 💻 Local Development

```bash
cd api
npm install
npm run dev
```

Server runs by default on `http://localhost:5000`.
