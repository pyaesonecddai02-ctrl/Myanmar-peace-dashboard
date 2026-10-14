import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Sparkles, Compass, Building, Menu } from 'lucide-react';

export const MobileBottomNav = ({ activeTab, setActiveTab, onOpenMenu }) => {
  const { lang } = useLanguage();

  const navItems = [
    { id: 'overview', icon: Shield, labelMm: 'ခြုံငုံ', labelEn: 'Overview' },
    { id: 'scef', icon: Sparkles, labelMm: 'SCEF', labelEn: 'SCEF', highlight: true },
    { id: 'map', icon: Compass, labelMm: 'မြေပုံ', labelEn: 'Map' },
    { id: 'townships', icon: Building, labelMm: 'မြို့နယ်', labelEn: 'Towns' }
  ];

  return (
    <nav className="mobile-bottom-dock" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '62px',
      background: 'rgba(15, 23, 42, 0.96)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.12)',
      display: 'none', // Controlled via CSS media query
      alignItems: 'center',
      justifyContent: 'space-around',
      zIndex: 999,
      padding: '0 8px',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5)'
    }}>
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        const isHighlight = item.highlight;

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              background: 'transparent',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '10px',
              color: isActive ? '#38bdf8' : (isHighlight ? '#a5b4fc' : '#94a3b8'),
              cursor: 'pointer',
              flex: 1,
              transition: 'all 0.15s ease'
            }}
          >
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon size={isHighlight ? 21 : 19} color={isActive ? '#38bdf8' : (isHighlight ? '#818cf8' : 'currentColor')} />
              {isHighlight && (
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-3px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#38bdf8',
                  boxShadow: '0 0 6px #38bdf8'
                }} />
              )}
            </div>
            <span style={{
              fontSize: '10px',
              fontWeight: isActive ? 800 : 600,
              letterSpacing: '-0.2px'
            }}>
              {lang === 'mm' ? item.labelMm : item.labelEn}
            </span>
          </button>
        );
      })}

      {/* Menu / All Tabs Trigger */}
      <button
        onClick={onOpenMenu}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: 'transparent',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '10px',
          color: '#94a3b8',
          cursor: 'pointer',
          flex: 1
        }}
      >
        <Menu size={19} />
        <span style={{ fontSize: '10px', fontWeight: 600 }}>
          {lang === 'mm' ? 'မီနူး' : 'Menu'}
        </span>
      </button>

      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-dock {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};
