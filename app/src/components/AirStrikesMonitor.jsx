import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AIR_STRIKES_DATA } from '../data/peaceData';
import {
  Plane,
  AlertTriangle,
  Flame,
  Building2,
  Crosshair,
  ShieldAlert,
  Skull,
  Radio,
  FileWarning,
  Activity
} from 'lucide-react';

export const AirStrikesMonitor = () => {
  const { lang } = useLanguage();
  const [selectedIncident, setSelectedIncident] = useState(AIR_STRIKES_DATA.notableMassacres[0].id);

  const activeIncident = AIR_STRIKES_DATA.notableMassacres.find(i => i.id === selectedIncident) || AIR_STRIKES_DATA.notableMassacres[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
        borderRadius: '24px',
        padding: '32px',
        border: '1px solid rgba(220, 38, 38, 0.4)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 25px rgba(220, 38, 38, 0.15)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '20px',
            background: 'rgba(220, 38, 38, 0.2)',
            border: '1px solid rgba(220, 38, 38, 0.4)',
            color: '#f87171',
            fontSize: '12px',
            fontWeight: 800
          }}>
            <Plane size={14} />
            {lang === 'mm' ? 'လေကြောင်းတိုက်ခိုက်မှုနှင့် စစ်ရာဇဝတ်မှု စောင့်ကြည့်ရေး' : 'AERIAL WARFARE & WAR CRIMES MONITOR'}
          </span>
          <span style={{
            padding: '4px 10px',
            borderRadius: '20px',
            background: 'var(--bg-secondary)',
            color: 'var(--text-muted)',
            fontSize: '11px',
            fontWeight: 600
          }}>
            2021 - 2026 Comprehensive Dataset
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(24px, 3.5vw, 32px)',
          fontWeight: 900,
          color: '#f8fafc',
          marginBottom: '10px'
        }}>
          {lang === 'mm' ? 'စစ်ကောင်စီ၏ လေကြောင်းတိုက်ခိုက်မှုနှင့် အရပ်သားထိခိုက်မှု ဒေတာ' : 'SAC Airstrikes, Jet Fleet & Civilian Casualties Monitor'}
        </h1>

        <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '920px' }}>
          {lang === 'mm'
            ? 'စစ်မြေပြင်တွင် မြေပြင်တပ်များ ဆက်တိုက်အရေးနိမ့်နေသော စစ်ကောင်စီသည် အရပ်သားကျေးရွာများ၊ စာသင်ကျောင်းများ၊ ဆေးရုံများနှင့် ဘာသာရေးအဆောက်အအုံများအပေါ် လေကြောင်းမှ ပေါင် ၅၀၀ ဗုံးများနှင့် အဆိပ်ငွေ့/ပဒေသာဗုံးများဖြင့် အကြမ်းဖက်တိုက်ခိုက်လျက်ရှိပါသည်။'
            : 'Failing on ground battlefields, the military junta relies increasingly on indiscriminate airstrikes against civilian populations, dropping 500lb unguided and thermobaric bombs on schools, clinics, and churches.'}
        </p>

        {/* 4 Casualty & Strike Metric Counters */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '14px',
          marginTop: '24px'
        }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
              {lang === 'mm' ? 'လေကြောင်းတိုက်ခိုက်မှု အကြိမ်ရေ' : 'Total Recorded Strikes'}
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#ef4444' }}>
              {lang === 'mm' ? AIR_STRIKES_DATA.totalAirStrikesMm : AIR_STRIKES_DATA.totalAirStrikes}
            </div>
            <div style={{ fontSize: '11px', color: '#f87171', marginTop: '2px' }}>
              {lang === 'mm' ? AIR_STRIKES_DATA.bombsDroppedMm : `${AIR_STRIKES_DATA.bombsDropped} bombs dropped`}
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
              {lang === 'mm' ? 'အရပ်သား သေဆုံးမှု' : 'Civilian Fatalities'}
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#f87171' }}>
              {lang === 'mm' ? AIR_STRIKES_DATA.civilianFatalitiesMm : AIR_STRIKES_DATA.civilianFatalities}
            </div>
            <div style={{ fontSize: '11px', color: '#fca5a5', marginTop: '2px' }}>
              {lang === 'mm' ? AIR_STRIKES_DATA.civilianInjuredMm : `${AIR_STRIKES_DATA.civilianInjured} injured`}
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
              {lang === 'mm' ? 'ဖျက်ဆီးခံရသည့် စာသင်ကျောင်း' : 'Schools Bombed'}
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#f59e0b' }}>
              {AIR_STRIKES_DATA.schoolsDestroyed} <span style={{ fontSize: '13px' }}>{lang === 'mm' ? 'ကျောင်း' : 'facilities'}</span>
            </div>
            <div style={{ fontSize: '11px', color: '#fde68a', marginTop: '2px' }}>
              Direct violations of Geneva Conventions
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
              {lang === 'mm' ? 'ဆေးရုံနှင့် ဘာသာရေးနေရာ' : 'Hospitals & Religious Sites'}
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#38bdf8' }}>
              {AIR_STRIKES_DATA.hospitalsDestroyed + AIR_STRIKES_DATA.religiousBuildingsDestroyed} <span style={{ fontSize: '13px' }}>{lang === 'mm' ? 'ခု' : 'sites'}</span>
            </div>
            <div style={{ fontSize: '11px', color: '#bae6fd', marginTop: '2px' }}>
              {lang === 'mm' ? `ဆေးရုံ ${AIR_STRIKES_DATA.hospitalsDestroyed} ရုံ၊ ဘုရားကျောင်း/ဘုန်းကြီးကျောင်း ${AIR_STRIKES_DATA.religiousBuildingsDestroyed} ကျောင်း` : `${AIR_STRIKES_DATA.hospitalsDestroyed} hospitals, ${AIR_STRIKES_DATA.religiousBuildingsDestroyed} shrines/churches`}
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Notable Massacres & Aircraft Fleet */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))', gap: '24px' }}>
        
        {/* Left Card: High-Profile Massacres */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#f87171', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Skull size={18} />
            {lang === 'mm' ? 'အထင်ကရ လူအစုလိုက်အပြုံလိုက် ဗုံးကြဲသတ်ဖြတ်မှုများ' : 'Documented Aerial Massacres'}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {AIR_STRIKES_DATA.notableMassacres.map((m) => {
              const isSelected = selectedIncident === m.id;

              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedIncident(m.id)}
                  style={{
                    background: isSelected ? 'rgba(239, 68, 68, 0.1)' : 'var(--bg-secondary)',
                    borderRadius: '14px',
                    border: `1px solid ${isSelected ? '#ef4444' : 'var(--border-color)'}`,
                    padding: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <div style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-main)' }}>
                      {lang === 'mm' ? m.locationMm : m.locationEn}
                    </div>
                    <span style={{
                      padding: '3px 8px',
                      borderRadius: '8px',
                      background: 'rgba(239, 68, 68, 0.2)',
                      color: '#f87171',
                      fontSize: '11px',
                      fontWeight: 700
                    }}>
                      {lang === 'mm' ? m.dateMm : m.date}
                    </span>
                  </div>

                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ef4444', marginBottom: '6px' }}>
                    {lang === 'mm' ? `ထိခိုက်သေဆုံးမှု: ${m.casualtiesMm}` : `Casualties: ${m.casualtiesEn}`}
                  </div>

                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    <strong>{lang === 'mm' ? 'အသုံးပြုခဲ့သော လက်နက်: ' : 'Weapon Used: '}</strong>
                    {lang === 'mm' ? m.weaponUsedMm : m.weaponUsedEn}
                  </div>

                  <div style={{
                    fontSize: '12px',
                    color: 'var(--text-subtle)',
                    lineHeight: 1.6,
                    paddingTop: '8px',
                    borderTop: '1px dashed var(--border-color)'
                  }}>
                    {m.detailsMm}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Card: Aircraft Fleet & Military Airbases */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio size={18} color="var(--accent-blue)" />
            {lang === 'mm' ? 'စစ်ကောင်စီ၏ တိုက်ခိုက်ရေး လေယာဉ်တပ်ဖွဲ့များ' : 'Junta Air Strike Fleets & Supply Lines'}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {AIR_STRIKES_DATA.aircraftFleet.map((fleet, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '14px',
                  border: '1px solid var(--border-color)',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ fontWeight: 800, fontSize: '15px', color: 'var(--accent-blue)' }}>
                    {fleet.model}
                  </div>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '6px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    fontSize: '11px',
                    color: 'var(--text-muted)'
                  }}>
                    Origin: {fleet.origin}
                  </span>
                </div>

                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
                  {lang === 'mm' ? fleet.roleMm : fleet.roleEn}
                </div>

                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  <strong>{lang === 'mm' ? 'အဓိက တိုက်ခိုက်ထွက်ခွာရာ လေတပ်စခန်းများ: ' : 'Operating Airbases: '}</strong>
                  <span style={{ color: 'var(--text-subtle)' }}>{lang === 'mm' ? fleet.basesMm : fleet.bases}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Jet Fuel Sanctions Warning Box */}
          <div style={{
            background: 'rgba(234, 179, 8, 0.08)',
            border: '1px solid rgba(234, 179, 8, 0.25)',
            borderRadius: '14px',
            padding: '16px',
            fontSize: '12px',
            lineHeight: 1.6,
            color: 'var(--text-main)'
          }}>
            <div style={{ fontWeight: 800, color: '#eab308', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <AlertTriangle size={15} />
              {lang === 'mm' ? 'လေယာဉ်ဆီ ပိတ်ဆို့အရေးယူရေး အရေးတကြီး လိုအပ်ချက်:' : 'Aviation Fuel Sanctions Urgent Campaign:'}
            </div>
            {lang === 'mm'
              ? 'Amnesty International နှင့် Justice For Myanmar တို့၏ စုံစမ်းတွေ့ရှိချက်အရ စစ်ကောင်စီသည် လေကြောင်းတိုက်ခိုက်မှုများ ပြုလုပ်နိုင်ရန် နိုင်ငံတကာမှ လေယာဉ်ဆီ (Aviation Fuel) တင်သွင်းမှုအပေါ် မှီခိုနေရသဖြင့် လေယာဉ်ဆီ ပိတ်ဆို့ဖြတ်တောက်ရေးသည် အရပ်သားများအား ကာကွယ်နိုင်မည့် အထိရောက်ဆုံး နည်းလမ်း ဖြစ်သည်။'
              : 'Civilian protection depends heavily on global bans cutting off aviation fuel supplies and dual-use spare parts sustaining the junta’s airstrike campaign.'}
          </div>
        </div>

      </div>
    </div>
  );
};
