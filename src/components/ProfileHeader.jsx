import React from 'react';

const ProfileHeader = () => {
  return (
    <section style={{
      backgroundColor: 'var(--roblox-card-bg)',
      borderRadius: 'var(--border-radius)',
      padding: '0 0 20px 0', /* Remove top padding, handle inside */
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Cover Image Placeholder */}
      <div style={{
        backgroundColor: '#111',
        height: '150px',
        width: '100%',
        backgroundImage: 'linear-gradient(45deg, #111 25%, #222 25%, #222 50%, #111 50%, #111 75%, #222 75%, #222 100%)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Avatar & Info Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        {/* Avatar - Negative margin to pull it up */}
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '4px solid var(--roblox-card-bg)',
          backgroundColor: '#333',
          overflow: 'hidden',
          marginBottom: '10px',
          marginTop: '-50px', /* Pull up */
          zIndex: 2,
          position: 'relative'
        }}>
           <img src="/img/award.svg" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', padding: '10px' }} />
        </div>

        <h1 style={{ margin: '0 0 5px 0', fontSize: '24px' }}>Riky Ermawan</h1>
        <p style={{ color: 'var(--roblox-text-secondary)', margin: '0 0 15px 0' }}>@FullStackDev • Joined 2024</p>

        <div style={{ maxWidth: '600px', margin: '0 auto 20px auto', lineHeight: '1.5' }}>
          <p>Building responsive, scalable web applications with React & Node.js.
          Currently leveling up my skills in modern web development.</p>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <a href="#projects" className="btn-roblox btn-primary">View Creations</a>
          <button className="btn-roblox btn-secondary">Message</button>
        </div>
      </div>

      {/* Statistics Strip */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '20px',
        margin: '0 20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>20+</div>
          <div style={{ color: '#888', fontSize: '12px' }}>Projects</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>1M+</div>
          <div style={{ color: '#888', fontSize: '12px' }}>Code Lines</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>100%</div>
          <div style={{ color: '#888', fontSize: '12px' }}>Satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
