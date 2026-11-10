const experience = [
  {
    date: "ACTUALIDAD",
    role: "Secretario escolar",
    company: "Secretaría de Educación Pública · Educación secundaria",
    summary: "Gestión administrativa en el ámbito educativo.",
    current: true,
    tags: ["Gestión administrativa", "Educación"],
    points: ["Desempeño actual en funciones de secretaría dentro de una escuela secundaria de la SEP."]
  },
  {
    date: "ENE 2024 — ACTUAL",
    role: "Docente universitario",
    company: "INSUNTE · Instituto Universitario del Norte",
    summary: "Docencia de nivel licenciatura en áreas de ingeniería, gestión y ciencias aplicadas.",
    current: true,
    tags: ["Docencia", "Nivel licenciatura", "Ingeniería"],
    points: ["Mercadotecnia, Ergonomía y Seguridad Industrial.", "Probabilidad y Estadística; Estadística Aplicada.", "Matemáticas I, II y III; Desarrollo Organizacional.", "Desarrollo Sustentable, Resistencia de Materiales y Psicología Industrial.", "Diseño de actividades, evaluación y seguimiento académico con casos prácticos."]
  },
  {
    date: "AGO 2025 — 2026",
    role: "Encargado de Seguridad e Higiene y Medio Ambiente · Turno B",
    company: "Yura Corporation México · Planta Lerdo",
    summary: "Gestión de seguridad, higiene y medio ambiente en entorno de manufactura automotriz.",
    tags: ["Manufactura automotriz", "EHS", "Normatividad"],
    points: ["Elaboración y actualización de matrices de riesgo por puesto y análisis de trabajo seguro.", "Implementación y seguimiento de actividades de gestión ambiental y seguridad ocupacional.", "Evaluación de aspectos e impactos ambientales y seguimiento de controles operacionales.", "Coordinación de brigadas, simulacros y permisos de trabajo de alto riesgo.", "Seguimiento de estudios normativos de ruido, iluminación y agentes químicos.", "Investigación de accidentes, seguimiento de formatos ST-7 y ST-9 e indicadores de seguridad.", "Inspecciones con la Comisión de Seguridad e Higiene, capacitación y atención de auditorías."]
  },
  {
    date: "ENE 2025 — AGO 2025",
    role: "Jefe de Seguridad Industrial",
    company: "Deli Dieta",
    summary: "Seguridad e higiene para operaciones de comedores industriales y servicios de alimentación.",
    tags: ["Industria alimentaria", "Distintivo H", "NOM-251"],
    points: ["Participación en el proceso de certificación del Distintivo H.", "Implementación y seguimiento de prácticas de higiene conforme a NOM-251-SSA1.", "Matrices de riesgo por área y puesto de trabajo.", "Coordinación de brigadas, programa interno de protección civil e inspecciones.", "Capacitación operativa, gestión de permisos de alto riesgo y atención a auditorías."]
  },
  {
    date: "NOV 2024 — DIC 2024",
    role: "Coordinador EHS",
    company: "Grupo Rotoplas",
    summary: "Implementación de controles EHS para proyecto de obra y operación retail.",
    tags: ["Proyecto Bodega Aurrerá", "Auditorías", "Capacitación"],
    points: ["Implementación del sistema EHS para el proyecto Bodega Aurrerá.", "Reducción reportada del 30% en incidentes mediante auditorías y acciones correctivas.", "Capacitación a más de 150 colaboradores en EPP, seguridad y respuesta a emergencias.", "Matrices de riesgo, análisis de seguridad en el trabajo y auditorías semanales.", "Seguimiento de hallazgos, formatos ST-7 y ST-9 y controles ambientales."]
  },
  {
    date: "OCT 2024 — NOV 2024",
    role: "Coordinador de Salud Ocupacional y Medio Ambiente",
    company: "Grupo Hidalgo",
    summary: "Coordinación de seguridad, salud y gestión ambiental en obra civil.",
    tags: ["Obra civil", "Salud ocupacional", "Brigadas"],
    points: ["Coordinación del sistema de salud ocupacional y medio ambiente.", "Análisis de riesgos por frente de obra e investigación de incidentes con 5 Porqués e Ishikawa.", "Seguimiento a permisos de trabajo de alto riesgo y vigilancia de la salud.", "Inspecciones, reportes técnicos y seguimiento de hallazgos.", "Participación como brigadista en primeros auxilios, evacuación y control de derrames."]
  },
  {
    date: "JUN 2024 — OCT 2024",
    role: "Analista de Safety",
    company: "Ecotech Consultoría",
    summary: "Consultoría normativa, higiene industrial y gestión ambiental para distintos sectores.",
    tags: ["STPS", "SEMARNAT", "Consultoría"],
    points: ["Evaluaciones de campo relacionadas con NOM-005, NOM-010, NOM-004 y NOM-011-STPS.", "Estudios de ruido ocupacional, iluminación y agentes químicos.", "Elaboración de matrices de aspectos e impactos ambientales y reportes técnicos.", "Planes de acción correctiva ante hallazgos y apoyo en auditorías.", "Integración de expedientes normativos y análisis de seguridad en el trabajo."]
  },
  {
    date: "ENE 2024 — JUN 2024",
    role: "Coordinador HSE",
    company: "Soluciones Inteligentes SIHRO, S.A. de C.V.",
    summary: "Coordinación de programas EHS en proyectos de infraestructura y sector alimentario.",
    tags: ["Infraestructura", "EHS", "Protección Civil"],
    points: ["Implementación de programas EHS, matrices de riesgo y procedimientos de trabajo seguro.", "Coordinación de brigadas y simulacros de emergencia.", "Control ambiental en sitio y gestión de documentación REPSE.", "Elaboración de programas internos de protección civil y atención a auditorías.", "Seguimiento de formatos ST-7 y ST-9."]
  },
  {
    date: "ABR 2023 — OCT 2023",
    role: "Jefe de EHS",
    company: "Facirent",
    summary: "Seguridad ocupacional en actividades de maquinaria, taller y construcción.",
    tags: ["ISO 45001", "Maquinaria", "Construcción"],
    points: ["Aplicación de estándares ISO 45001 y legislación mexicana.", "Programa de inspecciones con 92% de corrección de hallazgos en primera ronda, según el registro compartido.", "Procedimientos para equipos pesados, izaje y trabajo en alturas.", "Permisos de trabajo de alto riesgo, gestión de residuos y coordinación de brigadas.", "Atención a auditorías corporativas y visitas de autoridad."]
  },
  {
    date: "MAR 2023 — ENE 2024",
    role: "Coordinador HSE",
    company: "Servicios Industriales FAFACI",
    summary: "Desarrollo de procesos EHS y seguimiento de indicadores en operación industrial.",
    tags: ["200+ colaboradores", "KPIs", "Mejora continua"],
    points: ["Diseño de políticas y procedimientos EHS para operaciones con más de 200 empleados.", "Implementación de indicadores de seguridad y reportes a dirección.", "Investigación de incidentes y seguimiento a causas raíz.", "Plan anual de trabajo y capacitación, matrices de riesgo y procedimientos seguros.", "Gestión documental y seguimiento de proveedores."]
  },
  {
    date: "FEB 2022 — MAY 2023",
    role: "Auxiliar EHS",
    company: "CSI División de Servicios",
    summary: "Apoyo en seguridad operativa, monitoreo ambiental y actividades preventivas.",
    tags: ["Inicio de trayectoria EHS", "Monitoreo ambiental"],
    points: ["Recopilación y análisis de datos de seguridad y monitoreo ambiental.", "Apoyo en evaluaciones de impacto ambiental e informes técnicos.", "Participación en brigadas, simulacros e inspecciones de condiciones inseguras.", "Seguimiento documental de formatos ST-7 y ST-9.", "Apoyo en actividades de orden y limpieza 5S."]
  },
  {
    date: "ENE 2020 — JUL 2020",
    role: "Asistente de Gestión Ambiental",
    company: "SEMA Coahuila",
    summary: "Apoyo en gestión ambiental estatal, monitoreo de calidad del aire y atención ciudadana.",
    tags: ["Sector público", "Gestión ambiental"],
    points: ["Recolección de datos atmosféricos y monitoreo de calidad del aire.", "Elaboración de informes técnicos y apoyo en trámites ambientales.", "Atención de reportes ciudadanos y coordinación de visitas de inspección.", "Captura y manejo de bases de datos ambientales."]
  }
];

