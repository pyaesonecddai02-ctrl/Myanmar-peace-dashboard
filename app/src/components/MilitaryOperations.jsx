import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MILITARY_OPERATIONS_DATA, PEACE_TALKS_ROUNDS } from '../data/peaceData';
import { Swords, ShieldAlert, Award, Compass, Flag, Target, MessageSquare, Handshake } from 'lucide-react';

export const MilitaryOperations = () => {
  const { lang } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState('operations'); // 'operations' or 'talks'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '20px',
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#f87171',
              fontSize: '11px',
              fontWeight: 700,
              marginBottom: '8px'
            }}>
              <Target size={12} />
              {lang === 'mm' ? 'စစ်ဆင်ရေးများနှင့် ငြိမ်းချမ်းရေးဆွေးနွေးပွဲများ' : 'CAMPAIGNS & DIPLOMATIC ROUNDS'}
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc' }}>
              {lang === 'mm' ? 'အဆုံးအဖြတ် စစ်ဆင်ရေးကြီးများနှင့် ငြိမ်းချမ်းရေး တွေ့ဆုံဆွေးနွေးပွဲများ' : 'Major Military Operations & Peace Talks Tracker'}
            </h2>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>
              {lang === 'mm'
                ? '၁၀၂၇ စစ်ဆင်ရေး၊ ၁၁၁၁ စစ်ဆင်ရေး၊ ၀၃၀၇ စစ်ဆင်ရေးတို့နှင့် တရုတ်နိုင်ငံ ကူမင်းမြို့ ဟိုင်ဂင် အပစ်ရပ်ဆွေးနွေးပွဲ အဆင့်ဆင့်၏ သမိုင်းဝင် အချက်အလက်များ'
                : 'Detailed tracking of turning-point coordinated military campaigns and bilateral/multilateral ceasefire diplomatic rounds.'}
            </p>
          </div>

          {/* Sub-tab toggle buttons */}
          <div style={{
            display: 'flex',
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '4px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <button
              onClick={() => setActiveSubTab('operations')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                background: activeSubTab === 'operations' ? 'var(--accent-indigo)' : 'transparent',
                color: activeSubTab === 'operations' ? '#ffffff' : 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <Swords size={16} />
              {lang === 'mm' ? 'စစ်ဆင်ရေးကြီးများ' : 'Major Operations'}
            </button>
            <button
              onClick={() => setActiveSubTab('talks')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                background: activeSubTab === 'talks' ? 'var(--accent-blue)' : 'transparent',
                color: activeSubTab === 'talks' ? '#0f172a' : 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <Handshake size={16} />
              {lang === 'mm' ? 'ဆွေးနွေးပွဲ အဆင့်ဆင့်' : 'Talks Rounds'}
            </button>
          </div>
        </div>
      </div>

      {/* Subtab 1: Major Operations */}
      {activeSubTab === 'operations' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {MILITARY_OPERATIONS_DATA.map(op => (
            <div
              key={op.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Accent Strip */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #ef4444, #f97316)'
              }} />

              <div>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
                    {lang === 'mm' ? op.nameMm : op.nameEn}
                  </h3>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: 'rgba(239, 68, 68, 0.15)',
                    color: '#f87171'
                  }}>
                    {op.impactLevel}
                  </span>
                </div>

                <div style={{ fontSize: '12px', color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '14px' }}>
                  {op.dateRange}
                </div>

                {/* Tactical Stats Pills */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  background: 'var(--bg-secondary)',
                  padding: '12px',
                  borderRadius: '10px',
                  marginBottom: '14px'
                }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>{lang === 'mm' ? 'သိမ်းပိုက်စခန်းပေါင်း' : 'Bases Captured'}</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#f87171' }}>{op.basesCaptured}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>{lang === 'mm' ? 'လွတ်မြောက်မြို့နယ်' : 'Towns Liberated'}</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#34d399' }}>{op.townsLiberated}</div>
                  </div>
                </div>

                {/* Significance Summary */}
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {lang === 'mm' ? op.significanceMm : op.significanceEn}
                </p>
              </div>

              {/* Actors */}
              <div style={{
                fontSize: '12px',
                color: 'var(--text-subtle)',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '10px'
              }}>
                <strong>{lang === 'mm' ? 'မဟာမိတ်တပ်များ - ' : 'Participating Forces: '}</strong>
                {op.actors.join(', ')}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Subtab 2: Peace Talks Rounds */}
      {activeSubTab === 'talks' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {PEACE_TALKS_ROUNDS.map(round => (
            <div
              key={round.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                padding: '22px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)' }}>
                    {lang === 'mm' ? round.roundMm : round.round}
                  </h3>
                  <div style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>
                    {round.date} • {round.location}
                  </div>
                </div>

                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '8px',
                  background: 'var(--bg-secondary)',
                  color: 'var(--accent-blue)',
                  border: '1px solid var(--border-color)'
                }}>
                  {round.mediator}
                </span>
              </div>

              <div style={{
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'var(--bg-input)',
                fontSize: '13px',
                lineHeight: 1.6,
                color: 'var(--text-main)',
                borderLeft: '4px solid var(--accent-blue)'
              }}>
                <strong>{lang === 'mm' ? 'သဘောတူညီချက်နှင့် ရလဒ် - ' : 'Key Outcome: '}</strong>
                {lang === 'mm' ? round.outcomeMm : round.outcomeEn}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
