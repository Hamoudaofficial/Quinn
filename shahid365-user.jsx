import { useState, useEffect, useRef } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────────
const MV=[
  {_id:"m1",type:"movie", title:"كيان",          en:"Entity",         y:2025,r:8.9,g:["إثارة"],    p:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=260&h=390&fit=crop",b:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=700&fit=crop",ft:true, desc:"في عالم تسوده الأسرار، يجد رجل نفسه في مواجهة قوى خفية تهدد وجوده. رحلة مثيرة إلى أعماق النفس البشرية." },
  {_id:"m2",type:"movie", title:"الحاجز",        en:"The Barrier",    y:2026,r:9.1,g:["خيال علمي"],p:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=260&h=390&fit=crop",b:"https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1400&h=700&fit=crop",ft:true, desc:"عندما تُقلب قوانين الفيزياء رأسًا على عقب، تبدأ القصة الحقيقية. مستقبل البشرية على المحك." },
  {_id:"m3",type:"movie", title:"نقطة الصفر",   en:"Zero Point",     y:2025,r:8.2,g:["جريمة"],    p:"https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=260&h=390&fit=crop",b:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&h=700&fit=crop",ft:false,desc:"محقق يتبع أثر جريمة تُعيد رسم خريطة المدينة. الحقيقة ليست دائماً ما تراه." },
  {_id:"m4",type:"movie", title:"الظلام",        en:"Darkness",       y:2024,r:7.8,g:["رعب"],      p:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=260&h=390&fit=crop",b:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1400&h=700&fit=crop",ft:false,desc:"قرية نائية، أسرار مدفونة، وصوت يأتي من الجدران. هل هو وهم أم حقيقة؟" },
  {_id:"s1",type:"series",title:"مدينة الأشباح", en:"Ghost City",     y:2026,r:9.3,g:["غموض"],    p:"https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=260&h=390&fit=crop",b:"https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=1400&h=700&fit=crop",ft:true, desc:"مدينة عصرية تختفي سكانها ليلاً. مجموعة من المحققين تكشف شبكة سرّية تمتد لعقود.",s:2,ep:24},
  {_id:"s2",type:"series",title:"القرار",        en:"The Decision",   y:2025,r:8.6,g:["دراما"],    p:"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=260&h=390&fit=crop",b:"https://images.unsplash.com/photo-1605979257913-1704eb7b6246?w=1400&h=700&fit=crop",ft:false,desc:"رجل أعمال يواجه خيارًا يغيّر حياته وحياة من حوله. دراما إنسانية مؤثرة.",s:1,ep:12},
  {_id:"s3",type:"series",title:"الميراث",       en:"The Legacy",     y:2025,r:8.4,g:["دراما"],    p:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=260&h=390&fit=crop",b:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1400&h=700&fit=crop",ft:false,desc:"ثلاثة أجيال تتصارع على إرث عائلي. من يستحق الخلافة؟",s:3,ep:45},
  {_id:"m5",type:"movie", title:"صمت العاصمة",  en:"Capital Silence", y:2024,r:7.5,g:["تشويق"],   p:"https://images.unsplash.com/photo-1560472355-536de3962603?w=260&h=390&fit=crop",b:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&h=700&fit=crop",ft:false,desc:"مدينة صامتة تخفي صرخة. صحفية تبحث عن الحقيقة في أخطر رحلة لها." },
];
const CH=[
  {_id:"c1",name:"MBC 1",         ar:"MBC 1",         ic:"📺",cat:"ترفيه",on:true,  stream:"#"},
  {_id:"c2",name:"Al Arabiya",    ar:"العربية",        ic:"📡",cat:"أخبار",on:true,  stream:"#"},
  {_id:"c3",name:"Rotana Cinema", ar:"روتانا سينما",   ic:"🎬",cat:"سينما",on:true,  stream:"#"},
  {_id:"c4",name:"beIN Sports",   ar:"بي إن سبورتس",  ic:"⚽",cat:"رياضة",on:true,  stream:"#"},
  {_id:"c5",name:"Dubai TV",      ar:"دبي TV",         ic:"🌆",cat:"ترفيه",on:true,  stream:"#"},
  {_id:"c6",name:"Al Jazeera",    ar:"الجزيرة",        ic:"🌍",cat:"أخبار",on:false, stream:"#"},
];
const MOCK_ADS=[
  { _id:"a1", adType:"banner", imageUrl:"https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=90&fit=crop", linkUrl:"#", delayMs:4000, bannerSecs:10, everyNViews:4 },
];

// ─── CSS ─────────────────────────────────────────────────────────────────────────
const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Oswald:wght@500;600;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#040411;--g:rgba(255,255,255,.045);--gb:rgba(255,255,255,.08);--a:#4F8FFF;--r:#FF5F6D;--go:#FFD166;--gr:#4ADE80;--t2:rgba(255,255,255,.62);--t3:rgba(255,255,255,.32);--f:'Cairo',sans-serif;--fo:'Oswald',sans-serif}
body{font-family:var(--f);background:var(--bg);color:#fff;overflow-x:hidden}
::-webkit-scrollbar{width:3px;height:3px}::-webkit-scrollbar-thumb{background:rgba(79,143,255,.3);border-radius:6px}
.gl{background:var(--g);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--gb)}
.btn{display:inline-flex;align-items:center;gap:7px;padding:11px 22px;border:none;border-radius:12px;font-family:var(--f);font-weight:700;font-size:14px;cursor:pointer;transition:all .22s cubic-bezier(.34,1.56,.64,1);white-space:nowrap}
.bp{background:linear-gradient(135deg,#4F8FFF,#2D6FFF);color:#fff;box-shadow:0 4px 18px rgba(79,143,255,.35)}.bp:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(79,143,255,.5)}
.bs{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.15)}.bs:hover{background:rgba(255,255,255,.14)}
.bsm{padding:7px 14px;font-size:12px;border-radius:9px}
.bdg{display:inline-flex;align-items:center;padding:3px 9px;border-radius:6px;font-size:11px;font-weight:700}
.bb{background:rgba(79,143,255,.18);color:#4F8FFF;border:1px solid rgba(79,143,255,.28)}
.bgo{background:rgba(255,209,102,.14);color:#FFD166;border:1px solid rgba(255,209,102,.22)}
.br{background:rgba(255,95,109,.18);color:#FF5F6D;border:1px solid rgba(255,95,109,.28)}
.bg{background:rgba(74,222,128,.14);color:#4ADE80;border:1px solid rgba(74,222,128,.22)}
.cc{border-radius:15px;overflow:hidden;cursor:pointer;transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s;position:relative}.cc:hover{transform:translateY(-10px) scale(1.02);box-shadow:0 26px 52px rgba(0,0,0,.7),0 0 0 1px rgba(79,143,255,.2)}
.row{display:flex;gap:15px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}.row::-webkit-scrollbar{display:none}
.inp{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:11px 16px;color:#fff;font-family:var(--f);font-size:14px;outline:none;transition:all .2s}.inp:focus{border-color:rgba(79,143,255,.5);background:rgba(255,255,255,.08);box-shadow:0 0 0 3px rgba(79,143,255,.1)}.inp::placeholder{color:var(--t3)}
.ni{padding:8px 14px;border-radius:10px;cursor:pointer;font-size:14px;font-weight:600;color:var(--t2);transition:all .18s;white-space:nowrap}.ni:hover,.ni.act{color:#fff;background:rgba(79,143,255,.12)}.ni.act{color:#4F8FFF}
.ld{display:inline-block;width:7px;height:7px;border-radius:50%;background:#FF5F6D;animation:pulse 1.8s infinite}
.sec-t{font-size:20px;font-weight:800;display:flex;align-items:center;gap:9px;margin-bottom:16px}
.sec-b{width:4px;height:22px;background:linear-gradient(180deg,#4F8FFF,#2D6FFF);border-radius:999px;flex-shrink:0}
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(10px);z-index:500;display:flex;align-items:center;justify-content:center;padding:20px;animation:fi .2s}
.modal{background:#07071C;border:1px solid rgba(255,255,255,.1);border-radius:22px;padding:34px;width:100%;max-width:480px;animation:su .25s cubic-bezier(.22,1,.36,1)}
@keyframes fi{from{opacity:0}to{opacity:1}}
@keyframes fu{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes su{from{opacity:0;transform:translateY(22px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes hz{from{transform:scale(1.07)}to{transform:scale(1)}}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.85)}}
@keyframes pbar{from{width:100%}to{width:0%}}
@keyframes skip{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}
.au{animation:fu .5s cubic-bezier(.22,1,.36,1) both}
.ad-banner{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:400;max-width:900px;width:calc(100% - 40px);border-radius:12px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.5)}
.ad-close{position:absolute;top:8px;right:8px;width:26px;height:26px;background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.2);color:#fff;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;z-index:1}
.ad-prog{position:absolute;bottom:0;left:0;right:0;height:3px;background:#4F8FFF}
.preroll{position:fixed;inset:0;background:#000;z-index:600;display:flex;align-items:center;justify-content:center}
`;

// ─── AD BANNER ────────────────────────────────────────────────────────────────────
function AdBanner({ ad, onClose }) {
  const [pct, setPct] = useState(100);
  const [canClose, setCanClose] = useState(false);
  const dur = (ad.bannerSecs||8)*1000;
  useEffect(()=>{
    const t0 = Date.now();
    const iv = setInterval(()=>{
      const elapsed = Date.now()-t0;
      const p = Math.max(0,100-(elapsed/dur)*100);
      setPct(p);
      if(p<=0){ clearInterval(iv); onClose(); }
    },100);
    const t2 = setTimeout(()=>setCanClose(true), 2000);
    return ()=>{ clearInterval(iv); clearTimeout(t2); };
  },[]);
  return(
    <div className="ad-banner gl" style={{animation:"fu .4s both"}}>
      {canClose&&<div className="ad-close" onClick={onClose}>✕</div>}
      <a href={ad.linkUrl} target="_blank" rel="noreferrer" onClick={()=>{}}>
        <img src={ad.imageUrl} alt="ad" style={{width:"100%",display:"block",maxHeight:90,objectFit:"cover"}}/>
      </a>
      <div className="ad-prog" style={{animation:`pbar ${dur}ms linear forwards`}}/>
    </div>
  );
}

// ─── SUBSCRIBE GATE ───────────────────────────────────────────────────────────────
function SubscribeGate({ onSuccess }) {
  const [code, setCode] = useState("");
  const [step, setStep] = useState("input"); // input | verifying | success | error
  const [msg, setMsg] = useState("");
  const verify = async () => {
    if (!code.trim()) return;
    setStep("verifying");
    await new Promise(r=>setTimeout(r,1400));
    if (code.toUpperCase().startsWith("SHAH-")) {
      setStep("success"); setMsg("تم تفعيل اشتراكك بنجاح على هذا الجهاز ✓");
      setTimeout(()=>onSuccess(), 1800);
    } else {
      setStep("error"); setMsg("كود غير صحيح. تأكد من الكود المُرسَل إليك.");
    }
  };
  return(
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:24,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",width:600,height:600,borderRadius:"50%",background:"#1A3A8F",top:-200,left:-150,filter:"blur(110px)",opacity:.2}}/>
      <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",background:"#3A1A2F",bottom:-150,right:-100,filter:"blur(110px)",opacity:.18}}/>
      <div className="gl" style={{borderRadius:24,padding:"42px 38px",width:"100%",maxWidth:440,position:"relative",animation:"su .5s cubic-bezier(.22,1,.36,1) both"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{fontSize:52,marginBottom:14}}>🔐</div>
          <h2 style={{fontSize:24,fontWeight:900,fontFamily:"var(--fo)",marginBottom:8}}>اشتراك مطلوب</h2>
          <p style={{color:"var(--t2)",fontSize:14,lineHeight:1.7}}>أدخل كود الاشتراك الخاص بك للوصول إلى المحتوى. سيتم التعرف على جهازك تلقائياً.</p>
        </div>
        {step==="success"&&(
          <div style={{textAlign:"center",padding:"20px",background:"rgba(74,222,128,.08)",border:"1px solid rgba(74,222,128,.25)",borderRadius:14,color:"#4ADE80",fontWeight:700}}>{msg}</div>
        )}
        {step!=="success"&&(<>
          <div style={{marginBottom:14}}>
            <label style={{display:"block",fontSize:11.5,color:"var(--t3)",fontWeight:700,letterSpacing:.8,textTransform:"uppercase",marginBottom:7}}>كود الاشتراك</label>
            <input className="inp" placeholder="SHAH-XXXX-YYYY" value={code} onChange={e=>setCode(e.target.value.toUpperCase())} onKeyDown={e=>e.key==="Enter"&&verify()} style={{fontSize:16,letterSpacing:1.5,textAlign:"center",fontFamily:"monospace"}}/>
          </div>
          {step==="error"&&<div style={{padding:"10px 14px",background:"rgba(255,95,109,.1)",border:"1px solid rgba(255,95,109,.3)",borderRadius:10,color:"#FF5F6D",fontSize:13,marginBottom:14,textAlign:"center"}}>{msg}</div>}
          <button className="btn bp" style={{width:"100%",justifyContent:"center",padding:"13px",fontSize:15}} onClick={verify} disabled={step==="verifying"}>
            {step==="verifying"?"جارٍ التحقق من الجهاز…":"تفعيل الاشتراك"}
          </button>
          <p style={{textAlign:"center",color:"var(--t3)",fontSize:12,marginTop:14}}>تجريبي: أدخل أي كود يبدأ بـ SHAH-</p>
        </>)}
      </div>
    </div>
  );
}

// ─── CONTENT CARD ─────────────────────────────────────────────────────────────────
function Card({ m, onClick, delay=0 }) {
  const [hov,setHov]=useState(false);
  return(
    <div className="cc" style={{minWidth:155,width:155,flexShrink:0,animation:`fu .5s ${delay}s both`}} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} onClick={()=>onClick(m)}>
      <img src={m.p} alt="" style={{width:"100%",height:232,objectFit:"cover",display:"block"}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(4,4,17,.97) 0%,rgba(4,4,17,.35) 55%,transparent 100%)"}}/>
      {hov&&<div style={{position:"absolute",inset:0,background:"rgba(79,143,255,.07)",animation:"fi .2s"}}/>}
      <div style={{position:"absolute",top:9,right:9}}><span className={`bdg ${m.type==="movie"?"bb":"bgo"}`}>{m.type==="movie"?"فيلم":"مسلسل"}</span></div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:12}}>
        <div style={{fontWeight:700,fontSize:12.5,marginBottom:4,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{m.title}</div>
        <div style={{display:"flex",alignItems:"center",gap:5,fontSize:11.5}}>
          <span style={{color:"#FFD166"}}>★ {m.r}</span><span style={{color:"var(--t3)"}}>•</span><span style={{color:"var(--t2)"}}>{m.y}</span>
        </div>
        {hov&&<button className="btn bp" style={{marginTop:8,width:"100%",justifyContent:"center",padding:"7px",fontSize:12,animation:"fu .18s both"}}>▶ شاهد الآن</button>}
      </div>
    </div>
  );
}

function Sec({ title, children }) {
  return(
    <div style={{marginBottom:40}} className="au">
      <div className="sec-t"><div className="sec-b"/>{title}</div>
      {children}
    </div>
  );
}

// ─── MOVIE DETAIL ─────────────────────────────────────────────────────────────────
function MovieDetail({ item, onBack }) {
  return(
    <div className="au">
      <div style={{position:"relative",height:"min(70vh,560px)",overflow:"hidden",borderRadius:"0 0 24px 24px",marginBottom:32}}>
        <img src={item.b} alt="" style={{width:"100%",height:"100%",objectFit:"cover",animation:"hz 7s ease forwards",filter:"brightness(.35) saturate(1.2)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(4,4,17,.96) 0%,rgba(4,4,17,.5) 55%,transparent 100%)"}}/>
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:180,background:"linear-gradient(to top,var(--bg) 0%,transparent 100%)"}}/>
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"flex-end",padding:"32px 36px"}}>
          <div style={{maxWidth:580}}>
            <div style={{display:"flex",gap:9,marginBottom:12,flexWrap:"wrap"}}>
              <button className="btn bs bsm" onClick={onBack} style={{marginBottom:4}}>← رجوع</button>
              <span className={`bdg ${item.type==="movie"?"bb":"bgo"}`}>{item.type==="movie"?"فيلم":"مسلسل"}</span>
              {item.type==="series"&&<span className="bdg br">🔴 حلقة جديدة</span>}
              <span style={{color:"#FFD166",fontWeight:700,fontSize:14}}>★ {item.r}</span>
              <span style={{color:"var(--t3)",fontSize:13}}>• {item.y}</span>
            </div>
            <h1 style={{fontSize:"clamp(28px,4.5vw,54px)",fontWeight:900,lineHeight:1.05,marginBottom:12,fontFamily:"var(--fo)",letterSpacing:-1}}>{item.title}</h1>
            <p style={{fontSize:14,color:"var(--t2)",marginBottom:20,lineHeight:1.8,maxWidth:460}}>{item.desc}</p>
            <div style={{display:"flex",gap:11,flexWrap:"wrap"}}>
              <button className="btn bp" style={{fontSize:15,padding:"13px 28px"}}>▶ شاهد الآن</button>
              <button className="btn bs">⬇ تحميل</button>
              <button className="btn bs">♡ قائمتي</button>
            </div>
          </div>
        </div>
      </div>
      {item.type==="series"&&(
        <div style={{padding:"0 28px 48px"}}>
          <div className="sec-t" style={{marginBottom:20}}><div className="sec-b"/>المواسم والحلقات</div>
          {[...Array(item.s||1)].map((_,si)=>(
            <div key={si} className="gl" style={{borderRadius:16,overflow:"hidden",marginBottom:14}}>
              <div style={{padding:"14px 20px",borderBottom:"1px solid rgba(255,255,255,.06)",fontWeight:700,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span>الموسم {si+1}</span><span style={{color:"var(--t3)",fontSize:13}}>{Math.ceil((item.ep||12)/(item.s||1))} حلقة</span>
              </div>
              {[...Array(Math.min(4,Math.ceil((item.ep||12)/(item.s||1))))].map((_,ei)=>(
                <div key={ei} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 20px",borderBottom:"1px solid rgba(255,255,255,.04)",cursor:"pointer",transition:"background .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.03)"}
                  onMouseLeave={e=>e.currentTarget.style.background=""}>
                  <div style={{width:36,height:36,borderRadius:9,background:"rgba(79,143,255,.1)",border:"1px solid rgba(79,143,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:"#4F8FFF",flexShrink:0}}>{ei+1}</div>
                  <div style={{flex:1}}><div style={{fontWeight:600,fontSize:14}}>الحلقة {ei+1}</div><div style={{fontSize:12,color:"var(--t3)"}}>45 دقيقة</div></div>
                  <button className="btn bp bsm">▶</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── LIVE TV PAGE ─────────────────────────────────────────────────────────────────
function LivePage({ channels }) {
  const [active, setActive] = useState(null);
  const [cat, setCat] = useState("all");
  const cats = ["all",...new Set(channels.map(c=>c.cat))];
  const list = cat==="all" ? channels : channels.filter(c=>c.cat===cat);
  return(
    <div style={{padding:"32px 26px 52px",maxWidth:1440,margin:"0 auto"}} className="au">
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:28}}>
        <span className="ld"/><h2 style={{fontSize:26,fontWeight:900,fontFamily:"var(--fo)"}}>البث المباشر</h2>
        <span className="bdg br">{channels.filter(c=>c.on).length} قناة</span>
      </div>
      {active&&(
        <div className="gl" style={{borderRadius:20,overflow:"hidden",marginBottom:32,animation:"fi .3s"}}>
          <div style={{background:"#000",height:min(360,"60vw"),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",minHeight:260}}>
            <div style={{textAlign:"center"}}><div style={{fontSize:60,marginBottom:12}}>{active.ic}</div><div style={{fontSize:22,fontWeight:800,fontFamily:"var(--fo)",marginBottom:6}}>{active.ar}</div><div style={{color:"var(--t3)",fontSize:13}}>جارٍ تحميل البث…</div></div>
            <div style={{position:"absolute",top:14,right:14,display:"flex",alignItems:"center",gap:6}}><span className="ld"/><span style={{color:"#FF5F6D",fontWeight:800,fontSize:12,letterSpacing:1}}>LIVE</span></div>
            <button onClick={()=>setActive(null)} style={{position:"absolute",top:14,left:14,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.15)",color:"#fff",borderRadius:9,padding:"6px 13px",cursor:"pointer",fontFamily:"var(--f)",fontSize:12}}>✕ إغلاق</button>
          </div>
        </div>
      )}
      <div style={{display:"flex",gap:8,marginBottom:22,flexWrap:"wrap"}}>
        {cats.map(c=><button key={c} onClick={()=>setCat(c)} className="btn bsm" style={{background:cat===c?"linear-gradient(135deg,#4F8FFF,#2D6FFF)":"rgba(255,255,255,.06)",border:`1px solid ${cat===c?"transparent":"rgba(255,255,255,.1)"}`,color:"#fff",fontFamily:"var(--f)",fontWeight:600}}>{c==="all"?"الكل":c}</button>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:12}}>
        {list.map(ch=>(
          <div key={ch._id} className="gl" style={{borderRadius:17,padding:"20px 14px",textAlign:"center",cursor:"pointer",transition:"all .28s cubic-bezier(.34,1.56,.64,1)",border:`1px solid ${active?._id===ch._id?"rgba(79,143,255,.5)":"rgba(255,255,255,.07)"}`,background:active?._id===ch._id?"rgba(79,143,255,.1)":undefined,opacity:ch.on?1:.45,display:"flex",flexDirection:"column",alignItems:"center",gap:8}}
            onClick={()=>ch.on&&setActive(ch)}
            onMouseEnter={e=>{if(ch.on){e.currentTarget.style.transform="scale(1.06)";e.currentTarget.style.borderColor="rgba(79,143,255,.35)"}}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.borderColor=active?._id===ch._id?"rgba(79,143,255,.5)":"rgba(255,255,255,.07)"}}>
            <div style={{fontSize:40}}>{ch.ic}</div>
            <div style={{fontWeight:700,fontSize:13}}>{ch.ar}</div>
            <span className="bdg bb" style={{fontSize:10}}>{ch.cat}</span>
            <div style={{display:"flex",alignItems:"center",gap:5,fontSize:11}}>{ch.on?<><span className="ld" style={{width:5,height:5}}/><span style={{color:"var(--t2)"}}>متاح</span></>:<span style={{color:"var(--t3)"}}>متوقف</span>}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── BROWSE PAGE ──────────────────────────────────────────────────────────────────
function BrowsePage({ movies, q, setQ, onSelect }) {
  const [f, setF] = useState("all");
  const list = movies.filter(m=>{
    const okT = f==="all"||m.type===f;
    const okQ = !q||m.title.includes(q)||m.en.toLowerCase().includes(q.toLowerCase());
    return okT&&okQ;
  });
  return(
    <div style={{padding:"32px 26px 52px",maxWidth:1440,margin:"0 auto"}} className="au">
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:28,flexWrap:"wrap"}}>
        <div style={{position:"relative",flex:1,minWidth:200,maxWidth:380}}>
          <span style={{position:"absolute",top:"50%",transform:"translateY(-50%)",right:14,opacity:.4,fontSize:13}}>🔍</span>
          <input className="inp" style={{paddingRight:40}} placeholder="ابحث…" value={q} onChange={e=>setQ(e.target.value)}/>
        </div>
        <div style={{display:"flex",gap:7}}>
          {["all","movie","series"].map(x=><button key={x} onClick={()=>setF(x)} className="btn bsm" style={{background:f===x?"linear-gradient(135deg,#4F8FFF,#2D6FFF)":"rgba(255,255,255,.06)",border:`1px solid ${f===x?"transparent":"rgba(255,255,255,.1)"}`,color:"#fff",fontFamily:"var(--f)",fontWeight:600}}>{x==="all"?"الكل":x==="movie"?"أفلام":"مسلسلات"}</button>)}
        </div>
        <span style={{color:"var(--t3)",fontSize:13}}>{list.length} نتيجة</span>
      </div>
      {list.length>0
        ?<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))",gap:18}}>{list.map((m,i)=><Card key={m._id} m={m} onClick={onSelect} delay={i*.04}/>)}</div>
        :<div style={{textAlign:"center",color:"var(--t3)",padding:"80px 0",fontSize:17}}>لا توجد نتائج</div>}
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────────
function HomePage({ movies, channels, onSelect, goLive }) {
  const ft = movies.filter(m=>m.ft);
  const [hi, setHi] = useState(0);
  const hero = ft[hi];
  useEffect(()=>{ const t=setInterval(()=>setHi(i=>(i+1)%ft.length),6000); return()=>clearInterval(t); },[ft.length]);
  return(
    <div>
      {/* Hero */}
      <div key={hi} style={{position:"relative",height:"min(88vh,680px)",overflow:"hidden"}}>
        <img src={hero.b} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",animation:"hz 7s ease forwards",filter:"brightness(.32) saturate(1.3)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(4,4,17,.97) 0%,rgba(4,4,17,.52) 55%,transparent 100%)"}}/>
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:200,background:"linear-gradient(to top,#040411 0%,transparent 100%)"}}/>
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 46px",justifyContent:"flex-end"}}>
          <div style={{animation:"fu .65s cubic-bezier(.22,1,.36,1) both",maxWidth:590}}>
            <div style={{display:"flex",gap:9,marginBottom:14,flexWrap:"wrap",alignItems:"center"}}>
              <span className={`bdg ${hero.type==="movie"?"bb":"bgo"}`}>{hero.type==="movie"?"فيلم":"مسلسل"}</span>
              {hero.type==="series"&&<span className="bdg br">🔴 حلقة جديدة</span>}
              <span style={{color:"#FFD166",fontWeight:700,fontSize:14}}>★ {hero.r}</span>
              <span style={{color:"var(--t3)",fontSize:13}}>• {hero.y}</span>
            </div>
            <h1 style={{fontSize:"clamp(32px,5vw,60px)",fontWeight:900,lineHeight:1.05,marginBottom:12,fontFamily:"var(--fo)",letterSpacing:-1,textShadow:"0 4px 28px rgba(0,0,0,.6)"}}>{hero.title}</h1>
            <div style={{display:"flex",gap:7,marginBottom:22,flexWrap:"wrap"}}>
              {hero.g.map((x,i)=><span key={i} style={{padding:"4px 12px",borderRadius:8,background:"rgba(255,255,255,.08)",fontSize:12,fontWeight:600,border:"1px solid rgba(255,255,255,.1)"}}>{x}</span>)}
            </div>
            <div style={{display:"flex",gap:11,flexWrap:"wrap"}}>
              <button className="btn bp" style={{fontSize:15,padding:"13px 28px"}} onClick={()=>onSelect(hero)}>▶ شاهد الآن</button>
              <button className="btn bs">♡ قائمتي</button>
              <button className="btn bs">🎬 الإعلان</button>
            </div>
          </div>
        </div>
        <div style={{position:"absolute",bottom:90,left:42,display:"flex",gap:7,alignItems:"center"}}>
          {ft.map((_,i)=><div key={i} onClick={()=>setHi(i)} style={{height:6,width:i===hi?26:6,borderRadius:999,background:i===hi?"#4F8FFF":"rgba(255,255,255,.25)",cursor:"pointer",transition:"all .35s cubic-bezier(.34,1.56,.64,1)"}}/>)}
        </div>
      </div>
      {/* Sections */}
      <div style={{padding:"0 24px 52px",maxWidth:1440,margin:"0 auto"}}>
        <Sec title="الأكثر مشاهدة الآن"><div className="row">{movies.filter(m=>m.r>=8.4).map((m,i)=><Card key={m._id} m={m} onClick={onSelect} delay={i*.06}/>)}</div></Sec>
        <Sec title="أحدث الإضافات"><div className="row">{[...movies].sort((a,b)=>b.y-a.y).map((m,i)=><Card key={m._id} m={m} onClick={onSelect} delay={i*.05}/>)}</div></Sec>
        {/* Live banner */}
        <div className="gl au" style={{borderRadius:22,padding:"24px 32px",marginBottom:40,background:"linear-gradient(135deg,rgba(79,143,255,.07),rgba(255,95,109,.05))",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
          <div><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><span className="ld"/><span style={{color:"#FF5F6D",fontWeight:800,fontSize:12,letterSpacing:1,textTransform:"uppercase"}}>LIVE</span></div>
            <h3 style={{fontSize:21,fontWeight:800,fontFamily:"var(--fo)",marginBottom:4}}>قنوات مباشرة</h3>
            <span style={{color:"var(--t3)",fontSize:13}}>{channels.filter(c=>c.on).length} قناة متاحة الآن</span>
          </div>
          <div style={{display:"flex",gap:9,flexWrap:"wrap"}}>{channels.slice(0,4).map(c=><div key={c._id} className="gl" style={{padding:"8px 14px",borderRadius:11,display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:600}}><span>{c.ic}</span><span>{c.ar}</span></div>)}</div>
          <button className="btn bp" onClick={goLive}>مشاهدة البث →</button>
        </div>
        <Sec title="حلقات اليوم">
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(275px,1fr))",gap:12}}>
            {movies.filter(m=>m.type==="series").map(x=>(
              <div key={x._id} className="gl" style={{borderRadius:15,padding:14,display:"flex",gap:12,cursor:"pointer",transition:"all .2s"}}
                onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.07)"}
                onMouseLeave={e=>e.currentTarget.style.background=""} onClick={()=>onSelect(x)}>
                <img src={x.p} alt="" style={{width:55,height:80,borderRadius:8,objectFit:"cover",flexShrink:0}}/>
                <div style={{flex:1,overflow:"hidden"}}>
                  <div style={{fontWeight:700,marginBottom:4,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{x.title}</div>
                  <div style={{fontSize:12,color:"var(--t3)",marginBottom:8}}>م{x.s} • ح{x.ep}</div>
                  <button className="btn bp bsm">▶ شاهد</button>
                </div>
              </div>
            ))}
          </div>
        </Sec>
      </div>
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────────
function Navbar({ page, setPage, q, setQ }) {
  const [sc, setSc] = useState(false);
  useEffect(()=>{ const fn=()=>setSc(window.scrollY>40); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn); },[]);
  return(
    <nav className="gl" style={{position:"sticky",top:0,zIndex:200,height:64,padding:"0 22px",display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:0,borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:"1px solid rgba(255,255,255,.06)",background:sc?"rgba(4,4,17,.88)":"rgba(4,4,17,.5)",transition:"background .3s"}}>
      <div onClick={()=>setPage("home")} style={{display:"flex",alignItems:"center",gap:9,cursor:"pointer",flexShrink:0}}>
        <div style={{width:35,height:35,borderRadius:10,background:"linear-gradient(135deg,#4F8FFF,#2D6FFF)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,boxShadow:"0 4px 14px rgba(79,143,255,.4)"}}>▶</div>
        <span style={{fontSize:18,fontWeight:900,fontFamily:"var(--fo)",letterSpacing:-.3}}>شاهد<span style={{color:"#4F8FFF"}}>365</span></span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:1}}>
        {[["home","الرئيسية"],["browse","تصفح"],["live","بث مباشر"],["subscribe","اشتراكي"]].map(([p,lb])=>(
          <div key={p} className={`ni${page===p?" act":""}`} onClick={()=>setPage(p)}>
            {p==="live"?<span style={{display:"flex",alignItems:"center",gap:5}}><span className="ld" style={{width:5,height:5}}/>{lb}</span>:lb}
          </div>
        ))}
      </div>
      <div style={{position:"relative",flexShrink:0}}>
        <span style={{position:"absolute",top:"50%",transform:"translateY(-50%)",right:13,opacity:.4,fontSize:12}}>🔍</span>
        <input className="inp" style={{width:180,padding:"8px 38px 8px 14px",fontSize:13}} placeholder="ابحث…" value={q} onChange={e=>{setQ(e.target.value);if(e.target.value)setPage("browse");}}/>
      </div>
    </nav>
  );
}

// ─── MAINTENANCE ─────────────────────────────────────────────────────────────────
function MaintenancePage() {
  return(
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",textAlign:"center",padding:24,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",width:600,height:600,borderRadius:"50%",background:"#1A3A8F",top:-200,left:-150,filter:"blur(110px)",opacity:.2}}/>
      <div style={{animation:"fu .7s cubic-bezier(.22,1,.36,1) both"}}>
        <div style={{fontSize:80,marginBottom:24}}>🔧</div>
        <div style={{display:"inline-block",padding:"5px 16px",borderRadius:99,background:"rgba(255,95,109,.15)",border:"1px solid rgba(255,95,109,.3)",color:"#FF5F6D",fontWeight:700,fontSize:11,letterSpacing:2,textTransform:"uppercase",marginBottom:20}}>Maintenance</div>
        <h1 style={{fontSize:"clamp(28px,5vw,52px)",fontWeight:900,marginBottom:16,fontFamily:"var(--fo)",letterSpacing:-1}}>تحت الصيانة مؤقتاً</h1>
        <p style={{fontSize:15,color:"var(--t2)",maxWidth:380,lineHeight:1.75}}>نقوم بتحديث المنصة لتقديم تجربة أفضل. سنعود قريباً جداً.</p>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────────
export default function UserApp() {
  const [page, setPage] = useState("home");
  const [detail, setDetail] = useState(null);
  const [q, setQ] = useState("");
  const [subOk, setSubOk] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [pgCount, setPgCount] = useState(0);
  const [maintenance] = useState(false);

  // Show ad every N page views
  useEffect(()=>{
    const c = pgCount + 1; setPgCount(c);
    const ad = MOCK_ADS[0];
    if(c % (ad?.everyNViews||4) === 0) {
      const t = setTimeout(()=>setShowAd(true), ad?.delayMs||3000);
      return ()=>clearTimeout(t);
    }
  },[page]);

  const goDetail = (item) => { setDetail(item); setPage("detail"); };
  const goBack = () => { setDetail(null); setPage("home"); };

  if (maintenance) return <><style>{CSS}</style><MaintenancePage/></>;
  if (!subOk && page==="subscribe") return <><style>{CSS}</style><SubscribeGate onSuccess={()=>{ setSubOk(true); setPage("home"); }}/></>;

  return(
    <>
      <style>{CSS}</style>
      <div dir="rtl" style={{fontFamily:"var(--f)",background:"var(--bg)",minHeight:"100vh",color:"#fff",position:"relative",overflow:"hidden"}}>
        {/* Ambient orbs */}
        <div style={{position:"fixed",width:700,height:700,borderRadius:"50%",background:"#1A3A8F",top:-250,right:-200,filter:"blur(120px)",opacity:.2,pointerEvents:"none",zIndex:0}}/>
        <div style={{position:"fixed",width:600,height:600,borderRadius:"50%",background:"#8B1A2F",bottom:-200,left:-150,filter:"blur(120px)",opacity:.17,pointerEvents:"none",zIndex:0}}/>

        {/* Navbar */}
        <Navbar page={page} setPage={setPage} q={q} setQ={setQ}/>

        {/* Pages */}
        <div style={{position:"relative",zIndex:1}}>
          {page==="home"   && <HomePage movies={MV} channels={CH} onSelect={goDetail} goLive={()=>setPage("live")}/>}
          {page==="browse" && <BrowsePage movies={MV} q={q} setQ={setQ} onSelect={goDetail}/>}
          {page==="live"   && <LivePage channels={CH}/>}
          {page==="detail" && detail && <MovieDetail item={detail} onBack={goBack}/>}
          {page==="subscribe" && <SubscribeGate onSuccess={()=>{ setSubOk(true); setPage("home"); }}/>}
        </div>

        {/* Ad Banner */}
        {showAd && MOCK_ADS[0] && (
          <AdBanner ad={MOCK_ADS[0]} onClose={()=>setShowAd(false)}/>
        )}
      </div>
    </>
  );
}
