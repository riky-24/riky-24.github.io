import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '40px 20px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      marginTop: '60px',
      textAlign: 'center',
      color: '#888',
      fontSize: '12px'
    }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>About Us</a>
        <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Jobs</a>
        <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Blog</a>
        <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Parents</a>
        <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Gift Cards</a>
      </div>

      <p>© 2024 Roblox Corporation. Roblox, the Roblox logo and Powering Imagination are among our registered and unregistered trademarks in the U.S. and other countries.</p>
      <p style={{ marginTop: '10px' }}>
          Portfolio recreated by <span style={{ color: 'white' }}>Riky Ermawan</span> for educational purposes.
      </p>
    </footer>
  );
};

export default Footer;
