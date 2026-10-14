import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { SitrepTicker } from './components/SitrepTicker';
import { OverviewDashboard } from './components/OverviewDashboard';
import { InteractiveMap } from './components/InteractiveMap';
import { ScefCouncil } from './components/ScefCouncil';
import { TownshipsMatrix } from './components/TownshipsMatrix';
import { MilitaryOperations } from './components/MilitaryOperations';
import { EaoDirectory } from './components/EaoDirectory';
import { TimelineView } from './components/TimelineView';
import { AccordsLibrary } from './components/AccordsLibrary';
import { StakeholderMatrix } from './components/StakeholderMatrix';
import { AnalyticsCharts } from './components/AnalyticsCharts';
import { EaoDetailModal } from './components/EaoDetailModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { HumanitarianTracker } from './components/HumanitarianTracker';
import { BorderGatesMatrix } from './components/BorderGatesMatrix';
import { FederalGovernance } from './components/FederalGovernance';
import { AirStrikesMonitor } from './components/AirStrikesMonitor';
import { ExecutiveReportModal } from './components/ExecutiveReportModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Shield, ExternalLink, Printer } from 'lucide-react';

function DashboardContent() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEao, setSelectedEao] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectEao = (eao) => {
    setSelectedEao(eao);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <OverviewDashboard
            setActiveTab={setActiveTab}
            onSelectEao={handleSelectEao}
            onSelectRegion={() => setActiveTab('map')}
          />
        );
      case 'scef':
        return (
          <ScefCouncil
            onSelectEao={handleSelectEao}
          />
        );
      case 'map':
        return (
          <InteractiveMap
            onSelectEao={handleSelectEao}
          />
        );
      case 'humanitarian':
        return <HumanitarianTracker />;
      case 'border':
        return <BorderGatesMatrix />;
      case 'governance':
        return <FederalGovernance />;
      case 'airstrikes':
        return <AirStrikesMonitor />;
      case 'townships':
        return <TownshipsMatrix />;
      case 'operations':
        return <MilitaryOperations />;
      case 'eaos':
        return (
          <EaoDirectory
            onSelectEao={handleSelectEao}
          />
        );
      case 'timeline':
        return <TimelineView />;
      case 'accords':
        return <AccordsLibrary />;
      case 'stakeholders':
        return <StakeholderMatrix />;
      case 'analytics':
        return <AnalyticsCharts />;
      default:
        return (
          <OverviewDashboard
            setActiveTab={setActiveTab}
            onSelectEao={handleSelectEao}
          />
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      {/* Top Geopolitical Live Sitrep Ticker */}
      <SitrepTicker />

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenReport={() => setReportModalOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        padding: '24px 20px 60px'
      }}>
        <ErrorBoundary onReset={() => setActiveTab('overview')}>
          {renderActiveTab()}
        </ErrorBoundary>
      </main>

      {/* EAO Detail Modal */}
      {selectedEao && (
        <EaoDetailModal
          eao={selectedEao}
          onClose={() => setSelectedEao(null)}
        />
      )}

      {/* Quick Search Modal */}
      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectEao={handleSelectEao}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />

      {/* Executive SitRep Report Modal */}
      <ExecutiveReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />

      {/* Mobile Bottom Navigation Dock */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenMenu={() => setMobileMenuOpen(prev => !prev)}
      />

      {/* High-Tech Footer */}
      <footer style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-color)',
        padding: '30px 20px',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '13px',
          color: 'var(--text-muted)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 10px rgba(99, 102, 241, 0.4)'
            }}>
              <Shield size={17} />
            </div>
            <div>
              <div style={{ fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.2px' }}>
                {lang === 'mm' ? 'မြန်မာ့ငြိမ်းချမ်းရေးနှင့် ပဋိပက္ခ စောင့်ကြည့်လေ့လာရေး ပလက်ဖောင်း' : 'Myanmar Peace Process & Conflict Intelligence Platform'}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                {lang === 'mm' ? 'ဖက်ဒရယ်ဒီမိုကရေစီ၊ လူ့အခွင့်အရေးနှင့် စစ်မှန်သော ငြိမ်းချမ်းရေးအတွက် အချက်အလက်များ' : 'Documenting federal democracy, human rights, and geopolitical transition.'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '12px', alignItems: 'center' }}>
            <span>{lang === 'mm' ? 'ဒေတာရင်းမြစ်များ: ISP Myanmar, UN OCHA, BNI, EAO Accords' : 'Data: ISP Myanmar, UN OCHA, BNI, Official Accords'}</span>
            <button
              onClick={() => window.print()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-blue)',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Printer size={12} /> {lang === 'mm' ? 'ထုတ်ယူရန်' : 'Export'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <DashboardContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
}
