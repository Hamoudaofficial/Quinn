import { useState, useEffect, useRef } from "react";

// ─── LANGUAGE PACKS ────────────────────────────────────────────────────────────
const T = {
  ar: {
    dir: "rtl",
    logo: "شاهد",
    nav: { home: "الرئيسية", movies: "أفلام", series: "مسلسلات", live: "بث مباشر", admin: "إدارة" },
    hero: { watch: "شاهد الآن", list: "قائمتي", trailer: "الإعلان", newEp: "حلقة جديدة" },
    sections: { trending: "الأكثر مشاهدة الآن", latest: "أحدث الإضافات", todayEps: "حلقات اليوم", live: "قنوات مباشرة" },
    filters: { all: "الكل", movie: "أفلام", series: "مسلسلات" },
    search: "ابحث عن فيلم أو مسلسل…",
    types: { movie: "فيلم", series: "مسلسل" },
    admin: {
      panel: "لوحة التحكم",
      menu: { dash: "الرئيسية", movies: "الأفلام", series: "المسلسلات", live: "البث المباشر", ads: "الإعلانات", settings: "الإعدادات", maintenance: "وضع الصيانة" },
      stats: { movies: "الأفلام", series: "المسلسلات", channels: "القنوات", views: "المشاهدات" },
      recent: "آخر المحتوى",
      addNew: "إضافة جديد",
      fetchApi: "جلب من API",
      edit: "تعديل", del: "حذف",
      save: "حفظ",
      published: "منشور",
      active: "نشط",
    },
    maintenance: { title: "تحت الصيانة مؤقتاً", msg: "نقوم بتحديث المنصة لتقديم تجربة أفضل. سنعود قريباً.", back: "العودة" },
    online: "متاح", loading: "يتم تحميل البث…",
    noResults: "لا توجد نتائج",
    s: "موسم", e: "حلقة", comingSoon: "قريباً",
  },
  en: {
    dir: "ltr",
    logo: "Shahid",
    nav: { home: "Home", movies: "Movies", series: "Series", live: "Live TV", admin: "Admin" },
    hero: { watch: "Watch Now", list: "My List", trailer: "Trailer", newEp: "New Episode" },
    sections: { trending: "Trending Now", latest: "Latest Additions", todayEps: "Today's Episodes", live: "Live Channels" },
    filters: { all: "All", movie: "Movies", series: "Series" },
    search: "Search movies, series…",
    types: { movie: "Movie", series: "Series" },
    admin: {
      panel: "Admin Panel",
      menu: { dash: "Dashboard", movies: "Movies", series: "Series", live: "Live TV", ads: "Ads", settings: "Settings", maintenance: "Maintenance" },
      stats: { movies: "Movies", series: "Series", channels: "Channels", views: "Views" },
      recent: "Recent Content",
      addNew: "Add New",
      fetchApi: "Fetch from API",
      edit: "Edit", del: "Delete",
      save: "Save",
      published: "Published",
      active: "Active",
    },
    maintenance: { title: "Under Maintenance", msg: "We're upgrading the platform for a better experience. Back soon.", back: "Go Back" },
    online: "Online", loading: "Loading stream…",
    noResults: "No results found",
    s: "S", e: "E", comingSoon: "Coming Soon",
  },
};

