import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Film, Palette, Clapperboard } from 'lucide-react';

interface AchievementItem {
  title: string;
  award: string;
  project: string;
  desc: string;
  org: string;
  year: string;
  icon: React.ReactNode;
  color: string;
  meta: string;
}

export default function Achievements() {
  const achievementsList: AchievementItem[] = [
    {
      title: 'National Favorite Winner',
      award: 'Kompetisi Videografi FKIP UNDIP 2023',
      project: 'Pesona Pesisir',
      desc: 'Menyutradarai dan menyunting film dokumenter pendek bergaya sinematik yang mengangkat kehidupan, warisan budaya, serta tantangan ekologis yang dihadapi masyarakat nelayan pesisir.',
      org: 'Universitas Diponegoro',
      year: '2023',
      icon: <Clapperboard size={24} />,
      color: 'rgba(255, 0, 60, 0.25)', // primary crimson
      meta: 'Documentary Film • Pacing & Lighting Design'
    },
    {
      title: 'Second Place',
      award: 'FLS2N (Festival & Lomba Seni Siswa Nasional) 2024',
      project: 'Sekar',
      desc: 'Menciptakan video naratif artistik yang berfokus pada pelestarian warisan budaya tradisional, dengan menampilkan kemampuan dalam visual storytelling dan desain suara.',
      org: 'Kementerian Pendidikan dan Kebudayaan',
      year: '2024',
      icon: <Film size={24} />,
      color: 'rgba(139, 92, 246, 0.25)', // violet
      meta: 'Narrative Film • Color Grading & Composition'
    },
    {
      title: 'Third Place',
      award: 'Kompetisi Desain Poster tingkat Provinsi',
      project: 'Penghematan Penggunaan Energi Listrik',
      desc: 'Merancang poster visual berfidelitas tinggi yang mengomunikasikan transformasi ekologis berbasis teknologi melalui perpaduan konsep visual dan tata letak yang terstruktur.',
      org: 'Festival Teknologi Jawa tengah',
      year: '2024',
      icon: <Palette size={24} />,
      color: 'rgba(6, 182, 212, 0.25)', // cyan
      meta: 'Graphic Design • Layout Grid & Typography'
    }
  ];

  return (
    <section id="achievements" style={{ background: 'var(--bg-dark)' }}>
      <div className="ambient-glow" style={{ top: '-10%', right: '10%', filter: 'blur(120px)' }} />
      <div className="ambient-glow-right" style={{ bottom: '-10%', left: '10%', filter: 'blur(120px)' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            Accolades
          </div>
          <h2 className="section-title text-gradient-white">Creative Honors</h2>
          <p className="section-subtitle">
            Meraih apresiasi atas kualitas ekspresi visual, storytelling, dan eksekusi desain dalam kompetisi kreatif tingkat regional maupun nasional.
          </p>
        </div>

        {/* 3-Column Premium Card Layout */}
        <div className="grid-3">
          {achievementsList.map((item, idx) => (
            <AchievementCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ item, index }: { item: AchievementItem; index: number }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '2.5rem 2rem',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'default',
        background: 'rgba(13, 13, 22, 0.45)',
        border: '1px solid rgba(255, 255, 255, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '420px',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease'
      }}
      whileHover={{
        y: -10,
        borderColor: 'rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Local Card Spotlight Overlay */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            left: coords.x - 150,
            top: coords.y - 150,
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, ${item.color} 0%, rgba(0, 0, 0, 0) 70%)`,
            pointerEvents: 'none',
            zIndex: 1,
            mixBlendMode: 'screen'
          }}
        />
      )}

      {/* Card Header Content */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}
        >
          {item.icon}
        </div>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--text-muted)',
            letterSpacing: '0.05em'
          }}
        >
          {item.year}
        </span>
      </div>

      {/* Card Main Body */}
      <div style={{ position: 'relative', zIndex: 2, flexGrow: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--primary)',
            display: 'block',
            marginBottom: '0.5rem'
          }}
        >
          {item.title}
        </span>
        
        <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.75rem', lineHeight: '1.25' }}>
          "{item.project}"
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            lineHeight: '1.4'
          }}
        >
          {item.award}
        </p>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
          {item.desc}
        </p>
      </div>

      {/* Card Footer Metadata */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
          paddingTop: '1.25rem',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
          {item.org}
        </span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.02em' }}>
          {item.meta}
        </span>
      </div>
    </motion.div>
  );
}
