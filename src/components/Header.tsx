import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Creative Roots', id: 'creative-roots' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills & Tools', id: 'skills' },
    { label: 'Focus', id: 'focus' },
    { label: 'Beyond Tech', id: 'beyond-tech' }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for header height
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        zIndex: 100,
        transition: 'var(--transition-smooth)',
        background: scrolled ? 'rgba(5, 5, 8, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        padding: '0 2rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#ffffff',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('hero');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          PORTOFOLIO<span style={{ color: 'var(--primary)' }}>WEB</span>
        </a>

        {/* Desktop Menu */}
        <nav
          style={{
            display: 'flex',
            gap: '1.75rem',
            alignItems: 'center'
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'var(--transition-fast)',
                cursor: 'pointer'
              }}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('connect');
            }}
            className="btn btn-secondary"
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.75rem',
              borderRadius: '9999px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Connect
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '4px',
            display: 'none'
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 80px)',
            background: 'rgba(3, 3, 6, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '3rem 2rem',
            gap: '2rem',
            zIndex: 99,
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('connect');
            }}
            className="btn btn-primary"
            style={{
              marginTop: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
