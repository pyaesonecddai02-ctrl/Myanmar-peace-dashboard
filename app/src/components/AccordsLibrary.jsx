import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ACCORDS_DATA } from '../data/peaceData';
import { FileText, CheckCircle2, BookOpen, Scale, ShieldCheck, Download, Share2, Info } from 'lucide-react';

export const AccordsLibrary = () => {
  const { lang } = useLanguage();
  const [selectedAccordId, setSelectedAccordId] = useState('panglong_1947');

  const currentAccord = ACCORDS_DATA.find(a => a.id === selectedAccordId) || ACCORDS_DATA[0];

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
          <BookOpen size={22} color="var(--accent-indigo)" />
          {lang === 'mm' ? 'ငြိမ်းချမ်းရေး စာချုပ်စာတမ်းများနှင့် ပဋိညာဉ်များ မော်ကွန်းတိုက်' : 'Peace Accords, Charters & Historical Documents Archive'}
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
          {lang === 'mm'
            ? 'မြန်မာနိုင်ငံ၏ သမိုင်းဝင် ပင်လုံစာချုပ်၊ ၂၀၁၅ NCA၊ ၂၀၂၁ ဖက်ဒရယ်ဒီမိုကရေစီ ပဋိညာဉ်နှင့် ဟိုင်ဂင် သဘောတူညီချက်များ၏ အခြေခံမူများကို လေ့လာနိုင်ပါသည်'
            : 'Explore foundational texts, core constitutional principles, signatory lists, and contemporary legal status of Myanmar\'s peace accords.'}
        </p>
      </div>

      {/* Accords Navigation Tabs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '12px'
      }}>
        {ACCORDS_DATA.map(accord => {
          const isSelected = selectedAccordId === accord.id;
          return (
            <div
              key={accord.id}
              onClick={() => setSelectedAccordId(accord.id)}
              style={{
                padding: '16px 18px',
                borderRadius: '12px',
                background: isSelected ? 'var(--accent-indigo)' : 'var(--bg-card)',
                color: isSelected ? '#ffffff' : 'var(--text-main)',
                border: isSelected ? '1px solid transparent' : '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  opacity: 0.85,
                  textTransform: 'uppercase'
                }}>
                  {accord.signDate}
                </span>
                <FileText size={16} opacity={0.8} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700 }}>
                {lang === 'mm' ? accord.titleMm : accord.titleEn}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Selected Accord Deep-Dive Document Reader */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '18px',
        border: '1px solid var(--border-color)',
        padding: '32px',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {/* Document Header */}
        <div style={{
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--accent-blue)',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '6px'
            }}>
              {lang === 'mm' ? 'စာချုပ်စာတမ်း အချက်အလက်' : 'Official Accord Dossier'}
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              {lang === 'mm' ? currentAccord.titleMm : currentAccord.titleEn}
            </h1>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              <strong>{lang === 'mm' ? 'ရက်စွဲ - ' : 'Date: '}</strong>{currentAccord.signDate} • <strong>{lang === 'mm' ? 'နေရာ - ' : 'Location: '}</strong>{currentAccord.signLocation}
            </div>
          </div>

          <div style={{
            padding: '8px 16px',
            borderRadius: '10px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent-indigo)'
          }}>
            <Scale size={16} />
            {lang === 'mm' ? 'တရားဝင် သဘောတူညီချက်' : 'Document Dossier'}
          </div>
        </div>

        {/* Signatories & Stakeholders */}
        <div style={{
          background: 'var(--bg-secondary)',
          borderRadius: '12px',
          padding: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
            {lang === 'mm' ? 'လက်မှတ်ရေးထိုးသူများနှင့် ကိုယ်စားလှယ်များ' : 'Key Signatories & Witness Parties'}
          </h4>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-main)' }}>
            {currentAccord.signatories}
          </p>
        </div>

        {/* Core Principles & Key Clauses */}
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="var(--accent-emerald)" />
            {lang === 'mm' ? 'အဓိက သဘောတူညီချက်များနှင့် အခြေခံမူများ' : 'Core Provisions & Foundational Principles'}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(lang === 'mm' ? currentAccord.corePrinciplesMm : currentAccord.corePrinciplesEn).map((principle, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{
                  minWidth: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--accent-indigo)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginTop: '2px'
                }}>
                  {idx + 1}
                </div>
                <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-main)' }}>
                  {principle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Legal & Political Status Analysis */}
        <div style={{
          padding: '18px 20px',
          borderRadius: '12px',
          background: 'rgba(234, 179, 8, 0.08)',
          border: '1px solid rgba(234, 179, 8, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-amber)', fontWeight: 700, fontSize: '13px' }}>
            <Info size={16} />
            {lang === 'mm' ? 'လက်ရှိ နိုင်ငံရေးနှင့် ဥပဒေရေးရာ အခြေအနေ သုံးသပ်ချက်' : 'Contemporary Legal & Political Status'}
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {lang === 'mm' ? currentAccord.statusMm : currentAccord.statusEn}
          </p>
        </div>
      </div>
    </div>
  );
};
