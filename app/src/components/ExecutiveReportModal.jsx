import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STATS_SUMMARY, SCEF_DATA, HUMANITARIAN_DATA, AIR_STRIKES_DATA, BORDER_GATES_DATA } from '../data/peaceData';
import { Printer, X, Download, Shield, Landmark, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export const ExecutiveReportModal = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto'
    }}>
      <div style={{
        background: '#0f172a',
        color: '#f8fafc',
        width: '100%',
        maxWidth: '900px',
        maxHeight: '92vh',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Header Bar */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(15, 23, 42, 0.95)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} color="var(--accent-blue)" />
            <span style={{ fontWeight: 800, fontSize: '15px' }}>
              {lang === 'mm' ? 'မဟာဗျူဟာ ထောက်လှမ်းရေးနှင့် ငြိမ်းချမ်းရေး အစီရင်ခံစာ (SitRep)' : 'Strategic SitRep Executive Briefing'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'var(--accent-blue)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '12px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Printer size={14} /> {lang === 'mm' ? 'Print / PDF ထုတ်ယူရန်' : 'Print / Export PDF'}
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '6px'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="printable-report" style={{
          padding: '36px 40px',
          overflowY: 'auto',
          fontSize: '13px',
          lineHeight: 1.7,
          background: '#090d16',
          color: '#e2e8f0'
        }}>
          {/* Top Document Header */}
          <div style={{
            borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
            paddingBottom: '20px',
            marginBottom: '24px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#38bdf8', fontWeight: 800 }}>
                  MYANMAR PEACE PROCESS & CONFLICT INTELLIGENCE PLATFORM
                </div>
                <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', margin: '4px 0' }}>
                  {lang === 'mm' ? 'နိုင်ငံတော် မဟာဗျူဟာ အခြေပြ အမှုဆောင်အစီရင်ခံစာ' : 'EXECUTIVE STRATEGIC SITUATION REPORT (SITREP)'}
                </h1>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                  {lang === 'mm' ? 'ဖက်ဒရယ်ဒီမိုကရေစီ ပေါ်ထွန်းရေးနှင့် စစ်ရေးအပြောင်းအလဲ သုံးသပ်ချက်' : 'Assessment of Federal Democratic Transition & Military Shifts'}
                </div>
              </div>

              <div style={{
                textAlign: 'right',
                fontSize: '11px',
                color: '#94a3b8',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '8px 14px',
                borderRadius: '8px'
              }}>
                <div><strong>REPORT DATE:</strong> October 2026</div>
                <div><strong>CLASSIFICATION:</strong> UNCLASSIFIED // OPEN SOURCE</div>
                <div><strong>COORDINATION:</strong> SCEF / ERO ALLIANCES / CSOs</div>
              </div>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#38bdf8', marginBottom: '8px', borderLeft: '3px solid #38bdf8', paddingLeft: '8px' }}>
              1. {lang === 'mm' ? 'အမှုဆောင် အနှစ်ချုပ် သုံးသပ်ချက် (Executive Summary)' : 'Executive Summary & Key Takeaways'}
            </h2>
            <p>
              {lang === 'mm'
                ? '၂၀၂၆ ခုနှစ်အတွင်း မြန်မာ့ပဋိပက္ခသည် အဆုံးအဖြတ် အဆင့်သို့ ရောက်ရှိနေပြီ ဖြစ်သည်။ ညီနောင်မဟာမိတ် ၃ ဖွဲ့၏ ၁၀၂၇ စစ်ဆင်ရေး၊ ကရင်နီ ၁၁၁၁ စစ်ဆင်ရေးနှင့် မြေပြန့်ဒေသ ထိုးစစ်များကြောင့် နိုင်ငံတစ်ဝန်းရှိ မြို့နယ်ပေါင်း ၈၅ မြို့နယ်ကျော်အား တော်လှန်ရေးနှင့် တိုင်းရင်းသားအင်အားစုများက အလုံးစုံ လွတ်မြောက်ထိန်းချုပ်ထားပြီး ဖြစ်သည်။ ၂၀၂၆ မတ်လ ၃၀ တွင် KNU, KIO, KNPP, CNF, NUG နှင့် CRPH တို့ ပူးပေါင်းကာ ဖက်ဒရယ်ဒီမိုကရေစီပြည်ထောင်စုပေါ်ထွန်းရေး ဦးဆောင်ကောင်စီ (SCEF) ကို ဖွဲ့စည်းခဲ့ပြီး ပူးတွဲစစ်မဟာဗျူဟာကော်မတီ (JMSCC) ဖြင့် စစ်ရေး၊ နိုင်ငံရေးကို တစ်သံတည်း ဦးဆောင်လျက်ရှိသည်။'
                : 'In 2026, the Myanmar conflict reached a decisive tipping point. Following Operation 1027, Operation 1111, and the dry zone counteroffensives, over 85 strategic townships are under full revolutionary and ethnic administration. On March 30, 2026, the historic formation of SCEF united the premier EROs and civilian resistance under a single 3-pillar command with a joint military strategic committee (JMSCC).'}
            </p>
          </div>

          {/* Key Metrics Table */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#38bdf8', marginBottom: '10px', borderLeft: '3px solid #38bdf8', paddingLeft: '8px' }}>
              2. {lang === 'mm' ? 'အဓိက အညွှန်းကိန်း နှိုင်းယှဉ်ချက် (Strategic Balance of Metrics)' : 'Strategic Metrics Summary'}
            </h2>
            <div style={{
              overflowX: 'auto',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#94a3b8' }}>
                    <th style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Domain / Metric</th>
                    <th style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Status / Count</th>
                    <th style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Strategic Implication</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', fontWeight: 700 }}>Township Control</td>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#10b981', fontWeight: 800 }}>85+ Townships Liberated</td>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Junta control restricted to isolated fortified urban garrisons</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', fontWeight: 700 }}>Border Trade Gates</td>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#f59e0b', fontWeight: 800 }}>70%+ Controlled by EROs</td>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Customs revenue collapse for SAC; direct cross-border trade by states</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', fontWeight: 700 }}>Displaced Persons (IDPs)</td>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#ef4444', fontWeight: 800 }}>3.55 Million+</td>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Acute shortage of medicine, shelter, and rice along border corridors</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', fontWeight: 700 }}>Airstrikes Recorded</td>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#ef4444', fontWeight: 800 }}>4,850+ Strikes</td>
                    <td style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>246 schools, 118 hospitals bombed; urgent need for jet fuel embargo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: SCEF Council Roadmap */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#38bdf8', marginBottom: '8px', borderLeft: '3px solid #38bdf8', paddingLeft: '8px' }}>
              3. {lang === 'mm' ? 'SCEF ဦးဆောင်ကောင်စီနှင့် နိုင်ငံရေး လမ်းပြမြေပုံ' : 'SCEF Council Structure & Political Roadmap'}
            </h2>
            <p>
              {lang === 'mm'
                ? 'SCEF သည် မဏ္ဍိုင်ကြီး ၃ ရပ် (တိုင်းရင်းသားတော်လှန်ရေးအဖွဲ့များ၊ ပြည်သူ့ကိုယ်စားလှယ်များ၊ အမျိုးသမီးကဏ္ဍ) ဖြင့် ဖွဲ့စည်းထားပြီး အောက်ပါ မူဝါဒကြီး ၆ ရပ်ကို အကောင်အထည်ဖော်လျက်ရှိသည် - (၁) စစ်အာဏာရှင်စနစ် အမြစ်ပြတ်ချေမှုန်းရေး၊ (၂) လက်နက်ကိုင်တပ်အားလုံး အရပ်သားအစိုးရလက်အောက်တွင် ထားရှိရေး၊ (၃) အမျိုးသားတန်းတူရေးနှင့် ကိုယ်ပိုင်ပြဋ္ဌာန်းခွင့်၊ (၄) အောက်ခြေမှ တည်ဆောက်သော ဖက်ဒရယ်စနစ်၊ (၅) အသွင်ကူးပြောင်းရေးကာလ တရားမျှတမှု၊ (၆) အတုအယောင် ရွေးကောက်ပွဲများ ငြင်းပယ်ရေး။'
                : 'The SCEF structure operates under 3 tripartite pillars with 6 non-negotiable guiding principles ensuring civilian supremacy over armed forces, complete dismantling of the 2008 constitution, and a decentralized federal union.'}
            </p>
          </div>

          {/* Section 4: Recommendations for International Observers & Donors */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px'
          }}>
            <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              {lang === 'mm' ? 'နိုင်ငံတကာနှင့် အလှူရှင်များသို့ အကြံပြုချက်များ (Policy Recommendations)' : 'Policy Recommendations for International Stakeholders'}
            </h3>
            <ul style={{ paddingLeft: '20px', margin: 0, color: '#94a3b8', fontSize: '12px' }}>
              <li style={{ marginBottom: '4px' }}>
                {lang === 'mm' ? 'လူသားချင်းစာနာမှု အကူအညီများကို စစ်ကောင်စီမှတစ်ဆင့် မဟုတ်ဘဲ နယ်စပ်ဖြတ်ကျော် ဒေသခံ CSO ကွန်ရက်များသို့ တိုက်ရိုက်ပေးအပ်ရန်။' : 'Channel humanitarian funding directly through cross-border ethnic CSO networks.'}
              </li>
              <li style={{ marginBottom: '4px' }}>
                {lang === 'mm' ? 'စစ်ကောင်စီ၏ အရပ်သားများအပေါ် လေကြောင်းဗုံးကြဲမှု ရပ်တန့်စေရန် ဂျက်လေယာဉ်ဆီ တင်သွင်းမှုအား အလုံးစုံ ပိတ်ဆို့ရန်။' : 'Enact comprehensive, targeted sanctions on aviation fuel shipments to Myanmar military.'}
              </li>
              <li>
                {lang === 'mm' ? 'SCEF နှင့် တိုင်းရင်းသား ကြားကာလ အုပ်ချုပ်ရေးအဖွဲ့များ (IEC, Chinland, ULA, KNU) အား တရားဝင် ဆွေးနွေးဖက်များအဖြစ် အသိအမှတ်ပြု ဆက်ဆံရန်။' : 'Engage with SCEF and bottom-up federal administrations as legitimate sovereign governing partners.'}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
