import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Both Auth Providers
import { AuthProvider } from './contexts/AuthContext';
import { ProviderAuthProvider } from './contexts/ProviderAuthContext';

import App from './App.jsx';
import './index.css';

// Import Client Pages
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import PackagesPage from './pages/PackagesPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';
import ServiceDetailPage from './pages/ServiceDetailPage.jsx';
import ProviderListPage from './pages/ProviderListPage.jsx';

// NEW PACKAGE PAGE IMPORTS
import StarterPackagePage from './pages/StarterPackagePage.jsx';
import PremiumPackagePage from './pages/PremiumPackagePage.jsx';
import LuxuryPackagePage from './pages/LuxuryPackagePage.jsx';

// Import Provider Pages
import ProviderLayout from './components/layout/ProviderLayout.jsx';
import ProviderLoginPage from './pages/ProviderLoginPage.jsx';
import ProviderRegisterPage from './pages/ProviderRegisterPage.jsx';
import ProviderDashboardPage from './pages/ProviderDashboardPage.jsx';
import ProviderOrdersPage from './pages/ProviderOrdersPage.jsx';
import ProviderAnalyticsPage from './pages/ProviderAnalyticsPage.jsx';
import ProviderAccountPage from './pages/ProviderAccountPage.jsx';
import ProviderProtectedRoute from './components/common/ProviderProtectedRoute.jsx';

const router = createBrowserRouter([
  // --- Client Routes ---
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/packages', element: <PackagesPage /> },
      // NEW PACKAGE ROUTES:
      { path: '/packages/starter', element: <StarterPackagePage /> },
      { path: '/packages/premium', element: <PremiumPackagePage /> },
      { path: '/packages/luxury', element: <LuxuryPackagePage /> },
      
      { path: '/services', element: <ServicesPage /> },
      { path: '/service/:serviceId', element: <ServiceDetailPage /> },
      { path: '/providers', element: <ProviderListPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      {
        element: <ProtectedRoute />, // Client protection
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
        ],
      },
    ],
  },
  
  // --- Provider Routes ---
  {
    path: '/provider/login',
    element: <ProviderLoginPage />,
  },
  {
    path: '/provider/register',
    element: <ProviderRegisterPage />,
  },
  {
    path: '/provider',
    element: <ProviderProtectedRoute />, // Protects all provider pages
    children: [
      {
        element: <ProviderLayout />, // The layout with the Provider Navbar
        children: [
          { path: 'dashboard', element: <ProviderDashboardPage /> },
          { path: 'orders', element: <ProviderOrdersPage /> },
          { path: 'analytics', element: <ProviderAnalyticsPage /> },
          { path: 'account', element: <ProviderAccountPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Nest Both Providers */}
    <AuthProvider>
      <ProviderAuthProvider>
        <RouterProvider router={router} />
      </ProviderAuthProvider>
    </AuthProvider>
  </React.StrictMode>,
);