const credentials = [
  {name:"Distintivo H — Buenas Prácticas de Higiene",cat:"ehs"},
  {name:"NOM-251-SSA1 — Prácticas de Higiene para Alimentos",cat:"ehs"},
  {name:"OSHA 10 hrs Course",cat:"ehs",intl:true,org:"OSHA"},
  {name:"Higiene Industrial y Ocupacional",cat:"ehs"},
  {name:"Seguridad e Higiene",cat:"ehs"},
  {name:"Introducción a la NOM-035",cat:"ehs"},
  {name:"NOM-030-STPS-2003",cat:"ehs"},
  {name:"NOM-019-STPS-2011",cat:"ehs"},
  {name:"Medidas Generales de Higiene",cat:"ehs"},
  {name:"Manejo de Riesgos",cat:"ehs"},
  {name:"Concentración de Agentes Contaminantes en el Aire",cat:"ehs"},
  {name:"Interpretación de la Norma ISO 14001",cat:"ma"},
  {name:"Net Zero 101: What, Why and How",cat:"ma",intl:true,org:"ONU"},
  {name:"Curso Abierto Online sobre Género y Medio Ambiente",cat:"ma",intl:true,org:"ONU"},
  {name:"Fiscalización Ambiental",cat:"ma"},
  {name:"Ecología Industrial",cat:"ma"},
  {name:"Gobernanza del Aire",cat:"ma"},
  {name:"Cálculo de Huella Hídrica",cat:"ma"},
  {name:"Cálculo de Huella Ecológica",cat:"ma"},
  {name:"Educación Ambiental y Sanitaria",cat:"ma",intl:true,org:"U. Perú"},
  {name:"Gestión de RH y Administración Pública",cat:"rrhh"},
  {name:"Recursos Humanos",cat:"rrhh"},
  {name:"RR. HH. y Gestión de Talento",cat:"rrhh"},
  {name:"Nueva Normalidad Laboral",cat:"rrhh"},
  {name:"Mejora de Procesos",cat:"rrhh"},
  {name:"Manejo de Juntas de Trabajo",cat:"rrhh"},
  {name:"Cómo Dar Indicaciones",cat:"rrhh"},
  {name:"Liderazgo",cat:"rrhh"},
  {name:"Taller de Desarrollo del Talento Emprendedor en Agronegocios",cat:"rrhh"},
  {name:"ASUME para Voluntarios",cat:"rrhh"},
  {name:"Introducción a ASUME",cat:"rrhh"},
  {name:"Cómo Enseñar Español a Extranjeros",cat:"rrhh"},
  {name:"Identificación del Burnout Laboral",cat:"salud"},
  {name:"Primeros Auxilios Psicológicos",cat:"salud"},
  {name:"Cuidado de la Salud Mental en Situación de Emergencia",cat:"salud"},
  {name:"Salud Mental para Todas las Personas",cat:"salud"},
  {name:"Psicología y Psicoterapia",cat:"salud"},
  {name:"Diseñador de Peticiones para Modelos de IA Generativa (Prompts)",cat:"ia"},
  {name:"Inteligencia Artificial para la Vida y el Trabajo",cat:"ia",intl:true,org:"PROCADIST · Microsoft"}
];

