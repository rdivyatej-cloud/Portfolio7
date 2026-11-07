import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { DoorDetailPage } from './pages/DoorDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/door/:doorId" element={<DoorDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default App;
