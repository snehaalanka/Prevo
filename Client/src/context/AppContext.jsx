import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    const savedUser = localStorage.getItem('activeUser');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed && parsed.fullName) {
          setUser(parsed);
          setIsLoggedIn(true);
        }
      } catch (e) {
        localStorage.removeItem('activeUser');
      }
    }
    setLoading(false); // Done checking
  }, []);

  const login = (userData, registering = false, remember = false) => {
    if (!userData || !userData.fullName) return;
    setUser(userData);
    setIsNewUser(registering);
    setIsLoggedIn(true);
    window.history.pushState({ inApp: true, tab: 'Dashboard' }, '');
    if (remember || registering) {
      localStorage.setItem('activeUser', JSON.stringify(userData));
    }
  };

  const logout = () => {
    localStorage.removeItem('activeUser');
    localStorage.removeItem('activeTab');
    setIsLoggedIn(false);
    setUser(null);
    setResumeFile(null);
    setResumeUploaded(false);
    window.history.pushState(null, '', '/');
  };

  const uploadResume = (file) => {
    setResumeFile(file);
    setResumeUploaded(true);
  };

  return (
    <AppContext.Provider value={{
      isLoggedIn, user, isNewUser,
      resumeFile, resumeUploaded,
      loading, login, logout, uploadResume
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);