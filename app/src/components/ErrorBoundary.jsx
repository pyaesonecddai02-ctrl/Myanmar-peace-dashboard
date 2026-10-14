import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          textAlign: 'center',
          background: 'rgba(239, 68, 68, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          margin: '20px 0'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(239, 68, 68, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ef4444',
            marginBottom: '20px'
          }}>
            <AlertTriangle size={36} />
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#f87171', marginBottom: '8px' }}>
            စနစ်ချို့ယွင်းချက် ဖြစ်ပေါ်ခဲ့ပါသည် (Render Error)
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '24px' }}>
            မျက်နှာပြင်ပြသရာတွင် ချို့ယွင်းချက်တစ်ခုရှိခဲ့ပါသည်။ စာမျက်နှာကို ပြန်လည်ဖွင့်ပါ (သို့မဟုတ်) ပင်မစာမျက်နှာသို့ ပြန်သွားပါ။
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
            <button
              onClick={this.handleReset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'var(--accent-blue)',
                color: '#ffffff',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={16} /> ပြန်လည်ကြိုးစားရန် (Try Again)
            </button>
            <button
              onClick={() => {
                this.handleReset();
                if (typeof window !== 'undefined') {
                  window.location.reload();
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Home size={16} /> စာမျက်နှာ Reload လုပ်ရန်
            </button>
          </div>

          {this.state.error && (
            <details style={{
              maxWidth: '650px',
              width: '100%',
              textAlign: 'left',
              background: 'var(--bg-card)',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              fontSize: '12px',
              color: 'var(--text-subtle)',
              overflowX: 'auto'
            }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#f87171' }}>
                Error Details: {this.state.error.toString()}
              </summary>
              <pre style={{ marginTop: '8px', whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: 'var(--text-muted)' }}>
                {this.state.errorInfo?.componentStack || this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
