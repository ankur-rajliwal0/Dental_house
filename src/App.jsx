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
  const [bookingService, setBookingService] = useState('Smile Design');

  const handleOpenBooking = (serviceName) => {
    if (serviceName && typeof serviceName === 'string') {
      setBookingService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'smile-design':
        return (
          <SmileDesignPage 
            onOpenBooking={() => handleOpenBooking('Smile Design')}
            onOpenQuiz={() => setIsQuizOpen(true)}
            onOpenSimulator={() => setIsSimulatorOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage 
            setActivePage={setActivePage}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'about':
        return (
          <AboutPage 
            onOpenBooking={() => handleOpenBooking('General Dental Consultation')}
          />
        );
      case 'contact':
        return (
          <ContactPage onOpenBooking={() => handleOpenBooking('General Dental Consultation')} />
        );
      case 'home':
      default:
        return (
          <HomePage 
            setActivePage={setActivePage}
            onOpenBooking={handleOpenBooking}
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
        onOpenBooking={() => handleOpenBooking('Smile Design')}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 relative z-10">
        {renderCurrentPage()}
      </main>

      {/* Rich Branded Footer */}
      <Footer 
        setActivePage={setActivePage}
        onOpenBooking={() => handleOpenBooking('Smile Design')}
      />

      {/* Quick Action Floating Controls */}
      <FloatingContact 
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenBooking={() => handleOpenBooking('Smile Design')}
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={isBookingOpen}
        defaultService={bookingService}
        onClose={() => setIsBookingOpen(false)}
      />

      <SmileQuizModal 
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOpenBooking={() => handleOpenBooking('Smile Design')}
      />

      <SmileSimulatorModal 
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        onOpenBooking={() => handleOpenBooking('Smile Design')}
      />
    </div>
  );
}
