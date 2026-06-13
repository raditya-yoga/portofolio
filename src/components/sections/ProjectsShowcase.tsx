import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Award } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  challenge: string;
  process: string;
  solution: string;
  impact: string;
  accent: string;
  visualType: 'ar' | 'ramen' | 'campus';
}

export default function ProjectsShowcase() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const projects: Project[] = [
    {
      id: 'aria',
      title: 'ARIA',
      tagline: 'Web-Based Augmented Reality Platform',
      category: 'Design & Engineering',
      tags: ['React', 'TypeScript', 'Three.js', 'WebXR', 'Vanilla CSS'],
      challenge: 'Traditional augmented reality experiences require heavy native app installations, creating friction for users and limiting web accessibility.',
      process: 'Studied WebXR standards and spatial transformations. Designed a custom viewport framework integrating Three.js to render low-latency 3D GLTF assets on lightweight canvas interfaces.',
      solution: 'Developed a native Web-AR engine featuring instant tap-to-place coordinates, ambient occlusion shadows, and gesture-controlled rotation directly within default mobile browsers.',
      impact: 'Eliminated native app downloads completely, reducing user onboarding steps by 100% and boosting mobile WebXR performance to 60fps.',
      accent: 'var(--accent-cyan)',
      visualType: 'ar'
    },
    {
      id: 'akira',
      title: 'AKIRA',
      tagline: 'Ramen Ordering Web Experience',
      category: 'UI/UX Design Case Study',
      tags: ['Figma', 'User Research', 'Design Systems', 'Interactive Prototype'],
      challenge: 'Digital food ordering interfaces often feel clinical and fail to convey the sensory craftsmanship of dining, leading to flat conversion rates.',
      process: 'Conducted user interviews to analyze online menu exploration habits. Designed a custom ingredient configurator that mimics physical ramen assembly, using rich visual cards and layout grids.',
      solution: 'Created an premium dark-mode interface featuring step-by-step ramen customization: selecting broth density, noodle bite-levels, and visual toppings inside an interactive builder.',
      impact: 'Designed a flow that raised simulated task-completion speed by 35% and cut basket dropoff rate in user test trials.',
      accent: 'var(--primary)',
      visualType: 'ramen'
    },
    {
      id: 'polines',
      title: 'POLINES Lost & Found',
      tagline: 'Unified Campus Recovery System',
      category: 'UI/UX Design Case Study',
      tags: ['Figma', 'UX Research', 'Information Architecture', 'Wireframes'],
      challenge: 'Campus-wide lost items were coordinated across fragmented messaging groups, causing low item recovery rates and security risks.',
      process: 'Mapped campus user flows and item classification nodes. Designed a mobile-first directory structure, focusing on verification security and streamlined search queries.',
      solution: 'Designed a verified campus lost-and-found application with categories, instant search filters, item verification forms, and a secure inbox for owner-finder coordination.',
      impact: 'Developed a system showing 90% usability scores in student feedback loops, significantly improving predicted recovery success rates.',
      accent: 'var(--accent-violet)',
      visualType: 'campus'
    }
  ];

  return (
    <section id="projects" style={{ background: 'var(--bg-darker)' }}>
      <div className="ambient-glow" style={{ top: '30%', left: '5%', filter: 'blur(100px)' }} />
      <div className="ambient-glow-right" style={{ bottom: '10%', right: '5%', filter: 'blur(110px)' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            Featured Launches
          </div>
          <h2 className="section-title text-gradient-white">Projects Showcase</h2>
          <p className="section-subtitle">
            Case studies of digital products developed at the intersection of design architecture and visual storytelling.
          </p>
        </div>

        {/* Project Tabs Selector */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}
        >
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProjectIdx(idx)}
              style={{
                background: activeProjectIdx === idx ? p.accent : 'rgba(255, 255, 255, 0.02)',
                color: activeProjectIdx === idx ? '#ffffff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeProjectIdx === idx ? p.accent : 'rgba(255, 255, 255, 0.06)',
                padding: '0.75rem 1.75rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                transition: 'var(--transition-fast)',
                boxShadow: activeProjectIdx === idx ? `0 4px 20px ${p.accent}30` : 'none'
              }}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Display Active Project */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProjectIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '4rem',
              alignItems: 'center'
            }}
            className="projects-grid"
          >
            {/* Left Column: Coded Abstract Mockup */}
            <div style={{ position: 'relative' }}>
              <div
                className="glass-card"
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '24px',
                  background: 'rgba(13, 13, 22, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent Background Glow */}
                <div
                  style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    background: `radial-gradient(circle, ${projects[activeProjectIdx].accent}15 0%, rgba(0,0,0,0) 75%)`,
                    pointerEvents: 'none',
                    filter: 'blur(30px)'
                  }}
                />

                {/* Render Coded UI mockup based on type */}
                {projects[activeProjectIdx].visualType === 'ar' && (
                  <MockupAR accent={projects[activeProjectIdx].accent} />
                )}
                {projects[activeProjectIdx].visualType === 'ramen' && (
                  <MockupRamen accent={projects[activeProjectIdx].accent} />
                )}
                {projects[activeProjectIdx].visualType === 'campus' && (
                  <MockupCampus accent={projects[activeProjectIdx].accent} />
                )}
              </div>
            </div>

            {/* Right Column: Case Study Storytelling */}
            <div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: projects[activeProjectIdx].accent,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}
              >
                {projects[activeProjectIdx].category}
              </span>
              <h3
                style={{
                  fontSize: '2.25rem',
                  color: '#ffffff',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                  lineHeight: '1.2'
                }}
              >
                {projects[activeProjectIdx].title}
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {projects[activeProjectIdx].tagline}
              </p>

              {/* Tech Stack Chips */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2.5rem'
                }}
              >
                {projects[activeProjectIdx].tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Case Study Details Stack */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: projects[activeProjectIdx].accent }} />
                    The Challenge
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '0.75rem', lineHeight: '1.5' }}>
                    {projects[activeProjectIdx].challenge}
                  </p>
                </div>

                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: projects[activeProjectIdx].accent }} />
                    The Process
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '0.75rem', lineHeight: '1.5' }}>
                    {projects[activeProjectIdx].process}
                  </p>
                </div>

                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: projects[activeProjectIdx].accent }} />
                    The Solution
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '0.75rem', lineHeight: '1.5' }}>
                    {projects[activeProjectIdx].solution}
                  </p>
                </div>

                <div
                  className="glass-card"
                  style={{
                    background: `${projects[activeProjectIdx].accent}05`,
                    borderColor: `${projects[activeProjectIdx].accent}15`,
                    padding: '1.25rem',
                    borderRadius: '12px',
                    marginTop: '0.5rem'
                  }}
                >
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Award size={16} style={{ color: projects[activeProjectIdx].accent }} />
                    Impact Metrics
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', paddingLeft: '0.25rem', fontWeight: 500, lineHeight: '1.4' }}>
                    {projects[activeProjectIdx].impact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------
 * MOCKUP SUB-COMPONENTS
 * Layered CSS layouts mimicking visual states of ARIA, AKIRA, and POLINES
 * ------------------------------------------------------------- */

function MockupAR({ accent }: { accent: string }) {
  return (
    <div
      style={{
        width: '80%',
        maxWidth: '300px',
        height: '90%',
        background: '#09090e',
        borderRadius: '24px',
        border: '4px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2
      }}
    >
      {/* AR Camera Grid lines */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.15, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', pointerEvents: 'none' }}>
        <div style={{ borderRight: '1px dashed #ffffff', borderBottom: '1px dashed #ffffff' }} />
        <div style={{ borderRight: '1px dashed #ffffff', borderBottom: '1px dashed #ffffff' }} />
        <div style={{ borderBottom: '1px dashed #ffffff' }} />
        <div style={{ borderRight: '1px dashed #ffffff', borderBottom: '1px dashed #ffffff' }} />
        <div style={{ borderRight: '1px dashed #ffffff', borderBottom: '1px dashed #ffffff' }} />
        <div style={{ borderBottom: '1px dashed #ffffff' }} />
        <div style={{ borderRight: '1px dashed #ffffff' }} />
        <div style={{ borderRight: '1px dashed #ffffff' }} />
      </div>

      {/* AR Reticle Circle */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          border: `2px dashed ${accent}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.85
        }}
      >
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accent }} />
      </div>

      {/* Abstract 3D shape projection */}
      <div
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80px',
          height: '80px',
          background: `linear-gradient(135deg, ${accent} 0%, rgba(139, 92, 246, 0.4) 100%)`,
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          boxShadow: `0 0 30px ${accent}40`,
          animation: 'rotateShape 8s linear infinite'
        }}
      />

      {/* UI Overlay */}
      <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(5, 5, 8, 0.85)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative', zIndex: 3 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#ffffff' }}>Object: Spatial_Cube_02</span>
          <span style={{ fontSize: '0.6rem', color: accent, background: `${accent}15`, padding: '0.15rem 0.4rem', borderRadius: '4px' }}>WebXR Active</span>
        </div>
        <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ width: '70%', height: '100%', background: accent }} />
        </div>
      </div>
      
      <style>{`
        @keyframes rotateShape {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function MockupRamen({ accent }: { accent: string }) {
  return (
    <div
      style={{
        width: '85%',
        height: '85%',
        background: '#0a0a0f',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.25rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
      }}
    >
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.05em' }}>AKIRA_</span>
        <div style={{ width: '25px', height: '12px', borderRadius: '6px', background: `${accent}20`, border: `1px solid ${accent}`, fontSize: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>$</div>
      </div>

      {/* Main product view */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem', flexGrow: 1 }}>
        {/* Visual ramen bowl card */}
        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '12px', padding: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          {/* Abstract bowl circle overlay */}
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(45deg, #181824 0%, #0d0d12 100%)', border: `2px solid ${accent}`, display: 'flex', alignItems: 'center', justifyItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Noodles lines */}
            <div style={{ width: '50px', height: '2px', background: '#eab308', transform: 'rotate(20deg) translate(5px, 15px)', opacity: 0.8 }} />
            <div style={{ width: '50px', height: '2px', background: '#eab308', transform: 'rotate(-10deg) translate(8px, 25px)', opacity: 0.8 }} />
            <div style={{ width: '50px', height: '2px', background: '#eab308', transform: 'rotate(40deg) translate(-2px, 35px)', opacity: 0.8 }} />
            {/* Topping spot */}
            <div style={{ position: 'absolute', width: '15px', height: '15px', borderRadius: '50%', background: accent, top: '20px', left: '25px' }} />
          </div>
          <span style={{ fontSize: '0.6rem', color: '#ffffff', fontWeight: 600, marginTop: '0.5rem' }}>Tokyo Tonkotsu</span>
        </div>

        {/* Configuration list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.5rem', color: 'var(--text-muted)' }}>BROTH STRENGTH</span>
            <div style={{ display: 'flex', gap: '2px', marginTop: '2px' }}>
              <div style={{ width: '15px', height: '3px', background: accent }} />
              <div style={{ width: '15px', height: '3px', background: accent }} />
              <div style={{ width: '15px', height: '3px', background: 'rgba(255,255,255,0.1)' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.5rem', color: 'var(--text-muted)' }}>NOODLE BITE</span>
            <div style={{ display: 'flex', gap: '2px', marginTop: '2px' }}>
              <div style={{ width: '15px', height: '3px', background: accent }} />
              <div style={{ width: '15px', height: '3px', background: accent }} />
              <div style={{ width: '15px', height: '3px', background: accent }} />
            </div>
          </div>
          <button style={{ width: '100%', height: '20px', border: 'none', background: accent, color: '#ffffff', borderRadius: '4px', fontSize: '0.55rem', fontWeight: 600, marginTop: '0.25rem', cursor: 'default' }}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function MockupCampus({ accent }: { accent: string }) {
  return (
    <div
      style={{
        width: '80%',
        maxWidth: '280px',
        height: '92%',
        background: '#08080c',
        borderRadius: '24px',
        border: '3px solid rgba(255,255,255,0.08)',
        boxShadow: '0 20px 45px rgba(0,0,0,0.7)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {/* App title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Smartphone size={10} style={{ color: accent }} />
          POLINES L&F
        </span>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
      </div>

      {/* Search Bar */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', padding: '0.35rem 0.5rem', fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
        Search items (e.g. key, folder)...
      </div>

      {/* Feed list items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1, overflow: 'hidden' }}>
        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: `${accent}10`, border: `1px solid ${accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>🔑</div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.6rem', color: '#ffffff', fontWeight: 600 }}>Honda Motorcycle Key</span>
              <span style={{ fontSize: '0.5rem', color: accent }}>Active</span>
            </div>
            <span style={{ fontSize: '0.5rem', color: 'var(--text-secondary)' }}>Library Room 3 • Found 2h ago</span>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center', opacity: 0.75 }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>📁</div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.6rem', color: '#ffffff', fontWeight: 600 }}>Black Document Holder</span>
              <span style={{ fontSize: '0.5rem', color: 'var(--text-muted)' }}>Claimed</span>
            </div>
            <span style={{ fontSize: '0.5rem', color: 'var(--text-secondary)' }}>Canteen Annex • Found 1d ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
