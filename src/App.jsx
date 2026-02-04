import React from 'react';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProjectGrid from './components/ProjectGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <ProfileHeader />

        <div id="projects" style={{ marginTop: '40px' }}>
          <ProjectGrid />
        </div>

        <div id="contact" style={{ marginTop: '40px' }}>
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
