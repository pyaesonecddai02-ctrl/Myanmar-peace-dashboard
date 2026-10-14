import express from 'express';
import cors from 'cors';
import {
  EAO_DATA,
  STATES_AND_REGIONS_DATA,
  TIMELINE_EVENTS,
  ACCORDS_DATA,
  STAKEHOLDER_MATRIX,
  STATS_SUMMARY,
  TOWNSHIPS_CONTROL_DATA,
  MILITARY_OPERATIONS_DATA,
  PEACE_TALKS_ROUNDS,
  LIVE_SITREPS,
  SCEF_DATA,
  HUMANITARIAN_DATA,
  BORDER_GATES_DATA,
  TIME_LAPSE_PHASES,
  FEDERAL_GOVERNANCE_DATA,
  AIR_STRIKES_DATA
} from './data/peaceData.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow Netlify and local dev to fetch
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Request logging in development
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Root Endpoint - API Index & Documentation
app.get('/', (req, res) => {
  res.json({
    name: 'Myanmar Peace Process & Conflict Intelligence REST API',
    status: 'online',
    version: '1.0.0',
    platform: 'Railway Service',
    description: 'Cloud API providing real-time and historical conflict intelligence, peace accords, EAO dossiers, and humanitarian corridor data for Myanmar.',
    endpoints: {
      health: '/health',
      overview: '/api/overview',
      eaos: '/api/eaos',
      eaoDetail: '/api/eaos/:id',
      scef: '/api/scef',
      townships: '/api/townships',
      military: '/api/military',
      peaceTalks: '/api/peace-talks',
      humanitarian: '/api/humanitarian',
      borderGates: '/api/border-gates',
      airStrikes: '/api/air-strikes',
      federalGovernance: '/api/federal-governance',
      timeline: '/api/timeline',
      accords: '/api/accords',
      stakeholders: '/api/stakeholders',
      regions: '/api/regions',
      timeLapse: '/api/time-lapse'
    }
  });
});

// Health check endpoint (for Railway / Uptime monitors)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString()
  });
});

// 1. Overview & Key Performance Indicators (KPIs)
app.get('/api/overview', (req, res) => {
  res.json({
    stats: STATS_SUMMARY,
    sitreps: LIVE_SITREPS,
    totalEaos: EAO_DATA.length,
    totalTownshipsMonitored: TOWNSHIPS_CONTROL_DATA.length,
    activeOperations: MILITARY_OPERATIONS_DATA.length,
    humanitarianHighlights: {
      totalDisplaced: HUMANITARIAN_DATA.totalDisplaced,
      statesCount: HUMANITARIAN_DATA.statesBreakdown?.length || 0,
      crossBorderCorridorsCount: HUMANITARIAN_DATA.crossBorderRelief?.corridors?.length || 0
    }
  });
});

// 2. Ethnic Armed Organizations (EAOs) Directory
app.get('/api/eaos', (req, res) => {
  const { category, region, search } = req.query;
  let results = [...EAO_DATA];

  if (category) {
    results = results.filter(e => 
      e.category?.toLowerCase() === category.toLowerCase()
    );
  }

  if (region) {
    results = results.filter(e => 
      e.activeRegions?.some(r => r.toLowerCase().includes(region.toLowerCase())) ||
      e.activeRegionsMm?.some(r => r.includes(region))
    );
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(e => 
      e.nameEn?.toLowerCase().includes(q) ||
      e.nameMm?.includes(q) ||
      e.acronym?.toLowerCase().includes(q) ||
      e.headquarters?.toLowerCase().includes(q)
    );
  }

  res.json({
    count: results.length,
    total: EAO_DATA.length,
    eaos: results
  });
});

