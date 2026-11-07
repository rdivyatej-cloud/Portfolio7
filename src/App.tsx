import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { DoorDetailPage } from './pages/DoorDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoaderOverlay } from './components/LoaderOverlay';
import { AnimatePresence } from 'framer-motion';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(() => {
    return sessionStorage.getItem('visited_portfolio') === 'true';
  });

  const handleEnter = () => {
    sessionStorage.setItem('visited_portfolio', 'true');
    setHasEntered(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <LoaderOverlay onComplete={handleEnter} />
        )}
      </AnimatePresence>

      <HashRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/door/:doorId" element={<DoorDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </HashRouter>
    </>
  );
};

export default App;
