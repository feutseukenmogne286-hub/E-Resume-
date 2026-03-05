'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Project = {
  id: string;
  title: string;
  course: string;
  category: 'Strategy' | 'IMC' | 'Research' | 'Retail' | 'Personal';
  result: string;
  desc: string;
  bullets: string[];
  tools: string;
};

const projects: Project[] = [
  {
    id: 'balzacs',
    title: 'Balzac’s Coffee Roasters — 2026 Marketing Plan',
    course: 'Marketing Consulting',
    category: 'Strategy',
    result: 'Consumer + competitor analysis → 2026 direction',
    desc: 'A consulting-style plan built around Canadian market realities, positioning, and actionable growth choices.',
    bullets: ['Clear target segmentation + motivations', 'Competitive landscape mapped for differentiation', 'Strategy translated into practical tactics'],
    tools: 'Slides + report structure • Insight frameworks • Clean visuals'
  },
  {
    id: 'ikea',
    title: 'IKEA IMC Campaign — Analysis + Extension',
    course: 'IMC / Campaign',
    category: 'IMC',
    result: 'Extension ideas: video ad + digital banner system',
    desc: 'Analyzed an IKEA campaign and designed an extension that keeps message consistency across channels.',
    bullets: ['Channel-fit creative direction', 'Script + storyboard thinking', 'Ad system consistency (premium look)'],
    tools: 'Deck + script + storyboard • Creative rationale'
  },
  {
    id: 'ct',
    title: 'Canadian Tire — International Expansion (Egypt & Greece)',
    course: 'MRK460',
    category: 'Research',
    result: 'Hofstede → adapted 4Ps for two markets',
    desc: 'International marketing lens using cultural dimensions to adapt product, price, place, and promotion.',
    bullets: ['Cultural insights translated into marketing actions', 'Risk + fit logic to justify choices', 'Market entry thinking (high-level)'],
    tools: 'Report writing • Cultural frameworks • 4Ps adaptation'
  },
  {
    id: 'storecheck',
    title: 'Retail Store Checks — Tommy Hilfiger & Cole Haan',
    course: 'Retail / Field Work',
    category: 'Retail',
    result: 'In-store observation → merchandising insights',
    desc: 'Store-check notes focused on shopper flow, signage hierarchy, feature tables, and promotion clarity.',
    bullets: ['Entrance + feature table attention mapping', 'Promo signage audit (readability & placement)', 'What to improve vs what’s working'],
    tools: 'Photo-led observations • Structured notes • Recommendations'
  },
  {
    id: 'kfc',
    title: 'KFC ‘Fry Funeral’ — Client Brief Response',
    course: 'Brand / Strategy',
    category: 'Strategy',
    result: 'Creative brief → structured marketing response',
    desc: 'A client-brief style deliverable: objectives, audience, creative direction, and justification.',
    bullets: ['Insight-led messaging choices', 'Clear objectives + KPIs framing', 'Premium presentation style'],
    tools: 'Brief writing • Campaign logic • Deck-ready structure'
  },
  {
    id: 'pechakucha',
    title: 'E-Portfolio Pecha Kucha — Soft Skills Story',
    course: 'Professional Branding',
    category: 'Personal',
    result: 'Narrative journey → employable brand identity',
    desc: 'A story-driven presentation that shows growth, adaptability, and communication through personal experiences.',
    bullets: ['Story arc with clean slide rhythm', 'Values + strengths made visible', 'Confidence without ‘corporate fluff’'],
    tools: 'Presentation design • Narrative structure • Minimal style'
  }
];

const filters = ['All', 'Strategy', 'IMC', 'Research', 'Retail', 'Personal'] as const;