// EAO Detail by ID or Acronym
app.get('/api/eaos/:id', (req, res) => {
  const param = req.params.id.toLowerCase();
  const eao = EAO_DATA.find(e => 
    e.id.toLowerCase() === param || 
    e.acronym.toLowerCase().replace(/[^a-z0-9]/g, '') === param.replace(/[^a-z0-9]/g, '')
  );

  if (!eao) {
    return res.status(404).json({ error: 'EAO not found' });
  }
  res.json(eao);
});

// 3. Special Committee for Ethnic Affairs / SCEF Council
app.get('/api/scef', (req, res) => {
  res.json(SCEF_DATA);
});

// 4. Townships Control Matrix (85+ Townships)
app.get('/api/townships', (req, res) => {
  const { status, state, search } = req.query;
  let results = [...TOWNSHIPS_CONTROL_DATA];

  if (status) {
    results = results.filter(t => t.status?.toLowerCase() === status.toLowerCase());
  }

  if (state) {
    results = results.filter(t => 
      t.state?.toLowerCase().includes(state.toLowerCase()) ||
      t.stateMm?.includes(state)
    );
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(t => 
      t.nameEn?.toLowerCase().includes(q) ||
      t.nameMm?.includes(q) ||
      t.controlledBy?.toLowerCase().includes(q)
    );
  }

  res.json({
    count: results.length,
    townships: results
  });
});

// 5. Military Operations (Op 1027, 1111, 0307, etc.)
app.get('/api/military', (req, res) => {
  res.json({
    operations: MILITARY_OPERATIONS_DATA,
    peaceTalksRounds: PEACE_TALKS_ROUNDS
  });
});

app.get('/api/peace-talks', (req, res) => {
  res.json(PEACE_TALKS_ROUNDS);
});

// 6. Humanitarian Tracker & IDP Relief Corridors
app.get('/api/humanitarian', (req, res) => {
  res.json(HUMANITARIAN_DATA);
});

// 7. Border Gates Matrix
app.get('/api/border-gates', (req, res) => {
  const { borderCountry } = req.query;
  let results = [...BORDER_GATES_DATA];

  if (borderCountry) {
    results = results.filter(b => 
      b.borderWith?.toLowerCase() === borderCountry.toLowerCase()
    );
  }

  res.json({
    count: results.length,
    gates: results
  });
});

// 8. Air Strikes Monitor
app.get('/api/air-strikes', (req, res) => {
  res.json(AIR_STRIKES_DATA);
});

// 9. Bottom-up Federal Governance Models
app.get('/api/federal-governance', (req, res) => {
  res.json(FEDERAL_GOVERNANCE_DATA);
});

// 10. Peace Timeline (1947 - 2026)
app.get('/api/timeline', (req, res) => {
  const { era, type } = req.query;
  let results = [...TIMELINE_EVENTS];

  if (era) {
    results = results.filter(t => t.era?.toLowerCase() === era.toLowerCase());
  }

  if (type) {
    results = results.filter(t => t.type?.toLowerCase() === type.toLowerCase());
  }

  res.json({
    count: results.length,
    events: results
  });
});

// 11. Accords & Agreements Library
app.get('/api/accords', (req, res) => {
  res.json(ACCORDS_DATA);
});

// 12. Stakeholder Matrix
app.get('/api/stakeholders', (req, res) => {
  res.json(STAKEHOLDER_MATRIX);
});

// 13. States and Regions Geographical Intelligence
app.get('/api/regions', (req, res) => {
  res.json(STATES_AND_REGIONS_DATA);
});

// 14. Time Lapse Phases (2021 - 2026)
app.get('/api/time-lapse', (req, res) => {
  res.json(TIME_LAPSE_PHASES);
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: `Cannot ${req.method} ${req.url}. Check GET / for available API routes.`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start listening
app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(` Myanmar Peace Process API Service`);
  console.log(` Listening on port: ${PORT}`);
  console.log(` Environment: ${process.env.NODE_ENV || 'production'}`);
  console.log(` Health check: http://localhost:${PORT}/health`);
  console.log(`====================================================`);
});
