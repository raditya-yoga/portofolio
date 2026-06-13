import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Camera, BookOpen, PenTool, Layout, Code2, ArrowRight } from 'lucide-react';

export default function CreativeRoots() {
  const steps = [
    {
      icon: <Camera size={24} style={{ color: 'var(--primary)' }} />,
      title: 'Videography',
      desc: 'Behind the camera, I learned composition, framing, and lighting. Guiding the viewer\'s eye in a 16:9 frame is the basis of visual hierarchy.',
      accent: 'var(--primary)'
    },
    {
      icon: <BookOpen size={24} style={{ color: 'var(--accent-violet)' }} />,
      title: 'Storytelling',
      desc: 'Filmmaking taught me how to construct emotional narrative arcs. Every digital product has a user journey—an interface is just a story told through action.',
      accent: 'var(--accent-violet)'
    },
    {
      icon: <PenTool size={24} style={{ color: 'var(--accent-cyan)' }} />,
      title: 'Visual Design',
      desc: 'Applying cinematography principles (color theory, balance, negative space) to digital layouts. Transitioning from video pixels to grid structures.',
      accent: 'var(--accent-cyan)'
    },
    {
      icon: <Layout size={24} style={{ color: '#10b981' }} />,
      title: 'UI/UX Design',
      desc: 'Connecting storytelling with user behavior. I map out intuitive interactive blueprints, ensuring the layout responds seamlessly to human intention.',
      accent: '#10b981'
    },
    {
      icon: <Code2 size={24} style={{ color: '#f59e0b' }} />,
      title: 'Web Development',
      desc: 'The ultimate realization of a concept. Bringing high-fidelity designs to life with TypeScript and React—turning stories into functional, high-performance systems.',
      accent: '#f59e0b'
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="creative-roots" style={{ background: 'var(--bg-dark)' }}>
      <div className="ambient-glow" style={{ top: '-10%', left: '50%', filter: 'blur(120px)' }} />
      
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            Evolution
          </div>
          <h2 className="section-title text-gradient-white">Creative Roots</h2>
          <p className="section-subtitle">
            How filmmaking, narrative structure, and visual composition directly shaped my approach to designing and developing digital products.
          </p>
        </div>

        {/* Narrative Flow Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            position: 'relative'
          }}
        >
          {/* Main Story Overview Card */}
          <motion.div
            variants={cardVariants}
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              borderLeft: '4px solid var(--primary)',
              background: 'linear-gradient(135deg, rgba(255, 0, 60, 0.02) 0%, rgba(13, 13, 22, 0.6) 100%)'
            }}
          >
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#ffffff' }}>
              "My journey started behind a lens."
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '900px' }}>
              Videography was my first playground. Capturing light and framing scenes taught me the core fundamentals of design long before I ever wrote a line of HTML. It taught me that <strong>every pixel has a purpose</strong>, that movement must be intentional, and that user experience is simply another form of storytelling. Today, I translate the pacing, timing, and composition from filmmaking into web layouts and functional code.
            </p>
          </motion.div>

          {/* Interactive Steps Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1rem'
            }}
            className="roots-timeline-grid"
          >
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card"
                whileHover={{ y: -8, borderColor: s.accent }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.015)',
                  minHeight: '280px'
                }}
              >
                <div
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: `${s.accent}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  {s.icon}
                </div>
                
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {idx + 1}. {s.title}
                </h4>
                
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.5', flexGrow: 1 }}>
                  {s.desc}
                </p>

                {idx < 4 && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '-12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 5,
                      color: 'rgba(255, 255, 255, 0.15)'
                    }}
                    className="roots-arrow"
                  >
                    <ArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add CSS responsive overrides specifically for the Creative Roots timeline in index.css */}
      <style>{`
        @media (max-width: 1100px) {
          .roots-timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .roots-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
