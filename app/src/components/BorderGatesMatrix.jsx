import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BORDER_GATES_DATA } from '../data/peaceData';
import {
  Globe,
  Truck,
  ArrowRightLeft,
  ShieldCheck,
  ShieldAlert,
  AlertOctagon,
  TrendingDown,
  DollarSign,
  Compass,
  Filter
} from 'lucide-react';

export const BorderGatesMatrix = () => {
  const { lang } = useLanguage();
  const [selectedCountryFilter, setSelectedCountryFilter] = useState('all');
  const [selectedControlFilter, setSelectedControlFilter] = useState('all');

  const filteredGates = BORDER_GATES_DATA.filter((gate) => {
    if (selectedControlFilter !== 'all' && gate.controlGroup !== selectedControlFilter) {
      return false;
    }
    if (selectedCountryFilter !== 'all') {
      if (selectedCountryFilter === 'china' && !gate.borderCountry.toLowerCase().includes('china')) return false;
      if (selectedCountryFilter === 'thailand' && !gate.borderCountry.toLowerCase().includes('thailand')) return false;
      if (selectedCountryFilter === 'india' && !gate.borderCountry.toLowerCase().includes('india')) return false;
      if (selectedCountryFilter === 'bangladesh' && !gate.borderCountry.toLowerCase().includes('bangladesh')) return false;
    }
    return true;
  });

  const getControlBadge = (group, textMm, textEn) => {
    switch (group) {
      case 'resistance_ero':
        return {
          bg: 'rgba(16, 185, 129, 0.15)',
          border: 'rgba(16, 185, 129, 0.35)',
          color: '#10b981',
          label: lang === 'mm' ? textMm : textEn,
          icon: ShieldCheck
        };
      case 'contested':
        return {
          bg: 'rgba(245, 158, 11, 0.15)',
          border: 'rgba(245, 158, 11, 0.35)',
          color: '#f59e0b',
          label: lang === 'mm' ? textMm : textEn,
          icon: ArrowRightLeft
        };
      default:
        return {
          bg: 'rgba(239, 68, 68, 0.15)',
          border: 'rgba(239, 68, 68, 0.35)',
          color: '#ef4444',
          label: lang === 'mm' ? textMm : textEn,
          icon: ShieldAlert
        };
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
        borderRadius: '24px',
        padding: '32px',
        border: '1px solid rgba(56, 189, 248, 0.3)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '20px',
            background: 'rgba(56, 189, 248, 0.2)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            color: 'var(--accent-blue)',
            fontSize: '12px',
            fontWeight: 800
          }}>
            <Truck size={14} />
            {lang === 'mm' ? 'ပထဝီစီးပွားရေးနှင့် နယ်စပ်ကုန်သွယ်ရေး' : 'GEOECONOMICS & BORDER TRADE CORRIDORS'}
          </span>
          <span style={{
            padding: '4px 10px',
            borderRadius: '20px',
            background: 'var(--bg-secondary)',
            color: 'var(--text-muted)',
            fontSize: '11px',
            fontWeight: 600
          }}>
            10 Strategic Border Nodes
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(24px, 3.5vw, 32px)',
          fontWeight: 900,
          color: '#f8fafc',
          marginBottom: '10px'
        }}>
          {lang === 'mm' ? 'နယ်စပ်ကုန်သွယ်ရေးဂိတ်များနှင့် အကောက်ခွန်ထိန်းချုပ်မှု' : 'Border Trade Gates & Customs Control Matrix'}
        </h1>

        <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '920px' }}>
          {lang === 'mm'
            ? 'စစ်အာဏာသိမ်းမှု မတိုင်မီက တစ်နှစ်လျှင် အမေရိကန်ဒေါ်လာ ၁၀ ဘီလီယံနီးပါး ကုန်သွယ်ခဲ့သည့် နယ်စပ်ဂိတ်များအနက် ၇၀% ကျော်ကို တိုင်းရင်းသား တော်လှန်ရေးအင်အားစုများ (MNDAA, KNU, AA, Chinland) က ထိန်းချုပ် သိမ်းပိုက်ထားပြီး စစ်ကောင်စီ၏ အကောက်ခွန်ဝင်ငွေ လုံးဝနီးပါး ဆုံးရှုံးသွားခဲ့ပြီ ဖြစ်သည်။'
            : 'Over 70% of overland border gates—once generating nearly $10 billion annually—are now captured or paralyzed by resistance coalitions (MNDAA, KNU, AA, CNA), severing crucial foreign exchange customs revenue from the junta.'}
        </p>

        {/* 3 Metric Pills */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          marginTop: '24px'
        }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>
              {lang === 'mm' ? 'တော်လှန်ရေးတပ်များ ထိန်းချုပ်ဂိတ်' : 'Liberated by Resistance/EROs'}
            </div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#10b981' }}>
              6 / 10 <span style={{ fontSize: '14px', fontWeight: 600 }}>Gates</span>
            </div>
            <div style={{ fontSize: '11px', color: '#6ee7b7', marginTop: '2px' }}>
              Chinshwehaw, Htee Khee, Rhi, Maungdaw, Myawaddy, etc.
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>
              {lang === 'mm' ? 'စစ်ကောင်စီ လက်ကျန်ဂိတ်' : 'SAC Controlled Remnants'}
            </div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#ef4444' }}>
              2 / 10 <span style={{ fontSize: '14px', fontWeight: 600 }}>Gates</span>
            </div>
            <div style={{ fontSize: '11px', color: '#fca5a5', marginTop: '2px' }}>
              Tachileik & Kawthaung (under strict surveillance)
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>
              {lang === 'mm' ? 'စစ်ကောင်စီ နယ်စပ်အခွန် ဆုံးရှုံးမှု' : 'Junta Customs Revenue Loss'}
            </div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#f59e0b' }}>
              -75%+ <span style={{ fontSize: '14px', fontWeight: 600 }}>Drop</span>
            </div>
            <div style={{ fontSize: '11px', color: '#fde68a', marginTop: '2px' }}>
              Overland tariff revenue diverted to federal/local administration
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '16px 20px',
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '14px'
      }}>
        {/* Country Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Globe size={14} /> {lang === 'mm' ? 'နယ်စပ်နိုင်ငံ:' : 'Border Country:'}
          </span>
          {[
            { id: 'all', labelMm: 'အားလုံး', labelEn: 'All Borders' },
            { id: 'china', labelMm: 'တရုတ်', labelEn: 'China' },
            { id: 'thailand', labelMm: 'ထိုင်း', labelEn: 'Thailand' },
            { id: 'india', labelMm: 'အိန္ဒိယ', labelEn: 'India' },
            { id: 'bangladesh', labelMm: 'ဘင်္ဂလားဒေ့ရှ်', labelEn: 'Bangladesh' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCountryFilter(tab.id)}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                background: selectedCountryFilter === tab.id ? 'var(--accent-blue)' : 'var(--bg-secondary)',
                color: selectedCountryFilter === tab.id ? '#ffffff' : 'var(--text-main)',
                border: '1px solid var(--border-color)'
              }}
            >
              {lang === 'mm' ? tab.labelMm : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Control Status Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Filter size={14} /> {lang === 'mm' ? 'အခြေအနေ:' : 'Status:'}
          </span>
          {[
            { id: 'all', labelMm: 'အားလုံး', labelEn: 'All Status' },
            { id: 'resistance_ero', labelMm: 'လွတ်မြောက်/တိုင်းရင်းသား', labelEn: 'Liberated/ERO' },
            { id: 'contested', labelMm: 'အငြင်းပွား/တိုက်ပွဲဖြစ်', labelEn: 'Contested' },
            { id: 'sac', labelMm: 'စစ်ကောင်စီ', labelEn: 'SAC' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedControlFilter(tab.id)}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                background: selectedControlFilter === tab.id ? 'var(--accent-indigo)' : 'var(--bg-secondary)',
                color: selectedControlFilter === tab.id ? '#ffffff' : 'var(--text-main)',
                border: '1px solid var(--border-color)'
              }}
            >
              {lang === 'mm' ? tab.labelMm : tab.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Border Gates Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
        gap: '20px'
      }}>
        {filteredGates.map((gate) => {
          const badge = getControlBadge(gate.controlGroup, gate.currentControlMm, gate.currentControl);
          const BadgeIcon = badge.icon;

          return (
            <div
              key={gate.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '18px',
                border: '1px solid var(--border-color)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              {/* Top row: Gate name and Country */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
                    {lang === 'mm' ? gate.nameMm : gate.nameEn}
                  </h3>
                  <div style={{ fontSize: '12px', color: 'var(--accent-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Globe size={13} />
                    {lang === 'mm' ? gate.borderCountryMm : gate.borderCountry}
                  </div>
                </div>

                <div style={{
                  padding: '4px 10px',
                  borderRadius: '12px',
                  background: badge.bg,
                  border: `1px solid ${badge.border}`,
                  color: badge.color,
                  fontSize: '11px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  whiteSpace: 'nowrap'
                }}>
                  <BadgeIcon size={13} />
                  {badge.label}
                </div>
              </div>

              {/* Pre-coup Trade Metrics */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '10px',
                padding: '10px 14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '12px'
              }}>
                <span style={{ color: 'var(--text-muted)' }}>
                  {lang === 'mm' ? 'အာဏာမသိမ်းမီ နှစ်စဉ် ကုန်သွယ်မှု:' : 'Pre-Coup Annual Volume:'}
                </span>
                <span style={{ fontWeight: 800, color: 'var(--text-main)' }}>
                  {gate.preCoupTradeUsd}
                </span>
              </div>

              {/* Strategic Value Details */}
              <div style={{
                fontSize: '13px',
                color: 'var(--text-subtle)',
                lineHeight: 1.6,
                background: 'rgba(0, 0, 0, 0.1)',
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid var(--border-color)'
              }}>
                {lang === 'mm' ? gate.strategicValueMm : gate.strategicValue}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
