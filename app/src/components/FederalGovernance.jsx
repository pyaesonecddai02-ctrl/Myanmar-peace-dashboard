import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FEDERAL_GOVERNANCE_DATA } from '../data/peaceData';
import {
  Landmark,
  Scale,
  ShieldCheck,
  GraduationCap,
  Users,
  CheckCircle2,
  BookOpen,
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const FederalGovernance = () => {
  const { lang } = useLanguage();
  const [selectedModelId, setSelectedModelId] = useState(FEDERAL_GOVERNANCE_DATA[0].id);

  const currentModel = FEDERAL_GOVERNANCE_DATA.find(m => m.id === selectedModelId) || FEDERAL_GOVERNANCE_DATA[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
        borderRadius: '24px',
        padding: '32px',
        border: '1px solid rgba(139, 92, 246, 0.35)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 25px rgba(139, 92, 246, 0.15)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '20px',
            background: 'rgba(139, 92, 246, 0.2)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            color: '#a78bfa',
            fontSize: '12px',
            fontWeight: 800
          }}>
            <Landmark size={14} />
            {lang === 'mm' ? 'အောက်ခြေမှ တည်ဆောက်သော ဖက်ဒရယ်စနစ်' : 'BOTTOM-UP FEDERAL GOVERNANCE'}
          </span>
          <span style={{
            padding: '4px 10px',
            borderRadius: '20px',
            background: 'var(--bg-secondary)',
            color: 'var(--text-muted)',
            fontSize: '11px',
            fontWeight: 600
          }}>
            State-Building in Liberated Zones
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(24px, 3.5vw, 32px)',
          fontWeight: 900,
          color: '#f8fafc',
          marginBottom: '10px'
        }}>
          {lang === 'mm' ? 'ကြားကာလ ဖက်ဒရယ် ပြည်နယ်အုပ်ချုပ်ရေး ယန္တရားများ' : 'Interim Federal State Administrations & Autonomous Models'}
        </h1>

        <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '920px' }}>
          {lang === 'mm'
            ? 'စစ်အာဏာရှင်စနစ် ပြိုလဲနေချိန်တွင် တိုင်းရင်းသားနယ်မြေများ၌ ဗဟိုချုပ်ကိုင်မှုမဲ့ အောက်ခြေမှ အထက်သို့ တည်ဆောက်သော ကိုယ်ပိုင်အုပ်ချုပ်ရေး၊ တရားရုံး၊ ရဲတပ်ဖွဲ့၊ ပညာရေးနှင့် ကျန်းမာရေးစနစ်များကို စတင်ကျင့်သုံးနေကြပြီ ဖြစ်သည်။'
            : 'As the centralized military dictatorship crumbles, ethnic nationalities are building de-facto federal governance from the bottom up—establishing state parliaments, courts, police forces, school systems, and public healthcare.'}
        </p>

        {/* Quick Model Selector Pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
          {FEDERAL_GOVERNANCE_DATA.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModelId(model.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '12px',
                background: selectedModelId === model.id ? 'var(--accent-purple)' : 'rgba(15, 23, 42, 0.6)',
                border: `1px solid ${selectedModelId === model.id ? '#a78bfa' : 'rgba(255, 255, 255, 0.1)'}`,
                color: selectedModelId === model.id ? '#ffffff' : '#94a3b8',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={13} color={selectedModelId === model.id ? '#ffffff' : '#a78bfa'} />
              {lang === 'mm' ? model.nameMm.split('(')[0] : model.nameEn.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Model Detailed View */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))',
        gap: '24px'
      }}>
        {/* Left Card: Overview, Leadership, Territory */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', marginBottom: '6px' }}>
              {lang === 'mm' ? 'အုပ်ချုပ်ရေး အဖွဲ့အစည်း' : 'Governing Institution'}
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>
              {lang === 'mm' ? currentModel.nameMm : currentModel.nameEn}
            </h2>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {lang === 'mm' ? `တည်ထောင်သည့်နေ့: ${currentModel.establishedDateMm}` : `Formed: ${currentModel.establishedDate}`}
            </div>
          </div>

          {/* Leadership & Territory Boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '14px',
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                {lang === 'mm' ? 'ခေါင်းဆောင်မှု' : 'Leadership'}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-main)' }}>
                {lang === 'mm' ? currentModel.leadershipMm : currentModel.leadership}
              </div>
            </div>

            <div style={{
              background: 'var(--bg-secondary)',
              padding: '14px',
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                {lang === 'mm' ? 'လွှမ်းခြုံနယ်မြေ' : 'Territory Control'}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#10b981' }}>
                {lang === 'mm' ? currentModel.territoryCoveredMm : currentModel.territoryCoveredEn}
              </div>
            </div>
          </div>

          {/* Strategic Significance */}
          <div style={{
            background: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            borderRadius: '14px',
            padding: '16px',
            fontSize: '13px',
            lineHeight: 1.7,
            color: 'var(--text-main)'
          }}>
            <div style={{ fontWeight: 800, color: '#a78bfa', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={15} />
              {lang === 'mm' ? 'ဖက်ဒရယ်စနစ်တွင် အဓိပ္ပာယ်နှင့် သမိုင်းဝင် အရေးပါမှု:' : 'Federal Significance:'}
            </div>
            {currentModel.significanceMm}
          </div>
        </div>

        {/* Right Card: Institutional Pillars (Courts, Police, Public Services) */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Scale size={18} color="#a78bfa" />
            {lang === 'mm' ? 'အုပ်ချုပ်ရေး ယန္တရား မဏ္ဍိုင်များ' : 'Institutional Governance Pillars'}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {currentModel.governancePillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '14px',
                  border: '1px solid var(--border-color)',
                  padding: '18px'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 800,
                  fontSize: '15px',
                  color: 'var(--accent-purple)',
                  marginBottom: '8px'
                }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  {lang === 'mm' ? pillar.titleMm : pillar.titleEn}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-subtle)', lineHeight: 1.6, margin: 0 }}>
                  {pillar.descMm}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
