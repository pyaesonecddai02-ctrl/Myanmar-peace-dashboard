// API Client Service for connecting to Railway API with local data fallback
import * as localData from '../data/peaceData.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Helper to fetch from Railway API with automatic fallback to local dataset
 * @param {string} endpoint - e.g. '/api/overview'
 * @param {any} fallbackData - local static data if API is offline
 */
async function fetchWithFallback(endpoint, fallbackData) {
  if (!API_BASE_URL) {
    return { data: fallbackData, isLive: false, source: 'local' };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API returned HTTP ${res.status}`);
    }

    const json = await res.json();
    return { data: json, isLive: true, source: 'railway' };
  } catch (err) {
    console.warn(`[Railway API] Failed to fetch ${endpoint}, using cached local data:`, err.message);
    return { data: fallbackData, isLive: false, source: 'local', error: err.message };
  }
}

export const apiService = {
  getBaseUrl: () => API_BASE_URL,
  isConfigured: () => Boolean(API_BASE_URL),

  checkHealth: async () => {
    if (!API_BASE_URL) return { status: 'standalone', message: 'Running with local intelligence data' };
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      return await res.json();
    } catch (e) {
      return { status: 'offline', error: e.message };
    }
  },

  getOverview: () => fetchWithFallback('/api/overview', {
    stats: localData.STATS_SUMMARY,
    sitreps: localData.LIVE_SITREPS,
    totalEaos: localData.EAO_DATA.length,
    totalTownshipsMonitored: localData.TOWNSHIPS_CONTROL_DATA.length
  }),

  getEaos: (query = '') => fetchWithFallback(`/api/eaos${query ? `?${query}` : ''}`, {
    count: localData.EAO_DATA.length,
    total: localData.EAO_DATA.length,
    eaos: localData.EAO_DATA
  }),

  getScef: () => fetchWithFallback('/api/scef', localData.SCEF_DATA),

  getTownships: (query = '') => fetchWithFallback(`/api/townships${query ? `?${query}` : ''}`, {
    count: localData.TOWNSHIPS_CONTROL_DATA.length,
    townships: localData.TOWNSHIPS_CONTROL_DATA
  }),

  getMilitary: () => fetchWithFallback('/api/military', {
    operations: localData.MILITARY_OPERATIONS_DATA,
    peaceTalksRounds: localData.PEACE_TALKS_ROUNDS
  }),

  getHumanitarian: () => fetchWithFallback('/api/humanitarian', localData.HUMANITARIAN_DATA),

  getBorderGates: () => fetchWithFallback('/api/border-gates', {
    count: localData.BORDER_GATES_DATA.length,
    gates: localData.BORDER_GATES_DATA
  }),

  getAirStrikes: () => fetchWithFallback('/api/air-strikes', localData.AIR_STRIKES_DATA),

  getFederalGovernance: () => fetchWithFallback('/api/federal-governance', localData.FEDERAL_GOVERNANCE_DATA),

  getTimeline: () => fetchWithFallback('/api/timeline', {
    count: localData.TIMELINE_EVENTS.length,
    events: localData.TIMELINE_EVENTS
  }),

  getAccords: () => fetchWithFallback('/api/accords', localData.ACCORDS_DATA),

  getStakeholders: () => fetchWithFallback('/api/stakeholders', localData.STAKEHOLDER_MATRIX)
};

export default apiService;
