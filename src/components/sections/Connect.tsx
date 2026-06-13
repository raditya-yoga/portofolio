import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Connect() {
  const networks = [
    {
      name: 'Email',
      value: 'radityogap@gmail.com',
      url: 'mailto:radityogap@gmail.com',
      icon: <Mail size={22} />,
      color: 'var(--primary)',
      desc: 'For professional inquiries, project collaborations, and leadership roles.'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/',
      url: 'https://linkedin.com/in/',
      icon: <LinkedinIcon size={22} />,
      color: 'var(--accent-violet)',
      desc: 'Connect with me for professional updates, networks, and design briefs.'
    },
    {
      name: 'GitHub',
      value: 'github.com/radit-yoga',
      url: 'https://github.com/radit-yoga',
      icon: <GithubIcon size={22} />,
      color: 'var(--accent-cyan)',
      desc: 'Browse my repositories, open source contributions, and web experiments.'
    },
    {
      name: 'WhatsApp',
      value: 'Chat on WhatsApp',
      url: 'https://wa.me/628123456789',
      icon: <MessageCircle size={22} />,
      color: '#10b981',
      desc: 'Reach out for instant, direct project text conversations.'
    }
  ];

  return (
    <section id="connect" style={{ background: 'var(--bg-darker)', paddingBottom: '10rem' }}>
      <div className="ambient-glow" style={{ bottom: '-10%', left: '50%', transform: 'translateX(-50%)', filter: 'blur(100px)' }} />

      <div className="container">
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div className="section-tag" style={{ margin: '0 auto 1.5rem auto' }}>
            <span className="dot"></span>
            Contact
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}
            className="text-gradient-white"
          >
            Let's Build Something Meaningful
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              color: 'var(--text-secondary)',
              marginBottom: '4rem',
              lineHeight: '1.6'
            }}
          >
            I am always open to discussing new web development projects, interactive UI/UX design concepts, collaborative leadership, or media production ideas. Reach out through my coordinates below.
          </p>

          {/* Networking Coordinates Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              textAlign: 'left'
            }}
            className="connect-grid"
          >
            {networks.map((net, idx) => (
              <motion.a
                key={net.name}
                href={net.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -5,
                  borderColor: net.color,
                  boxShadow: `0 10px 30px ${net.color}10`
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.25rem 2rem',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.01)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
                }}
              >
                {/* Visual Glow in corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '100px',
                    height: '100px',
                    background: `radial-gradient(circle, ${net.color}15 0%, rgba(0,0,0,0) 70%)`,
                    pointerEvents: 'none',
                    borderRadius: '50%'
                  }}
                />

                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: `${net.color}10`,
                      border: `1px solid ${net.color}25`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: net.color
                    }}
                  >
                    {net.icon}
                  </div>
                  <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} className="arrow-icon" />
                </div>

                {/* Text Content */}
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {net.name}
                </h3>
                <span style={{ fontSize: '0.85rem', color: net.color, fontWeight: 600, display: 'block', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  {net.value}
                </span>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginTop: 'auto' }}>
                  {net.desc}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Footer copyright */}
          <div
            style={{
              marginTop: '8rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.04)',
              paddingTop: '2.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              color: 'var(--text-muted)',
              fontSize: '0.8rem'
            }}
          >
            <span>&copy; {new Date().getFullYear()} Radit Yoga. All rights reserved.</span>
            <span>Handcoded in React &amp; TypeScript</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .connect-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
