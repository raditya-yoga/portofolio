import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Award, Flame, Terminal } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  const words = [
    { text: 'Code.', color: 'var(--accent-cyan)' },
    { text: 'Design.', color: 'var(--accent-violet)' },
    { text: 'Lead.', color: 'var(--primary)' },
    { text: 'Create.', color: '#ffffff' }
  ];

  const highlights = [
    {
      icon: <Award size={18} style={{ color: 'var(--primary)' }} />,
      label: 'National Videography Award Winner'
    },
    {
      icon: <Flame size={18} style={{ color: 'var(--accent-violet)' }} />,
      label: 'Former Student Council President'
    },
    {
      icon: <Terminal size={18} style={{ color: 'var(--accent-cyan)' }} />,
      label: 'Web Developer & UI/UX Designer'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        background: 'radial-gradient(circle at 50% 50%, rgba(13, 13, 22, 0.8) 0%, var(--bg-darker) 100%)'
      }}
    >
      <div className="ambient-glow" style={{ top: '10%', left: '25%', filter: 'blur(100px)' }} />
      <div className="ambient-glow-right" style={{ bottom: '15%', right: '15%', filter: 'blur(100px)' }} />
      
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Subtle Tagline */}
          <motion.div variants={itemVariants} className="section-tag">
            <span className="dot"></span>
            Multidisciplinary Portfolio
          </motion.div>

          {/* Cinematic Headline "Code. Design. Lead. Create." */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              fontWeight: 900,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem 1.5rem',
              maxWidth: '1000px',
              letterSpacing: '-0.03em',
              marginBottom: '2rem',
              fontFamily: 'var(--font-heading)'
            }}
          >
            {words.map((w, idx) => (
              <span
                key={idx}
                style={{
                  color: w.color,
                  textShadow: w.color !== '#ffffff' ? `0 0 40px ${w.color}15` : 'none'
                }}
              >
                {w.text}
              </span>
            ))}
          </motion.h1>

          {/* Emotional Pitch Intro */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              lineHeight: '1.6',
              marginBottom: '3.5rem'
            }}
          >
            Saya <strong style={{ color: '#ffffff' }}>Raditya Yoga</strong>, seorang pelajar yang menggabungkan presisi teknik, pengisahan cerita visual, dan kepemimpinan organisasi untuk menciptakan produk digital yang berkesan.
          </motion.p>

          {/* highlights strip */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              width: '100%',
              maxWidth: '900px',
              marginBottom: '4rem'
            }}
          >
            {highlights.map((h, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {h.icon}
                <span>{h.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              justifyContent: 'center'
            }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
              style={{ minWidth: '180px' }}
            >
              Explore Showcase
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection('creative-roots')}
              className="btn btn-secondary"
              style={{ minWidth: '180px' }}
            >
              Read My Journey
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic scroll down hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.5,
          zIndex: 2
        }}
      >
        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '2px', height: '15px', background: '#ffffff', borderRadius: '1px' }}
        />
      </div>
    </section>
  );
}
