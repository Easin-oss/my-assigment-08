
import React from 'react';
// Import Outlet, which renders the child routes
import { useNavigation, Outlet } from 'react-router-dom'; 
import { Toaster } from 'react-hot-toast';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  // 1. Get navigation state (this will work now)
  const navigation = useNavigation();

  return (
    <div>
      {/* Component for showing toasts */}
      <Toaster position="top-right" />

      {/* Show a global loader if navigating between pages */}
      {navigation.state === 'loading' && <div className="global-loader">Loading...</div>}

      {/* Main Layout */}
      <Header />
      
      <main>
        {/* 2. <Outlet /> renders the correct page (Home, AllApps, etc.) */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;