import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TOWNSHIPS_CONTROL_DATA } from '../data/peaceData';
import { MapPin, Search, Filter, Shield, CheckCircle2, AlertTriangle, Building, Sparkles } from 'lucide-react';

export const TownshipsMatrix = () => {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { id: 'all', labelEn: 'All Regions', labelMm: 'ဒေသ အားလုံး' },
    { id: 'Shan (North)', labelEn: 'Shan (North)', labelMm: 'ရှမ်းမြောက်' },
    { id: 'Rakhine', labelEn: 'Rakhine', labelMm: 'ရခိုင်' },
    { id: 'Chin', labelEn: 'Chin', labelMm: 'ချင်း' },
    { id: 'Kachin', labelEn: 'Kachin', labelMm: 'ကချင်' },
    { id: 'Kayah (Karenni)', labelEn: 'Karenni (Kayah)', labelMm: 'ကရင်နီ (ကယား)' },
    { id: 'Kayin', labelEn: 'Kayin', labelMm: 'ကရင်' },
    { id: 'Mandalay / Shan', labelEn: 'Mandalay / Gem Belt', labelMm: 'မန္တလေး/ကျောက်မျက်ဒေသ' }
  ];

  const statuses = [
    { id: 'all', labelEn: 'All Statuses', labelMm: 'အားလုံး' },
    { id: 'liberated_eao', labelEn: 'Liberated by Resistance (စိုးမိုးနယ်မြေ)', labelMm: 'လွတ်မြောက်/စိုးမိုးနယ်မြေ' },
    { id: 'contested', labelEn: 'Contested / Frontline (တိုက်ပွဲဖြစ်ပွားဆဲ)', labelMm: 'တိုက်ပွဲဖြစ်ပွားဆဲ/အငြင်းပွား' },
    { id: 'sac_controlled', labelEn: 'SAC Garrison (စစ်ကောင်စီတပ်စွဲ)', labelMm: 'စစ်ကောင်စီတပ်စွဲထား' },
    { id: 'ceasefire_stable', labelEn: 'Autonomous Truce (ကိုယ်ပိုင်အထူးဒေသ)', labelMm: 'ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရဒေသ' }
  ];

  const filteredTownships = TOWNSHIPS_CONTROL_DATA.filter(t => {
    const matchesStatus = selectedStatus === 'all' || t.status === selectedStatus;
    const matchesRegion = selectedRegion === 'all' || t.region.includes(selectedRegion);
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      t.nameEn.toLowerCase().includes(query) ||
      t.nameMm.toLowerCase().includes(query) ||
      t.controller.toLowerCase().includes(query) ||
      t.significanceEn.toLowerCase().includes(query) ||
      t.significanceMm.includes(query);

    return matchesStatus && matchesRegion && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'liberated_eao':
        return {
          label: lang === 'mm' ? 'တော်လှန်ရေးတပ်များ စိုးမိုး' : 'Liberated / EAO Admin',
          bg: 'rgba(16, 185, 129, 0.15)',
          text: '#34d399',
          border: 'rgba(16, 185, 129, 0.3)'
        };
      case 'contested':
        return {
          label: lang === 'mm' ? 'တိုက်ပွဲဖြစ်ပွားဆဲ' : 'Contested Frontline',
          bg: 'rgba(249, 115, 22, 0.15)',
          text: '#fb923c',
          border: 'rgba(249, 115, 22, 0.3)'
        };
      case 'sac_controlled':
        return {
          label: lang === 'mm' ? 'စစ်ကောင်စီ တပ်စွဲထား' : 'SAC Junta Garrison',
          bg: 'rgba(239, 68, 68, 0.15)',
          text: '#f87171',
          border: 'rgba(239, 68, 68, 0.3)'
        };
      default:
        return {
          label: lang === 'mm' ? 'ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရ' : 'Autonomous Zone',
          bg: 'rgba(168, 85, 247, 0.15)',
          text: '#c084fc',
          border: 'rgba(168, 85, 247, 0.3)'
        };
    }
  };

  const liberatedCount = TOWNSHIPS_CONTROL_DATA.filter(t => t.status === 'liberated_eao').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '20px',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              fontSize: '11px',
              fontWeight: 700,
              marginBottom: '8px'
            }}>
              <Sparkles size={12} />
              {lang === 'mm' ? 'နယ်မြေစိုးမိုးမှုနှင့် အုပ်ချုပ်ရေး အချက်အလက်' : 'TERRITORIAL GOVERNANCE & CONTROL MATRIX'}
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc' }}>
              {lang === 'mm' ? 'မြို့နယ်များနှင့် မဟာဗျူဟာဒေသများ ထိန်းချုပ်မှု အခြေအနေ' : 'Township Control & Strategic Frontline Matrix'}
            </h2>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>
              {lang === 'mm'
                ? '၁၀၂၇ စစ်ဆင်ရေးနှင့် နွေဦးတော်လှန်ရေးနောက်ပိုင်း မြို့နယ်များအလိုက် တော်လှန်ရေးတပ်များ စိုးမိုးထိန်းချုပ်မှု၊ တိုက်ပွဲဖြစ်ပွားဆဲ နေရာများနှင့် သယံဇာတ အချက်အချာများ'
                : 'Granular intelligence on township liberation, governing forces, border customs control, and strategic defense bases.'}
            </p>
          </div>

          {/* Quick HUD Metrics */}
          <div style={{
            display: 'flex',
            gap: '12px',
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '12px 18px',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>{lang === 'mm' ? 'မှတ်တမ်းတင်မြို့နယ်' : 'Tracked Towns'}</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>{TOWNSHIPS_CONTROL_DATA.length}+</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
            <div>
              <div style={{ fontSize: '11px', color: '#34d399' }}>{lang === 'mm' ? 'လွတ်မြောက်မြို့နယ်' : 'Liberated'}</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#34d399' }}>{liberatedCount}</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
            <div>
              <div style={{ fontSize: '11px', color: '#fb923c' }}>{lang === 'mm' ? 'တိုက်ပွဲဖြစ်ပွားဆဲ' : 'Contested'}</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#fb923c' }}>
                {TOWNSHIPS_CONTROL_DATA.filter(t => t.status === 'contested').length}
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Search Input */}
          <div style={{ position: 'relative' }}>
            <Search size={18} color="var(--text-subtle)" style={{ position: 'absolute', left: '14px', top: '13px' }} />
            <input
              type="text"
              placeholder={lang === 'mm' ? 'မြို့နယ်အမည်၊ ထိန်းချုပ်ထားသော တပ်ဖွဲ့ သို့မဟုတ် အရေးပါမှုဖြင့် ရှာဖွေပါ...' : 'Search township name, controlling group, or strategic feature...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 42px',
                borderRadius: '12px',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '14px',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Region Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {regions.map(r => (
              <button
                key={r.id}
                onClick={() => setSelectedRegion(r.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  background: selectedRegion === r.id ? 'var(--accent-indigo)' : 'var(--bg-card)',
                  color: selectedRegion === r.id ? '#ffffff' : 'var(--text-muted)',
                  border: selectedRegion === r.id ? '1px solid transparent' : '1px solid var(--border-color)',
                  cursor: 'pointer'
                }}
              >
                {lang === 'mm' ? r.labelMm : r.labelEn}
              </button>
            ))}
          </div>

          {/* Status Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {statuses.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedStatus(s.id)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  background: selectedStatus === s.id ? 'var(--accent-blue)' : 'var(--bg-card)',
                  color: selectedStatus === s.id ? '#0f172a' : 'var(--text-muted)',
                  border: selectedStatus === s.id ? '1px solid transparent' : '1px solid var(--border-color)',
                  cursor: 'pointer'
                }}
              >
                {lang === 'mm' ? s.labelMm : s.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Townships Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {filteredTownships.map(item => {
          const badge = getStatusBadge(item.status);

          return (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '14px',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = badge.text;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div>
                {/* Header: Township Name + Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
                      {lang === 'mm' ? item.nameMm : item.nameEn}
                    </h3>
                    <div style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>
                      {item.region}
                    </div>
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 9px',
                    borderRadius: '8px',
                    background: badge.bg,
                    color: badge.text,
                    border: `1px solid ${badge.border}`,
                    whiteSpace: 'nowrap'
                  }}>
                    {badge.label}
                  </span>
                </div>

                {/* Controller & Date Shift info */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: 'var(--bg-secondary)',
                  fontSize: '12px',
                  marginBottom: '10px'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-subtle)' }}>{lang === 'mm' ? 'ထိန်းချုပ်သူ - ' : 'Controller: '}</span>
                    <strong style={{ color: 'var(--accent-blue)' }}>{item.controller}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-subtle)' }}>{lang === 'mm' ? 'ရက်စွဲ - ' : 'Date: '}</span>
                    <strong style={{ color: 'var(--text-main)' }}>{item.dateShift}</strong>
                  </div>
                </div>

                {/* Strategic Significance */}
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                  {lang === 'mm' ? item.significanceMm : item.significanceEn}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
