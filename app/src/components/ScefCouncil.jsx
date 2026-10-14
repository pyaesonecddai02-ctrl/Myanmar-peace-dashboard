import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SCEF_DATA } from '../data/peaceData';
import { Shield, Users, Landmark, Award, CheckCircle2, ChevronRight, Scale, Globe, Target, Flame, Sparkles } from 'lucide-react';

export const ScefCouncil = ({ onSelectEao }) => {
  const { lang } = useLanguage();
  const [selectedPillarId, setSelectedPillarId] = useState('pillar_eros');

  const activePillar = SCEF_DATA.threePillars.find(p => p.id === selectedPillarId) || SCEF_DATA.threePillars[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Grand Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(15, 23, 42, 0.98) 100%)',
        borderRadius: '24px',
        padding: '36px 32px',
        border: '1px solid rgba(99, 102, 241, 0.35)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background glow */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '960px' }}>
          {/* Top Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: '20px',
              background: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              color: 'var(--accent-blue)',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.6px'
            }}>
              <Sparkles size={14} />
              {lang === 'mm' ? 'အမြင့်ဆုံး မဟာမိတ် ဦးဆောင်မှုကောင်စီ' : 'HIGHEST RESISTANCE COALITION BODY'}
            </span>

            <span style={{
              padding: '5px 12px',
              borderRadius: '20px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '12px',
              fontWeight: 700
            }}>
              {lang === 'mm' ? `ဖွဲ့စည်းသည့်နေ့ - ${SCEF_DATA.formationDateMm}` : `Formed: ${SCEF_DATA.formationDate}`}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(26px, 4vw, 36px)',
            fontWeight: 900,
            lineHeight: 1.25,
            color: '#f8fafc',
            marginBottom: '12px',
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.5px'
          }}>
            {lang === 'mm' ? SCEF_DATA.fullNameMm : SCEF_DATA.fullNameEn}
          </h1>

          <p style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: '#cbd5e1',
            marginBottom: '24px'
          }}>
            {lang === 'mm' ? SCEF_DATA.significanceMm : SCEF_DATA.significanceEn}
          </p>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            background: 'rgba(15, 23, 42, 0.7)',
            padding: '16px 20px',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'အခြေခံ မဏ္ဍိုင်ကြီးများ' : 'Core Pillars'}
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#38bdf8' }}>
                3 {lang === 'mm' ? 'ရပ်' : 'Pillars'}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'ပူးပေါင်းတည်ထောင်သည့် အင်အားစုများ' : 'Founding Coalitions'}
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#10b981' }}>
                {SCEF_DATA.foundingMembers.length} {lang === 'mm' ? 'ဖွဲ့' : 'Key Stakeholders'}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'စစ်ရေးကွပ်ကဲမှု ကော်မတီ' : 'Military Command'}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#facc15' }}>
                {lang === 'mm' ? 'JMSCC စစ်မဟာဗျူဟာ' : 'JMSCC Joint Committee'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 3 Core Pillars (မဏ္ဍိုင် ၃ ရပ်) Interactive Section */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        padding: '28px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Scale size={22} color="var(--accent-indigo)" />
            {lang === 'mm' ? 'SCEF ဖွဲ့စည်းပုံ၏ အခြေခံ မဏ္ဍိုင်ကြီး (၃) ရပ်' : 'The Three Structural Pillars of SCEF'}
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            {lang === 'mm'
              ? 'တိုင်းရင်းသားလူမျိုးများ၊ ပြည်သူလူထုနှင့် အမျိုးသမီးထုတို့၏ အခန်းကဏ္ဍကို ဟန်ချက်ညီညီ ပေါင်းစပ်ဖွဲ့စည်းထားသော မဏ္ဍိုင်များ'
              : 'Tripartite balance of power ensuring ethnic self-determination, democratic civilian mandate, and gender equity.'}
          </p>
        </div>

        {/* Pillars Switcher Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px'
        }}>
          {SCEF_DATA.threePillars.map(pillar => {
            const isSelected = selectedPillarId === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                style={{
                  padding: '18px 20px',
                  borderRadius: '14px',
                  background: isSelected ? 'var(--bg-secondary)' : 'var(--bg-input)',
                  border: isSelected ? `2px solid ${pillar.color}` : '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? `0 0 16px ${pillar.color}25` : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: pillar.color,
                    boxShadow: `0 0 8px ${pillar.color}`
                  }} />
                  <span style={{ fontSize: '11px', fontWeight: 800, color: pillar.color, textTransform: 'uppercase' }}>
                    {isSelected ? (lang === 'mm' ? 'လက်ရှိ ရွေးချယ်ထား' : 'SELECTED') : ''}
                  </span>
                </div>

                <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>
                  {lang === 'mm' ? pillar.titleMm : pillar.titleEn}
                </h3>

                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {lang === 'mm' ? pillar.descriptionMm : pillar.descriptionEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Founding Member Organizations Grid */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        padding: '28px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Users size={22} color="var(--accent-blue)" />
            {lang === 'mm' ? 'SCEF တွင် ပူးပေါင်းပါဝင်သော အဓိက အင်အားစုများ' : 'Founding Stakeholders & ERO Partners'}
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            {lang === 'mm'
              ? 'နွေဦးတော်လှန်ရေးနှင့် တိုင်းရင်းသားလွတ်မြောက်ရေး တိုက်ပွဲများ၏ အဓိက ဦးဆောင်အဖွဲ့အစည်း ၆ ဖွဲ့'
              : 'The alliance unites executive democratic institutions with frontline ethnic armed resistance.'}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {SCEF_DATA.foundingMembers.map(member => (
            <div
              key={member.id}
              onClick={() => {
                if (onSelectEao && (member.id === 'kio' || member.id === 'knu' || member.id === 'knpp' || member.id === 'cnf')) {
                  // select EAO if applicable
                }
              }}
              style={{
                background: 'var(--bg-secondary)',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                padding: '18px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  padding: '8px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  color: 'var(--accent-indigo)'
                }}>
                  <Shield size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>
                    {lang === 'mm' ? member.nameMm : member.nameEn}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '4px' }}>
                {lang === 'mm' ? member.roleMm : member.roleEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Strategic Committees (စစ်မဟာဗျူဟာ ပေါင်းစပ်ညှိနှိုင်းရေး ကော်မတီ အပါအဝင်) */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        padding: '28px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Target size={22} color="var(--accent-rose)" />
            {lang === 'mm' ? 'SCEF ၏ အဓိက မဟာဗျူဟာ ကော်မတီကြီးများ' : 'Key Strategic Committees & Mandates'}
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            {lang === 'mm'
              ? 'စစ်ရေး၊ ဖက်ဒရယ်ဖွဲ့စည်းပုံနှင့် နိုင်ငံတကာသံတမန်ရေးကို တိုက်ရိုက်ကွပ်ကဲသော ကော်မတီများ'
              : 'Institutional operational arms directing joint military campaigns, constitutional drafting, and international representation.'}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {SCEF_DATA.keyCommittees.map((comm, idx) => (
            <div
              key={idx}
              style={{
                padding: '18px 22px',
                borderRadius: '14px',
                background: 'var(--bg-secondary)',
                borderLeft: idx === 0 ? '4px solid #ef4444' : (idx === 1 ? '4px solid #38bdf8' : '4px solid #10b981'),
                borderTop: '1px solid var(--border-color)',
                borderRight: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>
                {lang === 'mm' ? comm.nameMm : comm.nameEn}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {lang === 'mm' ? comm.dutyMm : comm.dutyEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Core Guiding Principles (အဓိက နိုင်ငံရေး လမ်းပြမူ ၆ ချက်) */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        padding: '28px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Award size={22} color="#facc15" />
            {lang === 'mm' ? 'SCEF ၏ အဓိက နိုင်ငံရေး ရည်မှန်းချက်နှင့် အခြေခံမူ (၆) ချက်' : 'Six Foundational Principles & Political Roadmap'}
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            {lang === 'mm'
              ? 'အနာဂတ် ဖက်ဒရယ်ဒီမိုကရေစီ ပြည်ထောင်စုသစ် ပေါ်ထွန်းရေးအတွက် မဖြစ်မနေ လိုက်နာရမည့် ဘုံသဘောတူညီချက်များ'
              : 'Non-negotiable constitutional tenets for the post-junta democratic transition.'}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {SCEF_DATA.corePrinciples.map(p => (
            <div
              key={p.id}
              style={{
                padding: '18px 20px',
                borderRadius: '14px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  minWidth: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'var(--accent-indigo)',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {p.id}
                </span>
                <h3 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.4 }}>
                  {lang === 'mm' ? p.titleMm : p.titleEn}
                </h3>
              </div>

              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5, paddingLeft: '36px' }}>
                {p.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
