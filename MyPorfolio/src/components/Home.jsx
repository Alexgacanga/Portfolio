import { useState, useEffect } from "react";

/* ─── Header ─────────────────────────────────────────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = ["Home", "About", "Projects", "Contacts"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes blink    { 0%,100%{opacity:1}50%{opacity:0} }
        @keyframes float    { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }
        @keyframes pulseRing{ 0%{transform:scale(0.95);opacity:.7}70%{transform:scale(1.1);opacity:0}100%{transform:scale(0.95);opacity:0} }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

        .mob-dropdown{
          position:fixed;
          left:50%;
          transform:translateX(-50%);
          width:min(660px,calc(100vw - 20px));
          background:rgba(255,255,255,.97);
          backdrop-filter:blur(18px);
          border-radius:20px;
          box-shadow:0 12px 48px rgba(0,0,0,.15);
          padding:0 24px;
          z-index:99;
          overflow:hidden;
          max-height:0;
          opacity:0;
          top:70px;
          pointer-events:none;
          transition:
            max-height .38s cubic-bezier(.4,0,.2,1),
            opacity    .3s cubic-bezier(.4,0,.2,1),
            padding    .38s cubic-bezier(.4,0,.2,1);
        }
        .mob-dropdown.open{
          max-height:260px;
          opacity:1;
          padding:8px 24px;
          pointer-events:auto;
        }

        .ham-btn{background:none;border:none;cursor:pointer;padding:6px;display:flex;flex-direction:column;gap:5px;align-items:center}
        .ham-line{display:block;width:22px;height:2px;background:#1a1a1a;border-radius:2px;transition:all .28s ease;transform-origin:center}
        .ham-open .ham-line:nth-child(1){transform:translateY(7px) rotate(45deg)}
        .ham-open .ham-line:nth-child(2){opacity:0;transform:scaleX(0)}
        .ham-open .ham-line:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

        .desk-nav{display:none!important}
        .mob-btn{display:flex!important}
        @media(min-width:640px){
          .desk-nav{display:flex!important}
          .mob-btn{display:none!important}
        }

        .desk-link{text-decoration:none;font-family:'DM Sans',sans-serif;font-weight:600;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:#1a1a1a;padding-bottom:2px;border-bottom:2px solid transparent;transition:color .22s,border-color .22s}
        .desk-link:hover{color:#0d9488;border-bottom-color:#14b8a6}
        .mob-link{display:block;padding:12px 0;font-family:'DM Sans',sans-serif;font-weight:600;font-size:.95rem;letter-spacing:.1em;text-transform:uppercase;color:#1a1a1a;text-decoration:none;border-bottom:1px solid rgba(0,0,0,.07);transition:color .2s}
        .mob-link:last-child{border-bottom:none}
        .mob-link:hover{color:#0d9488}

        .stat-grid{grid-template-columns:repeat(4,1fr)}
        @media(max-width:400px){.stat-grid{grid-template-columns:repeat(2,1fr)}}
      `}</style>

      <div style={{display:"flex",justifyContent:"center"}}>
        <header style={{
          position:"fixed", top: scrolled ? "10px" : "16px",
          left:"50%", transform:"translateX(-50%)",
          zIndex:100,
          width:"min(660px,calc(100vw - 20px))",
          background: scrolled ? "rgba(255,255,255,.97)" : "rgba(255,255,255,.88)",
          backdropFilter:"blur(18px)",
          borderRadius:"9999px",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,.16)" : "0 4px 20px rgba(0,0,0,.1)",
          transition:"all .35s cubic-bezier(.4,0,.2,1)",
          padding:"10px 20px",
          display:"flex", alignItems:"center", justifyContent:"space-between",
        }}>
          <a href="/" style={{textDecoration:"none",flexShrink:0}}>
            <span style={{
              fontFamily:"'Playfair Display',Georgia,serif",
              fontWeight:900, fontSize:"1.3rem", letterSpacing:".12em",
              background:"linear-gradient(135deg,#991b1b 30%,#14b8a6 100%)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>GAM</span>
          </a>

          {/* Desktop nav */}
          <nav className="desk-nav" style={{gap:"2rem",alignItems:"center"}}>
            {navItems.map(item => <a key={item} href="#" className="desk-link">{item}</a>)}
          </nav>

          {/* Hamburger */}
          <button
            className={`ham-btn mob-btn${menuOpen ? " ham-open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </header>

        {/* Mobile dropdown — always mounted, toggled via CSS for smooth in/out */}
        <div className={`mob-dropdown${menuOpen ? " open" : ""}`}>
          {navItems.map(item => (
            <a key={item} href="#" className="mob-link" onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Helpers ─────────────────────────────────────────────── */
function FloatingOrb({ style }) {
  return <div style={{position:"absolute",borderRadius:"50%",filter:"blur(60px)",pointerEvents:"none",...style}} />;
}

function TypewriterText({ words }) {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[current];
    let t;
    if (!deleting && displayed.length < word.length)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    else if (!deleting)
      t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    else { setDeleting(false); setCurrent(c => (c + 1) % words.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, current, words]);

  return (
    <span style={{borderRight:"3px solid #14b8a6",paddingRight:"4px",animation:"blink .9s step-end infinite"}}>
      {displayed}
    </span>
  );
}

function TechBadge({ name }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display:"inline-block", padding:"5px 13px", borderRadius:"999px",
        fontFamily:"'DM Sans',sans-serif", fontSize:".72rem", fontWeight:600, letterSpacing:".05em",
        background: hov ? "rgba(20,184,166,.3)" : "rgba(255,255,255,.1)",
        border: hov ? "1px solid #14b8a6" : "1px solid rgba(255,255,255,.2)",
        color: hov ? "#5eead4" : "rgba(255,255,255,.75)",
        cursor:"default", transition:"all .22s ease", userSelect:"none",
      }}
    >{name}</span>
  );
}

function StatPill({ number, label }) {
  return (
    <div style={{
      background:"rgba(255,255,255,.1)", backdropFilter:"blur(12px)",
      border:"1px solid rgba(255,255,255,.22)", borderRadius:"16px",
      padding:"12px 8px", textAlign:"center",
    }}>
      <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:"clamp(1.3rem,4vw,1.8rem)",fontWeight:700,color:"#fff",lineHeight:1}}>
        {number}
      </div>
      <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:".63rem",color:"rgba(255,255,255,.6)",marginTop:"5px",letterSpacing:".08em",textTransform:"uppercase"}}>
        {label}
      </div>
    </div>
  );
}

function CTA({ primary, children }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        flex:"1 1 140px", padding:"13px 24px", borderRadius:"999px",
        border: primary ? "none" : (hov ? "1px solid rgba(255,255,255,.5)" : "1px solid rgba(255,255,255,.2)"),
        cursor:"pointer",
        fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:".85rem", letterSpacing:".07em",
        color: primary ? "#fff" : (hov ? "#fff" : "rgba(255,255,255,.75)"),
        background: primary
          ? (hov ? "linear-gradient(135deg,#0d9488,#991b1b)" : "linear-gradient(135deg,#14b8a6,#b91c1c)")
          : (hov ? "rgba(255,255,255,.15)" : "rgba(255,255,255,.07)"),
        backdropFilter: primary ? "none" : "blur(10px)",
        boxShadow: primary
          ? (hov ? "0 12px 40px rgba(20,184,166,.35)" : "0 6px 24px rgba(20,184,166,.18)")
          : (hov ? "0 8px 28px rgba(0,0,0,.22)" : "none"),
        transform: hov ? "scale(1.05) translateY(-2px)" : "scale(1)",
        transition:"all .26s cubic-bezier(.4,0,.2,1)",
        whiteSpace:"nowrap",
      }}
    >{children}</button>
  );
}

/* ─── Main ────────────────────────────────────────────────── */
export default function Home() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    if (isMobile) return;
    const fn = e => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [isMobile]);

  const px = isMobile ? 0 : (mousePos.x / (window.innerWidth || 1) - 0.5) * 18;
  const py = isMobile ? 0 : (mousePos.y / (window.innerHeight || 1) - 0.5) * 12;

  const avatarSize = isMobile ? 88 : 110;

  return (
    <>
      <Header />

      <div style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#0f1923 0%,#1a0a0a 40%,#0a1a1a 100%)",
        position:"relative", overflow:"hidden",
        display:"flex", alignItems:"center", justifyContent:"center",
        padding:"100px 16px 64px",
      }}>

        {/* Orbs */}
        <FloatingOrb style={{width:isMobile?280:520,height:isMobile?280:520,background:"radial-gradient(circle,rgba(153,27,27,.45) 0%,transparent 70%)",top:"-10%",left:"-8%",transform:`translate(${px*.4}px,${py*.4}px)`,transition:"transform .6s ease"}} />
        <FloatingOrb style={{width:isMobile?220:420,height:isMobile?220:420,background:"radial-gradient(circle,rgba(20,184,166,.35) 0%,transparent 70%)",bottom:"-5%",right:"-6%",transform:`translate(${-px*.3}px,${-py*.3}px)`,transition:"transform .6s ease"}} />
        {!isMobile && <FloatingOrb style={{width:200,height:200,background:"radial-gradient(circle,rgba(20,184,166,.18) 0%,transparent 70%)",top:"25%",right:"10%",transform:`translate(${px*.6}px,${py*.6}px)`,transition:"transform .6s ease"}} />}

        {/* Decorative rings (desktop only) */}
        {!isMobile && <>
          <div style={{position:"absolute",width:560,height:560,borderRadius:"50%",border:"1px solid rgba(20,184,166,.07)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none"}} />
          <div style={{position:"absolute",width:370,height:370,borderRadius:"50%",border:"1px solid rgba(153,27,27,.09)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none"}} />
        </>}

        {/* Content */}
        <div style={{
          display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center",
          width:"100%", maxWidth:"780px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition:"opacity .9s ease,transform .9s ease",
        }}>

          {/* Avatar */}
          <div style={{position:"relative",marginBottom:"22px",animation:"float 5s ease-in-out infinite"}}>
            <div style={{position:"absolute",inset:0,borderRadius:"50%",border:"2px solid rgba(20,184,166,.5)",animation:"pulseRing 2.5s ease-out infinite"}} />
            <div style={{position:"absolute",inset:"-8px",borderRadius:"50%",border:"2px solid rgba(153,27,27,.4)",animation:"pulseRing 2.5s ease-out infinite .8s"}} />
            <div style={{
              width:avatarSize, height:avatarSize, borderRadius:"50%",
              border:"3px solid transparent",
              background:"linear-gradient(#0f1923,#0f1923) padding-box, linear-gradient(135deg,#14b8a6,#991b1b) border-box",
              boxShadow:"0 0 36px rgba(20,184,166,.22),0 0 72px rgba(153,27,27,.12)",
              display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden",
            }}>
              <img
                src="/src/assets/bg1.jpeg"
                alt="Gacanga Alex Mwangi"
                style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}}
              />
            </div>
          </div>

          {/* Status badge */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:"8px",
            padding:"5px 16px", borderRadius:"999px",
            background:"rgba(20,184,166,.12)", border:"1px solid rgba(20,184,166,.3)",
            marginBottom:"14px",
            opacity: visible ? 1 : 0, transition:"opacity .7s ease .2s",
          }}>
            <span style={{width:7,height:7,borderRadius:"50%",background:"#14b8a6",display:"inline-block",boxShadow:"0 0 6px #14b8a6",animation:"blink 1.8s ease-in-out infinite"}} />
            <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:".67rem",color:"#5eead4",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase"}}>
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <p style={{
            fontFamily:"'DM Sans',sans-serif",
            fontSize:"clamp(.68rem,2.2vw,.85rem)",
            color:"rgba(255,255,255,.5)", marginBottom:"8px",
            letterSpacing:".18em", textTransform:"uppercase", fontWeight:500,
            opacity: visible ? 1 : 0, transition:"opacity .7s ease .3s",
          }}>
            Hi, I'm Gacanga Alex Mwangi
          </p>

          {/* Headline */}
          <h1 style={{
            fontFamily:"'Playfair Display',Georgia,serif",
            fontSize:"clamp(2.3rem,9vw,5.2rem)",
            fontWeight:900, color:"#fff", lineHeight:1.07, letterSpacing:"-.02em",
            marginBottom:"10px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition:"opacity .8s ease .4s,transform .8s ease .4s",
          }}>
            Software{" "}
            <span style={{background:"linear-gradient(135deg,#14b8a6 20%,#5eead4 80%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              Engineer
            </span>
          </h1>

          {/* Typewriter */}
          <div style={{
            fontFamily:"'Playfair Display',Georgia,serif",
            fontSize:"clamp(.9rem,3.5vw,1.55rem)",
            fontWeight:400, fontStyle:"italic",
            color:"rgba(255,255,255,.42)", marginBottom:"16px", minHeight:"2rem",
            padding:"0 8px",
            opacity: visible ? 1 : 0, transition:"opacity .6s ease .55s",
          }}>
            <TypewriterText words={["based in Nairobi, Kenya."]} />
          </div>

          {/* Bio */}
          <p style={{
            fontFamily:"'DM Sans',sans-serif",
            fontSize:"clamp(.84rem,2.3vw,.95rem)",
            lineHeight:1.8, color:"rgba(255,255,255,.5)",
            maxWidth:"520px", marginBottom:"24px", padding:"0 4px",
            opacity: visible ? 1 : 0, transition:"opacity .7s ease .65s",
          }}>
            Software Engineer dedicated to shipping{" "}
            <span style={{color:"rgba(255,255,255,.85)",fontWeight:600}}>scalable digital solutions</span>{" "}
            and{" "}
            <span style={{color:"#5eead4",fontWeight:600}}>secure integrations</span>.
            {" "}Committed to technical excellence, from architecting clean systems to delivering seamless,{" "}
            <span style={{color:"rgba(255,255,255,.85)",fontWeight:600}}>high-impact user experiences</span>.
          </p>

          {/* Languages */}
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".68rem",color:"rgba(255,255,255,.35)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"8px",opacity:visible?1:0,transition:"opacity .6s ease .72s"}}>
            Languages
          </p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"7px",justifyContent:"center",marginBottom:"16px",maxWidth:"520px",opacity:visible?1:0,transition:"opacity .6s ease .75s"}}>
            {["HTML5","CSS","JavaScript","Python","SQL","C","Java"].map(t => <TechBadge key={t} name={t} />)}
          </div>

          {/* Frameworks */}
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".68rem",color:"rgba(255,255,255,.35)",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"8px",opacity:visible?1:0,transition:"opacity .6s ease .78s"}}>
            Frameworks
          </p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"7px",justifyContent:"center",marginBottom:"28px",maxWidth:"520px",opacity:visible?1:0,transition:"opacity .6s ease .8s"}}>
            {["ReactJS","Tailwind CSS","Bootstrap","Django","Django REST"].map(t => <TechBadge key={t} name={t} />)}
          </div>

          {/* Buttons */}
          <div style={{
            display:"flex", gap:"12px", flexWrap:"wrap", justifyContent:"center",
            marginBottom:"40px", width:"100%", maxWidth:"360px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition:"opacity .7s ease .85s,transform .7s ease .85s",
          }}>
            <CTA primary>Contact me →</CTA>
            <CTA>Projects →</CTA>
          </div>
        </div>
      </div>
    </>
  );
}