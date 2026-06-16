import { motion } from 'framer-motion';
import { Code, Database, Hammer, CheckCircle } from 'lucide-react';

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

export default function SkillsDashboard() {
  const skillsData: SkillGroup[] = [
    {
      title: 'Frontend Engineering',
      icon: <Code size={20} />,
      color: 'var(--accent-cyan)',
      skills: ['JavaScript', 'HTML5', 'CSS3 / Vanilla CSS',]
    },
    {
      title: 'Backend & Databases',
      icon: <Database size={20} />,
      color: 'var(--primary)',
      skills: ['Node.js', 'PHP', 'MongoDB', 'MySQL',]
    },
    {
      title: 'Tools & Creative Design',
      icon: <Hammer size={20} />,
      color: 'var(--accent-violet)',
      skills: ['Figma', 'Git', 'GitHub', 'VS Code', 'Adobe Premiere Pro', 'UI Design Systems', 'Canva']
    }
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-dark)' }}>
      <div className="ambient-glow" style={{ top: '-10%', left: '50%', filter: 'blur(100px)' }} />
      <div className="ambient-glow-right" style={{ bottom: '-10%', right: '20%', filter: 'blur(120px)' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            Capacities
          </div>
          <h2 className="section-title text-gradient-white">Skills & Tools</h2>
          <p className="section-subtitle">
            Gambaran menyeluruh tentang kumpulan teknologi, alur kerja coding, hingga perangkat desain kreatif yang biasa saya gunakan sehari-hari.
          </p>
        </div>

        {/* Dashboards Grid */}
        <div className="grid-3" style={{ gap: '2.5rem' }}>
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              className="glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, borderColor: 'rgba(255, 255, 255, 0.08)' }}
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.015)',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '380px'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '2rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: `${group.color}15`,
                    border: `1px solid ${group.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: group.color
                  }}
                >
                  {group.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700 }}>
                  {group.title}
                </h3>
              </div>

              {/* Description helper text */}
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.5' }}>
                {idx === 0 && 'Fokus membangun tampilan web yang interaktif, responsif, dan nyaman digunakan dari sisi pengguna, dengan struktur kode yang rapi dan mudah dikembangkan.'}
                {idx === 1 && 'Mengelola bagian belakang layar, mulai dari bikin database (relasional & non-relasional), sampai mastiin logika sistem berjalan dengan lancar.'}
                {idx === 2 && 'Terbiasa menggunakan Figma untuk membuat sistem desain dan prototipe web, Git/GitHub buat kolaborasi kode, serta beberapa tools kreatif untuk kebutuhan visual dan editing.'}
              </p>

              {/* Skills Chips list */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginTop: 'auto'
                }}
              >
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '0.5rem 0.9rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      color: 'var(--text-primary)',
                      transition: 'var(--transition-fast)'
                    }}
                    className="skill-chip"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = group.color;
                      e.currentTarget.style.background = `${group.color}05`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    <CheckCircle size={12} style={{ color: group.color }} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
