'use client';

import { useState, useEffect, useRef } from 'react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Precipitated Silica',
    message: '',
  });

  const dialogRef = useRef(null);
  const firstInputRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    const handleTrigger = (e) => {
      const target = e.target.closest('.rivanta-connect-primary, [data-contact-trigger]');
      if (target) {
        e.preventDefault();
        previousActiveElement.current = document.activeElement;
        setIsOpen(true);
        setIsSubmitted(false);
        setCopied(false);
      }
    };

    const handleCustomOpen = (e) => {
      previousActiveElement.current = document.activeElement;
      if (e.detail?.interest) {
        setFormData((prev) => ({ ...prev, interest: e.detail.interest }));
      }
      setIsOpen(true);
      setIsSubmitted(false);
      setCopied(false);
    };

    document.addEventListener('click', handleTrigger);
    window.addEventListener('rivanta:open-contact', handleCustomOpen);

    return () => {
      document.removeEventListener('click', handleTrigger);
      window.removeEventListener('rivanta:open-contact', handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Pause GSAP smoother scroll if active
      window.rivantaScroll?.smoother?.paused(true);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      // Focus first input
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
        // Focus trap
        if (e.key === 'Tab' && dialogRef.current) {
          const focusable = dialogRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      window.rivantaScroll?.smoother?.paused(false);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus({ preventScroll: true });
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const mailtoUrl = `mailto:info@rivantagreen.com?subject=${encodeURIComponent(
    `Rivanta Inquiry: ${formData.interest} - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
  )}`;

  const handleCopy = () => {
    const text = `Inquiry to Rivanta Green Innovative Ventures Private Limited\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nInterest: ${formData.interest}\nMessage: ${formData.message}`;
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.82)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal Dialog */}
      <div
        ref={dialogRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#161616',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: '4px',
          padding: '2rem',
          color: '#ffffff',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.7)',
          fontFamily: 'inherit',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close contact dialog"
          type="button"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: '#aaaaaa',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#aaaaaa')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <p
                style={{
                  color: '#ed730c',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  margin: '0 0 0.5rem 0',
                }}
              >
                Build With Rivanta
              </p>
              <h2
                id="contact-modal-title"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Talk to the Rivanta Team
              </h2>
              <p style={{ color: '#aaaaaa', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                Connect regarding industrial materials, sustainable fuels, renewable gas, or agricultural residue aggregation.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c4c4c4', marginBottom: '0.25rem', fontWeight: 600 }}
                >
                  Full Name *
                </label>
                <input
                  ref={firstInputRef}
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Sharma"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#0e0e0e',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '2px',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#ed730c')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.16)')}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c4c4c4', marginBottom: '0.25rem', fontWeight: 600 }}
                  >
                    Work Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#0e0e0e',
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                      borderRadius: '2px',
                      color: '#ffffff',
                      fontSize: '0.9375rem',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#ed730c')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.16)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c4c4c4', marginBottom: '0.25rem', fontWeight: 600 }}
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98930 15375"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#0e0e0e',
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                      borderRadius: '2px',
                      color: '#ffffff',
                      fontSize: '0.9375rem',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#ed730c')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.16)')}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-interest"
                  style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c4c4c4', marginBottom: '0.25rem', fontWeight: 600 }}
                >
                  Area of Interest
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#0e0e0e',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '2px',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    boxSizing: 'border-box',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#ed730c')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.16)')}
                >
                  <option value="Precipitated Silica">Precipitated Silica</option>
                  <option value="Sustainable Aviation Fuel">Sustainable Aviation Fuel (SAF)</option>
                  <option value="EDSP / EOCM">EDSP / EOCM (Renewable Gas)</option>
                  <option value="Biomass Sourcing & Aggregation">Biomass Sourcing &amp; Aggregation</option>
                  <option value="Integrated Campus & Utilities">Integrated Campus &amp; Utilities</option>
                  <option value="Corporate / Partnership Inquiry">General Partnership Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c4c4c4', marginBottom: '0.25rem', fontWeight: 600 }}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your technical requirements, volume availability, or inquiry..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#0e0e0e',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '2px',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    boxSizing: 'border-box',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#ed730c')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.16)')}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#ed730c',
                    color: '#000000',
                    border: 'none',
                    padding: '0.875rem 2rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                  }}
                >
                  Submit Inquiry
                </button>
                <span style={{ fontSize: '0.75rem', color: '#888888' }}>
                  Direct desk: +91 98930 15375
                </span>
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(237, 115, 12, 0.15)',
                color: '#ed730c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: '1.375rem', margin: '0 0 0.5rem', color: '#ffffff' }}>
              Inquiry Prepared
            </h3>
            <p style={{ color: '#c4c4c4', fontSize: '0.9375rem', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              Thank you, <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Your message regarding{' '}
              <span style={{ color: '#ed730c' }}>{formData.interest}</span> is ready to transmit to the Rivanta corporate desk.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <a
                href={mailtoUrl}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ed730c',
                  color: '#000000',
                  padding: '0.875rem 1.5rem',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                }}
              >
                Send via Email Client
              </a>
              <button
                type="button"
                onClick={handleCopy}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                }}
              >
                {copied ? '✓ Copied to Clipboard' : '📋 Copy Inquiry Details'}
              </button>
            </div>

            <p style={{ fontSize: '0.75rem', color: '#888888', margin: 0 }}>
              Corporate Desk: info@rivantagreen.com | +91 98930 15375
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
