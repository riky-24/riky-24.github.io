import React from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section>
       <div className="section-title">
        <span>Chat</span>
      </div>

      <div style={{
        backgroundColor: 'var(--roblox-card-bg)',
        borderRadius: 'var(--border-radius)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: '400px'
      }}>
        {/* Chat History Mockup */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '20px', paddingRight: '10px' }}>
            <div style={{ marginBottom: '15px' }}>
                <span style={{ color: '#00B06F', fontWeight: 'bold' }}>[System]: </span>
                <span style={{ color: '#ccc' }}>
                  Welcome to Riky's Portfolio! Send a message or email me at <a href="mailto:contact@rikydev.com" style={{ color: '#fff', textDecoration: 'underline' }}>contact@rikydev.com</a> to get in touch.
                </span>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <span style={{ color: '#00A2FF', fontWeight: 'bold' }}>[Riky_Dev]: </span>
                <span style={{ color: 'white' }}>Hi there! I'm currently open for freelance work. Drop your details below! #OpenToWork</span>
            </div>
        </div>

        {/* Input Area */}
        <form style={{ display: 'flex', gap: '10px', backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px' }} onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Type your message here..."
                style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    outline: 'none',
                    fontSize: '14px'
                }}
            />
            <button type="submit" style={{
                background: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 'bold'
            }}>
                Send <Send size={14} />
            </button>
        </form>
        <div style={{ fontSize: '11px', color: '#666', marginTop: '5px', textAlign: 'right' }}>
            To chat, click here or press the "/" key
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