const categories = {
  ehs:{label:"EHS E HIGIENE",color:"#c8f169"},
  ma:{label:"MEDIO AMBIENTE",color:"#83c9ff"},
  rrhh:{label:"GESTIÓN Y RR. HH.",color:"#ff9d7a"},
  salud:{label:"SALUD MENTAL",color:"#b5a8ff"},
  ia:{label:"IA Y TECNOLOGÍA",color:"#70d9c0"}
};

const skillGroups = [
  {title:"Sistemas de gestión y normatividad",items:["ISO 45001","ISO 14001","IATF 16949","OSHA 10h","Normatividad STPS","NOM-035","NOM-030-STPS","NOM-019-STPS","Protección Civil","SEMARNAT / LGEEPA","REPSE"]},
  {title:"Análisis y control de riesgos",items:["JSA / AST","HAZOP","Matrices de riesgo","LOTOTO","Permisos de trabajo de alto riesgo","5 Porqués / Ishikawa","Investigación de incidentes","Trabajo en alturas","Espacios confinados","Riesgo eléctrico","Izaje y maniobras"]},
  {title:"Higiene industrial y salud ocupacional",items:["Estudios de ruido","Estudios de iluminación","Agentes químicos","Ergonomía industrial","Vigilancia epidemiológica","Salud ocupacional","Riesgos psicosociales","Formatos ST-7 / ST-9","Primeros auxilios psicológicos"]},
  {title:"Gestión ambiental",items:["MIA (impacto ambiental)","Matriz de aspectos e impactos","Gestión RME y RP","Huella de carbono","Huella hídrica","Monitoreo de calidad del aire","Net Zero / sustentabilidad","Ecología industrial"]},
  {title:"Liderazgo y gestión",items:["KPIs de seguridad","Auditorías internas","Plan anual EHS","Programa de capacitación","Comisión de Seguridad e Higiene","Atención a autoridades","Mejora continua","Gestión documental","Liderazgo operativo","Docencia universitaria","Prompt engineering · IA"]}
];

const categoryLabels = {all:"TODO",ehs:"EHS E HIGIENE",ma:"MEDIO AMBIENTE",rrhh:"GESTIÓN Y RR. HH.",salud:"SALUD MENTAL",ia:"IA Y TECNOLOGÍA",intl:"INTERNACIONALES"};
const categoryColors = {ehs:"#c8f169",ma:"#83c9ff",rrhh:"#ff9d7a",salud:"#b5a8ff",ia:"#70d9c0"};

