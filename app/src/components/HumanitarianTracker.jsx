import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HUMANITARIAN_DATA } from '../data/peaceData';
import {
  HeartHandshake,
  Home,
  AlertTriangle,
  Flame,
  Truck,
  Droplets,
  MapPin,
  TrendingDown,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const HumanitarianTracker = () => {
  const { lang } = useLanguage();
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [selectedCorridorId, setSelectedCorridorId] = useState(null);

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case 'extreme':
        return { bg: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 0.4)', text: '#ef4444', labelMm: 'အလွန့်အလွန် အရေးပေါ်', labelEn: 'Catastrophic' };
      case 'critical':
        return { bg: 'rgba(249, 115, 22, 0.2)', border: 'rgba(249, 115, 22, 0.4)', text: '#f97316', labelMm: 'အရေးပေါ် ပြင်းထန်', labelEn: 'Critical' };
      case 'high':
        return { bg: 'rgba(234, 179, 8, 0.2)', border: 'rgba(234, 179, 8, 0.4)', text: '#eab308', labelMm: 'မြင့်မား', labelEn: 'High' };
      default:
        return { bg: 'rgba(59, 130, 246, 0.2)', border: 'rgba(59, 130, 246, 0.4)', text: '#3b82f6', labelMm: 'သင့်တင့်', labelEn: 'Moderate' };
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
        borderRadius: '24px',
        padding: '32px',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(239, 68, 68, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '20px',
            background: 'rgba(239, 68, 68, 0.2)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            color: '#ef4444',
            fontSize: '12px',
            fontWeight: 800
          }}>
            <HeartHandshake size={14} />
            {lang === 'mm' ? 'လူသားချင်းစာနာမှု အကျပ်အတည်း စောင့်ကြည့်ရေး' : 'HUMANITARIAN & IDP CRISIS MONITOR'}
          </span>
          <span style={{
            padding: '4px 10px',
            borderRadius: '20px',
            background: 'var(--bg-secondary)',
            color: 'var(--text-muted)',
            fontSize: '11px',
            fontWeight: 600
          }}>
            Source: UN OCHA & Local CSOs 2026
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(24px, 3.5vw, 32px)',
          fontWeight: 900,
          color: '#f8fafc',
          marginBottom: '10px'
        }}>
          {lang === 'mm' ? 'စစ်ဘေးရှောင် (IDP) များနှင့် နယ်စပ်ဖြတ်ကျော် ကယ်ဆယ်ရေး လမ်းကြောင်းများ' : 'Displaced Persons (IDPs) & Cross-Border Relief Corridors'}
        </h1>

        <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '900px' }}>
          {lang === 'mm'
            ? '၂၀၂၁ ခုနှစ် စစ်အာဏာသိမ်းပြီးနောက်ပိုင်း စစ်ကောင်စီ၏ လေကြောင်းတိုက်ခိုက်မှုများနှင့် ကျေးရွာမီးရှို့စစ်ဆင်ရေးများကြောင့် ပြည်သူ ၃.၅ သန်းကျော် နေရပ်စွန့်ခွာ ထွက်ပြေးတိမ်းရှောင်နေရပြီး လူသားချင်းစာနာမှု အကူအညီများ အရေးတကြီး လိုအပ်နေပါသည်။'
            : 'Following the 2021 coup, military scorched-earth and air campaigns have displaced over 3.55 million civilians nationwide. Grassroots cross-border civil society networks provide the main humanitarian lifeline.'}
        </p>

        {/* 4 Quick Stat Counters */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '14px',
          marginTop: '24px'
        }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
              {lang === 'mm' ? 'စုစုပေါင်း စစ်ဘေးရှောင်ဦးရေ' : 'Total Displaced (IDPs)'}
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#ef4444' }}>
              {lang === 'mm' ? HUMANITARIAN_DATA.totalDisplacedMm : HUMANITARIAN_DATA.totalDisplaced}
            </div>
            <div style={{ fontSize: '11px', color: '#f87171', marginTop: '2px' }}>
              {lang === 'mm' ? HUMANITARIAN_DATA.postCoupDisplacedMm : `${HUMANITARIAN_DATA.postCoupDisplaced} post-coup`}
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
              {lang === 'mm' ? 'မီးရှို့ဖျက်ဆီးခံ နေအိမ်များ' : 'Civilian Homes Torched'}
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#f97316' }}>
              {lang === 'mm' ? HUMANITARIAN_DATA.civilianHomesTorchedMm : HUMANITARIAN_DATA.civilianHomesTorched}
            </div>
            <div style={{ fontSize: '11px', color: '#fb923c', marginTop: '2px' }}>
              {lang === 'mm' ? 'စစ်ကိုင်းတွင် ၆၂,၀၀၀ ကျော်' : 'Sagaing: 62K+ homes'}
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
              {lang === 'mm' ? 'ကုလရန်ပုံငွေ လိုအပ်ချက်' : 'UN Funding Target'}
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#38bdf8' }}>
              {HUMANITARIAN_DATA.fundingRequiredUsd}
            </div>
            <div style={{ fontSize: '11px', color: '#93c5fd', marginTop: '2px' }}>
              {lang === 'mm' ? '၂၉% သာ ရရှိသေးသည် (၇၁% လိုအပ်ချက်)' : 'Only 29% funded (71% gap)'}
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
              {lang === 'mm' ? 'ကယ်ဆယ်ရေး မဏ္ဍိုင်' : 'Primary Lifelines'}
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#10b981' }}>
              3 {lang === 'mm' ? 'လမ်းကြောင်း' : 'Corridors'}
            </div>
            <div style={{ fontSize: '11px', color: '#6ee7b7', marginTop: '2px' }}>
              {lang === 'mm' ? 'ထိုင်း၊ အိန္ဒိယ၊ တရုတ် နယ်စပ် CSOs' : 'Thai, India, China Cross-border'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Region Breakdown & Relief Corridors */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))', gap: '24px' }}>
        
        {/* Left Column: Region-by-Region IDP Crisis */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Home size={18} color="#ef4444" />
              {lang === 'mm' ? 'တိုင်းနှင့် ပြည်နယ်အလိုက် စစ်ဘေးရှောင်စာရင်း' : 'IDPs by State / Region'}
            </h2>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {HUMANITARIAN_DATA.regionBreakdown.length} {lang === 'mm' ? 'ဒေသ' : 'Regions'}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {HUMANITARIAN_DATA.regionBreakdown.map((r) => {
              const badge = getSeverityBadge(r.severity);
              const isSelected = selectedRegionId === r.id;
              const maxIdp = 1420000;
              const barPercent = Math.round((r.idpCount / maxIdp) * 100);

              return (
                <div
                  key={r.id}
                  onClick={() => setSelectedRegionId(isSelected ? null : r.id)}
                  style={{
                    background: isSelected ? 'rgba(239, 68, 68, 0.08)' : 'var(--bg-secondary)',
                    borderRadius: '12px',
                    border: `1px solid ${isSelected ? '#ef4444' : 'var(--border-color)'}`,
                    padding: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-main)' }}>
                        {lang === 'mm' ? r.regionMm : r.regionEn}
                      </div>
                      <div style={{ fontSize: '12px', color: '#f87171', fontWeight: 700, marginTop: '2px' }}>
                        {lang === 'mm' ? r.idpTextMm : `${r.idpTextEn} Displaced`}
                      </div>
                    </div>

                    <span style={{
                      padding: '3px 8px',
                      borderRadius: '12px',
                      background: badge.bg,
                      border: `1px solid ${badge.border}`,
                      color: badge.text,
                      fontSize: '11px',
                      fontWeight: 700
                    }}>
                      {lang === 'mm' ? badge.labelMm : badge.labelEn}
                    </span>
                  </div>

                  {/* Progress / Ratio Bar */}
                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: 'var(--bg-primary)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    marginBottom: '10px'
                  }}>
                    <div style={{
                      width: `${barPercent}%`,
                      height: '100%',
                      background: r.severity === 'extreme' ? '#ef4444' : r.severity === 'critical' ? '#f97316' : '#eab308',
                      borderRadius: '3px'
                    }} />
                  </div>

                  {/* Primary Needs Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {(lang === 'mm' ? r.primaryNeedsMm : r.primaryNeeds).map((need, idx) => (
                      <span key={idx} style={{
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        fontSize: '11px',
                        color: 'var(--text-muted)'
                      }}>
                        {need}
                      </span>
                    ))}
                  </div>

                  {isSelected && (
                    <div style={{
                      marginTop: '12px',
                      paddingTop: '10px',
                      borderTop: '1px dashed var(--border-color)',
                      fontSize: '12px',
                      color: 'var(--text-main)',
                      lineHeight: 1.6
                    }}>
                      <div style={{ color: '#ef4444', fontWeight: 700, marginBottom: '2px' }}>
                        {lang === 'mm' ? `မီးရှို့ခံရမှု: ${r.torchedVillages}` : `Torched villages: ${r.torchedVillages}`}
                      </div>
                      <div>{r.notesMm}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Cross-Border Humanitarian Corridors */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            padding: '24px'
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Truck size={18} color="#10b981" />
              {lang === 'mm' ? 'နယ်စပ်ဖြတ်ကျော် ကယ်ဆယ်ရေး လမ်းကြောင်းများ' : 'Cross-Border Humanitarian Corridors'}
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              {lang === 'mm'
                ? 'စစ်ကောင်စီ၏ တားမြစ်ပိတ်ပင်မှုများကြောင့် ဒေသခံအရပ်ဘက်လူမှုအဖွဲ့အစည်းများ (CSOs) က နယ်စပ်ဖြတ်ကျော် ရိက္ခာနှင့် ဆေးဝါးပို့ဆောင်နေသော အဓိက လမ်းကြောင်း ၃ ခု ဖြစ်ပါသည်။'
                : 'Overcoming junta blockades, local ethnic CSOs operate decentralized supply chains through neighboring borders.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {HUMANITARIAN_DATA.humanitarianCorridors.map((c) => (
                <div
                  key={c.id}
                  style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: '14px',
                    border: '1px solid var(--border-color)',
                    padding: '18px'
                  }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>
                    {lang === 'mm' ? c.nameMm : c.nameEn}
                  </div>

                  <div style={{ fontSize: '12px', color: 'var(--text-main)', marginBottom: '8px' }}>
                    <strong>{lang === 'mm' ? 'ဖြတ်သန်းရာ အဓိကဂိတ်များ: ' : 'Entry Nodes: '}</strong>
                    <span style={{ color: 'var(--text-muted)' }}>{lang === 'mm' ? c.entryPointsMm : c.entryPoints}</span>
                  </div>

                  <div style={{ fontSize: '12px', color: 'var(--text-main)', marginBottom: '8px' }}>
                    <strong>{lang === 'mm' ? 'အကူအညီပေးနေသည့် အဖွဲ့များ: ' : 'Key Actors: '}</strong>
                    <span style={{ color: 'var(--accent-blue)' }}>{lang === 'mm' ? c.actorsMm : c.actors}</span>
                  </div>

                  <div style={{
                    fontSize: '12px',
                    color: 'var(--text-subtle)',
                    background: 'var(--bg-card)',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)'
                  }}>
                    {lang === 'mm' ? c.capacityMm : c.capacity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Urgent Needs Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(249, 115, 22, 0.08) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            padding: '24px'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#f87171', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <AlertTriangle size={18} />
              {lang === 'mm' ? 'အရေးပေါ် လိုအပ်ချက် အချိုးအစားများ (Urgent Needs Gap)' : 'Priority Humanitarian Deficits'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>{lang === 'mm' ? 'အရေးပေါ် ခွဲစိတ်ဆေးဝါးနှင့် မြွေဆိပ်ဖြေဆေး' : 'Trauma Medicine & Antivenom'}</span>
                  <strong style={{ color: '#ef4444' }}>92% Critical</strong>
                </div>
                <div style={{ height: '6px', background: 'var(--bg-primary)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', background: '#ef4444' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>{lang === 'mm' ? 'စားနပ်ရိက္ခာ (ဆန်၊ ဆီ၊ ဆား)' : 'Emergency Food Rations'}</span>
                  <strong style={{ color: '#f97316' }}>88% Critical</strong>
                </div>
                <div style={{ height: '6px', background: 'var(--bg-primary)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '88%', height: '100%', background: '#f97316' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>{lang === 'mm' ? 'မိုးကာတဲများနှင့် ယာယီအမိုးအကာ' : 'Emergency Shelter & Tarps'}</span>
                  <strong style={{ color: '#eab308' }}>79% Deficit</strong>
                </div>
                <div style={{ height: '6px', background: 'var(--bg-primary)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '79%', height: '100%', background: '#eab308' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
