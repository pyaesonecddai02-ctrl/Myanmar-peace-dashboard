import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BarChart3, PieChart, Users, AlertTriangle, ShieldCheck } from 'lucide-react';

export const AnalyticsCharts = () => {
  const { lang } = useLanguage();

  // Data for IDPs by Region in thousands (approximate)
  const idpData = [
    { nameEn: 'Sagaing', nameMm: 'စစ်ကိုင်း', count: 1200, label: '1.2M', color: '#ef4444' },
    { nameEn: 'Rakhine', nameMm: 'ရခိုင်', count: 350, label: '350K', color: '#dc2626' },
    { nameEn: 'Magway', nameMm: 'မကွေး', count: 290, label: '290K', color: '#ea580c' },
    { nameEn: 'Kayin', nameMm: 'ကရင်', count: 280, label: '280K', color: '#f97316' },
    { nameEn: 'Shan (N/S)', nameMm: 'ရှမ်း', count: 360, label: '360K', color: '#f59e0b' },
    { nameEn: 'Kayah', nameMm: 'ကယား', count: 200, label: '200K', color: '#e11d48' },
    { nameEn: 'Bago', nameMm: 'ပဲခူး', count: 160, label: '160K', color: '#d97706' },
    { nameEn: 'Kachin', nameMm: 'ကချင်', count: 150, label: '150K', color: '#059669' },
    { nameEn: 'Chin', nameMm: 'ချင်း', count: 130, label: '130K', color: '#0284c7' }
  ];

  // EAO Alignment Breakdown
  const eaoBreakdown = [
    { labelEn: 'Federal Revolutionary Alliance (K3C)', labelMm: 'ဖက်ဒရယ်တော်လှန်ရေးမဟာမိတ်', percent: 35, color: '#3b82f6', count: '5 EAOs (~50K troops)' },
    { labelEn: 'Three Brotherhood Alliance (3BHA)', labelMm: 'ညီနောင်မဟာမိတ် ၃ ဖွဲ့', percent: 30, color: '#ef4444', count: '3 EAOs (~55K troops)' },
    { labelEn: 'FPNCC & Autonomous Enclaves', labelMm: 'FPNCC နှင့် ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရ', percent: 20, color: '#a855f7', count: '3 EAOs (~45K troops)' },
    { labelEn: 'NCA Dialogue / Ceasefire Residual', labelMm: 'NCA ဆွေးနွေးဆဲ အဖွဲ့များ', percent: 10, color: '#eab308', count: '4 EAOs (~15K troops)' },
    { labelEn: 'Autonomous / Paramilitary Split', labelMm: 'သီးခြားရပ်တည် / ခွဲထွက်တပ်ဖွဲ့များ', percent: 5, color: '#64748b', count: '3 EAOs (~15K troops)' }
  ];

  const maxIdp = Math.max(...idpData.map(d => d.count));

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
          <BarChart3 size={22} color="var(--accent-indigo)" />
          {lang === 'mm' ? 'ပဋိပက္ခနှင့် လူသားချင်းစာနာထောက်ထားမှုဆိုင်ရာ စာရင်းအင်း ဂရပ်များ' : 'Conflict Intensity & Humanitarian Analytics'}
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
          {lang === 'mm'
            ? 'တိုင်းနှင့် ပြည်နယ်အလိုက် စစ်ဘေးရှောင် (IDP) ဖြန့်ကြက်မှုနှင့် တိုင်းရင်းသားလက်နက်ကိုင်များ၏ အင်အားချိန်ခွင်လျှာ ဂရပ်များ'
            : 'Visualizing regional civilian displacement, military balance of power, and alliance distributions across Myanmar.'}
        </p>
      </div>

      {/* Grid of Charts */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {/* Chart 1: Regional IDP Distribution (Bar Chart) */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>
              {lang === 'mm' ? 'တိုင်းနှင့် ပြည်နယ်အလိုက် စစ်ဘေးရှောင်ဦးရေ (IDPs)' : 'Internally Displaced Persons (IDPs) by Region'}
            </h3>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {lang === 'mm' ? 'စုစုပေါင်း ၃.၅ သန်းကျော် (ကုလသမဂ္ဂနှင့် ဒေသတွင်း အစီရင်ခံစာများ)' : 'Estimated 3.5M+ total nationwide displacement'}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {idpData.map((item, idx) => {
              const widthPct = Math.round((item.count / maxIdp) * 100);
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600 }}>
                    <span>{lang === 'mm' ? item.nameMm : item.nameEn}</span>
                    <span style={{ color: item.color, fontWeight: 700 }}>{item.label}</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '10px',
                    borderRadius: '5px',
                    background: 'var(--bg-secondary)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${widthPct}%`,
                      height: '100%',
                      borderRadius: '5px',
                      background: item.color,
                      transition: 'width 0.6s ease'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chart 2: Strategic Alliance Distribution */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>
              {lang === 'mm' ? 'တိုင်းရင်းသားတပ်ဖွဲ့များ မဟာမိတ်အင်အား အချိုးအစား' : 'Strategic Alliance Formations & Force Share'}
            </h3>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {lang === 'mm' ? 'စုစုပေါင်း ခန့်မှန်းတပ်ဖွဲ့ဝင် ၁၇၅,၀၀၀+ ၏ ဖြန့်ကြက်မှု' : 'Proportional distribution across ~175,000+ active troops'}
            </div>
          </div>

          {/* Segmented Bar */}
          <div style={{
            width: '100%',
            height: '24px',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex'
          }}>
            {eaoBreakdown.map((seg, idx) => (
              <div
                key={idx}
                style={{
                  width: `${seg.percent}%`,
                  height: '100%',
                  background: seg.color
                }}
                title={`${seg.labelEn}: ${seg.percent}%`}
              />
            ))}
          </div>

          {/* Legend Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {eaoBreakdown.map((seg, idx) => (
              <div
                key={idx}
                style={{
                  padding: '10px 12px',
                  borderRadius: '10px',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: seg.color }} />
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>
                      {lang === 'mm' ? seg.labelMm : seg.labelEn}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                      {seg.count}
                    </div>
                  </div>
                </div>
                <div style={{ fontWeight: 800, color: seg.color, fontSize: '14px' }}>
                  {seg.percent}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
