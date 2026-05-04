export const cases = [
  // SECTION: DESARROLLO & IA
  {
    id: 'job-hunter-bot',
    title: 'Job Hunter Bot',
    category: 'dev',
    tag: 'Desarrollo propio · Python',
    description: 'Bot autónomo que escanea Indeed, InfoJobs y LinkedIn cada 30 min, filtra ofertas con GPT-4o y aplica automáticamente mediante Easy Apply. Corre 24/7 en Railway con notificaciones por Telegram.',
    stack: ['Python', 'Playwright', 'OpenAI', 'PostgreSQL', 'Railway', 'Telegram'],
    url: 'https://github.com/GoldorTeps/Job_hunter_PCRI_BOT',
    featured: true
  },
  {
    id: 'zerocog-demo',
    title: 'ZeroCog · Pipeline de IA privado',
    category: 'dev',
    tag: 'Desarrollo propio · IA',
    description: 'Pipeline que extrae entidades de texto operacional, anonimiza PII, construye grafos relacionales y ejecuta inferencia de IA sobre la capa anonimizada. Streamlit + Docker.',
    stack: ['Python', 'Docker', 'Streamlit', 'NER / NLP', 'OpenAI'],
    url: 'https://github.com/GoldorTeps/zero_cog_DEMO',
    featured: true
  },
  {
    id: 'spain-leads-scraper',
    title: 'Spain Leads Scraper',
    folder: 'dev/spain-leads-scraper',
    category: 'dev',
    tag: 'Herramienta B2B · Python',
    description: 'Herramienta de inteligencia comercial que cruza OpenStreetMap, Paginas Amarillas y Google Places API para construir bases de prospectos B2B cualificadas en minutos.',
    stack: ['Python', 'BeautifulSoup', 'Requests', 'OpenPyXL', 'Google Places API', 'Overpass API'],
    image: '/Scraping/Scraping.png',
    featured: true
  },

  // SECTION: WEB & FRONTEND
  {
    id: 'zerocog-web',
    title: 'ZeroCog',
    category: 'web',
    tag: 'Desarrollo propio · Astro',
    description: 'Web del proyecto ZeroCog: arquitectura de decisión verificada. Construida con Astro, desplegada en producción en zerocog.org.',
    stack: ['Astro', 'JavaScript', 'CSS', 'Vercel'],
    url: 'https://zerocog.org'
  },
  {
    id: 'aurum',
    title: 'AURUM',
    category: 'web',
    tag: 'Desarrollo propio · Landing',
    description: 'Landing page para AURUM, marca de residencias subterráneas de lujo. Diseño premium orientado a un público de alto poder adquisitivo.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    url: 'https://bunker-corp2-exc-l.vercel.app'
  },
  {
    id: 'bleach-portfolio',
    title: 'Bleach Portfolio',
    category: 'web',
    tag: 'Desarrollo propio · React',
    description: 'Portfolio personal desplegado en Vercel. React con Vite, diseño y desarrollo propio.',
    stack: ['React', 'Vite', 'CSS', 'Vercel'],
    image: '/portfolio-web/03_assets/img/previews/bleach.png',
    url: 'https://bleach-portfolio-one.vercel.app'
  },
  {
    id: 'bunker-corp',
    title: 'Bunker Corp',
    category: 'web',
    tag: 'Desarrollo propio · Frontend',
    description: 'Entorno de marca y comunicación digital. HTML, CSS y JavaScript, desplegado en Vercel.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    image: '/portfolio-web/03_assets/img/previews/bunker.png',
    url: 'https://bunker-corp.vercel.app'
  },

  // SECTION: COMUNICACIÓN
  {
    id: 'campana-2019',
    title: 'Comunicación Multicanal 2019',
    folder: 'campanas-electorales/2019',
    category: 'comunicacion',
    tag: 'Dirección y coordinación',
    description: 'Coordinación de producción digital y piezas visuales para campaña electoral. Gestión de contenidos y cobertura multicanal en tiempo real.',
    image: '/portfolio-web/01_casos/campanas-electorales/2019/60447746_2123333747952479_668131310203568128_n.jpg'
  },
  {
    id: 'no-mas-plasticos',
    title: 'No Más Plásticos',
    folder: 'campanas-publicas/no-mas-plasticos',
    category: 'comunicacion',
    tag: 'Producción propia',
    description: 'Campaña sostenida de sensibilización ambiental con fuerte componente visual y educativo en redes sociales.',
    image: '/portfolio-web/01_casos/campanas-publicas/no-mas-plasticos/38194138_1950088891943633_799917549843120128_n.jpg'
  },
  {
    id: 'yo-limpio',
    title: 'Yo Limpio: Acción Viral',
    folder: 'campanas-publicas/yo-limpio-caca-caminante',
    category: 'comunicacion',
    tag: 'Idea y producción propia',
    description: 'De la idea a la edición final. Acción de guerrilla que transformó una queja vecinal en impacto mediático.',
    image: '/portfolio-web/01_casos/campanas-publicas/yo-limpio-caca-caminante/35076703_1901745640111292_6266186431064965120_n.jpg'
  },

  // SECTION: EDITORIAL
  {
    id: 'guia-buenas-practicas',
    title: 'Guía PRODIVERSA',
    folder: 'editorial/guia-buenas-practicas',
    category: 'editorial',
    tag: 'Maquetación propia · InDesign',
    description: 'Guía de Claves y Buenas Prácticas para el profesorado de ESO. Diseño editorial completo en colaboración con el equipo técnico de PRODIVERSA.',
    image: '/portfolio-web/03_assets/img/previews/guia-buenas-practicas.jpg'
  },
  {
    id: 'guia-profesorado',
    title: 'Guía del Profesorado',
    folder: 'editorial/guia-profesorado',
    category: 'editorial',
    tag: 'Maquetación propia · InDesign',
    description: 'Manual estructurado para facilitar el acceso a información compleja. Diseño orientado a la claridad y usabilidad.',
    image: '/portfolio-web/03_assets/img/previews/guia-profesorado.jpg'
  },
  {
    id: 'guia-salinas',
    title: 'Guía Salinas',
    folder: 'editorial/guia-salinas',
    category: 'editorial',
    tag: 'Maquetación propia · LibreOffice Draw',
    description: 'Documento original maquetado en LibreOffice Draw. Trabajo de adaptación gráfica y maquetación editorial.',
    image: '/portfolio-web/03_assets/img/previews/guia-salinas.jpg'
  }
]

export const contactInfo = {
  email: 'adavidjanerperez@gmail.com',
  phone: '663593052',
  github: 'https://github.com/GoldorTeps',
  linkedin: 'https://www.linkedin.com/in/david-janer-pérez'
}
