import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TIMELINE_EVENTS } from '../data/peaceData';
import { Clock, Calendar, CheckCircle, FileText, Swords, Globe, Flag, ChevronDown } from 'lucide-react';

export const TimelineView = () => {
  const { lang } = useLanguage();
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const eras = [
    { id: 'all', labelEn: 'All Eras (1947 - 2026)', labelMm: 'ခေတ်အားလုံး (၁၉၄၇ - ၂၀၂၆)' },
    { id: 'panglong', labelEn: 'Panglong Foundation (1947)', labelMm: 'သမိုင်းဝင် ပင်လုံခေတ် (၁၉၄၇)' },
    { id: 'early_insurgency', labelEn: 'Civil War Outbreak (1949+)', labelMm: 'ပြည်တွင်းစစ် စတင်ခြင်း (၁၉၄၉)' },
    { id: 'early_ceasefire', labelEn: 'CPB Mutiny & Bilateral (1989-2010)', labelMm: 'ဗကပ ပြိုကွဲမှုနှင့် နှစ်ဖက်အပစ်ရပ် (၁၉၈၉-၂၀၁၀)' },
    { id: 'thein_sein_nca', labelEn: 'Thein Sein & NCA (2011-2015)', labelMm: 'ဦးသိန်းစိန်နှင့် NCA စာချုပ် (၂၀၁၁-၂၀၁၅)' },
    { id: 'panglong_21st', labelEn: '21st Century Panglong (2016-2020)', labelMm: '(၂၁) ရာစု ပင်လုံ ညီလာခံ (၂၀၁၆-၂၀၂၀)' },
    { id: 'spring_revolution', labelEn: 'Coup & Spring Revolution (2021-2023)', labelMm: 'စစ်အာဏာသိမ်းမှုနှင့် နွေဦးတော်လှန်ရေး (၂၀၂၁-၂၀၂၃)' },
    { id: 'operation_1027_current', labelEn: 'Operation 1027 & Present (2023-2026)', labelMm: '၁၀၂၇ စစ်ဆင်ရေးနှင့် ယနေ့ခေတ် (၂၀၂၃-၂၀၂၆)' }
  ];

  const categories = [
    { id: 'all', labelEn: 'All Types', labelMm: 'အမျိုးအစား အားလုံး' },
    { id: 'agreement', labelEn: 'Accords & Pacts', labelMm: 'စာချုပ်သဘောတူညီချက်များ' },
    { id: 'conference', labelEn: 'Conferences & Talks', labelMm: 'ညီလာခံနှင့် ဆွေးနွေးပွဲများ' },
    { id: 'conflict', labelEn: 'Major Offensives', labelMm: 'အဆုံးအဖြတ် စစ်ဆင်ရေးများ' },
    { id: 'diplomacy', labelEn: 'International Mediation', labelMm: 'နိုင်ငံတကာ ကြားဝင်စေ့စပ်မှု' },
    { id: 'transition', labelEn: 'Regime Transitions', labelMm: 'နိုင်ငံရေး အကူးအပြောင်းများ' }
  ];

  const filteredEvents = TIMELINE_EVENTS.filter(evt => {
    const matchesEra = selectedEra === 'all' || evt.era === selectedEra;
    const matchesCat = selectedCategory === 'all' || evt.category === selectedCategory;
    return matchesEra && matchesCat;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'agreement':
        return <FileText size={16} color="#38bdf8" />;
      case 'conflict':
        return <Swords size={16} color="#f87171" />;
      case 'conference':
        return <Flag size={16} color="#c084fc" />;
      case 'diplomacy':
        return <Globe size={16} color="#34d399" />;
      default:
        return <Clock size={16} color="#facc15" />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header and Controls */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={22} color="var(--accent-indigo)" />
            {lang === 'mm' ? 'မြန်မာ့ငြိမ်းချမ်းရေး သမိုင်းမှတ်တိုင်များ အချိန်မှတ်တမ်း' : 'Chronological Peace Process Timeline (1947 - 2026)'}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            {lang === 'mm'
              ? '၁၉၄၇ ပင်လုံစာချုပ်မှ စတင်ကာ ဆယ်စုနှစ်များတစ်လျှောက် အပစ်အခတ်ရပ်စဲရေး၊ ညီလာခံများနှင့် စစ်ရေးလှည့်ကွက်များကို အချိန်နှင့်တပြေးညီ လေ့လာနိုင်ပါသည်'
              : 'Interactive chronology of peace accords, ceasefire agreements, political conferences, and geopolitical transformations.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Era Filter */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', marginBottom: '8px', textTransform: 'uppercase' }}>
              {lang === 'mm' ? 'ခေတ်ကာလအလိုက် စစ်ထုတ်ရန်' : 'Filter by Historical Era'}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {eras.map(era => (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(era.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: selectedEra === era.id ? 'var(--accent-indigo)' : 'var(--bg-secondary)',
                    color: selectedEra === era.id ? '#ffffff' : 'var(--text-muted)',
                    border: selectedEra === era.id ? '1px solid transparent' : '1px solid var(--border-color)'
                  }}
                >
                  {lang === 'mm' ? era.labelMm : era.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', marginBottom: '8px', textTransform: 'uppercase' }}>
              {lang === 'mm' ? 'အမျိုးအစားအလိုက် စစ်ထုတ်ရန်' : 'Filter by Event Type'}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: selectedCategory === cat.id ? 'var(--accent-blue)' : 'var(--bg-secondary)',
                    color: selectedCategory === cat.id ? '#0f172a' : 'var(--text-muted)',
                    border: selectedCategory === cat.id ? '1px solid transparent' : '1px solid var(--border-color)'
                  }}
                >
                  {lang === 'mm' ? cat.labelMm : cat.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Stream */}
      <div style={{
        position: 'relative',
        paddingLeft: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {/* Continuous Center Track */}
        <div style={{
          position: 'absolute',
          top: '10px',
          bottom: '10px',
          left: '11px',
          width: '3px',
          background: 'linear-gradient(to bottom, var(--accent-indigo), var(--accent-blue), var(--accent-emerald))',
          borderRadius: '2px'
        }} />

        {filteredEvents.map((evt, idx) => (
          <div
            key={evt.id}
            style={{
              position: 'relative',
              background: 'var(--bg-card)',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            {/* Timeline Marker Dot */}
            <div style={{
              position: 'absolute',
              left: '-32px',
              top: '26px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '3px solid var(--accent-indigo)',
              boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }}></span>
            </div>

            {/* Event Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    color: 'var(--accent-blue)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(56, 189, 248, 0.12)'
                  }}>
                    {evt.year}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-subtle)' }}>
                    {lang === 'mm' ? evt.dateMm : evt.date}
                  </span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
                  {lang === 'mm' ? evt.titleMm : evt.titleEn}
                </h3>
              </div>

              {/* Category Pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-muted)'
              }}>
                {getCategoryIcon(evt.category)}
                {evt.category}
              </div>
            </div>

            {/* Significance Highlight */}
            <div style={{
              padding: '12px 16px',
              borderRadius: '10px',
              background: 'var(--bg-secondary)',
              borderLeft: '4px solid var(--accent-indigo)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-main)',
              lineHeight: 1.5
            }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent-blue)', marginBottom: '4px' }}>
                {lang === 'mm' ? 'သမိုင်းဝင် အရေးပါမှု' : 'Historical Significance'}
              </div>
              {lang === 'mm' ? evt.significanceMm : evt.significanceEn}
            </div>

            {/* Detailed Body */}
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
              {lang === 'mm' ? evt.descriptionMm : evt.descriptionEn}
            </p>

            {/* Actors metadata */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              color: 'var(--text-subtle)',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '12px',
              flexWrap: 'wrap'
            }}>
              <strong>{lang === 'mm' ? 'အဓိက သက်ဆိုင်သူများ - ' : 'Key Signatories & Actors: '}</strong>
              <span>
                {lang === 'mm' ? evt.actorsMm?.join(', ') : evt.actors?.join(', ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
