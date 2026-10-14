import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LIVE_SITREPS } from '../data/peaceData';
import { Radio, ChevronRight, ChevronLeft, AlertTriangle, ShieldCheck, Info } from 'lucide-react';

export const SitrepTicker = () => {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % LIVE_SITREPS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = LIVE_SITREPS[currentIndex];

  const getTypeStyle = (type) => {
    switch (type) {
      case 'critical':
        return { bg: 'rgba(239, 68, 68, 0.2)', text: '#f87171', border: 'rgba(239, 68, 68, 0.4)', label: 'CRITICAL SITREP' };
      case 'alert':
        return { bg: 'rgba(249, 115, 22, 0.2)', text: '#fb923c', border: 'rgba(249, 115, 22, 0.4)', label: 'STRATEGIC SHIFT' };
      case 'humanitarian':
        return { bg: 'rgba(168, 85, 247, 0.2)', text: '#c084fc', border: 'rgba(168, 85, 247, 0.4)', label: 'HUMANITARIAN' };
      default:
        return { bg: 'rgba(56, 189, 248, 0.2)', text: '#38bdf8', border: 'rgba(56, 189, 248, 0.4)', label: 'MONITORING' };
    }
  };

  const style = getTypeStyle(currentItem.type);

  return (
    <div style={{
      background: 'linear-gradient(90deg, #090d16 0%, #0f172a 50%, #090d16 100%)',
      borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
      padding: '7px 16px',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Left Pulse Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          padding: '2px 8px',
          borderRadius: '20px',
          background: style.bg,
          border: `1px solid ${style.border}`,
          color: style.text,
          fontWeight: 800,
          fontSize: '10px',
          letterSpacing: '0.8px'
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: style.text,
            boxShadow: `0 0 8px ${style.text}`,
            animation: 'pulse 1.5s infinite'
          }} />
          {style.label}
        </div>
      </div>

      {/* Middle Text Message */}
      <div style={{
        flex: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#e2e8f0',
        fontWeight: 600,
        textAlign: 'center',
        padding: '0 8px'
      }}>
        {lang === 'mm' ? currentItem.textMm : currentItem.textEn}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
        <span style={{ fontSize: '10px', color: '#64748b', marginRight: '4px' }}>
          {currentIndex + 1}/{LIVE_SITREPS.length}
        </span>
        <button
          onClick={() => setCurrentIndex(prev => (prev - 1 + LIVE_SITREPS.length) % LIVE_SITREPS.length)}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            color: '#94a3b8',
            borderRadius: '4px',
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <ChevronLeft size={13} />
        </button>
        <button
          onClick={() => setCurrentIndex(prev => (prev + 1) % LIVE_SITREPS.length)}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            color: '#94a3b8',
            borderRadius: '4px',
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <ChevronRight size={13} />
        </button>
      </div>
    </div>
  );
};
