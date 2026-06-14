import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function CountUp({ end, duration = 1.2, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-heading)' }}>
      {count}
      {suffix}
    </span>
  );
}

export default function FeaturedQuote() {
  const quoteRef = useRef(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: '-100px' });

  const metrics = [
    {
      value: <CountUp end={2} suffix="" />,
      label: 'Competition Awards',
      desc: 'National & Provincial achievements',
      color: 'var(--primary)'
    },
    {
      value: <CountUp end={3} suffix="+" />,
      label: 'Years Leadership Experience',
      desc: 'Heading teams & organizations',
      color: 'var(--accent-violet)'
    },
    {
      value: <span style={{ fontFamily: 'var(--font-heading)' }}>Multiple</span>,
      label: 'Creative Projects',
      desc: 'Spanning AR, UI/UX, and video',
      color: 'var(--accent-cyan)'
    },
    {
      value: <span style={{ fontFamily: 'var(--font-heading)' }}>Frontend & UI/UX</span>,
      label: 'Specialized Focus',
      desc: 'Bridging design with clean code',
      color: '#10b981'
    }
  ];

  return (
    <section
      id="featured-quote"
      style={{
        background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-darker) 100%)',
        padding: '10rem 0 8rem 0',
        position: 'relative'
      }}
    >
      <div
        className="ambient-glow"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, rgba(255, 0, 60, 0.02) 50%, rgba(0, 0, 0, 0) 80%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="container">
        {/* Quote Block */}
        <div
          ref={quoteRef}
          style={{
            maxWidth: '900px',
            margin: '0 auto 8rem auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isQuoteInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Opening quotation decoration */}
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '10rem',
                color: 'rgba(255, 255, 255, 0.02)',
                position: 'absolute',
                top: '-80px',
                left: '20px',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              “
            </span>

            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: 400,
                lineHeight: '1.4',
                color: '#ffffff',
                letterSpacing: '-0.01em',
                marginBottom: '2rem'
              }}
            >
              "My journey started <span className="text-serif" style={{ color: 'var(--primary)' }}>behind a camera</span>. Today, I tell stories through <span className="text-serif" style={{ color: 'var(--accent-cyan)' }}>interfaces</span> and <span className="text-serif" style={{ color: 'var(--accent-violet)' }}>code</span>."
            </blockquote>

            <cite
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                display: 'block',
                marginTop: '1.5rem'
              }}
            >
              Raditya Yoga — Personal Creed
            </cite>
          </motion.div>
        </div>

        {/* Impact Snapshot Section */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--text-secondary)',
                marginBottom: '0.5rem'
              }}
            >
              Impact Snapshot
            </h3>
            <div
              style={{
                width: '40px',
                height: '2px',
                background: 'var(--primary)',
                margin: '0 auto'
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem'
            }}
            className="snapshot-grid"
          >
            {metrics.map((m, idx) => (
              <motion.div
                key={idx}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.1)' }}
                style={{
                  padding: '2rem 1.5rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.01)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '180px'
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.02em',
                    background: `linear-gradient(135deg, #ffffff 30%, ${m.color} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {m.value}
                </div>
                <h4
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.25rem'
                  }}
                >
                  {m.label}
                </h4>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.4'
                  }}
                >
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .snapshot-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .snapshot-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
