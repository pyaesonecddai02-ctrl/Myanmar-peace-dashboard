import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STAKEHOLDER_MATRIX } from '../data/peaceData';
import { Scale, Shield, Landmark, Users, Globe, ChevronRight } from 'lucide-react';

export const StakeholderMatrix = () => {
  const { lang } = useLanguage();
  const [selectedTopicId, setSelectedTopicId] = useState('federal_army');

  const currentTopic = STAKEHOLDER_MATRIX.find(t => t.id === selectedTopicId) || STAKEHOLDER_MATRIX[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Scale size={22} color="var(--accent-indigo)" />
          {lang === 'mm' ? 'ငြိမ်းချမ်းရေး သဘောထားနှင့် မူဝါဒ ရှုထောင့်များ နှိုင်းယှဉ်ချက်' : 'Multi-Stakeholder Policy & Peace Position Matrix'}
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
          {lang === 'mm'
            ? 'ဖက်ဒရယ်တပ်မတော်၊ ဖွဲ့စည်းပုံအခြေခံဥပဒေ၊ သယံဇာတခွဲဝေမှုနှင့် တရားမျှတမှုဆိုင်ရာ ကိစ္စများတွင် စစ်ကောင်စီ၊ NUG၊ တိုင်းရင်းသားတပ်ဖွဲ့များနှင့် နိုင်ငံတကာ၏ သဘောထားများကို နှိုင်းယှဉ်လေ့လာနိုင်ပါသည်'
            : 'Compare strategic positions of the Military Regime (SAC), National Unity Government (NUG), Ethnic Armed Organizations (EAOs), and International Mediators on core constitutional issues.'}
        </p>
      </div>

      {/* Topic Switcher Pills */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {STAKEHOLDER_MATRIX.map(topic => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopicId(topic.id)}
            style={{
              padding: '10px 18px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 700,
              background: selectedTopicId === topic.id ? 'var(--accent-indigo)' : 'var(--bg-card)',
              color: selectedTopicId === topic.id ? '#ffffff' : 'var(--text-muted)',
              border: selectedTopicId === topic.id ? '1px solid transparent' : '1px solid var(--border-color)',
              boxShadow: selectedTopicId === topic.id ? 'var(--shadow-md)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            {lang === 'mm' ? topic.topicMm : topic.topicEn}
          </button>
        ))}
      </div>

      {/* Side-by-Side 4-Column Perspective Matrix */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {/* Column 1: SAC / Military */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#ef4444' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171' }}>
              <Shield size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800 }}>
                {lang === 'mm' ? 'စစ်ကောင်စီ / တပ်မတော်' : 'SAC / Myanmar Military'}
              </h3>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                {lang === 'mm' ? 'ဗဟိုချုပ်ကိုင်မှုနှင့် ၂၀၀၈ မူဝါဒ' : 'Unitary 2008 Framework'}
              </div>
            </div>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
            {lang === 'mm' ? currentTopic.sacPositionMm : currentTopic.sacPositionEn}
          </p>
        </div>

        {/* Column 2: NUG / CRPH / Spring Revolution */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#3b82f6' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
              <Landmark size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800 }}>
                {lang === 'mm' ? 'NUG / CRPH / နွေဦးတော်လှန်ရေး' : 'NUG / CRPH / Spring Revolution'}
              </h3>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                {lang === 'mm' ? 'ဖက်ဒရယ်ဒီမိုကရေစီ ပဋိညာဉ်' : 'Federal Democratic Charter'}
              </div>
            </div>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
            {lang === 'mm' ? currentTopic.nugPositionMm : currentTopic.nugPositionEn}
          </p>
        </div>

        {/* Column 3: Ethnic Armed Organizations */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#10b981' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
              <Users size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800 }}>
                {lang === 'mm' ? 'တိုင်းရင်းသားတပ်ဖွဲ့များ (EAOs)' : 'Ethnic Armed Organizations'}
              </h3>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                {lang === 'mm' ? 'ကိုယ်ပိုင်ပြဋ္ဌာန်းခွင့်နှင့် ပြည်နယ်တပ်ဖွဲ့' : 'Self-Determination & State Rights'}
              </div>
            </div>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
            {lang === 'mm' ? currentTopic.eaoPositionMm : currentTopic.eaoPositionEn}
          </p>
        </div>

        {/* Column 4: International Actors */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#a855f7' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
              <Globe size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800 }}>
                {lang === 'mm' ? 'နိုင်ငံတကာ အသိုင်းအဝိုင်း' : 'International Actors (UN / PRC / ASEAN)'}
              </h3>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                {lang === 'mm' ? 'နယ်စပ်တည်ငြိမ်ရေးနှင့် လူ့အခွင့်အရေး' : 'Border Stability & Human Rights'}
              </div>
            </div>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
            {lang === 'mm' ? currentTopic.internationalPositionMm : currentTopic.internationalPositionEn}
          </p>
        </div>
      </div>
    </div>
  );
};
