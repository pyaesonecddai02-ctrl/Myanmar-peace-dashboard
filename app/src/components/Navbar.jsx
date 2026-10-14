import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Compass,
  Users,
  Calendar,
  BookOpen,
  Scale,
  BarChart3,
  Globe,
  Sun,
  Moon,
  Shield,
  Menu,
  X,
  Flame,
  Search,
  Building,
  Swords,
  Printer,
  Sparkles,
  HeartHandshake,
  Truck,
  Landmark,
  Plane,
  FileText
} from 'lucide-react';

export const Navbar = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenReport,
  mobileMenuOpen: controlledMenuOpen,
  setMobileMenuOpen: controlledSetMenuOpen
}) => {
  const { lang, toggleLang, theme, toggleTheme } = useLanguage();
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);

  const mobileMenuOpen = controlledMenuOpen !== undefined ? controlledMenuOpen : internalMenuOpen;
  const setMobileMenuOpen = controlledSetMenuOpen !== undefined ? controlledSetMenuOpen : setInternalMenuOpen;

  const navItems = [
    { id: 'overview', icon: Shield, labelMm: 'ခြုံငုံသုံးသပ်ချက်', labelEn: 'Overview' },
    { id: 'scef', icon: Sparkles, labelMm: 'SCEF ကောင်စီ', labelEn: 'SCEF Council', highlight: true },
    { id: 'map', icon: Compass, labelMm: 'စစ်ရေးပြမြေပုံ', labelEn: 'Map' },
    { id: 'townships', icon: Building, labelMm: 'မြို့နယ်များ', labelEn: 'Townships' },
    { id: 'operations', icon: Swords, labelMm: 'စစ်ဆင်ရေးများ', labelEn: 'Operations' },
    { id: 'humanitarian', icon: HeartHandshake, labelMm: 'စစ်ဘေးရှောင် IDP', labelEn: 'IDPs' },
    { id: 'border', icon: Truck, labelMm: 'နယ်စပ်ဂိတ်များ', labelEn: 'Border Trade' },
    { id: 'governance', icon: Landmark, labelMm: 'ဖက်ဒရယ်အုပ်ချုပ်ရေး', labelEn: 'Governance' },
    { id: 'airstrikes', icon: Plane, labelMm: 'လေကြောင်းတိုက်ခိုက်မှု', labelEn: 'Air Strikes' },
    { id: 'eaos', icon: Users, labelMm: 'လက်နက်ကိုင်တပ်များ', labelEn: 'EAOs' },
    { id: 'timeline', icon: Calendar, labelMm: 'သမိုင်းမှတ်တိုင်', labelEn: 'Timeline' },
    { id: 'accords', icon: BookOpen, labelMm: 'စာချုပ်များ', labelEn: 'Accords' },
    { id: 'stakeholders', icon: Scale, labelMm: 'ရှုထောင့်များ', labelEn: 'Perspectives' },
    { id: 'analytics', icon: BarChart3, labelMm: 'စာရင်းအင်း', labelEn: 'Analytics' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(15, 23, 42, 0.94)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '14px'
      }}>
        {/* Brand Logo & Title */}
        <div
          onClick={() => setActiveTab('overview')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)'
          }}>
            <Shield size={20} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontSize: '16px',
                fontWeight: 800,
                color: '#f8fafc',
                letterSpacing: '-0.3px',
                fontFamily: 'var(--font-display)'
              }}>
                {lang === 'mm' ? 'မြန်မာ့ငြိမ်းချမ်းရေး' : 'MYANMAR PEACE'}
              </span>
              <span style={{
                fontSize: '9px',
                fontWeight: 800,
                padding: '2px 5px',
                borderRadius: '4px',
                background: 'rgba(239, 68, 68, 0.25)',
                color: '#f87171',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                letterSpacing: '0.5px'
              }}>
                WAR-ROOM
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>
              {lang === 'mm' ? 'ငြိမ်းချမ်းရေးနှင့် စစ်ရေး စောင့်ကြည့်လေ့လာရေး' : 'Conflict & Peace Intelligence'}
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '2px',
          background: 'rgba(15, 23, 42, 0.7)',
          padding: '4px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }} className="desktop-nav">
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
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 10px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: isActive ? 800 : (isHighlight ? 700 : 500),
                  background: isActive
                    ? (isHighlight ? 'linear-gradient(135deg, #38bdf8, #6366f1)' : 'var(--accent-indigo)')
                    : (isHighlight ? 'rgba(56, 189, 248, 0.12)' : 'transparent'),
                  color: isActive
                    ? '#ffffff'
                    : (isHighlight ? '#38bdf8' : '#94a3b8'),
                  boxShadow: isActive ? '0 0 12px rgba(99, 102, 241, 0.4)' : 'none',
                  border: isHighlight && !isActive ? '1px solid rgba(56, 189, 248, 0.3)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={14} color={isActive ? '#ffffff' : (isHighlight ? '#38bdf8' : 'currentColor')} />
                <span>{lang === 'mm' ? item.labelMm : item.labelEn}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Utility Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 10px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#94a3b8',
              fontSize: '12px',
              cursor: 'pointer'
            }}
            title="Quick Search (Ctrl + K)"
          >
            <Search size={14} />
            <span className="search-text" style={{ fontSize: '11px' }}>Ctrl+K</span>
          </button>

          {/* Executive SitRep Report Trigger */}
          <button
            onClick={onOpenReport}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2), rgba(99, 102, 241, 0.25))',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: 'var(--accent-blue)',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
            title={lang === 'mm' ? 'SitRep အမှုဆောင်အစီရင်ခံစာ ထုတ်ယူရန်' : 'Export Executive SitRep Report'}
          >
            <FileText size={14} />
            <span className="sitrep-btn-text" style={{ fontSize: '11px' }}>{lang === 'mm' ? 'SitRep အစီရင်ခံစာ' : 'SitRep'}</span>
          </button>

          {/* Quick Print Button */}
          <button
            onClick={() => window.print()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 10px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#94a3b8',
              fontSize: '12px',
              cursor: 'pointer'
            }}
            title={lang === 'mm' ? 'စာမျက်နှာ Print ထုတ်ယူရန်' : 'Quick Print'}
          >
            <Printer size={14} />
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 10px',
              borderRadius: '8px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: 'var(--accent-blue)',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <Globe size={14} />
            <span>{lang === 'mm' ? 'EN' : 'မြန်မာ'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              padding: '7px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {theme === 'dark' ? <Sun size={15} color="#facc15" /> : <Moon size={15} color="var(--accent-indigo)" />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              padding: '7px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          padding: '12px 16px 30px',
          background: 'rgba(15, 23, 42, 0.98)',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          maxHeight: '75vh',
          overflowY: 'auto'
        }}>
          {/* Quick SitRep Action */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenReport) onOpenReport();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 14px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.25), rgba(99, 102, 241, 0.3))',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              cursor: 'pointer',
              marginBottom: '6px'
            }}
          >
            <FileText size={16} />
            <span>{lang === 'mm' ? '📄 SitRep အမှုဆောင်အစီရင်ခံစာ (Print/PDF)' : '📄 Strategic SitRep Briefing (Export)'}</span>
          </button>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isHighlight = item.highlight;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: isActive ? 800 : (isHighlight ? 700 : 500),
                  background: isActive
                    ? (isHighlight ? 'linear-gradient(135deg, #38bdf8, #6366f1)' : 'var(--accent-indigo)')
                    : (isHighlight ? 'rgba(56, 189, 248, 0.15)' : 'transparent'),
                  color: isActive ? '#ffffff' : (isHighlight ? '#38bdf8' : '#94a3b8'),
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <Icon size={16} />
                <span>{lang === 'mm' ? item.labelMm : item.labelEn}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 1280px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 1279px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          .search-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
