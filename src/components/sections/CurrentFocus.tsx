import { motion } from 'framer-motion';
import { Sparkles, LayoutGrid, Cpu, Compass, BookOpen } from 'lucide-react';

interface FocusItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  topics: string[];
  color: string;
}

export default function CurrentFocus() {
  const focusItems: FocusItem[] = [
    {
      icon: <LayoutGrid size={22} />,
      title: 'UI/UX Design Systems',
      desc: 'Mendalami cara menjaga konsistensi desain di berbagai platform, menyusun struktur komponen yang rapi, dan mencari cara terbaik untuk menghubungkan hasil desain dari Figma langsung ke komponen web.',
      topics: ['Token Governance', 'Figma Variables', 'Component Libraries'],
      color: 'var(--accent-cyan)'
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Modern Frontend Development',
      desc: 'Bereksperimen dengan React compiler, framework server-side (Next.js), mengoptimalkan performa loading web, serta bikin animasi interaktif yang halus dan responsif.',
      topics: ['Next.js App Router', 'React Compiler', 'Framer Motion Physics'],
      color: 'var(--primary)'
    },
    {
      icon: <Cpu size={22} />,
      title: 'Artificial Intelligence',
      desc: 'Mengeksplorasi UI yang dinamis berbasis AI, mencoba integrasi API Large Language Model (LLM) ke dalam aplikasi, sampai ngulik cara bikin prompt yang cerdas dan efektif.',
      topics: ['LLM Integrations', 'AI Generative UI', 'Prompt Design'],
      color: 'var(--accent-violet)'
    },
    {
      icon: <Compass size={22} />,
      title: 'Emerging Technologies',
      desc: 'Mencoba menyelami standar WebXR dan pemanfaatan kamera perangkat untuk bikin pengalaman Augmented Reality (AR) yang bisa langsung jalan dengan mulus di browser berbagai perangkat.',
      topics: ['WebXR & WebGL', 'Three.js Shaders', 'Device Camera APIs'],
      color: '#10b981'
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Digital Product Design',
      desc: 'Belajar menganalisis kebiasaan dan psikologi pengguna saat pakai aplikasi, merancang micro-copy yang pas, demi menciptakan produk digital yang seru dan bikin betah pas digunakan.',
      topics: ['Cognitive Loading', 'Behavioral Loops', 'Micro-interactions'],
      color: '#f59e0b'
    }
  ];

  return (
    <section id="focus" style={{ background: 'var(--bg-darker)' }}>
      <div className="ambient-glow" style={{ top: '10%', right: '20%', filter: 'blur(110px)' }} />
      <div className="ambient-glow-right" style={{ bottom: '15%', left: '15%', filter: 'blur(100px)' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            Growth Mindset
          </div>
          <h2 className="section-title text-gradient-white">What I'm Exploring Now</h2>
          <p className="section-subtitle">
           Sekilas tentang teknologi dan tren desain baru yang lagi gencar saya pelajari dan coba terapkan dalam projek-projek terbaru.
          </p>
        </div>

        {/* 5-Card Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '2rem'
          }}
          className="focus-grid"
        >
          {focusItems.map((item, idx) => {
            // First two cards span 3 columns, next three cards span 2 columns
            const colSpan = idx < 2 ? 'span 3' : 'span 2';
            return (
              <motion.div
                key={idx}
                className="glass-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, borderColor: 'rgba(255, 255, 255, 0.08)' }}
                style={{
                  gridColumn: colSpan,
                  padding: '2.5rem 2rem',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.01)',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '320px',
                  position: 'relative'
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${item.color}10`,
                    border: `1px solid ${item.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                    marginBottom: '1.75rem'
                  }}
                >
                  {item.icon}
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                  {item.desc}
                </p>

                {/* Subtopic badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.03)',
                    paddingTop: '1.25rem',
                    marginTop: 'auto'
                  }}
                >
                  {item.topics.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        color: 'var(--text-muted)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontWeight: 600
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .focus-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .focus-grid > div {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 768px) {
          .focus-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