// ─── MOCK DATA ──────────────────────────────────────────────────────────────────
const MOVIES = [
  { id:1, type:"movie",  title:"كيان",          titleEn:"Entity",         year:2025, rating:8.9, genres:["إثارة","Thriller"],   poster:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop&q=80",  backdrop:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=700&fit=crop&q=80",  featured:true  },
  { id:2, type:"movie",  title:"الحاجز",        titleEn:"The Barrier",    year:2026, rating:9.1, genres:["خيال علمي","Sci-Fi"], poster:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&h=450&fit=crop&q=80",  backdrop:"https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1400&h=700&fit=crop&q=80",  featured:true  },
  { id:3, type:"movie",  title:"نقطة الصفر",   titleEn:"Zero Point",     year:2025, rating:8.2, genres:["جريمة","Crime"],      poster:"https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop&q=80",  backdrop:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&h=700&fit=crop&q=80",  featured:false },
  { id:4, type:"movie",  title:"الظلام",        titleEn:"Darkness",       year:2024, rating:7.8, genres:["رعب","Horror"],       poster:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop&q=80",  backdrop:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1400&h=700&fit=crop&q=80",  featured:false },
  { id:5, type:"series", title:"مدينة الأشباح", titleEn:"Ghost City",     year:2026, rating:9.3, genres:["غموض","Mystery"],    poster:"https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=300&h=450&fit=crop&q=80",  backdrop:"https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=1400&h=700&fit=crop&q=80",  featured:true,  seasons:1, episodes:12 },
  { id:6, type:"series", title:"القرار",        titleEn:"The Decision",   year:2025, rating:8.6, genres:["دراما","Drama"],      poster:"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop&q=80",  backdrop:"https://images.unsplash.com/photo-1605979257913-1704eb7b6246?w=1400&h=700&fit=crop&q=80",  featured:false, seasons:2, episodes:24 },
  { id:7, type:"series", title:"الميراث",       titleEn:"The Legacy",     year:2025, rating:8.4, genres:["دراما","Drama"],      poster:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=300&h=450&fit=crop&q=80",  backdrop:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1400&h=700&fit=crop&q=80",  featured:false, seasons:3, episodes:45 },
  { id:8, type:"movie",  title:"صمت العاصمة",  titleEn:"Capital Silence", year:2024, rating:7.5, genres:["تشويق","Suspense"],  poster:"https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=450&fit=crop&q=80",  backdrop:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&h=700&fit=crop&q=80",  featured:false },
];

const CHANNELS = [
  { id:1, name:"MBC 1",        nameAr:"MBC 1",         icon:"📺", cat:"ترفيه / Entertainment",  active:true  },
  { id:2, name:"Al Arabiya",   nameAr:"العربية",        icon:"📡", cat:"أخبار / News",            active:true  },
  { id:3, name:"Rotana Cinema",nameAr:"روتانا سينما",   icon:"🎬", cat:"سينما / Cinema",          active:true  },
  { id:4, name:"beIN Sports",  nameAr:"بي إن سبورتس",  icon:"⚽", cat:"رياضة / Sports",          active:true  },
  { id:5, name:"Dubai TV",     nameAr:"دبي TV",          icon:"🌆", cat:"ترفيه / Entertainment",  active:true  },
  { id:6, name:"Al Jazeera",   nameAr:"الجزيرة",        icon:"🌍", cat:"أخبار / News",            active:false },
];

// ─── CSS STYLES ─────────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg0: #040411;
  --bg1: #07071C;
  --bg2: #0C0C24;
  --glass: rgba(255,255,255,0.04);
  --glass-border: rgba(255,255,255,0.08);
  --glass-hover: rgba(255,255,255,0.07);
  --accent: #4F8FFF;
  --accent2: #FF5F6D;
  --gold: #FFD166;
  --green: #4ADE80;
  --text1: #FFFFFF;
  --text2: rgba(255,255,255,0.65);
  --text3: rgba(255,255,255,0.35);
  --font: 'Cairo', 'Oswald', sans-serif;
  --radius: 16px;
  --radius-sm: 10px;
  --shadow: 0 24px 64px rgba(0,0,0,0.6);
  --glow-accent: 0 0 40px rgba(79,143,255,0.25);
  --glow-red: 0 0 40px rgba(255,95,109,0.25);
}

body { font-family: var(--font); background: var(--bg0); color: var(--text1); overflow-x: hidden; }
::-webkit-scrollbar { width: 3px; height: 3px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(79,143,255,0.35); border-radius: 999px; }

/* ── GLASS ── */
.gl  { background: var(--glass); backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%); border: 1px solid var(--glass-border); }
.gl2 { background: rgba(255,255,255,0.07); backdrop-filter: blur(32px) saturate(200%); -webkit-backdrop-filter: blur(32px) saturate(200%); border: 1px solid rgba(255,255,255,0.12); }

/* ── BUTTONS ── */
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 26px; border: none; border-radius: 12px; font-family: var(--font); font-weight: 700; font-size: 14px; cursor: pointer; transition: all .2s cubic-bezier(.34,1.56,.64,1); white-space: nowrap; }
.btn-p { background: linear-gradient(135deg,#4F8FFF,#2D6FFF); color:#fff; box-shadow:0 4px 20px rgba(79,143,255,.35); }
.btn-p:hover { transform:translateY(-3px); box-shadow:0 8px 32px rgba(79,143,255,.5); }
.btn-s { background:rgba(255,255,255,.08); color:#fff; border:1px solid rgba(255,255,255,.15); }
.btn-s:hover { background:rgba(255,255,255,.14); border-color:rgba(255,255,255,.25); }
.btn-r { background:linear-gradient(135deg,#FF5F6D,#E03040); color:#fff; }
.btn-r:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(255,95,109,.4); }
.btn-sm { padding:7px 16px; font-size:12px; border-radius:9px; }

/* ── BADGES ── */
.badge { display:inline-flex; align-items:center; padding:3px 10px; border-radius:6px; font-size:11px; font-weight:700; letter-spacing:.5px; }
.badge-b { background:rgba(79,143,255,.18); color:#4F8FFF; border:1px solid rgba(79,143,255,.3); }
.badge-g { background:rgba(74,222,128,.15); color:#4ADE80; border:1px solid rgba(74,222,128,.25); }
.badge-r { background:rgba(255,95,109,.18); color:#FF5F6D; border:1px solid rgba(255,95,109,.3); }
.badge-gold { background:rgba(255,209,102,.15); color:#FFD166; border:1px solid rgba(255,209,102,.25); }

/* ── CARD ── */
.card { border-radius:var(--radius); overflow:hidden; cursor:pointer; transition:transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s; position:relative; }
.card:hover { transform:translateY(-10px) scale(1.02); box-shadow:0 32px 64px rgba(0,0,0,.7), 0 0 0 1px rgba(79,143,255,.25); }

/* ── INPUTS ── */
.inp { width:100%; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:12px; padding:12px 18px; color:#fff; font-family:var(--font); font-size:14px; outline:none; transition:all .2s; }
.inp:focus { border-color:rgba(79,143,255,.5); background:rgba(255,255,255,.08); box-shadow:0 0 0 3px rgba(79,143,255,.12); }
.inp::placeholder { color:var(--text3); }

/* ── NAV ── */
.nav-item { padding:8px 16px; border-radius:10px; cursor:pointer; font-size:14px; font-weight:600; color:var(--text2); transition:all .2s; white-space:nowrap; }
.nav-item:hover, .nav-item.active { color:#fff; background:rgba(79,143,255,.14); }
.nav-item.active { color:#4F8FFF; }

/* ── SIDEBAR ── */
.sb-item { display:flex; align-items:center; gap:12px; padding:12px 16px; border-radius:12px; cursor:pointer; font-size:14px; font-weight:600; color:var(--text2); transition:all .2s; }
.sb-item:hover, .sb-item.active { background:rgba(79,143,255,.12); color:#4F8FFF; }

/* ── SCROLL ROW ── */
.row { display:flex; gap:16px; overflow-x:auto; padding-bottom:6px; scrollbar-width:none; }
.row::-webkit-scrollbar { display:none; }

/* ── ANIMATIONS ── */
@keyframes fadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn  { from{opacity:0} to{opacity:1} }
@keyframes pulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.7;transform:scale(.95)} }
@keyframes heroZoom{ from{transform:scale(1.06)} to{transform:scale(1)} }
@keyframes orbFloat{ 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-30px)} }
@keyframes orbFloat2{ 0%,100%{transform:translate(0,0)} 50%{transform:translate(-25px,20px)} }
@keyframes shimmer { 0%{background-position:-400% 0} 100%{background-position:400% 0} }
@keyframes rotateGrad{ 0%{filter:hue-rotate(0deg)} 100%{filter:hue-rotate(360deg)} }

.anim-up  { animation:fadeUp .55s cubic-bezier(.22,1,.36,1) both; }
.anim-in  { animation:fadeIn .4s ease both; }
.delay-1  { animation-delay:.1s; }
.delay-2  { animation-delay:.2s; }
.delay-3  { animation-delay:.3s; }
.delay-4  { animation-delay:.4s; }

/* ── LIVE DOT ── */
.live-dot { display:inline-block; width:8px; height:8px; border-radius:50%; background:#FF5F6D; animation:pulse 1.8s infinite; }

/* ── TOGGLE ── */
.toggle { position:relative; width:54px; height:29px; background:rgba(255,255,255,.1); border-radius:999px; cursor:pointer; transition:background .3s; border:1px solid rgba(255,255,255,.15); flex-shrink:0; }
.toggle.on { background:#4F8FFF; border-color:#4F8FFF; }
.toggle::after { content:''; position:absolute; top:3px; left:3px; width:21px; height:21px; background:#fff; border-radius:50%; transition:transform .3s cubic-bezier(.34,1.56,.64,1); box-shadow:0 2px 8px rgba(0,0,0,.3); }
.toggle.on::after { transform:translateX(25px); }

/* ── SECTION TITLE ── */
.sec-title { font-size:20px; font-weight:800; display:flex; align-items:center; gap:10px; margin-bottom:18px; }
.sec-title-bar { width:4px; height:22px; background:linear-gradient(180deg,#4F8FFF,#2D6FFF); border-radius:999px; flex-shrink:0; }

/* ── TABLE ── */
.tbl-row { transition:background .15s; }
.tbl-row:hover { background:rgba(255,255,255,.03); }

/* ── MESH OVERLAY ── */
.mesh { position:fixed; inset:0; pointer-events:none; z-index:0; overflow:hidden; }
.orb  { position:absolute; border-radius:50%; filter:blur(100px); }
`;

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────────
export default function Shahid365() {
  const [lang, setLang]       = useState("ar");
  const [page, setPage]       = useState("home");
  const [adminSec, setAdminSec] = useState("dash");
  const [query, setQuery]     = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [maintenance, setMaintenance] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [activeCh, setActiveCh] = useState(null);
  const [activeCat, setActiveCat] = useState("all");

  const L   = T[lang];
  const dir = L.dir;
  const featured = MOVIES.filter(m => m.featured);

  // Auto-rotate hero
  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % featured.length), 6000);
    return () => clearInterval(t);
  }, [featured.length]);

  if (maintenance && page !== "admin") {
    return <MaintenancePage L={L} lang={lang} dir={dir} onBack={() => setMaintenance(false)} />;
  }

  const navTo = (p) => { setPage(p); setQuery(""); };

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div dir={dir} style={{ fontFamily: "var(--font)", background: "var(--bg0)", minHeight: "100vh", color: "#fff", position: "relative" }}>

        {/* ── AMBIENT ORBS ── */}
        <div className="mesh">
          <div className="orb" style={{ width:700, height:700, background:"#1A3A8F", top:-250, left:-200, opacity:.25, animation:"orbFloat 14s ease-in-out infinite" }} />
          <div className="orb" style={{ width:600, height:600, background:"#8B1A2F", bottom:-200, right:-150, opacity:.2, animation:"orbFloat2 18s ease-in-out infinite" }} />
          <div className="orb" style={{ width:450, height:450, background:"#1A5A4A", top:"35%", left:"40%", opacity:.12, animation:"orbFloat 22s ease-in-out infinite reverse" }} />
          {/* Noise texture overlay */}
          <div style={{ position:"absolute", inset:0, backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", opacity:.03 }} />
        </div>

        {/* ── NAVBAR ── */}
        <Navbar L={L} lang={lang} dir={dir} page={page} navTo={navTo} query={query} setQuery={(q)=>{ setQuery(q); if(q) setPage("browse"); }} onLangToggle={()=>setLang(l=>l==="ar"?"en":"ar")} maintenance={maintenance} />

        {/* ── PAGES ── */}
        <div style={{ position:"relative", zIndex:1 }}>
          {page === "home"  && <HomePage  L={L} lang={lang} dir={dir} featured={featured} heroIdx={heroIdx} setHeroIdx={setHeroIdx} movies={MOVIES} channels={CHANNELS} navTo={navTo} hovered={hovered} setHovered={setHovered} />}
          {page === "browse"&& <BrowsePage L={L} lang={lang} dir={dir} movies={MOVIES} typeFilter={typeFilter} setTypeFilter={setTypeFilter} query={query} setQuery={setQuery} hovered={hovered} setHovered={setHovered} />}
          {page === "movies"&& <BrowsePage L={L} lang={lang} dir={dir} movies={MOVIES} typeFilter="movie"  setTypeFilter={setTypeFilter} query={query} setQuery={setQuery} hovered={hovered} setHovered={setHovered} />}
          {page === "series"&& <BrowsePage L={L} lang={lang} dir={dir} movies={MOVIES} typeFilter="series" setTypeFilter={setTypeFilter} query={query} setQuery={setQuery} hovered={hovered} setHovered={setHovered} />}
          {page === "live"  && <LivePage   L={L} lang={lang} dir={dir} channels={CHANNELS} activeCh={activeCh} setActiveCh={setActiveCh} activeCat={activeCat} setActiveCat={setActiveCat} />}
          {page === "admin" && <AdminPage  L={L} lang={lang} dir={dir} adminSec={adminSec} setAdminSec={setAdminSec} movies={MOVIES} channels={CHANNELS} maintenance={maintenance} setMaintenance={setMaintenance} />}
        </div>
      </div>
    </>
  );
}

// ─── NAVBAR ─────────────────────────────────────────────────────────────────────
function Navbar({ L, lang, dir, page, navTo, query, setQuery, onLangToggle, maintenance }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const el = document.querySelector(".app-scroll") || window;
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position:"sticky", top:0, zIndex:200,
      height:68, padding:"0 28px",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      background: scrolled ? "rgba(4,4,17,0.85)" : "rgba(4,4,17,0.5)",
      backdropFilter:"blur(28px)", WebkitBackdropFilter:"blur(28px)",
      borderBottom:"1px solid rgba(255,255,255,0.06)",
      transition:"background .3s"
    }}>
      {/* Logo */}
      <div onClick={()=>navTo("home")} style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", flexShrink:0 }}>
        <div style={{
          width:38, height:38, borderRadius:11,
          background:"linear-gradient(135deg,#4F8FFF,#2D6FFF)",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:20, boxShadow:"0 4px 16px rgba(79,143,255,.4)"
        }}>▶</div>
        <div style={{ lineHeight:1 }}>
          <span style={{ fontSize:21, fontWeight:900, letterSpacing:-.5, fontFamily:"'Oswald',sans-serif" }}>
            {lang==="ar" ? "شاهد" : "SHAHID"}<span style={{ color:"#4F8FFF" }}>365</span>
          </span>
        </div>
        {maintenance && <span className="badge badge-r" style={{ fontSize:10, padding:"2px 7px" }}>MAINTENANCE</span>}
      </div>

      {/* Nav Links */}
      <div style={{ display:"flex", alignItems:"center", gap:2 }}>
        {[
          ["home", L.nav.home],
          ["movies", L.nav.movies],
          ["series", L.nav.series],
          ["live", L.nav.live],
          ["admin", L.nav.admin],
        ].map(([p, label]) => (
          <div key={p} className={`nav-item ${page===p?"active":""}`} onClick={()=>navTo(p)}>
            {p==="live" ? <span style={{ display:"flex", alignItems:"center", gap:6 }}><span className="live-dot" style={{ width:6, height:6 }} />{label}</span> : label}
          </div>
        ))}
      </div>

      {/* Search + Lang */}
      <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
        <div style={{ position:"relative" }}>
          <span style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", [dir==="rtl"?"right":"left"]:14, fontSize:14, opacity:.4 }}>🔍</span>
          <input className="inp" style={{ width:210, padding: dir==="rtl" ? "9px 40px 9px 16px" : "9px 16px 9px 40px", fontSize:13 }}
            placeholder={L.search} value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
        <button className="btn btn-s btn-sm" style={{ padding:"8px 14px", borderRadius:10, fontWeight:700 }} onClick={onLangToggle}>
          {lang==="ar" ? "EN" : "عربي"}
        </button>
      </div>
    </nav>
  );
}

// ─── HOME PAGE ───────────────────────────────────────────────────────────────────
function HomePage({ L, lang, dir, featured, heroIdx, setHeroIdx, movies, channels, navTo, hovered, setHovered }) {
  const hero = featured[heroIdx];

  return (
    <div>
      {/* ── HERO ── */}
      <div key={heroIdx} style={{ position:"relative", height:"min(90vh,720px)", overflow:"hidden" }}>
        {/* Backdrop */}
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:`url(${hero.backdrop})`,
          backgroundSize:"cover", backgroundPosition:"center",
          animation:"heroZoom 7s ease forwards",
          filter:"brightness(.35) saturate(1.2)"
        }}/>
        {/* Gradient veil */}
        <div style={{ position:"absolute", inset:0, background: dir==="rtl"
          ? "linear-gradient(to left, rgba(4,4,17,.98) 0%, rgba(4,4,17,.55) 55%, rgba(4,4,17,.1) 100%)"
          : "linear-gradient(to right, rgba(4,4,17,.98) 0%, rgba(4,4,17,.55) 55%, rgba(4,4,17,.1) 100%)" }}/>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:220, background:"linear-gradient(to top, var(--bg0) 0%, transparent 100%)" }}/>

        {/* Content */}
        <div style={{
          position:"absolute", inset:0,
          display:"flex", alignItems:"center",
          padding:"0 52px",
          maxWidth: dir==="rtl" ? undefined : 700,
          ...(dir==="rtl" ? { justifyContent:"flex-end" } : {})
        }}>
          <div style={{ animation:"fadeUp .65s cubic-bezier(.22,1,.36,1) both", maxWidth:620 }}>
            {/* Badges */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18, flexWrap:"wrap" }}>
              <span className={`badge ${hero.type==="movie"?"badge-b":"badge-gold"}`}>
                {hero.type==="movie" ? L.types.movie : L.types.series}
              </span>
              {hero.type==="series" && <span className="badge badge-r">🔴 {L.hero.newEp}</span>}
              <span style={{ color:"#FFD166", fontWeight:700, display:"flex", alignItems:"center", gap:4, fontSize:14 }}>
                ★ {hero.rating}
              </span>
              <span style={{ color:"var(--text3)", fontSize:13 }}>• {hero.year}</span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize:"clamp(36px,5.5vw,66px)", fontWeight:900,
              lineHeight:1.05, marginBottom:14,
              fontFamily:"'Oswald',sans-serif", letterSpacing:"-1px",
              textShadow:"0 4px 32px rgba(0,0,0,.6)"
            }}>
              {lang==="ar" ? hero.title : hero.titleEn}
            </h1>

            {/* Genres */}
            <div style={{ display:"flex", gap:8, marginBottom:28, flexWrap:"wrap" }}>
              {hero.genres.map((g,i)=>(
                <span key={i} style={{ padding:"4px 14px", borderRadius:8, background:"rgba(255,255,255,.08)", fontSize:12, fontWeight:600, border:"1px solid rgba(255,255,255,.1)" }}>{g}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <button className="btn btn-p" style={{ fontSize:16, padding:"15px 34px" }}>▶ {L.hero.watch}</button>
              <button className="btn btn-s">♡ {L.hero.list}</button>
              <button className="btn btn-s">🎬 {L.hero.trailer}</button>
            </div>
          </div>
        </div>

        {/* Hero dots */}
        <div style={{ position:"absolute", bottom:100, [dir==="rtl"?"left":"right"]:44, display:"flex", gap:8, alignItems:"center" }}>
          {featured.map((_,i)=>(
            <div key={i} onClick={()=>setHeroIdx(i)} style={{
              height:6, width:i===heroIdx?28:6, borderRadius:999,
              background:i===heroIdx?"#4F8FFF":"rgba(255,255,255,.25)",
              cursor:"pointer", transition:"all .35s cubic-bezier(.34,1.56,.64,1)"
            }}/>
          ))}
        </div>
      </div>

      {/* ── SECTIONS ── */}
      <div style={{ padding:"0 28px 48px", maxWidth:1440, margin:"0 auto" }}>

        {/* Trending */}
        <Section title={L.sections.trending}>
          <div className="row">
            {movies.filter(m=>m.rating>=8.4).map((m,i)=>(
              <ContentCard key={m.id} movie={m} lang={lang} L={L} hovered={hovered} setHovered={setHovered} delay={i*0.06} />
            ))}
          </div>
        </Section>

        {/* Latest */}
        <Section title={L.sections.latest}>
          <div className="row">
            {[...movies].sort((a,b)=>b.year-a.year).map((m,i)=>(
              <ContentCard key={m.id} movie={m} lang={lang} L={L} hovered={hovered} setHovered={setHovered} delay={i*0.06} />
            ))}
          </div>
        </Section>

        {/* Live Banner */}
        <div className="gl anim-up" style={{
          borderRadius:24, padding:"28px 36px", marginBottom:44,
          background:"linear-gradient(135deg,rgba(79,143,255,.07),rgba(255,95,109,.06))",
          display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20
        }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
              <span className="live-dot"/>
              <span style={{ color:"#FF5F6D", fontWeight:800, fontSize:13, letterSpacing:1, textTransform:"uppercase" }}>Live</span>
            </div>
            <h3 style={{ fontSize:24, fontWeight:800, marginBottom:6, fontFamily:"'Oswald',sans-serif" }}>{L.sections.live}</h3>
            <span style={{ color:"var(--text3)", fontSize:13 }}>{channels.filter(c=>c.active).length} {lang==="ar"?"قناة متاحة":"channels available"}</span>
          </div>
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            {channels.slice(0,4).map(ch=>(
              <div key={ch.id} className="gl" style={{ padding:"10px 18px", borderRadius:12, display:"flex", alignItems:"center", gap:8, fontSize:13, fontWeight:600 }}>
                <span>{ch.icon}</span><span>{lang==="ar"?ch.nameAr:ch.name}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-p" onClick={()=>navTo("live")}>
            {lang==="ar"?"مشاهدة البث":"Watch Live"} →
          </button>
        </div>

        {/* Today's Episodes */}
        <Section title={L.sections.todayEps}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))", gap:14 }}>
            {movies.filter(m=>m.type==="series").map(s=>(
              <div key={s.id} className="gl card" style={{ borderRadius:16, padding:16, display:"flex", gap:14, cursor:"default" }}>
                <img src={s.poster} alt={s.title} style={{ width:62, height:90, borderRadius:10, objectFit:"cover", flexShrink:0 }}/>
                <div style={{ flex:1, overflow:"hidden" }}>
                  <div style={{ fontWeight:700, marginBottom:5, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                    {lang==="ar"?s.title:s.titleEn}
                  </div>
                  <div style={{ fontSize:12, color:"var(--text3)", marginBottom:10 }}>
                    {L.s}{s.seasons} • {L.e}{s.episodes}
                  </div>
                  <button className="btn btn-p btn-sm">▶ {L.hero.watch}</button>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

// ─── SECTION WRAPPER ────────────────────────────────────────────────────────────
function Section({ title, children }) {
  return (
    <div style={{ marginBottom:44 }} className="anim-up">
      <div className="sec-title"><div className="sec-title-bar"/>{title}</div>
      {children}
    </div>
  );
}

// ─── CONTENT CARD ───────────────────────────────────────────────────────────────
function ContentCard({ movie, lang, L, hovered, setHovered, delay=0 }) {
  const isHov = hovered === movie.id;
  return (
    <div className="card" style={{ minWidth:162, width:162, flexShrink:0, animation:`fadeUp .5s ${delay}s both` }}
      onMouseEnter={()=>setHovered(movie.id)} onMouseLeave={()=>setHovered(null)}>
      <img src={movie.poster} alt={movie.title} style={{ width:"100%", height:243, objectFit:"cover", display:"block" }}/>

      {/* Base gradient */}
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(4,4,17,.97) 0%, rgba(4,4,17,.4) 55%, transparent 100%)" }}/>

      {/* Hover tint */}
      {isHov && <div style={{ position:"absolute", inset:0, background:"rgba(79,143,255,.08)", animation:"fadeIn .2s" }}/>}

      {/* Type badge */}
      <div style={{ position:"absolute", top:10, [lang==="ar"?"left":"right"]:10 }}>
        <span className={`badge ${movie.type==="movie"?"badge-b":"badge-gold"}`}>
          {movie.type==="movie"?L.types.movie:L.types.series}
        </span>
      </div>

      {/* Info */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:13 }}>
        <div style={{ fontWeight:700, fontSize:13, marginBottom:5, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
          {lang==="ar"?movie.title:movie.titleEn}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:12 }}>
          <span style={{ color:"#FFD166" }}>★ {movie.rating}</span>
          <span style={{ color:"var(--text3)" }}>•</span>
          <span style={{ color:"var(--text2)" }}>{movie.year}</span>
        </div>
        {isHov && (
          <button className="btn btn-p" style={{ marginTop:10, width:"100%", justifyContent:"center", padding:"8px", fontSize:12, animation:"fadeUp .18s both" }}>
            ▶ {L.hero.watch}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── BROWSE PAGE ────────────────────────────────────────────────────────────────
function BrowsePage({ L, lang, dir, movies, typeFilter, setTypeFilter, query, setQuery, hovered, setHovered }) {
  const [localFilter, setLocalFilter] = useState(typeFilter || "all");

  const filtered = movies.filter(m => {
    const okType  = localFilter==="all" || m.type===localFilter;
    const okQuery = !query || m.title.includes(query) || m.titleEn.toLowerCase().includes(query.toLowerCase());
    return okType && okQuery;
  });

  return (
    <div style={{ padding:"36px 28px 56px", maxWidth:1440, margin:"0 auto", animation:"fadeUp .45s both" }}>
      {/* Filter bar */}
      <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:32, flexWrap:"wrap" }}>
        <div style={{ position:"relative", flex:1, minWidth:200, maxWidth:380 }}>
          <span style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", [dir==="rtl"?"right":"left"]:15, opacity:.4, fontSize:14 }}>🔍</span>
          <input className="inp" style={{ paddingLeft: dir==="rtl"?"16px":"44px", paddingRight: dir==="rtl"?"44px":"16px" }}
            placeholder={L.search} value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
        <div style={{ display:"flex", gap:8 }}>
          {["all","movie","series"].map(f=>(
            <button key={f} onClick={()=>setLocalFilter(f)} className="btn btn-sm" style={{
              background: localFilter===f ? "linear-gradient(135deg,#4F8FFF,#2D6FFF)" : "rgba(255,255,255,.06)",
              border: `1px solid ${localFilter===f ? "transparent" : "rgba(255,255,255,.1)"}`,
              color:"#fff", fontFamily:"var(--font)", fontWeight:600
            }}>
              {f==="all"?L.filters.all:f==="movie"?L.filters.movie:L.filters.series}
            </button>
          ))}
        </div>
        <span style={{ color:"var(--text3)", fontSize:13 }}>{filtered.length} {lang==="ar"?"نتيجة":"results"}</span>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(162px,1fr))", gap:20 }}>
          {filtered.map((m,i)=>(
            <ContentCard key={m.id} movie={m} lang={lang} L={L} hovered={hovered} setHovered={setHovered} delay={i*0.04} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign:"center", color:"var(--text3)", padding:"80px 0", fontSize:18 }}>
          {L.noResults}
        </div>
      )}
    </div>
  );
}

// ─── LIVE PAGE ──────────────────────────────────────────────────────────────────
function LivePage({ L, lang, dir, channels, activeCh, setActiveCh, activeCat, setActiveCat }) {
  const cats = ["all", ...new Set(channels.map(c=>c.cat.split("/")[0].trim()))];
  const filtered = activeCat==="all" ? channels : channels.filter(c=>c.cat.includes(activeCat));

  return (
    <div style={{ padding:"36px 28px 56px", maxWidth:1440, margin:"0 auto", animation:"fadeUp .45s both" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:32 }}>
        <span className="live-dot"/>
        <h2 style={{ fontSize:28, fontWeight:900, fontFamily:"'Oswald',sans-serif" }}>{lang==="ar"?"البث المباشر":"Live TV"}</h2>
        <span className="badge badge-r">{channels.filter(c=>c.active).length} {lang==="ar"?"قناة":"Channels"}</span>
      </div>

      {/* Player */}
      {activeCh && (
        <div className="gl2" style={{ borderRadius:22, overflow:"hidden", marginBottom:36, animation:"fadeIn .3s" }}>
          <div style={{ background:"#000", height:380, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:72, marginBottom:18 }}>{activeCh.icon}</div>
              <div style={{ fontSize:24, fontWeight:800, fontFamily:"'Oswald',sans-serif", marginBottom:8 }}>
                {lang==="ar"?activeCh.nameAr:activeCh.name}
              </div>
              <div style={{ color:"var(--text3)", fontSize:13 }}>{L.loading}</div>
            </div>
            <div style={{ position:"absolute", top:18, [dir==="rtl"?"left":"right"]:18, display:"flex", alignItems:"center", gap:8 }}>
              <span className="live-dot"/>
              <span style={{ color:"#FF5F6D", fontWeight:800, fontSize:12, letterSpacing:1 }}>LIVE</span>
            </div>
            <button onClick={()=>setActiveCh(null)} style={{
              position:"absolute", top:18, [dir==="rtl"?"right":"left"]:18,
              background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.15)",
              color:"#fff", borderRadius:9, padding:"6px 14px", cursor:"pointer",
              fontFamily:"var(--font)", fontSize:12
            }}>✕ {lang==="ar"?"إغلاق":"Close"}</button>
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <div style={{ display:"flex", gap:8, marginBottom:24, flexWrap:"wrap" }}>
        {cats.map(cat=>(
          <button key={cat} onClick={()=>setActiveCat(cat)} className="btn btn-sm" style={{
            background: activeCat===cat ? "linear-gradient(135deg,#4F8FFF,#2D6FFF)" : "rgba(255,255,255,.06)",
            border:`1px solid ${activeCat===cat?"transparent":"rgba(255,255,255,.1)"}`,
            color:"#fff", fontFamily:"var(--font)", fontWeight:600
          }}>
            {cat==="all"?(lang==="ar"?"الكل":"All"):cat}
          </button>
        ))}
      </div>

      {/* Channels Grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:14 }}>
        {filtered.map(ch=>(
          <div key={ch.id} onClick={()=>setActiveCh(ch)}
            className="gl" style={{
              borderRadius:18, padding:"24px 16px", textAlign:"center", cursor:"pointer",
              transition:"all .3s cubic-bezier(.34,1.56,.64,1)",
              border:`1px solid ${activeCh?.id===ch.id?"rgba(79,143,255,.5)":"rgba(255,255,255,.07)"}`,
              background: activeCh?.id===ch.id ? "rgba(79,143,255,.1)" : undefined,
              display:"flex", flexDirection:"column", alignItems:"center", gap:10,
              opacity: ch.active ? 1 : .45
            }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.06)"; e.currentTarget.style.borderColor="rgba(79,143,255,.4)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform=""; e.currentTarget.style.borderColor=activeCh?.id===ch.id?"rgba(79,143,255,.5)":"rgba(255,255,255,.07)"; }}
          >
            <div style={{ fontSize:46 }}>{ch.icon}</div>
            <div style={{ fontWeight:700, fontSize:14 }}>{lang==="ar"?ch.nameAr:ch.name}</div>
            <span className="badge badge-b" style={{ fontSize:10 }}>{ch.cat.split("/")[0].trim()}</span>
            <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:12 }}>
              {ch.active ? <><span className="live-dot" style={{ width:6, height:6 }}/><span style={{ color:"var(--text2)" }}>{L.online}</span></> : <span style={{ color:"var(--text3)" }}>Offline</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ADMIN PAGE ─────────────────────────────────────────────────────────────────
function AdminPage({ L, lang, dir, adminSec, setAdminSec, movies, channels, maintenance, setMaintenance }) {
  const La = L.admin;
  const stats = [
    { label:La.stats.movies,   val:movies.filter(m=>m.type==="movie").length, icon:"🎬", color:"#4F8FFF", bg:"rgba(79,143,255,.1)"  },
    { label:La.stats.series,   val:movies.filter(m=>m.type==="series").length,icon:"📺", color:"#4ADE80", bg:"rgba(74,222,128,.1)"  },
    { label:La.stats.channels, val:channels.length,                            icon:"📡", color:"#FFD166", bg:"rgba(255,209,102,.1)" },
    { label:La.stats.views,    val:"1.2M",                                     icon:"👁", color:"#FF5F6D", bg:"rgba(255,95,109,.1)"  },
  ];
  const menuItems = [
    { id:"dash",   label:La.menu.dash,   icon:"📊" },
    { id:"movies", label:La.menu.movies, icon:"🎬" },
    { id:"series", label:La.menu.series, icon:"📺" },
    { id:"live",   label:La.menu.live,   icon:"📡" },
    { id:"ads",    label:La.menu.ads,    icon:"📢" },
    { id:"settings",label:La.menu.settings,icon:"⚙️" },
    { id:"maint",  label:La.menu.maintenance, icon:"🔧" },
  ];

  return (
    <div style={{ display:"flex", minHeight:"calc(100vh - 68px)", animation:"fadeIn .4s both" }}>
      {/* ── Sidebar ── */}
      <div className="gl" style={{
        width:230, flexShrink:0, borderRadius:0,
        borderTop:"none", borderBottom:"none",
        [dir==="rtl"?"borderLeft":"borderRight"]:"1px solid rgba(255,255,255,.06)",
        padding:"20px 12px", display:"flex", flexDirection:"column", gap:3
      }}>
        <div style={{ padding:"6px 16px 16px", fontSize:11, color:"var(--text3)", fontWeight:700, letterSpacing:1.5, textTransform:"uppercase" }}>
          {La.panel}
        </div>
        {menuItems.map(item=>(
          <div key={item.id} className={`sb-item ${adminSec===item.id?"active":""}`} onClick={()=>setAdminSec(item.id)}>
            <span style={{ fontSize:18 }}>{item.icon}</span>
            <span style={{ flex:1 }}>{item.label}</span>
            {item.id==="maint" && maintenance && <span className="badge badge-r" style={{ fontSize:9, padding:"2px 6px" }}>ON</span>}
          </div>
        ))}
      </div>

      {/* ── Main ── */}
      <div style={{ flex:1, padding:"32px 36px", overflow:"auto" }}>

        {/* DASHBOARD */}
        {adminSec==="dash" && (
          <div className="anim-up">
            <h2 style={{ fontSize:26, fontWeight:900, marginBottom:28, fontFamily:"'Oswald',sans-serif" }}>{La.menu.dash}</h2>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:16, marginBottom:36 }}>
              {stats.map((s,i)=>(
                <div key={i} className="gl" style={{ padding:24, borderRadius:20, background:s.bg, border:`1px solid ${s.color}22`, animation:`fadeUp .4s ${i*.08}s both` }}>
                  <div style={{ fontSize:34, marginBottom:10 }}>{s.icon}</div>
                  <div style={{ fontSize:38, fontWeight:900, color:s.color, lineHeight:1, marginBottom:6, fontFamily:"'Oswald',sans-serif" }}>{s.val}</div>
                  <div style={{ fontSize:13, color:"var(--text2)" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="gl" style={{ borderRadius:18, overflow:"hidden" }}>
              <div style={{ padding:"18px 24px", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontWeight:700 }}>{La.recent}</span>
                <button className="btn btn-p btn-sm">{La.addNew} +</button>
              </div>
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse" }}>
                  <thead>
                    <tr style={{ borderBottom:"1px solid rgba(255,255,255,.06)" }}>
                      {[lang==="ar"?"العنوان":"Title", lang==="ar"?"النوع":"Type", lang==="ar"?"التقييم":"Rating", lang==="ar"?"السنة":"Year", lang==="ar"?"الحالة":"Status"].map(h=>(
                        <th key={h} style={{ padding:"12px 18px", textAlign:dir==="rtl"?"right":"left", fontSize:11, color:"var(--text3)", fontWeight:700, letterSpacing:.8, textTransform:"uppercase" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map(m=>(
                      <tr key={m.id} className="tbl-row" style={{ borderBottom:"1px solid rgba(255,255,255,.04)" }}>
                        <td style={{ padding:"13px 18px" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                            <img src={m.poster} style={{ width:38, height:55, borderRadius:8, objectFit:"cover" }} alt=""/>
                            <span style={{ fontWeight:600, fontSize:14 }}>{lang==="ar"?m.title:m.titleEn}</span>
                          </div>
                        </td>
                        <td style={{ padding:"13px 18px" }}>
                          <span className={`badge ${m.type==="movie"?"badge-b":"badge-gold"}`}>
                            {m.type==="movie"?L.types.movie:L.types.series}
                          </span>
                        </td>
                        <td style={{ padding:"13px 18px", color:"#FFD166", fontWeight:700 }}>★ {m.rating}</td>
                        <td style={{ padding:"13px 18px", color:"var(--text2)" }}>{m.year}</td>
                        <td style={{ padding:"13px 18px" }}><span className="badge badge-g">{La.published}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* MOVIES / SERIES */}
        {(adminSec==="movies" || adminSec==="series") && (
          <div className="anim-up">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:28, flexWrap:"wrap", gap:12 }}>
              <h2 style={{ fontSize:26, fontWeight:900, fontFamily:"'Oswald',sans-serif" }}>
                {adminSec==="movies"?La.menu.movies:La.menu.series}
              </h2>
              <div style={{ display:"flex", gap:12 }}>
                <button className="btn btn-s">{La.fetchApi} 🔗</button>
                <button className="btn btn-p">{La.addNew} +</button>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(195px,1fr))", gap:16 }}>
              {movies.filter(m=>adminSec==="movies"?m.type==="movie":m.type==="series").map((m,i)=>(
                <div key={m.id} className="gl card" style={{ borderRadius:16, overflow:"hidden", animation:`fadeUp .4s ${i*.07}s both` }}>
                  <img src={m.poster} style={{ width:"100%", height:190, objectFit:"cover" }} alt=""/>
                  <div style={{ padding:14 }}>
                    <div style={{ fontWeight:700, fontSize:13, marginBottom:5, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                      {lang==="ar"?m.title:m.titleEn}
                    </div>
                    <div style={{ fontSize:12, color:"var(--text3)", marginBottom:12 }}>★ {m.rating} • {m.year}</div>
                    <div style={{ display:"flex", gap:8 }}>
                      <button className="btn btn-sm" style={{ flex:1, justifyContent:"center", background:"rgba(79,143,255,.15)", border:"1px solid rgba(79,143,255,.3)", color:"#4F8FFF", fontFamily:"var(--font)", fontWeight:700 }}>{La.edit}</button>
                      <button className="btn btn-sm" style={{ flex:1, justifyContent:"center", background:"rgba(255,95,109,.15)", border:"1px solid rgba(255,95,109,.3)", color:"#FF5F6D", fontFamily:"var(--font)", fontWeight:700 }}>{La.del}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LIVE CHANNELS */}
        {adminSec==="live" && (
          <div className="anim-up">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:28, gap:12, flexWrap:"wrap" }}>
              <h2 style={{ fontSize:26, fontWeight:900, fontFamily:"'Oswald',sans-serif" }}>{La.menu.live}</h2>
              <button className="btn btn-p">{La.addNew} +</button>
            </div>
            <div className="gl" style={{ borderRadius:18, overflow:"hidden" }}>
              {channels.map((ch,i)=>(
                <div key={ch.id} style={{
                  display:"flex", alignItems:"center", gap:16, padding:"16px 24px",
                  borderBottom:i<channels.length-1?"1px solid rgba(255,255,255,.05)":"none",
                  animation:`fadeUp .35s ${i*.06}s both`
                }}>
                  <span style={{ fontSize:30 }}>{ch.icon}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:700, marginBottom:3 }}>{lang==="ar"?ch.nameAr:ch.name}</div>
                    <div style={{ fontSize:12, color:"var(--text3)" }}>{ch.cat}</div>
                  </div>
                  <span className={`badge ${ch.active?"badge-g":"badge-r"}`}>{ch.active?La.active:"Offline"}</span>
                  <button className="btn btn-sm" style={{ background:"rgba(255,95,109,.15)", border:"1px solid rgba(255,95,109,.3)", color:"#FF5F6D", fontFamily:"var(--font)", fontWeight:700 }}>{La.del}</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADS */}
        {adminSec==="ads" && (
          <div className="anim-up">
            <h2 style={{ fontSize:26, fontWeight:900, marginBottom:28, fontFamily:"'Oswald',sans-serif" }}>{La.menu.ads}</h2>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {["Banner Top","Video Preroll"].map(adType=>(
                <div key={adType} className="gl" style={{ borderRadius:20, padding:28 }}>
                  <div style={{ fontWeight:700, marginBottom:18, fontSize:16 }}>{adType}</div>
                  <div style={{ height:110, borderRadius:12, border:"2px dashed rgba(255,255,255,.1)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18, color:"var(--text3)", fontSize:13 }}>
                    {lang==="ar"?"لا يوجد إعلان حالياً":"No ad configured"}
                  </div>
                  <input className="inp" placeholder={lang==="ar"?"أدخل رابط الإعلان...":"Enter ad URL..."} style={{ marginBottom:12 }}/>
                  <button className="btn btn-p btn-sm">{La.save}</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {adminSec==="settings" && (
          <div className="anim-up">
            <h2 style={{ fontSize:26, fontWeight:900, marginBottom:28, fontFamily:"'Oswald',sans-serif" }}>{La.menu.settings}</h2>
            <div className="gl" style={{ borderRadius:20, padding:32, maxWidth:560 }}>
              {[
                { label: lang==="ar"?"رابط قاعدة البيانات":"MongoDB URI",     val:"mongodb+srv://***:***@cluster0.foexx4q.mongodb.net/shahid365" },
                { label:"TMDB API Key",                                          val:"••••••••••••••••••••" },
                { label:"OMDb API Key",                                          val:"••••••••••••••" },
                { label:"TVDB API Key",                                          val:"••••••••••••••" },
              ].map((s,i)=>(
                <div key={i} style={{ marginBottom:22 }}>
                  <label style={{ display:"block", fontSize:12, color:"var(--text3)", fontWeight:700, letterSpacing:.8, textTransform:"uppercase", marginBottom:8 }}>{s.label}</label>
                  <input className="inp" defaultValue={s.val}/>
                </div>
              ))}
              <button className="btn btn-p">{La.save} ✓</button>
            </div>
          </div>
        )}

        {/* MAINTENANCE */}
        {adminSec==="maint" && (
          <div className="anim-up">
            <h2 style={{ fontSize:26, fontWeight:900, marginBottom:28, fontFamily:"'Oswald',sans-serif" }}>{La.menu.maintenance}</h2>
            <div className="gl" style={{ borderRadius:22, padding:36, maxWidth:580 }}>
              {/* Toggle Row */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:28, gap:20 }}>
                <div>
                  <div style={{ fontSize:18, fontWeight:700, marginBottom:6 }}>
                    {lang==="ar"?"وضع الصيانة":"Maintenance Mode"}
                  </div>
                  <div style={{ fontSize:13, color:"var(--text3)", maxWidth:340 }}>
                    {lang==="ar"?"عند التفعيل، يتم توجيه جميع الزوار إلى صفحة الصيانة. لن يتأثر الأدمن.":"When enabled, all visitors are redirected to the maintenance page. Admins are unaffected."}
                  </div>
                </div>
                <div className={`toggle ${maintenance?"on":""}`} onClick={()=>setMaintenance(m=>!m)}/>
              </div>

              {/* Status Banner */}
              <div style={{
                padding:"18px 22px", borderRadius:14, marginBottom:24,
                background: maintenance?"rgba(255,95,109,.08)":"rgba(74,222,128,.08)",
                border:`1px solid ${maintenance?"rgba(255,95,109,.22)":"rgba(74,222,128,.22)"}`,
                display:"flex", alignItems:"center", gap:12
              }}>
                <span style={{ fontSize:26 }}>{maintenance?"⚠️":"✅"}</span>
                <div>
                  <div style={{ fontWeight:700, color:maintenance?"#FF5F6D":"#4ADE80", marginBottom:3 }}>
                    {maintenance
                      ? (lang==="ar"?"المنصة في وضع الصيانة حالياً":"Platform is currently in maintenance mode")
                      : (lang==="ar"?"المنصة تعمل بشكل طبيعي":"Platform is running normally")}
                  </div>
                  <div style={{ fontSize:12, color:"var(--text3)" }}>
                    {maintenance
                      ? (lang==="ar"?"جميع الزوار يرون صفحة الصيانة":"All visitors see the maintenance page")
                      : (lang==="ar"?"لا قيود حالياً على الوصول":"No access restrictions currently")}
                  </div>
                </div>
              </div>

              {/* Custom message */}
              <label style={{ display:"block", fontSize:12, color:"var(--text3)", fontWeight:700, letterSpacing:.8, textTransform:"uppercase", marginBottom:8 }}>
                {lang==="ar"?"رسالة مخصصة":"Custom Message"}
              </label>
              <textarea className="inp" rows={3} style={{ resize:"vertical", lineHeight:1.7 }}
                defaultValue={lang==="ar"?"نقوم بتحديث المنصة لتقديم تجربة أفضل. سنعود قريباً جداً.":"We're upgrading the platform for a better experience. We'll be back very soon."} />
              <div style={{ marginTop:16 }}>
                <button className="btn btn-p btn-sm">{La.save}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAINTENANCE PAGE ────────────────────────────────────────────────────────────
function MaintenancePage({ L, lang, dir, onBack }) {
  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"var(--bg0)", padding:24, textAlign:"center", position:"relative", overflow:"hidden" }}>
      {/* Orbs */}
      <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", background:"#1A3A8F", top:-150, left:-150, filter:"blur(100px)", opacity:.18, animation:"orbFloat 14s ease-in-out infinite" }}/>
      <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"#8B1A2F", bottom:-100, right:-100, filter:"blur(100px)", opacity:.15, animation:"orbFloat2 18s ease-in-out infinite" }}/>

      <div style={{ position:"relative", animation:"fadeUp .7s cubic-bezier(.22,1,.36,1) both" }}>
        <div style={{ fontSize:90, marginBottom:28, lineHeight:1 }}>🔧</div>
        <div style={{ display:"inline-block", padding:"6px 18px", borderRadius:99, background:"rgba(255,95,109,.15)", border:"1px solid rgba(255,95,109,.3)", color:"#FF5F6D", fontWeight:700, fontSize:12, letterSpacing:2, textTransform:"uppercase", marginBottom:24 }}>
          Maintenance
        </div>
        <h1 style={{ fontSize:"clamp(32px,6vw,56px)", fontWeight:900, marginBottom:18, fontFamily:"'Oswald',sans-serif", letterSpacing:-1 }}>
          {L.maintenance.title}
        </h1>
        <p style={{ fontSize:16, color:"var(--text2)", marginBottom:36, maxWidth:400, lineHeight:1.7 }}>
          {L.maintenance.msg}
        </p>
        <button className="btn btn-p" onClick={onBack} style={{ fontSize:16 }}>← {L.maintenance.back}</button>
      </div>
    </div>
  );
}
