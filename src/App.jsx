import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import FloatingContact from './components/FloatingContact';
import BookingModal from './components/BookingModal';
import SmileQuizModal from './components/SmileQuizModal';
import SmileSimulatorModal from './components/SmileSimulatorModal';

import HomePage from './pages/HomePage';
import SmileDesignPage from './pages/SmileDesignPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'smile-design':
        return (
          <SmileDesignPage 
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenQuiz={() => setIsQuizOpen(true)}
            onOpenSimulator={() => setIsSimulatorOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage 
            setActivePage={setActivePage}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage 
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage onOpenBooking={() => setIsBookingOpen(true)} />
        );
      case 'home':
      default:
        return (
          <HomePage 
            setActivePage={setActivePage}
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenQuiz={() => setIsQuizOpen(true)}
            onOpenSimulator={() => setIsSimulatorOpen(true)}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Background Animated Shapes & Glows */}
      <BackgroundShapes />

      {/* Glassmorphic Navbar */}
      <Navbar 
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 relative z-10">
        {renderCurrentPage()}
      </main>

      {/* Rich Branded Footer */}
      <Footer 
        setActivePage={setActivePage}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Quick Action Floating Controls */}
      <FloatingContact 
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <SmileQuizModal 
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <SmileSimulatorModal 
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </div>
  );
}
