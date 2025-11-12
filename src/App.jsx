import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatWidget from './components/layout/ChatWidget';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Outlet renders the current route's component (e.g., HomePage, ServicesPage) */}
      <main>
        <Outlet />
      </main>

      <Footer />

      <ChatWidget chatOpen={chatOpen} setChatOpen={setChatOpen} />
    </div>
  );
}

export default App;