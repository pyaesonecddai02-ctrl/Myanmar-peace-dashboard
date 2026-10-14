import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EAO_DATA } from '../data/peaceData';
import { Search, Filter, Shield, Users, MapPin, Award, CheckCircle, AlertTriangle, ChevronRight } from 'lucide-react';

export const EaoDirectory = ({ onSelectEao }) => {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', labelEn: 'All EAOs (21+)', labelMm: 'အားလုံး (၂၁+ ဖွဲ့)' },
    { id: 'revolutionary_alliance', labelEn: 'Revolutionary Alliance (KNU/KIA/etc.)', labelMm: 'ဖက်ဒရယ်တော်လှန်ရေးတပ်များ' },
    { id: 'brotherhood_alliance', labelEn: 'Three Brotherhood Alliance (AA/MNDAA/TNLA)', labelMm: 'ညီနောင်မဟာမိတ် ၃ ဖွဲ့' },
    { id: 'fpncc', labelEn: 'FPNCC & Autonomous (UWSA/NDAA/SSPP)', labelMm: 'FPNCC နှင့် ကိုယ်ပိုင်အုပ်ချုပ်ရေး' },
    { id: 'nca_signatory', labelEn: 'NCA Dialogue Signatories (RCSS/DKBA)', labelMm: 'NCA တွေ့ဆုံဆွေးနွေးရေးအဖွဲ့များ' },
    { id: 'contested', labelEn: 'Split Wings & Contested (PNLA/NMSP-AD)', labelMm: 'ခွဲထွက်နှင့် သီးခြားအင်အားစုများ' }
  ];

  const filteredEaos = EAO_DATA.filter(eao => {
    const matchesCategory = activeCategory === 'all' || eao.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      eao.nameEn.toLowerCase().includes(query) ||
      eao.nameMm.toLowerCase().includes(query) ||
      eao.acronym.toLowerCase().includes(query) ||
      eao.headquarters.toLowerCase().includes(query) ||
      eao.leadership.toLowerCase().includes(query) ||
      (eao.leadershipMm && eao.leadershipMm.includes(query)) ||
      eao.activeRegions.some(r => r.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'revolutionary_alliance':
        return { label: lang === 'mm' ? 'တော်လှန်ရေးမဟာမိတ်' : 'Federal Alliance', bg: 'rgba(59, 130, 246, 0.15)', text: '#60a5fa' };
      case 'brotherhood_alliance':
        return { label: lang === 'mm' ? 'ညီနောင်မဟာမိတ်' : 'Brotherhood Alliance', bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171' };
      case 'fpncc':
        return { label: lang === 'mm' ? 'FPNCC အင်အားစု' : 'FPNCC Bloc', bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc' };
      case 'nca_signatory':
        return { label: lang === 'mm' ? 'NCA ဆွေးနွေးဆဲ' : 'NCA Dialogue', bg: 'rgba(234, 179, 8, 0.15)', text: '#facc15' };
      default:
        return { label: lang === 'mm' ? 'သီးခြား/ခွဲထွက်' : 'Autonomous/Split', bg: 'rgba(100, 116, 139, 0.15)', text: '#94a3b8' };
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header and Search Controls */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '6px' }}>
            {lang === 'mm' ? 'တိုင်းရင်းသားလက်နက်ကိုင် အဖွဲ့အစည်းများ မာတိကာ' : 'Ethnic Armed Organizations (EAOs) Directory'}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            {lang === 'mm'
              ? 'မြန်မာနိုင်ငံရှိ အဓိက တိုင်းရင်းသားလက်နက်ကိုင် ၂၁+ ဖွဲ့၏ တပ်ဖွဲ့အင်အား၊ ဌာနချုပ်၊ NCA ရပ်တည်ချက်နှင့် နိုင်ငံရေး ရည်မှန်းချက်များကို စစ်ဆေးနိုင်ပါသည်'
              : 'Search and inspect organizational profiles, estimated troop strengths, headquarters, NCA posture, and political ideologies.'}
          </p>
        </div>

        {/* Search input + Filter tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search size={18} color="var(--text-subtle)" style={{ position: 'absolute', left: '14px' }} />
            <input
              type="text"
              placeholder={lang === 'mm' ? 'အဖွဲ့အမည်၊ ခေါင်းဆောင်၊ ဌာနချုပ် သို့မဟုတ် နယ်မြေဖြင့် ရှာဖွေပါ...' : 'Search by acronym, name, leadership, headquarters, region...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                borderRadius: '10px',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '14px',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  background: activeCategory === cat.id ? 'var(--accent-indigo)' : 'var(--bg-secondary)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-muted)',
                  border: activeCategory === cat.id ? '1px solid transparent' : '1px solid var(--border-color)',
                  transition: 'all 0.2s ease'
                }}
              >
                {lang === 'mm' ? cat.labelMm : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div style={{ fontSize: '13px', color: 'var(--text-subtle)', paddingLeft: '4px' }}>
        {lang === 'mm'
          ? `ရှာဖွေတွေ့ရှိသည့် အဖွဲ့အစည်း - ${filteredEaos.length} ဖွဲ့`
          : `Showing ${filteredEaos.length} ethnic armed organization(s)`}
      </div>

      {/* Grid of EAO Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {filteredEaos.map(eao => {
          const badge = getCategoryBadge(eao.category);

          return (
            <div
              key={eao.id}
              onClick={() => onSelectEao && onSelectEao(eao)}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--border-focus)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              {/* Top Accent Strip */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: eao.flagColor || 'var(--accent-indigo)'
              }} />

              <div>
                {/* Header: Acronym & Category Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: eao.flagColor || 'var(--accent-indigo)'
                    }} />
                    <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.3px' }}>
                      {eao.acronym}
                    </span>
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '8px',
                    background: badge.bg,
                    color: badge.text
                  }}>
                    {badge.label}
                  </span>
                </div>

                {/* Full Name */}
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                  {lang === 'mm' ? eao.nameMm : eao.nameEn}
                </h3>
                <div style={{ fontSize: '12px', color: 'var(--text-subtle)', marginBottom: '14px' }}>
                  {lang === 'mm' ? `စတင်တည်ထောင် - ${eao.establishedYear} ခုနှစ်` : `Established: ${eao.establishedYear}`}
                </div>

                {/* Key metadata grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '10px',
                  padding: '12px',
                  fontSize: '12px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ color: 'var(--text-subtle)' }}>
                      {lang === 'mm' ? 'ခန့်မှန်းအင်အား - ' : 'Troop Strength: '}
                    </span>
                    <span style={{ fontWeight: 700, color: 'var(--accent-blue)' }}>{eao.troopStrength}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ color: 'var(--text-subtle)' }}>
                      {lang === 'mm' ? 'ဌာနချုပ် - ' : 'Headquarters: '}
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--text-main)', textAlign: 'right' }}>
                      {lang === 'mm' ? eao.headquartersMm : eao.headquarters}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ color: 'var(--text-subtle)' }}>
                      {lang === 'mm' ? 'NCA အခြေအနေ - ' : 'NCA Status: '}
                    </span>
                    <span style={{ fontWeight: 600, color: '#f59e0b', textAlign: 'right' }}>
                      {lang === 'mm' ? eao.ncaStatusMm : eao.ncaStatus}
                    </span>
                  </div>
                </div>

                {/* Brief description */}
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  lineHeight: '1.5',
                  marginTop: '14px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {lang === 'mm' ? eao.descriptionMm : eao.descriptionEn}
                </p>
              </div>

              {/* Footer with Click Call to Action */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '12px',
                borderTop: '1px solid var(--border-color)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--accent-indigo)'
              }}>
                <span>{lang === 'mm' ? 'အသေးစိတ် ဖတ်ရှုရန်' : 'View Full Profile'}</span>
                <ChevronRight size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
