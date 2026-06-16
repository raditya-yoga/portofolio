import { motion } from 'framer-motion';
import { Smartphone, Laptop, Cpu, Radio } from 'lucide-react';

export default function BeyondTechnology() {
  const cards = [
    {
      icon: <Smartphone size={24} style={{ color: 'var(--primary)' }} />,
      title: 'Smartphones & Aesthetics',
      desc: 'Selalu kagum sama desain fisik smartphone. Saya suka mengamati bagaimana tata letak kamera, lengkungan bezel, sensasi klik tombol, hingga pilihan warna bisa memengaruhi kenyamanan genggaman dan identitas si pengguna."',
      category: 'Industrial Design'
    },
    {
      icon: <Laptop size={24} style={{ color: 'var(--accent-violet)' }} />,
      title: 'Laptops & Ergonomics',
      desc: 'Mengikuti tren komputasi laptop yang semakin bertenaga namun efisien. Tertarik menganalisis lompatan performa pada prosesor modern, integrasi kartu grafis hemat daya, hingga manajemen termal yang menjaga performa hardware tetap stabil.',
      category: 'Ergonomic Build'
    },
    {
      icon: <Cpu size={24} style={{ color: 'var(--accent-cyan)' }} />,
      title: 'PC Hardware Architectures',
      desc: 'Suka mengulik komponen PC desktop dari sisi teknis dan performa mentahnya. Selalu antusias memperhatikan arsitektur GPU generasi terbaru, batas maksimal kecepatan memori (RAM), serta bagaimana kombinasi hardware ini bisa dikonfigurasi untuk performa paling maksimal.',
      category: 'Physical Assembly'
    },
    {
      icon: <Radio size={24} style={{ color: '#10b981' }} />,
      title: 'Gaming Tech & Platforms',
      desc: 'Mengikuti perkembangan industri game dari sisi teknologi dan performanya. Selalu antusias memperhatikan optimalisasi engine game terbaru, persaingan spesifikasi konsol, hingga hadirnya perangkat genggam (handheld gaming) yang bikin ekosistem gaming makin berkembang pesat.',
      category: 'Gaming Industry'
    }
  ];

  return (
    <section id="beyond-tech" style={{ background: 'var(--bg-dark)' }}>
      <div className="ambient-glow" style={{ top: '20%', left: '10%', filter: 'blur(100px)' }} />
      <div className="ambient-glow-right" style={{ bottom: '20%', right: '10%', filter: 'blur(110px)' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            Passions
          </div>
          <h2 className="section-title text-gradient-white">Beyond Technology</h2>
          <p className="section-subtitle">
            Ketertarikan saya di dunia digital tidak hanya berhenti di balik layar atau barisan kode. Saya suka mengeksplorasi bagaimana sebuah teknologi bisa punya tampilan yang menarik dan komunikatif.
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, borderColor: 'rgba(255, 255, 255, 0.08)' }}
              style={{
                padding: '2.5rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.015)',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
                position: 'relative'
              }}
            >
              {/* Icon container */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {card.icon}
              </div>

              {/* Text content */}
              <div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}
                >
                  {card.category}
                </span>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: '#ffffff',
                    fontWeight: 700,
                    marginBottom: '0.75rem'
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
