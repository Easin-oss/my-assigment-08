
import React from 'react';
import { useNavigation, Outlet } from 'react-router-dom'; 
import { Toaster } from 'react-hot-toast';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  
  const navigation = useNavigation();

  return (
    <div>
    
      <Toaster position="top-right" />


      {navigation.state === 'loading' && <div className="global-loader">Loading...</div>}

     
      <Header />
      
      <main>
        
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;