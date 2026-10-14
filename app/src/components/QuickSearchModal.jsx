import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EAO_DATA, TOWNSHIPS_CONTROL_DATA, STATES_AND_REGIONS_DATA, ACCORDS_DATA } from '../data/peaceData';
import { Search, X, Users, MapPin, Building, FileText, ArrowRight } from 'lucide-react';

export const QuickSearchModal = ({ isOpen, onClose, onSelectEao, onNavigateTab }) => {
  const { lang } = useLanguage();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingEaos = !q ? [] : EAO_DATA.filter(e =>
    e.nameEn.toLowerCase().includes(q) ||
    e.nameMm.toLowerCase().includes(q) ||
    e.acronym.toLowerCase().includes(q)
  ).slice(0, 4);

  const matchingTownships = !q ? [] : TOWNSHIPS_CONTROL_DATA.filter(t =>
    t.nameEn.toLowerCase().includes(q) ||
    t.nameMm.toLowerCase().includes(q) ||
    t.controller.toLowerCase().includes(q)
  ).slice(0, 4);

  const matchingAccords = !q ? [] : ACCORDS_DATA.filter(a =>
    a.titleEn.toLowerCase().includes(q) ||
    a.titleMm.toLowerCase().includes(q)
  ).slice(0, 3);

  const totalResults = matchingEaos.length + matchingTownships.length + matchingAccords.length;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(5, 8, 16, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '10vh',
      zIndex: 2000
    }} onClick={onClose}>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        width: '100%',
        maxWidth: '620px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Search Input Box */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-color)',
          gap: '12px'
        }}>
          <Search size={20} color="var(--accent-indigo)" />
          <input
            autoFocus
            type="text"
            placeholder={lang === 'mm' ? 'အဖွဲ့အစည်း၊ မြို့နယ် သို့မဟုတ် စာချုပ်များ ရှာဖွေပါ...' : 'Search EAOs, Townships, Regions, or Peace Accords...'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-main)',
              fontSize: '16px',
              fontFamily: 'inherit'
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)',
              borderRadius: '6px',
              padding: '4px 8px',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            ESC
          </button>
        </div>

        {/* Results Stream */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '12px' }}>
          {!q && (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-subtle)', fontSize: '13px' }}>
              {lang === 'mm'
                ? 'ရှာဖွေလိုသော အရာကို ရိုက်ထည့်ပါ (ဥပမာ- KNU, AA, လားရှိုး, ပင်လုံ, စစ်ကိုင်း)'
                : 'Type to search across intelligence database (e.g., KNU, Lashio, Panglong, AA, Sagaing)'}
            </div>
          )}

          {q && totalResults === 0 && (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-subtle)', fontSize: '13px' }}>
              {lang === 'mm' ? 'ကိုက်ညီသော အချက်အလက် မတွေ့ရှိပါ' : 'No matching intelligence records found'}
            </div>
          )}

          {/* EAOs */}
          {matchingEaos.length > 0 && (
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', padding: '4px 8px' }}>
                {lang === 'mm' ? 'တိုင်းရင်းသားတပ်ဖွဲ့များ' : 'Ethnic Armed Organizations'}
              </div>
              {matchingEaos.map(eao => (
                <div
                  key={eao.id}
                  onClick={() => {
                    onSelectEao(eao);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Users size={16} color="var(--accent-blue)" />
                    <div>
                      <strong style={{ fontSize: '14px', color: 'var(--text-main)' }}>{eao.acronym}</strong>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '8px' }}>
                        {lang === 'mm' ? eao.nameMm : eao.nameEn}
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={14} color="var(--text-subtle)" />
                </div>
              ))}
            </div>
          )}

          {/* Townships */}
          {matchingTownships.length > 0 && (
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', padding: '4px 8px' }}>
                {lang === 'mm' ? 'မြို့နယ်များနှင့် နယ်မြေများ' : 'Townships & Frontlines'}
              </div>
              {matchingTownships.map(t => (
                <div
                  key={t.id}
                  onClick={() => {
                    onNavigateTab('townships');
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Building size={16} color="#10b981" />
                    <div>
                      <strong style={{ fontSize: '14px', color: 'var(--text-main)' }}>{lang === 'mm' ? t.nameMm : t.nameEn}</strong>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '8px' }}>
                        ({t.region} • {t.controller})
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={14} color="var(--text-subtle)" />
                </div>
              ))}
            </div>
          )}

          {/* Accords */}
          {matchingAccords.length > 0 && (
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', padding: '4px 8px' }}>
                {lang === 'mm' ? 'စာချုပ်စာတမ်းများ' : 'Peace Accords'}
              </div>
              {matchingAccords.map(a => (
                <div
                  key={a.id}
                  onClick={() => {
                    onNavigateTab('accords');
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FileText size={16} color="var(--accent-indigo)" />
                    <div>
                      <strong style={{ fontSize: '14px', color: 'var(--text-main)' }}>{lang === 'mm' ? a.titleMm : a.titleEn}</strong>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '8px' }}>
                        ({a.signDate})
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={14} color="var(--text-subtle)" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
