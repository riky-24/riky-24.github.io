import React, { useState } from 'react';
import { Menu, X, Search, Bell } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      backgroundColor: 'var(--roblox-header-bg)',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      boxSizing: 'border-box',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a href="#" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: '900',
          letterSpacing: '0.5px'
        }}>
          ROBLOX<span style={{ fontWeight: '400', opacity: 0.7 }}>DEV</span>
        </a>

        <div className="desktop-nav" style={{ display: 'flex', gap: '20px', marginLeft: '20px' }}>
          {['Home', 'Games', 'Create', 'Robux'].map((item) => (
             <a key={item} href={`#${item.toLowerCase()}`} style={{
               color: 'white',
               textDecoration: 'none',
               fontWeight: '600',
               fontSize: '15px'
             }}>
               {item}
             </a>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{
          background: '#232527',
          padding: '8px 12px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #555'
        }}>
          <Search size={16} color="#888" />
          <input
            type="text"
            placeholder="Search"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              marginLeft: '8px',
              outline: 'none',
              width: '150px'
            }}
          />
        </div>
        <Bell size={24} color="white" style={{ cursor: 'pointer' }} />
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#00B06F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold'
        }}>
          RE
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>

      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '60px',
          left: 0,
          width: '100%',
          backgroundColor: '#232527',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
        }}>
          {['Home', 'Games', 'Create', 'Robux'].map((item) => (
             <a key={item} href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                style={{
               color: 'white',
               textDecoration: 'none',
               fontWeight: '600',
               fontSize: '16px',
               padding: '10px',
               borderRadius: '4px',
               backgroundColor: 'rgba(255,255,255,0.05)'
             }}>
               {item}
             </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
