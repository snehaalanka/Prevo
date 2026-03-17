import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

const AppContent = () => {
  const { isLoggedIn, logout, loading } = useApp();

  useEffect(() => {
    const handleNavigation = (event) => {
      if (isLoggedIn && (!event.state || !event.state.inApp)) {
        logout();
      }
    };
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, [isLoggedIn, logout]);

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        width: '100vw',
        background: '#0e061a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid rgba(140, 75, 255, 0.2)',
          borderTop: '3px solid #8c4bff',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }} />
        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return isLoggedIn ? <Dashboard /> : <Landing />;
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;