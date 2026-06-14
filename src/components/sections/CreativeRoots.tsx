import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Camera, BookOpen, PenTool, Layout, Code2, ArrowRight } from 'lucide-react';

export default function CreativeRoots() {
  const steps = [
    {
      icon: <Camera size={24} style={{ color: 'var(--primary)' }} />,
      title: 'Videography',
      desc: 'Di balik kamera, saya belajar komposisi, framing, dan pencahayaan—dasar dari hierarki visual.',
      accent: 'var(--primary)'
    },
    {
      icon: <BookOpen size={24} style={{ color: 'var(--accent-violet)' }} />,
      title: 'Storytelling',
      desc: 'Dunia perfilman mengajarkan saya cara membangun alur cerita yang emosional. Setiap produk digital memiliki perjalanan pengguna—sebuah antarmuka pada dasarnya adalah cerita yang disampaikan melalui interaksi.',
      accent: 'var(--accent-violet)'
    },
    {
      icon: <PenTool size={24} style={{ color: 'var(--accent-cyan)' }} />,
      title: 'Visual Design',
      desc: 'Menerapkan prinsip sinematografi seperti teori warna, keseimbangan, dan ruang kosong (negative space) ke dalam tata letak digital. Beralih dari piksel dalam video ke struktur grid dalam desain.',
      accent: 'var(--accent-cyan)'
    },
    {
      icon: <Layout size={24} style={{ color: '#10b981' }} />,
      title: 'UI/UX Design',
      desc: 'Menghubungkan storytelling dengan perilaku pengguna. Saya merancang alur interaktif yang intuitif, memastikan setiap elemen dapat merespons kebutuhan dan tujuan pengguna dengan baik.',
      accent: '#10b981'
    },
    {
      icon: <Code2 size={24} style={{ color: '#f59e0b' }} />,
      title: 'Web Development',
      desc: 'Tahap akhir dari sebuah konsep. Menghidupkan desain berfidelitas tinggi dengan TypeScript dan React—mengubah ide dan cerita menjadi sistem yang fungsional serta berkinerja tinggi.',
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
            Bagaimana pembuatan film, struktur narasi, dan komposisi visual secara langsung membentuk pendekatan saya dalam merancang dan mengembangkan produk digital.
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
              "Perjalanan saya dimulai dari belakang lensa."
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '900px' }}>
              Videografi adalah tempat saya pertama kali belajar berkreasi. Mengamati cahaya dan membingkai setiap adegan mengajarkan saya dasar-dasar desain jauh sebelum saya menulis satu baris HTML. Dari sana, saya memahami bahwa <strong>setiap piksel memiliki tujuan</strong>, bahwa setiap gerakan harus memiliki makna, dan bahwa pengalaman pengguna pada dasarnya adalah bentuk lain dari penyampaian cerita. Kini, saya menerjemahkan ritme, tempo, dan komposisi yang saya pelajari dari dunia perfilman ke dalam tata letak web dan kode yang fungsional.
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