function renderTimeline(){
  const root=document.getElementById("timeline");
  root.innerHTML=experience.map((item,index)=>{
    const current=item.current?'<span class="tl-current">● ACTUAL</span>':"";
    const tags=item.tags.map(tag=>'<span>'+tag+'</span>').join("");
    const points=item.points.map(point=>"<li>"+point+"</li>").join("");
    return '<article class="tl-item" data-index="'+index+'" tabindex="0" role="button" aria-expanded="false">'+
      '<div class="tl-date">'+item.date+'</div>'+
      '<div class="tl-main">'+current+'<h3 class="tl-role">'+item.role+'</h3><div class="tl-company">'+item.company+'</div></div>'+
      '<p class="tl-summary">'+item.summary+'</p>'+
      '<span class="tl-toggle" aria-hidden="true">＋</span>'+
      '<div class="tl-details"><div class="tl-tags">'+tags+'</div><ul>'+points+'</ul></div>'+
    '</article>';
  }).join("");
  root.addEventListener("click",event=>{
    const item=event.target.closest(".tl-item");
    if(item) toggleTimeline(item);
  });
  root.addEventListener("keydown",event=>{
    if((event.key==="Enter"||event.key===" ") && event.target.classList.contains("tl-item")){
      event.preventDefault();toggleTimeline(event.target);
    }
  });
}
function toggleTimeline(item){
  const wasOpen=item.classList.contains("active");
  document.querySelectorAll(".tl-item").forEach(node=>{
    node.classList.remove("active");node.setAttribute("aria-expanded","false");
  });
  if(!wasOpen){item.classList.add("active");item.setAttribute("aria-expanded","true");}
}

let activeFilter="all";
function renderCredentials(){
  const query=(document.getElementById("certSearch").value||"").trim().toLocaleLowerCase("es");
  const filtered=credentials.filter(item=>{
    const matchesCategory=activeFilter==="all"||(activeFilter==="intl"?item.intl:item.cat===activeFilter);
    return matchesCategory&&item.name.toLocaleLowerCase("es").includes(query);
  });
  const root=document.getElementById("certGrid");
  root.innerHTML=filtered.length?filtered.map(item=>{
    const cat=categories[item.cat];
    const intl=item.intl?'<span class="cert-intl">↗ '+(item.org||"INTERNACIONAL")+'</span>':"";
    return '<article class="cert-card" style="--card-accent:'+cat.color+'"><div class="cert-category"><span>'+cat.label+'</span>'+intl+'</div><div class="cert-name">'+item.name+'</div></article>';
  }).join(""):'<div class="cert-empty">No encontré formación con esos filtros. Prueba otra categoría o palabra.</div>';
  document.getElementById("credentialCount").textContent=filtered.length;
  document.getElementById("courseMetric").textContent=credentials.length;
}
function setupFilters(){
  document.getElementById("certFilters").addEventListener("click",event=>{
    const button=event.target.closest("[data-filter]");
    if(!button)return;
    activeFilter=button.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach(node=>node.classList.toggle("active",node===button));
    renderCredentials();
  });
  document.getElementById("certSearch").addEventListener("input",renderCredentials);
}
function renderSkills(){
  document.getElementById("skillsGrid").innerHTML=skillGroups.map((group,index)=>{
    return '<article class="skill-group reveal"><div class="skill-group-label"><span>'+group.title.toUpperCase()+'</span><span>0'+(index+1)+'</span></div><div class="skill-list">'+
      group.items.map(skill=>'<span class="skill-pill">'+skill+'</span>').join("")+
      '</div></article>';
  }).join("");
}
function setupMotion(){
  const elements=document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){elements.forEach(el=>el.classList.add("is-visible"));return;}
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}
    });
  },{threshold:.12});
  elements.forEach(el=>observer.observe(el));
}
function setupNavigation(){
  const toggle=document.getElementById("menuToggle");
  const nav=document.getElementById("mainNav");
  const close=()=>{
    nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");document.body.classList.remove("menu-open");
  };
  toggle.addEventListener("click",()=>{
    const open=toggle.getAttribute("aria-expanded")!=="true";
    toggle.setAttribute("aria-expanded",String(open));nav.classList.toggle("open",open);document.body.classList.toggle("menu-open",open);
  });
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",close));
  document.addEventListener("keydown",event=>{if(event.key==="Escape")close();});
}
function setupScroll(){
  const progress=document.getElementById("scrollProgress");
  const top=document.getElementById("backTop");
  const update=()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    const value=max>0?(window.scrollY/max)*100:0;
    progress.style.width=value+"%";
    top.classList.toggle("visible",window.scrollY>500);
  };
  window.addEventListener("scroll",update,{passive:true});update();
  top.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
}
document.getElementById("printCv").addEventListener("click",()=>window.print());
document.getElementById("year").textContent=new Date().getFullYear();
renderTimeline();
renderCredentials();
renderSkills();
setupFilters();
setupNavigation();
setupScroll();
setupMotion();
