import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STATES_AND_REGIONS_DATA, EAO_DATA, TOWNSHIPS_CONTROL_DATA, TIME_LAPSE_PHASES } from '../data/peaceData';
import {
  MapPin,
  Users,
  ShieldAlert,
  ChevronRight,
  Info,
  AlertTriangle,
  Eye,
  Flame,
  Layers,
  Target,
  Compass,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Clock,
  History,
  Sparkles
} from 'lucide-react';

export const InteractiveMap = ({ onSelectRegion, onSelectEao }) => {
  const { lang } = useLanguage();
  const [selectedStateId, setSelectedStateId] = useState('shan_north');
  const [hoveredStateId, setHoveredStateId] = useState(null);
  const [filterMode, setFilterMode] = useState('all'); // all, critical, high, moderate
  const [mapLayer, setMapLayer] = useState('heatmap'); // 'heatmap', 'hotspots'
  const [timeLapseMode, setTimeLapseMode] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(5); // 0 to 5, default to 2026
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isPlaying && timeLapseMode) {
      interval = setInterval(() => {
        setPhaseIndex(prev => {
          if (prev >= TIME_LAPSE_PHASES.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, timeLapseMode]);

  const currentPhase = TIME_LAPSE_PHASES[phaseIndex] || TIME_LAPSE_PHASES[5];

  const currentState = STATES_AND_REGIONS_DATA.find(s => s.id === selectedStateId) || STATES_AND_REGIONS_DATA[0];
  const activeStateEaos = EAO_DATA.filter(e => currentState?.activeEaos?.includes(e.id) || false);
  const stateTownships = TOWNSHIPS_CONTROL_DATA.filter(t => {
    if (!currentState?.nameEn) return false;
    const prefix = currentState.nameEn.toLowerCase().split(' ')[0];
    return t.region?.toLowerCase().includes(prefix);
  });

  // Authentic geographical coordinates and contours matching the true silhouette of Myanmar
  // Northern Kachin triangle, Western Chin/Rakhine coast, Eastern Shan bulge, Central Irrawaddy basin, and the Southern Tanintharyi peninsula tail!
  const regionCoordinates = [
    {
      id: 'kachin',
      name: lang === 'mm' ? 'ကချင်' : 'Kachin',
      x: 285,
      y: 110,
      color: '#ef4444',
      // Northern diamond/triangle peak pointing up to Putao, China/Tibet border
      shape: 'M 270 25 L 305 60 L 335 100 L 350 145 L 330 185 L 280 190 L 245 165 L 230 125 L 240 70 Z'
    },
    {
      id: 'sagaing',
      name: lang === 'mm' ? 'စစ်ကိုင်း' : 'Sagaing',
      x: 195,
      y: 200,
      color: '#b91c1c',
      // Upper Chindwin down past Katha, Kawlin, Shwebo to Monywa
      shape: 'M 175 105 L 230 125 L 245 165 L 240 245 L 225 285 L 195 295 L 160 275 L 150 195 Z'
    },
    {
      id: 'chin',
      name: lang === 'mm' ? 'ချင်း' : 'Chin',
      x: 125,
      y: 255,
      color: '#ef4444',
      // Western mountainous ridge along India/Mizoram
      shape: 'M 150 185 L 165 235 L 150 295 L 130 325 L 105 285 L 115 210 Z'
    },
    {
      id: 'shan_north',
      name: lang === 'mm' ? 'ရှမ်းမြောက်' : 'Shan (N)',
      x: 345,
      y: 215,
      color: '#ef4444',
      // Northern Shan plateau, Kokang, Muse, Lashio, Kyaukme, Namhsan
      shape: 'M 280 190 L 330 185 L 395 175 L 425 210 L 395 265 L 315 260 L 260 245 Z'
    },
    {
      id: 'shan_south_east',
      name: lang === 'mm' ? 'ရှမ်းတောင်/အရှေ့' : 'Shan (S/E)',
      x: 375,
      y: 315,
      color: '#eab308',
      // Vast eastern bulge: Wa State, Kengtung, Taunggyi, Tachileik along Mekong
      shape: 'M 315 260 L 395 265 L 450 250 L 485 305 L 465 370 L 395 395 L 335 370 L 305 325 Z'
    },
    {
      id: 'mandalay',
      name: lang === 'mm' ? 'မန္တလေး' : 'Mandalay',
      x: 255,
      y: 295,
      color: '#f97316',
      // Central heart: Mogok, Pyin Oo Lwin, Mandalay, Meiktila
      shape: 'M 240 245 L 280 235 L 315 260 L 305 325 L 280 355 L 235 350 L 225 285 Z'
    },
    {
      id: 'magway',
      name: lang === 'mm' ? 'မကွေး' : 'Magway',
      x: 180,
      y: 355,
      color: '#f97316',
      // West of Irrawaddy river, Pakokku, Chauk, Minbu, Thayet
      shape: 'M 160 275 L 195 295 L 225 285 L 235 350 L 225 415 L 175 425 L 130 365 L 150 295 Z'
    },
    {
      id: 'rakhine',
      name: lang === 'mm' ? 'ရခိုင်' : 'Rakhine',
      x: 105,
      y: 420,
      color: '#dc2626',
      // Western coastal crescent along Bay of Bengal, Sittwe to Thandwe/Gwa
      shape: 'M 95 310 L 130 325 L 130 365 L 145 410 L 130 450 L 145 490 L 160 525 L 130 520 L 95 440 L 75 370 Z'
    },
    {
      id: 'naypyidaw',
      name: lang === 'mm' ? 'နေပြည်တော်' : 'Naypyitaw',
      x: 250,
      y: 395,
      color: '#eab308',
      // Central administrative territory
      shape: 'M 235 375 L 265 375 L 265 410 L 235 410 Z'
    },
    {
      id: 'kayah',
      name: lang === 'mm' ? 'ကယား' : 'Kayah',
      x: 315,
      y: 405,
      color: '#dc2626',
      // Karenni eastern highland bordering Thailand Mae Hong Son
      shape: 'M 305 370 L 345 375 L 340 435 L 295 430 L 300 390 Z'
    },
    {
      id: 'bago',
      name: lang === 'mm' ? 'ပဲခူး' : 'Bago',
      x: 230,
      y: 465,
      color: '#f97316',
      // Sittaung & Irrawaddy lower valleys, Pyay to Taungoo
      shape: 'M 175 425 L 225 415 L 265 410 L 295 440 L 275 515 L 215 515 L 185 470 Z'
    },
    {
      id: 'kayin',
      name: lang === 'mm' ? 'ကရင်' : 'Kayin',
      x: 325,
      y: 495,
      color: '#ef4444',
      // Long eastern curved territory along Thai border, Hpapun to Myawaddy
      shape: 'M 295 440 L 340 435 L 370 500 L 350 570 L 315 560 L 285 505 Z'
    },
    {
      id: 'ayeyarwady',
      name: lang === 'mm' ? 'ဧရာဝတီ' : 'Ayeyarwady',
      x: 165,
      y: 535,
      color: '#10b981',
      // The great river delta, Pathein to Pyapon
      shape: 'M 145 490 L 185 470 L 210 515 L 195 575 L 140 580 L 130 525 Z'
    },
    {
      id: 'yangon_ayeyarwady',
      name: lang === 'mm' ? 'ရန်ကုန်' : 'Yangon',
      x: 228,
      y: 540,
      color: '#10b981',
      // Gulf of Martaban commercial delta port
      shape: 'M 210 515 L 245 515 L 245 560 L 205 565 Z'
    },
    {
      id: 'mon',
      name: lang === 'mm' ? 'မွန်' : 'Mon',
      x: 285,
      y: 565,
      color: '#eab308',
      // Coastal isthmus strip, Thaton, Mawlamyine, Ye
      shape: 'M 275 515 L 315 555 L 305 615 L 270 595 L 255 550 Z'
    },
    {
      id: 'tanintharyi',
      name: lang === 'mm' ? 'တနင်္သာရီ' : 'Tanintharyi',
      x: 320,
      y: 720,
      color: '#f97316',
      // The authentic iconic southern tail / peninsula extending down to Kawthaung!
      shape: 'M 305 615 L 335 625 L 350 710 L 340 810 L 315 835 L 300 785 L 290 700 L 295 640 Z'
    }
  ];

  // Strategic Hotspot Pins placed accurately on their real geographical locations
  const battlePins = [
    { name: 'Lashio', nameMm: 'လားရှိုး (ရမခ)', x: 355, y: 225, stateId: 'shan_north', desc: 'Captured by MNDAA in Phase 2' },
    { name: 'Laukkai', nameMm: 'လောက်ကိုင်', x: 390, y: 185, stateId: 'shan_north', desc: 'Kokang Capital liberated' },
    { name: 'Mogok', nameMm: 'မိုးကုတ်', x: 280, y: 235, stateId: 'mandalay', desc: 'Ruby land taken by TNLA & MDY PDF' },
    { name: 'Loikaw', nameMm: 'လွိုင်ကော်', x: 315, y: 400, stateId: 'kayah', desc: 'Operation 1111 siege by KNDF' },
    { name: 'Thandwe', nameMm: 'သံတွဲ/ငပလီ', x: 135, y: 465, stateId: 'rakhine', desc: 'Ngapali & Mazin airport under AA' },
    { name: 'Myawaddy', nameMm: 'မြဝတီ', x: 360, y: 510, stateId: 'kayin', desc: 'Contested border Asian Highway' },
    { name: 'Laiza', nameMm: 'လိုင်ဇာ', x: 325, y: 145, stateId: 'kachin', desc: 'KIA General Headquarters' },
    { name: 'Paletwa', nameMm: 'ပလက်ဝ', x: 115, y: 325, stateId: 'chin', desc: 'Kaladan multi-modal project AA hub' }
  ];

  const getStatusBadge = (level) => {
    switch (level) {
      case 'critical':
        return {
          bg: 'rgba(239, 68, 68, 0.15)',
          text: '#f87171',
          border: 'rgba(239, 68, 68, 0.3)',
          label: lang === 'mm' ? 'စစ်ရေးပြင်းထန် / ထိုးစစ်ဧရိယာ' : 'Critical Conflict'
        };
      case 'high':
        return {
          bg: 'rgba(249, 115, 22, 0.15)',
          text: '#fb923c',
          border: 'rgba(249, 115, 22, 0.3)',
          label: lang === 'mm' ? 'တိုက်ပွဲများ မကြာခဏဖြစ်ပွား' : 'High Contested'
        };
      case 'moderate':
        return {
          bg: 'rgba(234, 179, 8, 0.15)',
          text: '#facc15',
          border: 'rgba(234, 179, 8, 0.3)',
          label: lang === 'mm' ? 'အပစ်ရပ်ထိန်းသိမ်း / အကန့်အသတ်တိုက်ပွဲ' : 'Fragile Ceasefire'
        };
      default:
        return {
          bg: 'rgba(16, 185, 129, 0.15)',
          text: '#34d399',
          border: 'rgba(16, 185, 129, 0.3)',
          label: lang === 'mm' ? 'ဗဟိုထိန်းချုပ်မှုအောက်တွင်ရှိ' : 'Low Clashes'
        };
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Map Control Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        padding: '16px 20px',
        background: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={20} color="var(--accent-indigo)" />
            {lang === 'mm' ? 'မြန်မာနိုင်ငံ ပထဝီဝင်အနေအထားအမှန် စစ်ရေးနှင့် ငြိမ်းချမ်းရေး မြေပုံ' : 'Authentic Geographical Map: Conflict & Peace Zones'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            {lang === 'mm'
              ? 'မြောက်ဖျား ကချင်ဒေသမှ တောင်ဖျား တနင်္သာရီအထိ ပထဝီဝင်ပုံစံအမှန်အတိုင်း ဒေသဆိုင်ရာ အချက်အလက်များကို နှိပ်၍ စစ်ဆေးနိုင်ပါသည်'
              : 'True geographic silhouette from northern Kachin down to the southern Tenasserim tail with real-time intelligence'}
          </p>
        </div>

        {/* Layer & Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Layer switcher */}
          <div style={{
            display: 'flex',
            background: 'var(--bg-secondary)',
            padding: '3px',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            marginRight: '6px'
          }}>
            <button
              onClick={() => setMapLayer('heatmap')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 12px',
                borderRadius: '7px',
                fontSize: '11px',
                fontWeight: 700,
                background: mapLayer === 'heatmap' ? 'var(--accent-indigo)' : 'transparent',
                color: mapLayer === 'heatmap' ? '#ffffff' : 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <Layers size={13} />
              {lang === 'mm' ? 'အပူမြေပုံ' : 'Heatmap'}
            </button>
            <button
              onClick={() => {
                const nextMode = !timeLapseMode;
                setTimeLapseMode(nextMode);
                if (nextMode) setIsPlaying(true);
                else setIsPlaying(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 12px',
                borderRadius: '7px',
                fontSize: '11px',
                fontWeight: 700,
                background: timeLapseMode ? 'linear-gradient(135deg, #0284c7, #6366f1)' : 'transparent',
                color: timeLapseMode ? '#ffffff' : 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <History size={13} />
              {lang === 'mm' ? 'အချိန်ခရီးသွား မြေပုံ (2021-2026)' : 'Time-Lapse (2021-2026)'}
            </button>
          </div>

          {[
            { id: 'all', labelMm: 'အားလုံး (၁၅)', labelEn: 'All (15)' },
            { id: 'critical', labelMm: 'စစ်ရေးပြင်းထန် (၆)', labelEn: 'Critical (6)' },
            { id: 'high', labelMm: 'တိုက်ပွဲများ (၄)', labelEn: 'High (4)' },
            { id: 'moderate', labelMm: 'အကန့်အသတ် (၃)', labelEn: 'Moderate (3)' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterMode(f.id)}
              style={{
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                background: filterMode === f.id ? 'var(--accent-blue)' : 'var(--bg-input)',
                color: filterMode === f.id ? '#0f172a' : 'var(--text-muted)',
                border: filterMode === f.id ? '1px solid transparent' : '1px solid var(--border-color)',
                cursor: 'pointer'
              }}
            >
              {lang === 'mm' ? f.labelMm : f.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map View + Detail Panel Grid */}
      <div
        className="interactive-map-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        {/* SVG Interactive Map Container */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '18px',
          border: '1px solid var(--border-color)',
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 'var(--shadow-md)',
          position: 'relative'
        }}>
          {/* Time-Lapse Player & Controller Bar */}
          {timeLapseMode && (
            <div style={{
              width: '100%',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.95))',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              borderRadius: '14px',
              padding: '16px',
              marginBottom: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {/* Top row: Phase title & playback controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: '#6366f1',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '12px'
                  }}>
                    {currentPhase.year}
                  </span>
                  <span style={{ fontWeight: 800, fontSize: '13px', color: '#f8fafc' }}>
                    {lang === 'mm' ? currentPhase.periodMm : currentPhase.periodEn}
                  </span>
                </div>

                {/* Player Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <button
                    onClick={() => {
                      setIsPlaying(false);
                      setPhaseIndex(prev => Math.max(0, prev - 1));
                    }}
                    disabled={phaseIndex === 0}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#ffffff',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      cursor: phaseIndex === 0 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <SkipBack size={14} />
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      background: isPlaying ? '#ef4444' : '#10b981',
                      border: 'none',
                      color: '#ffffff',
                      borderRadius: '6px',
                      padding: '4px 12px',
                      fontWeight: 700,
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    {isPlaying ? (lang === 'mm' ? 'ရပ်မည်' : 'Pause') : (lang === 'mm' ? 'စတင်ပြမည်' : 'Play')}
                  </button>

                  <button
                    onClick={() => {
                      setIsPlaying(false);
                      setPhaseIndex(prev => Math.min(TIME_LAPSE_PHASES.length - 1, prev + 1));
                    }}
                    disabled={phaseIndex === TIME_LAPSE_PHASES.length - 1}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#ffffff',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      cursor: phaseIndex === TIME_LAPSE_PHASES.length - 1 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <SkipForward size={14} />
                  </button>
                </div>
              </div>

              {/* Year Scrubber Pills */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px' }}>
                {TIME_LAPSE_PHASES.map((ph, idx) => (
                  <button
                    key={ph.phaseId}
                    onClick={() => {
                      setIsPlaying(false);
                      setPhaseIndex(idx);
                    }}
                    style={{
                      padding: '5px 2px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 800,
                      background: phaseIndex === idx ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                      color: phaseIndex === idx ? '#0f172a' : '#94a3b8',
                      border: phaseIndex === idx ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.05)',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {ph.year}
                  </button>
                ))}
              </div>

              {/* Territorial Balance Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                  <span style={{ color: '#10b981', fontWeight: 800 }}>
                    {lang === 'mm' ? `တော်လှန်ရေးတပ်များ: ${currentPhase.resistanceControlPercent}%` : `Resistance: ${currentPhase.resistanceControlPercent}%`}
                  </span>
                  <span style={{ color: '#38bdf8', fontWeight: 800 }}>
                    {currentPhase.liberatedTownships} {lang === 'mm' ? 'မြို့နယ် လွတ်မြောက်' : 'Townships Liberated'}
                  </span>
                  <span style={{ color: '#ef4444', fontWeight: 800 }}>
                    {lang === 'mm' ? `စစ်ကောင်စီ: ${currentPhase.juntaControlPercent}%` : `Junta: ${currentPhase.juntaControlPercent}%`}
                  </span>
                </div>
                <div style={{ height: '7px', background: '#334155', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: `${currentPhase.resistanceControlPercent}%`, background: '#10b981', transition: 'width 0.4s ease' }} />
                  <div style={{ width: `${currentPhase.juntaControlPercent}%`, background: '#ef4444', transition: 'width 0.4s ease' }} />
                </div>
              </div>

              {/* Narrative Ticker */}
              <div style={{
                fontSize: '12px',
                color: '#cbd5e1',
                lineHeight: 1.5,
                background: 'rgba(0, 0, 0, 0.25)',
                padding: '8px 12px',
                borderRadius: '8px',
                borderLeft: '3px solid var(--accent-blue)'
              }}>
                {lang === 'mm' ? currentPhase.narrativeMm : currentPhase.narrativeEn}
              </div>
            </div>
          )}

          {/* Map Legend */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '16px',
            fontSize: '11px',
            padding: '8px 12px',
            background: 'var(--bg-secondary)',
            borderRadius: '10px',
            width: '100%',
            justifyContent: 'center',
            border: '1px solid var(--border-color)'
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#dc2626' }}></span>
              {lang === 'mm' ? 'စစ်ရေးပြင်းထန် / စစ်ကောင်စီ' : 'Critical / SAC Heavy'}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#f97316' }}></span>
              {lang === 'mm' ? 'တိုက်ပွဲဖြစ်ပွားဆဲ' : 'High Contested'}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#eab308' }}></span>
              {lang === 'mm' ? 'အပစ်ရပ်/တည်ငြိမ်' : 'Ceasefire Stable'}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10b981' }}></span>
              {lang === 'mm' ? 'လွတ်မြောက်နယ်မြေ / မဟာမိတ်' : 'Liberated / Resistance'}
            </span>
          </div>

          <svg
            viewBox="50 15 450 840"
            style={{
              width: '100%',
              maxHeight: '680px',
              filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.5))'
            }}
          >
            {/* Base Geographic outline of Myanmar */}
            <g>
              {regionCoordinates.map(reg => {
                const stateData = STATES_AND_REGIONS_DATA.find(s => s.id === reg.id);
                const isSelected = selectedStateId === reg.id;
                const isHovered = hoveredStateId === reg.id;
                const isDimmed = !timeLapseMode && filterMode !== 'all' && stateData?.conflictLevel !== filterMode;
                const regionBaseColor = timeLapseMode ? (currentPhase.colorShift[reg.id] || reg.color) : reg.color;

                return (
                  <g
                    key={reg.id}
                    onClick={() => {
                      setSelectedStateId(reg.id);
                      if (onSelectRegion) onSelectRegion(stateData);
                    }}
                    onMouseEnter={() => setHoveredStateId(reg.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    style={{
                      cursor: 'pointer',
                      opacity: isDimmed ? 0.25 : 1,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <path
                      d={reg.shape}
                      fill={isSelected ? '#38bdf8' : (isHovered ? '#60a5fa' : regionBaseColor)}
                      stroke={isSelected ? '#ffffff' : 'rgba(255,255,255,0.45)'}
                      strokeWidth={isSelected ? '3.5' : '1.5'}
                      strokeLinejoin="round"
                      style={{
                        transition: 'fill 0.4s ease, stroke 0.2s, transform 0.2s',
                        filter: isSelected ? 'drop-shadow(0 0 14px rgba(56, 189, 248, 0.95))' : 'none'
                      }}
                    />
                    {/* Region Label */}
                    <text
                      x={reg.x}
                      y={reg.y}
                      fill="#ffffff"
                      fontSize={isSelected ? '12px' : '11px'}
                      fontWeight={isSelected ? '800' : '700'}
                      textAnchor="middle"
                      style={{
                        pointerEvents: 'none',
                        textShadow: '0 2px 4px rgba(0,0,0,0.95), 0 0 6px rgba(0,0,0,0.8)',
                        fontFamily: 'var(--font-base)'
                      }}
                    >
                      {reg.name}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Strategic Battle Pins Layer */}
            {mapLayer === 'hotspots' && (
              <g>
                {battlePins.map((pin, idx) => (
                  <g
                    key={idx}
                    onClick={() => setSelectedStateId(pin.stateId)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r="12"
                      fill="rgba(239, 68, 68, 0.35)"
                      stroke="#ef4444"
                      strokeWidth="2"
                    />
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r="5"
                      fill="#fef08a"
                    />
                    <text
                      x={pin.x}
                      y={pin.y - 14}
                      fill="#fef08a"
                      fontSize="10px"
                      fontWeight="800"
                      textAnchor="middle"
                      style={{
                        textShadow: '0 2px 4px #000, 0 0 8px #000',
                        fontFamily: 'var(--font-base)'
                      }}
                    >
                      {lang === 'mm' ? pin.nameMm : pin.name}
                    </text>
                  </g>
                ))}
              </g>
            )}
          </svg>

          <div style={{ marginTop: '12px', fontSize: '11px', color: 'var(--text-subtle)', textAlign: 'center' }}>
            * {lang === 'mm' ? 'မြန်မာနိုင်ငံ ပထဝီဝင်ပုံစံအမှန်အတိုင်း ဒေသတစ်ခုချင်းစီကို နှိပ်၍ သတင်းအချက်အလက် စစ်ဆေးနိုင်ပါသည်' : 'Rendered in true geographic shape. Click any state or hotspot pin to inspect intelligence.'}
          </div>
        </div>

        {/* Selected State / Region Detail Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: '18px',
            border: '1px solid var(--border-color)',
            padding: '26px',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Top decorative stripe */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: currentState.color
            }} />

            {/* Header info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  color: 'var(--accent-blue)',
                  marginBottom: '4px'
                }}>
                  {lang === 'mm' ? 'ဒေသဆိုင်ရာ စစ်ရေးနှင့် ငြိမ်းချမ်းရေး အချက်အလက်' : 'Regional Intelligence Profile'}
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800 }}>
                  {lang === 'mm' ? currentState.nameMm : currentState.nameEn}
                </h2>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {lang === 'mm' ? `မြို့တော် - ${currentState.capitalMm}` : `Capital: ${currentState.capitalEn}`} • {lang === 'mm' ? `လူဦးရေ - ${currentState.population}` : `Population: ${currentState.population}`}
                </div>
              </div>

              {/* Status Badge */}
              <div style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                background: getStatusBadge(currentState.conflictLevel).bg,
                color: getStatusBadge(currentState.conflictLevel).text,
                border: `1px solid ${getStatusBadge(currentState.conflictLevel).border}`,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <ShieldAlert size={14} />
                {getStatusBadge(currentState.conflictLevel).label}
              </div>
            </div>

            {/* Key Statistics bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              margin: '20px 0',
              padding: '14px',
              background: 'var(--bg-secondary)',
              borderRadius: '12px'
            }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                  {lang === 'mm' ? 'စစ်ဘေးရှောင် (IDPs)' : 'Displaced (IDPs)'}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#f87171' }}>
                  {currentState.idpCount}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                  {lang === 'mm' ? 'လှုပ်ရှား တိုင်းရင်းသားတပ်' : 'Active EAOs Tracked'}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--accent-blue)' }}>
                  {activeStateEaos.length} {lang === 'mm' ? 'ဖွဲ့' : 'forces'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                  {lang === 'mm' ? 'အဓိက ထိန်းချုပ်မှု' : 'Dominant Forces'}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                  {activeStateEaos.length > 0 ? activeStateEaos.map(e => e.acronym).slice(0, 3).join(', ') : (lang === 'mm' ? 'စစ်ကောင်စီတပ်' : 'SAC Garrisons')}
                </div>
              </div>
            </div>

            {/* Strategic Overview */}
            <div style={{ marginBottom: '18px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', marginBottom: '6px', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'လက်ရှိ ငြိမ်းချမ်းရေးနှင့် စစ်ရေးအခြေအနေ သုံးသပ်ချက်' : 'Peace & Conflict Assessment'}
              </h4>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                {lang === 'mm' ? currentState.summaryMm : currentState.summaryEn}
              </p>
            </div>

            {/* Strategic Points & Border Hubs */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', marginBottom: '6px', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'ဗျူဟာမြောက် မြို့များနှင့် နယ်စပ်ဂိတ်များ' : 'Strategic Hubs & Border Gates'}
              </h4>
              <div style={{ fontSize: '13px', color: 'var(--text-main)', background: 'var(--bg-input)', padding: '10px 14px', borderRadius: '8px' }}>
                {lang === 'mm' ? currentState.strategicPointsMm : currentState.strategicPointsEn}
              </div>
            </div>

            {/* Active Ethnic Armed Forces in this State */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', marginBottom: '10px', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'ဤဒေသတွင် လှုပ်ရှားနေသော လက်နက်ကိုင်တပ်ဖွဲ့များ' : 'Active Armed Forces in this Region'}
              </h4>

              {activeStateEaos.length === 0 ? (
                <div style={{ fontSize: '13px', color: 'var(--text-subtle)', fontStyle: 'italic' }}>
                  {lang === 'mm' ? 'ဤဒေသတွင် တရားဝင်အခြေစိုက်သော တိုင်းရင်းသားလက်နက်ကိုင် မရှိပါ။ မြို့ပြပြောက်ကျားနှင့် PDF အင်အားစုများသာ လှုပ်ရှားသည်။' : 'No major EAO headquarters stationed in this region. Governed by SAC garrisons and local PDF urban networks.'}
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activeStateEaos.map(eao => (
                    <div
                      key={eao.id}
                      onClick={() => onSelectEao && onSelectEao(eao)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        background: 'var(--bg-secondary)',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-card-hover)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: eao.flagColor || 'var(--accent-indigo)'
                        }} />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '14px' }}>
                            {eao.acronym}
                          </div>
                          <div style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>
                            {lang === 'mm' ? eao.nameMm : eao.nameEn}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          fontSize: '11px',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'var(--bg-input)',
                          color: 'var(--accent-blue)',
                          fontWeight: 600
                        }}>
                          {eao.troopStrength}
                        </span>
                        <ChevronRight size={16} color="var(--text-subtle)" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .interactive-map-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
