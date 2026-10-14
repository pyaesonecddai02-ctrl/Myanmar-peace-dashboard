import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Shield, MapPin, Award, Users, Calendar, Flag, BookOpen, AlertCircle } from 'lucide-react';

export const EaoDetailModal = ({ eao, onClose }) => {
  const { lang } = useLanguage();

  if (!eao) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        width: '100%',
        maxWidth: '700px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Top Accent Strip */}
        <div style={{
          height: '6px',
          background: eao.flagColor || 'var(--accent-indigo)',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px'
        }} />

        {/* Modal Header */}
        <div style={{
          padding: '24px 28px 16px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--accent-blue)',
                letterSpacing: '0.5px'
              }}>
                {lang === 'mm' ? 'တိုင်းရင်းသားလက်နက်ကိုင် အဖွဲ့အစည်း ကိုယ်ရေးမှတ်တမ်း' : 'Ethnic Armed Organization Dossier'}
              </span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              {eao.acronym}
            </h2>
            <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-muted)' }}>
              {lang === 'mm' ? eao.nameMm : eao.nameEn}
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Quick Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            background: 'var(--bg-secondary)',
            padding: '16px',
            borderRadius: '12px'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'စတင်တည်ထောင်' : 'Established'}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)' }}>
                {eao.establishedYear}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'ခန့်မှန်းတပ်ဖွဲ့အင်အား' : 'Estimated Force'}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--accent-blue)' }}>
                {eao.troopStrength}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'အဓိက ဌာနချုပ်' : 'Headquarters'}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>
                {lang === 'mm' ? eao.headquartersMm : eao.headquarters}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                {lang === 'mm' ? 'NCA စာချုပ် ရပ်တည်ချက်' : 'NCA Status'}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#f59e0b' }}>
                {lang === 'mm' ? eao.ncaStatusMm : eao.ncaStatus}
              </div>
            </div>
          </div>

          {/* Wings & Leadership */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
              {lang === 'mm' ? 'ခေါင်းဆောင်မှုနှင့် နိုင်ငံရေး/စစ်ဘက်ဆိုင်ရာ တည်ဆောက်ပုံ' : 'Leadership & Organization Wings'}
            </h4>
            <div style={{ fontSize: '13px', lineHeight: 1.6, background: 'var(--bg-input)', padding: '12px 16px', borderRadius: '10px' }}>
              <div><strong>{lang === 'mm' ? 'နိုင်ငံရေး ဦးဆောင်အဖွဲ့ - ' : 'Political Wing: '}</strong>{lang === 'mm' ? eao.politicalWingMm : eao.politicalWingEn}</div>
              <div><strong>{lang === 'mm' ? 'စစ်ဘက်ဆိုင်ရာ တပ်မတော် - ' : 'Military Wing: '}</strong>{lang === 'mm' ? eao.militaryWingMm : eao.militaryWingEn}</div>
              <div style={{ marginTop: '4px' }}><strong>{lang === 'mm' ? 'အဓိက ခေါင်းဆောင်များ - ' : 'Leadership: '}</strong>{lang === 'mm' ? eao.leadershipMm : eao.leadership}</div>
            </div>
          </div>

          {/* Active Operating Regions */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', marginBottom: '8px' }}>
              {lang === 'mm' ? 'လှုပ်ရှားရာ တိုင်းနှင့် ပြည်နယ်များ' : 'Operating States & Frontiers'}
            </h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(lang === 'mm' ? eao.activeRegionsMm : eao.activeRegions).map((reg, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <MapPin size={13} color="var(--accent-indigo)" />
                  {reg}
                </span>
              ))}
            </div>
          </div>

          {/* Ideology & Political Goal */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', marginBottom: '6px' }}>
              {lang === 'mm' ? 'နိုင်ငံရေး ရည်မှန်းချက်နှင့် မူဝါဒ' : 'Political Ideology & Stance'}
            </h4>
            <div style={{
              padding: '12px 16px',
              borderRadius: '10px',
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              fontSize: '13px',
              color: 'var(--text-main)',
              fontWeight: 600
            }}>
              {lang === 'mm' ? eao.ideologyMm : eao.ideology}
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', marginBottom: '8px' }}>
              {lang === 'mm' ? 'သမိုင်းကြောင်းနှင့် မကြာသေးမီက စစ်ရေးလှုပ်ရှားမှုများ' : 'Historical Context & Operational Developments'}
            </h4>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              {lang === 'mm' ? eao.descriptionMm : eao.descriptionEn}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '16px 28px',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'flex-end',
          background: 'var(--bg-secondary)',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px'
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 20px',
              borderRadius: '10px',
              background: 'var(--accent-indigo)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '13px'
            }}
          >
            {lang === 'mm' ? 'ပိတ်မည်' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
