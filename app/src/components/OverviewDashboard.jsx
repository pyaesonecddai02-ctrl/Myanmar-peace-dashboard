import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STATS_SUMMARY, TIMELINE_EVENTS, EAO_DATA, STATES_AND_REGIONS_DATA } from '../data/peaceData';
import {
  Shield,
  ShieldAlert,
  Users,
  Compass,
  FileText,
  AlertCircle,
  ExternalLink,
  Flame,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Clock,
  HeartHandshake,
  Truck,
  Landmark,
  Plane
} from 'lucide-react';

export const OverviewDashboard = ({ setActiveTab, onSelectEao, onSelectRegion }) => {
  const { lang } = useLanguage();

  const recentMilestones = TIMELINE_EVENTS.slice(-4).reverse();
  const criticalRegions = STATES_AND_REGIONS_DATA.filter(r => r.conflictLevel === 'critical');
  const ncaResistanceEaos = EAO_DATA.filter(e => e.category === 'revolutionary_alliance');
  const brotherhoodEaos = EAO_DATA.filter(e => e.category === 'brotherhood_alliance');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Hero Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        padding: '32px 28px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)'
      }}>
        {/* Decorative background glow */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '260px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            color: 'var(--accent-blue)',
            fontSize: '12px',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }}></span>
            {lang === 'mm' ? 'မြန်မာ့ငြိမ်းချမ်းရေးနှင့် ပဋိပက္ခ စောင့်ကြည့်လေ့လာရေး' : 'Myanmar Peace Process & Conflict Intelligence Platform'}
          </div>

          <h1 style={{
            fontSize: 'clamp(24px, 4vw, 34px)',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '14px',
            color: '#f8fafc',
            fontFamily: 'var(--font-display)'
          }}>
            {lang === 'mm'
              ? 'မြန်မာနိုင်ငံ၏ ငြိမ်းချမ်းရေးလုပ်ငန်းစဉ်၊ အပစ်အခတ်ရပ်စဲရေးနှင့် နယ်မြေထိန်းချုပ်မှု ဒက်ရှ်ဘုတ်'
              : 'Myanmar Peace Process, Ceasefire Architecture & Strategic Conflict Dashboard'}
          </h1>

          <p style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: '#94a3b8',
            marginBottom: '24px'
          }}>
            {lang === 'mm'
              ? '၁၉၄၇ ပင်လုံစာချုပ်မှသည် ၂၀၁၅ NCA၊ ၂၀၂၁ စစ်အာဏာသိမ်းမှုနောက်ပိုင်း နွေဦးတော်လှန်ရေးနှင့် ၁၀၂၇ စစ်ဆင်ရေးအထိ တိုင်းရင်းသားလက်နက်ကိုင်များ၏ ရပ်တည်ချက်များ၊ စစ်ဘေးရှောင် (IDP) အချက်အလက်များနှင့် ငြိမ်းချမ်းရေးစာချုပ်များကို တစ်နေရာတည်းတွင် ပြည့်စုံစွာ လေ့လာနိုင်ပါသည်။'
              : 'Comprehensive tracking of Myanmar\'s peace negotiations, ethnic armed organizations (EAOs), ceasefire breakdowns, territorial shifts post-Operation 1027, and humanitarian displacement metrics.'}
          </p>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('scef')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '14px',
                boxShadow: '0 4px 16px rgba(56, 189, 248, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Shield size={18} />
              {lang === 'mm' ? 'SCEF ကောင်စီ လေ့လာရန်' : 'Explore SCEF Council'}
            </button>

            <button
              onClick={() => setActiveTab('map')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                background: 'var(--accent-indigo)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '14px',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)'
              }}
            >
              <Compass size={18} />
              {lang === 'mm' ? 'မြေပုံဖြင့် စစ်ဆေးရန်' : 'Explore Interactive Map'}
            </button>

            <button
              onClick={() => setActiveTab('townships')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              {lang === 'mm' ? 'မြို့နယ် ၈၅+ ထိန်းချုပ်မှု' : 'Townships (85+)'}
            </button>

            <button
              onClick={() => setActiveTab('accords')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <FileText size={18} />
              {lang === 'mm' ? 'ငြိမ်းချမ်းရေးစာချုပ်များ' : 'Key Accords & Charters'}
            </button>

            <button
              onClick={() => setActiveTab('humanitarian')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#f87171',
                fontWeight: 700,
                fontSize: '13px',
                border: '1px solid rgba(239, 68, 68, 0.35)'
              }}
            >
              <HeartHandshake size={16} />
              {lang === 'mm' ? 'စစ်ဘေးရှောင် IDP (၃.၅သန်း)' : 'IDP Crisis'}
            </button>

            <button
              onClick={() => setActiveTab('border')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                fontWeight: 700,
                fontSize: '13px',
                border: '1px solid rgba(16, 185, 129, 0.35)'
              }}
            >
              <Truck size={16} />
              {lang === 'mm' ? 'နယ်စပ်ဂိတ်များ (၇၀% လွတ်မြောက်)' : 'Border Gates'}
            </button>

            <button
              onClick={() => setActiveTab('governance')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: 'rgba(139, 92, 246, 0.15)',
                color: '#a78bfa',
                fontWeight: 700,
                fontSize: '13px',
                border: '1px solid rgba(139, 92, 246, 0.35)'
              }}
            >
              <Landmark size={16} />
              {lang === 'mm' ? 'ဖက်ဒရယ်အုပ်ချုပ်ရေး (IEC/Chinland)' : 'Federal Governance'}
            </button>

            <button
              onClick={() => setActiveTab('airstrikes')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: 'rgba(220, 38, 38, 0.15)',
                color: '#fca5a5',
                fontWeight: 700,
                fontSize: '13px',
                border: '1px solid rgba(220, 38, 38, 0.35)'
              }}
            >
              <Plane size={16} />
              {lang === 'mm' ? 'လေကြောင်းတိုက်ခိုက်မှု ဒေတာ' : 'Air Strikes Monitor'}
            </button>
          </div>
        </div>
      </div>

      {/* KPI Highlight Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px'
      }}>
        {/* Card 1 */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          padding: '22px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-subtle)' }}>
              {lang === 'mm' ? 'စောင့်ကြည့် တိုင်းရင်းသားတပ်ဖွဲ့' : 'Tracked Ethnic Armed Forces'}
            </span>
            <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.12)', color: 'var(--accent-indigo)' }}>
              <Users size={20} />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
            {STATS_SUMMARY.totalEaos}+
          </div>
          <div style={{ fontSize: '12px', color: 'var(--accent-blue)', fontWeight: 600 }}>
            {lang === 'mm' ? 'မဟာမိတ် ၄ ခုနှင့် သီးခြားဒေသများ' : 'Across 4 Alliances & Special Regions'}
          </div>
        </div>

        {/* Card 2 */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          padding: '22px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-subtle)' }}>
              {lang === 'mm' ? 'တစ်နိုင်ငံလုံး စစ်ဘေးရှောင် (IDPs)' : 'Total Displaced Population (IDPs)'}
            </span>
            <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.12)', color: '#f87171' }}>
              <Flame size={20} />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 800, color: '#f87171', letterSpacing: '-0.5px' }}>
            {STATS_SUMMARY.totalIdpsNationwide}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            {lang === 'mm' ? 'စစ်ကိုင်းနှင့် ရခိုင်တွင် အများဆုံး' : 'Highest in Sagaing & Rakhine State'}
          </div>
        </div>

        {/* Card 3 */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          padding: '22px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-subtle)' }}>
              {lang === 'mm' ? 'ထိန်းချုပ်/စိုးမိုးနိုင်သော မြို့နယ်' : 'Liberated / Contested Towns'}
            </span>
            <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', color: '#34d399' }}>
              <TrendingUp size={20} />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 800, color: '#10b981', letterSpacing: '-0.5px' }}>
            80+
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            {lang === 'mm' ? '၁၀၂၇ စစ်ဆင်ရေးနောက်ပိုင်း ထိန်းချုပ်မှု' : 'Shifted since Operation 1027'}
          </div>
        </div>

        {/* Card 4 */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          padding: '22px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-subtle)' }}>
              {lang === 'mm' ? 'NCA လက်မှတ်ထိုးခဲ့သည့် အခြေအနေ' : 'Original NCA Signatories Status'}
            </span>
            <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(234, 179, 8, 0.12)', color: '#facc15' }}>
              <ShieldAlert size={20} />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
            10 <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-subtle)' }}>{lang === 'mm' ? 'ဖွဲ့' : 'Total'}</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--accent-amber)', fontWeight: 600 }}>
            {lang === 'mm' ? '၄ ဖွဲ့ တော်လှန်ရေးဘက်၊ ၆ ဖွဲ့ စာချုပ်ထိန်းသိမ်း' : '4 Revoked/Fighting, 6 Residual'}
          </div>
        </div>
      </div>

      {/* Two Column Layout: Current Dynamics & Strategic Border Gates */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {/* Strategic Breakdown of Current Armed Forces */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={18} color="var(--accent-blue)" />
              {lang === 'mm' ? 'လက်နက်ကိုင် အင်အားစုများ မဟာမိတ်ခွဲခြမ်းမှု' : 'Armed Formations & Alliance Blocs'}
            </h3>
            <button
              onClick={() => setActiveTab('eaos')}
              style={{ fontSize: '12px', color: 'var(--accent-blue)', background: 'transparent', fontWeight: 600 }}
            >
              {lang === 'mm' ? 'အားလုံးကြည့်ရန်' : 'View all'} →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Bloc 1 */}
            <div style={{
              padding: '14px',
              borderRadius: '12px',
              background: 'var(--bg-secondary)',
              borderLeft: '4px solid #3b82f6'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>
                  {lang === 'mm' ? 'ဖက်ဒရယ် တော်လှန်ရေး မဟာမိတ် (K3C + Allies)' : 'Federal Revolutionary Alliance (K3C & Allies)'}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8' }}>~50,000+</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {lang === 'mm'
                  ? 'KNU၊ KIA၊ KNPP၊ CNF၊ ABSDF နှင့် NUG/PDF တပ်ဖွဲ့များ။ ၂၀၀၈ ဖွဲ့စည်းပုံကို ဖျက်သိမ်း၍ ဖက်ဒရယ်ဒီမိုကရေစီ ပြည်ထောင်စုသစ် ထူထောင်ရေး ဦးတည်။'
                  : 'KNU, KIA, KNPP, CNF, ABSDF aligned with NUG & PDF. Committed to abolishing 2008 charter and building a democratic federal army.'}
              </p>
            </div>

            {/* Bloc 2 */}
            <div style={{
              padding: '14px',
              borderRadius: '12px',
              background: 'var(--bg-secondary)',
              borderLeft: '4px solid #ef4444'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>
                  {lang === 'mm' ? 'ညီနောင်မဟာမိတ် (၃) ဖွဲ့ (Three Brotherhood Alliance)' : 'Three Brotherhood Alliance (3BHA)'}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f87171' }}>~55,000+</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {lang === 'mm'
                  ? 'MNDAA၊ TNLA နှင့် AA။ ၁၀၂၇ စစ်ဆင်ရေးဖြင့် ရှမ်းမြောက်နှင့် ရခိုင်ဒေသ အများစုကို သိမ်းပိုက်ပြီး ကိုယ်ပိုင်အုပ်ချုပ်ရေး ထူထောင်ထား။'
                  : 'MNDAA, TNLA, AA. Orchestrated Operation 1027, liberated northern Shan townships and majority of Rakhine State, establishing de facto governance.'}
              </p>
            </div>

            {/* Bloc 3 */}
            <div style={{
              padding: '14px',
              borderRadius: '12px',
              background: 'var(--bg-secondary)',
              borderLeft: '4px solid #a855f7'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>
                  {lang === 'mm' ? 'FPNCC နှင့် ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရ ဒေသများ' : 'FPNCC & Autonomous Strongholds'}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc' }}>~45,000+</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {lang === 'mm'
                  ? 'UWSA (ဝ)၊ NDAA (မိုင်းလား)၊ SSPP (ရှမ်းမြောက်)။ အဆင့်မြင့်လက်နက်များ တပ်ဆင်ထားပြီး တရုတ်နယ်စပ် တည်ငြိမ်ရေးနှင့် ကိုယ်ပိုင်ပြဋ္ဌာန်းခွင့်ကို ထိန်းသိမ်းထား။'
                  : 'UWSA (Wa), NDAA (Mong La), SSPP. Heavily mechanized formations prioritizing internal sovereignty, Chinese border diplomacy, and neutral deterrence.'}
              </p>
            </div>

            {/* Bloc 4 */}
            <div style={{
              padding: '14px',
              borderRadius: '12px',
              background: 'var(--bg-secondary)',
              borderLeft: '4px solid #eab308'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>
                  {lang === 'mm' ? 'NCA ဆွေးနွေးဆဲနှင့် ဒေသန္တရအင်အားစုများ' : 'NCA Dialogue Signatories & Local Forces'}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#facc15' }}>~15,000</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {lang === 'mm'
                  ? 'RCSS၊ DKBA၊ KNU/KNLA-PC၊ ALP၊ NMSP မူလအဖွဲ့။ စစ်ကောင်စီနှင့် နိုင်ငံရေးဆွေးနွေးပွဲများ ဆက်လက်တက်ရောက်ဆဲဖြစ်သော်လည်း နယ်မြေကန့်သတ်မှုများရှိ။'
                  : 'RCSS, DKBA, KNU-PC, ALP, NMSP rump. Continuing dialogue with SAC under residual NCA provisions while preserving their territorial domains.'}
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Border Gates & Critical Turning Points */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={18} color="var(--accent-emerald)" />
            {lang === 'mm' ? 'နယ်စပ်ကုန်သွယ်ရေးဂိတ်များနှင့် ထိန်းချုပ်မှု' : 'Strategic Border Trade Points Under EAO Control'}
          </h3>

          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            {lang === 'mm'
              ? 'အိမ်နီးချင်းနိုင်ငံများဖြစ်သော တရုတ်၊ အိန္ဒိယနှင့် ထိုင်းနယ်စပ် ကုန်သွယ်ရေးဂိတ်အများစုကို တိုင်းရင်းသားတပ်ဖွဲ့များက ထိန်းချုပ်ထားပြီး စစ်ကောင်စီ၏ အကောက်ခွန်ဘဏ္ဍာငွေကို ကြီးမားစွာ ထိခိုက်စေခဲ့သည်။'
              : 'Over 70% of Myanmar\'s overland bilateral trade corridors with China, India, and Thailand are now under EAO administration or heavily contested.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              {
                gate: lang === 'mm' ? 'ချင်းရွှေဟော် နယ်စပ်ဂိတ်' : 'Chinshwehaw Gate (China)',
                controller: 'MNDAA',
                impactMm: 'တရုတ်-မြန်မာ ဒုတိယအကြီးဆုံး ကုန်သွယ်ရေးဂိတ်ကို MNDAA စီမံ',
                impactEn: 'Second largest Sino-Myanmar customs post governed by MNDAA'
              },
              {
                gate: lang === 'mm' ? 'လွယ်ဂျယ် နယ်စပ်ဂိတ်' : 'Lwegel Gate (China)',
                controller: 'KIA / KIO',
                impactMm: 'ကချင်ပြည်နယ်နှင့် တရုတ်နယ်စပ် ကုန်သွယ်ခွန် KIA ရရှိ',
                impactEn: 'Direct border crossing between Kachin and Yunnan under KIA customs'
              },
              {
                gate: lang === 'mm' ? 'ရိဒ်ခေါဒါရ် နယ်စပ်ဂိတ်' : 'Rihkhawdar Gate (India)',
                controller: 'Chin Resistance / CNA',
                impactMm: 'အိန္ဒိယ-မြန်မာ နယ်စပ်ကုန်သွယ်ရေး ချင်းကာကွယ်ရေးတပ်များ စီမံ',
                impactEn: 'Major Mizoram-Chin frontier hub under Chinland council'
              },
              {
                gate: lang === 'mm' ? 'ထီးခီး နယ်စပ်ဂိတ်' : 'Htee Khee Gate (Thailand)',
                controller: 'KNU / KNLA',
                impactMm: 'ထားဝယ်-ကန်ချနဘူရီ ထိုင်းနယ်စပ် ကုန်သွယ်ရေး KNU ထိန်းချုပ်',
                impactEn: 'Southern overland trade link between Tanintharyi and Kanchanaburi'
              },
              {
                gate: lang === 'mm' ? 'မြဝတီ - မဲဆောက် စင်္ကြံ' : 'Myawaddy Corridor (Thailand)',
                controller: lang === 'mm' ? 'အပြိုင်ထိန်းချုပ် / အငြင်းပွား' : 'Contested (KNU / KNA / SAC)',
                impactMm: 'အာရှလမ်းမကြီး ပြတ်တောက်ပြီး စီးပွားရေးလုပ်ငန်းရှင်များ အခက်တွေ့',
                impactEn: 'Primary Thai border trading port disrupted along Asia Highway 1'
              }
            ].map((b, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '13px' }}>{b.gate}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>
                    {lang === 'mm' ? b.impactMm : b.impactEn}
                  </div>
                </div>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  fontSize: '11px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap'
                }}>
                  {b.controller}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Milestones Timeline Highlights */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        padding: '24px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={20} color="var(--accent-amber)" />
              {lang === 'mm' ? 'ငြိမ်းချမ်းရေးနှင့် စစ်ရေး မကြာသေးမီက အရေးကြီးဖြစ်ရပ်များ' : 'Recent Critical Developments & Peace Milestones'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {lang === 'mm' ? 'မြန်မာ့ငြိမ်းချမ်းရေး သမိုင်းကြောင်း၏ အဆုံးအဖြတ်ပေးသော အလှည့်အပြောင်းများ' : 'Key turning points redefining Myanmar\'s modern geopolitical landscape'}
            </p>
          </div>
          <button
            onClick={() => setActiveTab('timeline')}
            style={{ fontSize: '13px', color: 'var(--accent-blue)', background: 'transparent', fontWeight: 600 }}
          >
            {lang === 'mm' ? 'သမိုင်းမှတ်တိုင် အပြည့်အစုံ' : 'Full Timeline'} →
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {recentMilestones.map(event => (
            <div
              key={event.id}
              style={{
                padding: '18px',
                background: 'var(--bg-secondary)',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: 'var(--accent-blue)'
                  }}>
                    {lang === 'mm' ? event.dateMm : event.date}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>
                    {event.category}
                  </span>
                </div>

                <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: 'var(--text-main)' }}>
                  {lang === 'mm' ? event.titleMm : event.titleEn}
                </h4>

                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {lang === 'mm' ? event.significanceMm : event.significanceEn}
                </p>
              </div>

              <div style={{ fontSize: '11px', color: 'var(--text-subtle)', borderTop: '1px solid var(--border-color)', paddingTop: '8px' }}>
                <strong>{lang === 'mm' ? 'ပါဝင်သူများ - ' : 'Actors: '}</strong>
                {lang === 'mm' ? event.actorsMm?.join(', ') : event.actors?.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