export default function HomePage() {
  const [isHome, setIsHome] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const [year, setYear] = useState('');
  const [alaneReady, setAlaneReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const visibleProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
    setAlaneReady(true);

    const total = 2700;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      setProgress(t);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsHome(true), 260);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isHome) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let DPR = 1;
    let running = true;
    let starRAF = 0;
    let stars: { x: number; y: number; vx: number; vy: number; r: number; a: number; tw: number }[] = [];

    const resize = () => {
      DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      W = canvas.width = Math.floor(window.innerWidth * DPR);
      H = canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const spawnStar = () => {
      const edge = Math.floor(Math.random() * 4);
      let x = 0;
      let y = 0;
      if (edge === 0) {
        x = Math.random() * W;
        y = -20 * DPR;
      }
      if (edge === 1) {
        x = W + 20 * DPR;
        y = Math.random() * H;
      }
      if (edge === 2) {
        x = Math.random() * W;
        y = H + 20 * DPR;
      }
      if (edge === 3) {
        x = -20 * DPR;
        y = Math.random() * H;
      }
      const cx = W / 2;
      const cy = H / 2;
      const dx = cx - x;
      const dy = cy - y;
      const mag = Math.max(1, Math.hypot(dx, dy));
      const speed = (0.55 + Math.random() * 0.9) * DPR;
      return { x, y, vx: (dx / mag) * speed, vy: (dy / mag) * speed, r: (0.6 + Math.random() * 1.2) * DPR, a: 0.18 + Math.random() * 0.22, tw: Math.random() * Math.PI * 2 };
    };

    const drawStar = (s: (typeof stars)[number]) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.globalAlpha = s.a;
      ctx.strokeStyle = 'rgba(77,163,255,0.9)';
      ctx.lineWidth = 1 * DPR;
      ctx.beginPath();
      const len = (2.2 + Math.sin(s.tw) * 0.8) * DPR;
      ctx.moveTo(-len, 0);
      ctx.lineTo(len, 0);
      ctx.moveTo(0, -len);
      ctx.lineTo(0, len);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      if (stars.length < 42 && Math.random() < 0.7) stars.push(spawnStar());
      const cx = W / 2;
      const cy = H / 2;
      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.tw += 0.06;
        const d = Math.hypot(s.x - cx, s.y - cy);
        const near = Math.max(0, 1 - d / (220 * DPR));
        s.a = 0.18 + near * 0.1;
        drawStar(s);
      });
      stars = stars.filter((s) => s.x > -60 * DPR && s.x < W + 60 * DPR && s.y > -60 * DPR && s.y < H + 60 * DPR);
      starRAF = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      running = false;
      cancelAnimationFrame(starRAF);
      window.removeEventListener('resize', resize);
    };
  }, [isHome]);

  const goHomeAndScroll = (id: string) => {
    setIsHome(true);
    setProgress(1);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120);
  };

  const nodeLevels = [0.15, 0.35, 0.55, 0.75, 0.92];
  const letters = ['A', 'l', 'a', 'n', 'e'];

  return (
    <>
      <canvas id="starfield" ref={canvasRef} aria-hidden="true" style={{ opacity: isHome ? 0 : 1 }} />

      {!isHome && (
        <header className="topbar" id="landingTopbar" aria-label="Landing navigation">
          <nav className="nav">
            <a className="offer-link" href="#menu" onClick={(e) => { e.preventDefault(); goHomeAndScroll('offer'); }}>Menu</a>
            <a className="offer-link" href="#about" onClick={(e) => { e.preventDefault(); goHomeAndScroll('about'); }}>About</a>
          </nav>
        </header>
      )}

      <section id="landing" className="screen" aria-label="Landing" style={{ opacity: isHome ? 0 : 1, pointerEvents: isHome ? 'none' : 'auto' }}>
        <div className="landing-center">
          <div className="mark" aria-label="Bloom with Alane logo">
            <div className="logo-line" role="img" aria-label="Bloom with Alane">
              <span className="word word--bloom">Bloom</span>
              <span className="word word--with">with</span>
              <span className="word word--alane" id="alane">
                {alaneReady && letters.map((ch, i) => <span key={`${ch}-${i}`} className="alane-letter" style={{ animationDelay: `${1.18 + i * 0.075}s` }}>{ch}</span>)}
              </span>
            </div>
            <div className="journey" aria-label="Journey loading bar">
              <div className="journey-track" />
              <div className="journey-fill" style={{ width: `${progress * 100}%` }} />
              <div className="nodes" id="nodes">
                {nodeLevels.map((v) => <div key={v} className={`node ${progress >= v ? 'is-on' : ''}`} />)}
              </div>
            </div>
            <div className="landing-note">a story in motion</div>
          </div>
        </div>
      </section>

      <header className="topbar" id="homeTopbar" aria-label="Primary navigation" style={{ display: isHome ? 'flex' : 'none' }}>
        <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="dot" />
          <span>Bloom with Alane</span>
        </a>
        <nav className="nav">
          <a className="offer-link" href="#work">Work</a>
          <a className="offer-link" href="#offer">Offer</a>
          <a className="offer-link" href="#about">About</a>
          <a className="offer-link" href="#contact">Contact</a>
        </nav>
      </header>

      {isHome && (
        <main id="home" className="screen" aria-label="Homepage">
          <div className="container" id="top">
            <section className="hero">
              <div>
                <div className="kicker">Marketing portfolio</div>
                <h1 className="h1">Strategy that <span className="olive">blooms</span> into results.</h1>
                <p className="sub">I turn research, insights, and real-world store observations into campaigns and concepts that feel human, premium, and persuasive.</p>
                <div className="hero-actions">
                  <a className="btn" href="#work">Explore work</a>
                  <a className="btn secondary" href="#contact">Let’s collaborate</a>
                </div>
              </div>
            </section>

            <section className="section" id="work">
              <div className="section-title"><h2>Selected work</h2><div className="muted">Case-study style cards • click to open</div></div>
              <div className="pills">{filters.map((f) => <button key={f} className={`pill ${activeFilter === f ? 'is-active' : ''}`} onClick={() => setActiveFilter(f)}>{f}</button>)}</div>
              <div className="grid">{visibleProjects.map((p) => (
                <div className="card" key={p.id} tabIndex={0} onClick={() => setSelected(p)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(p); } }}>
                  <div className="thumb"><div className="tag">{p.course}</div></div>
                  <div><h3>{p.title}</h3><p>{p.result}</p></div>
                  <div className="meta-row"><span className="chip">{p.category}</span><span className="chip">Open</span></div>
                </div>
              ))}</div>
            </section>
          </div>
        </main>
      )}

      {selected && (
        <div className="modal is-open" id="modal" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
          <div className="sheet">
            <div className="sheet-head">
              <div className="sheet-title"><h3>{selected.title}</h3><div className="small">{selected.course} • {selected.category}</div></div>
              <button className="close" onClick={() => setSelected(null)}>Close</button>
            </div>
            <div className="sheet-body">
              <div className="sheet-box"><h4>What it is</h4><p>{selected.desc}</p></div>
              <div className="sheet-box"><h4>Highlights</h4><ul>{selected.bullets.map((b) => <li key={b}>{b}</li>)}</ul></div>
              <div className="sheet-box" style={{ gridColumn: '1 / -1' }}><h4>Tools & Output</h4><p>{selected.tools}</p></div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        :root{--olive:#556B2F;--black:#0B0B0C;--white:#FFFFFF;--ease:cubic-bezier(.2,.8,.2,1);--fast:180ms;--med:280ms;--logo-size:clamp(24px,3.2vw,40px)}
        *{box-sizing:border-box} body{margin:0;font-family:"Instrument Sans",system-ui,sans-serif;background:var(--white);color:var(--black);overflow-x:hidden}
        .screen{min-height:100vh;position:relative;display:grid;place-items:center;padding:120px 24px 56px}.topbar{position:fixed;inset:0 0 auto;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 26px;background:rgba(255,255,255,.86);backdrop-filter:blur(10px);border-bottom:1px solid rgba(11,11,12,.06);z-index:30}
        .brand{display:flex;align-items:center;gap:10px;font-weight:600;color:rgba(11,11,12,.86);text-decoration:none}.dot{width:10px;height:10px;border-radius:999px;background:var(--olive);box-shadow:0 0 0 6px rgba(85,107,47,.12)}
        .nav{display:flex;gap:10px;align-items:center;font-size:14px}.offer-link{position:relative;padding:9px 12px;border-radius:12px;color:rgba(11,11,12,.72);text-decoration:none;overflow:hidden}.offer-link:before{content:"";position:absolute;inset:0;background:var(--olive);transform:scaleX(0);transform-origin:left;transition:transform var(--med) var(--ease);z-index:-1}.offer-link:hover{color:#fff}.offer-link:hover:before{transform:scaleX(1)}
        #starfield{position:fixed;inset:0;z-index:0;pointer-events:none;transition:opacity 700ms var(--ease)}
        .landing-center{display:grid;place-items:center;gap:18px}.logo-line{display:inline-flex;align-items:baseline;gap:14px;font-size:var(--logo-size);font-weight:650}.word{display:inline-block;opacity:0;filter:blur(14px);transform:translateY(10px)}.word--bloom{color:var(--olive);animation:dissolveIn 760ms var(--ease) forwards;animation-delay:90ms}.word--with{color:rgba(11,11,12,.52);font-size:.4em;letter-spacing:.14em;animation:dissolveIn 440ms var(--ease) forwards;animation-delay:820ms}.word--alane{opacity:1;filter:none;transform:none}.alane-letter{display:inline-block;opacity:0;filter:blur(16px);transform:translateY(12px);animation:wavyDissolve 980ms var(--ease) forwards}
        .journey{margin:14px auto 0;width:100%;height:16px;position:relative}.journey-track{position:absolute;left:0;right:0;top:50%;height:2px;transform:translateY(-50%);background:rgba(11,11,12,.10)}.journey-fill{position:absolute;left:0;top:50%;height:2px;transform:translateY(-50%);background:linear-gradient(90deg,rgba(77,163,255,0),rgba(77,163,255,.85),rgba(77,163,255,.25));filter:drop-shadow(0 0 10px rgba(77,163,255,.22))}
        .nodes{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);display:flex;justify-content:space-between}.node{width:10px;height:10px;border-radius:999px;background:rgba(11,11,12,.14)}.node.is-on{background:var(--olive);box-shadow:0 0 0 6px rgba(85,107,47,.14)}
        .container{width:min(1120px,92vw);margin:0 auto}.hero{padding:26px 0 14px}.kicker{font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:rgba(11,11,12,.5)}.h1{font-size:clamp(34px,4.6vw,56px);line-height:1.02}.olive{color:var(--olive)}.sub{margin-top:12px;font-size:16px;line-height:1.55;color:rgba(11,11,12,.72);max-width:58ch}
        .hero-actions{display:flex;gap:12px;margin-top:18px;flex-wrap:wrap}.btn{display:inline-flex;padding:12px 16px;border-radius:14px;border:1px solid rgba(11,11,12,.08);text-decoration:none;color:rgba(11,11,12,.88);font-weight:600}.btn:hover{background:var(--olive);color:#fff}.btn.secondary:hover{background:rgba(11,11,12,.88)}
        .section{padding:34px 0}.section-title{display:flex;justify-content:space-between;gap:16px;margin-bottom:14px}.muted{color:rgba(11,11,12,.55);font-size:14px}.pills{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 18px}.pill{border:1px solid rgba(11,11,12,.1);border-radius:999px;padding:8px 12px;background:#fff}.pill.is-active{color:#fff;background:#0b0b0c}
        .grid{display:grid;grid-template-columns:repeat(12,1fr);gap:14px}.card{grid-column:span 4;border:1px solid rgba(11,11,12,.1);border-radius:18px;padding:16px;min-height:172px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer}
        @media (max-width:980px){.card{grid-column:span 6}} @media (max-width:620px){.card{grid-column:span 12}}
        .thumb{height:84px;border-radius:14px;border:1px solid rgba(11,11,12,.08);padding:10px 12px;display:flex;align-items:flex-end}.tag{font-size:12px;color:rgba(11,11,12,.6);text-transform:uppercase}.card h3{margin:12px 0 6px;font-size:16px}.card p{margin:0;font-size:13.5px;color:rgba(11,11,12,.66)}.meta-row{display:flex;justify-content:space-between;margin-top:14px;font-size:13px}.chip{padding:6px 10px;border-radius:999px;border:1px solid rgba(11,11,12,.1)}
        .modal{position:fixed;inset:0;display:grid;place-items:center;background:rgba(11,11,12,.46);z-index:60;padding:18px}.sheet{width:min(860px,92vw);border-radius:22px;background:#fff;overflow:hidden}.sheet-head{padding:16px 18px;display:flex;justify-content:space-between;border-bottom:1px solid rgba(11,11,12,.08)}.sheet-body{padding:18px;display:grid;grid-template-columns:1fr .9fr;gap:16px}.sheet-box{border:1px solid rgba(11,11,12,.08);border-radius:18px;padding:14px}.close{border:1px solid rgba(11,11,12,.1);background:#fff;border-radius:12px;padding:10px 12px}
        @keyframes dissolveIn{0%{opacity:0;filter:blur(14px);transform:translateY(10px)}100%{opacity:1;filter:blur(0);transform:translateY(0)}}
        @keyframes wavyDissolve{0%{opacity:0;filter:blur(16px);transform:translateY(14px)}45%{opacity:1;filter:blur(4px);transform:translateY(-6px)}100%{opacity:1;filter:blur(0);transform:translateY(0)}}
      `}</style>
    </>
  );
}
