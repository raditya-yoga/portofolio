import { motion } from 'framer-motion';
import { Shield, Users, Camera, Landmark, Award } from 'lucide-react';

export default function LeadershipTimeline() {
  const timelineData = [
    {
      year: '2022 – 2023',
      role: 'Student Council Secretary',
      org: 'OSIS (Student Council)',
      icon: <Landmark size={20} style={{ color: 'var(--accent-cyan)' }} />,
      color: 'var(--accent-cyan)',
      details: [
        'Managed documentation, school communications, and administrative files.',
        'Laid organizational blueprints for annual student events and budget planning.',
        'Bridged communication between faculty advisors and student representatives.'
      ]
    },
    {
      year: '2023',
      role: 'Co-Founder',
      org: 'Videography Club',
      icon: <Camera size={20} style={{ color: 'var(--primary)' }} />,
      color: 'var(--primary)',
      details: [
        'One of five students who conceptualized and established the club.',
        'Drafted the club charter and designed the inaugural hands-on training curriculum.',
        'Secured camera resources and equipment sponsorships for junior members.'
      ]
    },
    {
      year: '2023 – 2024',
      role: 'Student Council President / Chairman',
      org: 'OSIS (Student Council)',
      icon: <Shield size={20} style={{ color: 'var(--accent-violet)' }} />,
      color: 'var(--accent-violet)',
      details: [
        'Led student administration, spearheading community and school-wide programs.',
        'Chaired assemblies, coordinated multi-departmental project squads, and managed resources.',
        'Delivered public speeches, representing student voices directly to school management.'
      ]
    },
    {
      year: '2023 – 2025',
      role: 'Videography Club Chairman',
      org: 'Videography Club',
      icon: <Users size={20} style={{ color: '#10b981' }} />,
      color: '#10b981',
      details: [
        'Directed overall club activities and weekly filmmaking workshops.',
        'Coordinated production crews for regional and national videography events.',
        'Mentored members on composition, cinematic editing, and story structure.'
      ]
    }
  ];

  const softSkills = [
    { name: 'Organizational Leadership', desc: 'Running student bodies and teams, managing timelines, budgets, and operational goals.' },
    { name: 'Public Speaking', desc: 'Presenting ideas confidently to large assemblies, administrators, and audiences.' },
    { name: 'Team Management', desc: 'Coordinating diverse student groups, fostering cooperation, and mentoring junior talents.' },
    { name: 'Communication', desc: 'Structuring clear documents, visual briefs, and bridging stakeholders.' }
  ];

  return (
    <section id="leadership" style={{ background: 'var(--bg-darker)' }}>
      <div className="ambient-glow" style={{ top: '20%', left: '10%', filter: 'blur(100px)' }} />
      <div className="ambient-glow-right" style={{ bottom: '20%', right: '10%', filter: 'blur(110px)' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            Leadership
          </div>
          <h2 className="section-title text-gradient-white">Journey Evolution</h2>
          <p className="section-subtitle">
            Leading teams, establishing organizations, and managing projects. A timeline of how governance and collaborative production refined my soft skills.
          </p>
        </div>

        {/* Outer Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1.2fr',
            gap: '4rem',
            alignItems: 'start'
          }}
          className="leadership-split"
        >
          {/* Left Side: Timeline */}
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Vertical Line */}
            <div
              style={{
                position: 'absolute',
                left: '8px',
                top: '10px',
                bottom: '10px',
                width: '2px',
                background: 'linear-gradient(to bottom, var(--accent-cyan) 0%, var(--primary) 30%, var(--accent-violet) 70%, #10b981 100%)',
                opacity: 0.25
              }}
            />

            {/* Timeline Nodes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
              {timelineData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline Point Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-28px',
                      top: '6px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'var(--bg-darker)',
                      border: `3px solid ${item.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3,
                      boxShadow: `0 0 10px ${item.color}50`
                    }}
                  />

                  {/* Content Container */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '2rem',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.01)',
                      border: '1px solid rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    {/* Header */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: item.color,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}
                        >
                          {item.org}
                        </span>
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            color: '#ffffff',
                            marginTop: '0.25rem'
                          }}
                        >
                          {item.role}
                        </h3>
                      </div>
                      <span
                        className="glass-card"
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          padding: '0.35rem 0.85rem',
                          borderRadius: '9999px',
                          color: '#ffffff',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Bullet List Details */}
                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        padding: 0
                      }}
                    >
                      {item.details.map((detail, index) => (
                        <li
                          key={index}
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)',
                            paddingLeft: '1.25rem',
                            position: 'relative',
                            lineHeight: '1.5'
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: 0,
                              top: '7px',
                              width: '4px',
                              height: '4px',
                              borderRadius: '50%',
                              background: item.color
                            }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Governance & Soft Skills Panel */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Award style={{ color: 'var(--primary)' }} />
                Core Competencies
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}
              >
                Managing student organizations and filmmaking crews taught me how to structure processes, align interests, and inspire action. These soft skills form the foundation of my engineering collaborative style.
              </p>

              {/* Skills Grid */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                {softSkills.map((skill, index) => (
                  <div key={index}>
                    <h4
                      style={{
                        fontSize: '1rem',
                        color: '#ffffff',
                        fontWeight: 600,
                        marginBottom: '0.25rem'
                      }}
                    >
                      {skill.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.4'
                      }}
                    >
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .leadership-split {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          div[style*="position: sticky"] {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
