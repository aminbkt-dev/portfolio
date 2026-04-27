import React, { useState, useEffect } from 'react';

// ─── Icons (inline SVG) ───────────────────────────────────────────────────────

const DatabaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path strokeLinecap="round" d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
    <path strokeLinecap="round" d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l4-4 4 4 5-5" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" />
  </svg>
);

const LayersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const BoxIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
  </svg>
);

const CoinsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="8" cy="8" r="5" />
    <path strokeLinecap="round" d="M13.3 3.8A6 6 0 0121 9.5c0 3.3-2.7 6-6 6a6 6 0 01-1.7-.25" />
    <path strokeLinecap="round" d="M10.7 20.2A6 6 0 003 14.5c0-3.3 2.7-6 6-6a6 6 0 011.7.25" />
  </svg>
);

const ScatterIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
    <circle cx="8" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="13" cy="9" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="17" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="11" cy="16" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const ArchiveIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2M5 8v11a2 2 0 002 2h10a2 2 0 002-2V8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 12h4" />
  </svg>
);

const SpeedIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v2M6 12H4M20 12h-2M7.76 7.76L9.17 9.17" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l3-4" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ─── Navigation ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Profil', href: 'profil' },
  { label: 'Services', href: 'services' },
  { label: 'Projet', href: 'projet' },
  { label: 'Stack', href: 'stack' },
  { label: 'Contact', href: 'contact' },
];

function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    scrollTo(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/0'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="text-sm font-bold text-slate-900 tracking-tight hover:text-indigo-600 transition-colors"
        >
          Amin Bakhti
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="text-sm bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Me contacter
          </button>
        </div>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-sm text-slate-700 hover:text-indigo-600 font-medium py-1 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="text-sm bg-slate-900 text-white px-4 py-2.5 rounded-lg font-semibold text-left mt-1"
          >
            Me contacter
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection({ scrollTo }) {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
              Disponible pour missions freelance et opportunit&eacute;s CDI &mdash; Data / BI / Analytics Engineering
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-4">
              Je transforme les donn&eacute;es en outil de pilotage clair et exploitable
            </h1>

            <p className="text-lg text-slate-600 font-semibold mb-4 leading-snug">
              Freelance Data Analyst / Analytics Engineer &mdash; SQL, Power BI, ETL, Data Modeling &amp; Automatisation
            </p>

            <p className="text-sm text-slate-500 mb-3 leading-relaxed">
              Freelance sp&eacute;cialis&eacute; en data analyse, business intelligence et automatisation des donn&eacute;es.<br />
              Je con&ccedil;ois des syst&egrave;mes data de bout en bout pour structurer les donn&eacute;es, construire des dashboards fiables et piloter la performance.
            </p>
            <p className="text-xs text-slate-400 font-medium mb-6 tracking-wide">
              SQL &bull; PostgreSQL &bull; Power BI &bull; ETL &bull; Data Modeling &bull; n8n
            </p>

            <p className="text-slate-600 leading-relaxed mb-10 max-w-lg">
              J&apos;ai con&ccedil;u un syst&egrave;me data complet pour ma propre marque e-commerce (AmeOS), me permettant de piloter pr&eacute;cis&eacute;ment ventes, co&ucirc;ts, retours et rentabilit&eacute; par collection.<br />
              Aujourd&apos;hui, j&apos;aide les entreprises &agrave; construire ce type de syst&egrave;me pour transformer leurs donn&eacute;es en d&eacute;cisions concr&egrave;tes.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors"
              >
                Me contacter
                <ArrowRightIcon />
              </button>
              <button
                onClick={() => scrollTo('projet')}
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-slate-400 hover:bg-slate-50 transition-all"
              >
                Voir le projet data AmeOS
              </button>
            </div>
          </div>

          {/* Mobile simplified version */}
          <div className="block lg:hidden mt-8">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  AmeOS &mdash; Vue d&apos;ensemble
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Actif
                </span>
              </div>

              <div className="bg-white rounded-xl p-3 border border-slate-100 mb-4">
                <p className="text-xs text-slate-400 font-medium mb-2">Pipeline de donn&eacute;es</p>
                <div className="flex flex-wrap items-center gap-1.5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold px-2 py-1 rounded-lg border bg-green-50 text-green-700 border-green-200">Shopify API</span>
                    <span className="text-xs font-semibold px-2 py-1 rounded-lg border bg-yellow-50 text-yellow-700 border-yellow-200">Fichiers CSV</span>
                    <span className="text-xs font-semibold px-2 py-1 rounded-lg border bg-sky-50 text-sky-700 border-sky-200">Google Drive</span>
                  </div>
                  <span className="text-xs text-slate-300">&rarr;</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-lg border bg-orange-50 text-orange-700 border-orange-200">n8n</span>
                  <span className="text-xs text-slate-300">&rarr;</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-lg border bg-blue-50 text-blue-700 border-blue-200">PostgreSQL</span>
                  <span className="text-xs text-slate-300">&rarr;</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold px-2 py-1 rounded-lg border bg-yellow-50 text-yellow-700 border-yellow-200">Power BI</span>
                    <span className="text-xs font-semibold px-2 py-1 rounded-lg border bg-violet-50 text-violet-700 border-violet-200">Metabase</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: '8', label: 'Pages dashboard' },
                  { value: '6', label: 'Vues SQL' },
                  { value: '3+', label: 'Sources intégrées' },
                  { value: 'P&L', label: 'Par collection' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-3 border border-slate-100">
                    <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop full version */}
          <div className="hidden lg:block">
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  AmeOS &mdash; Vue d&apos;ensemble
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Actif
                </span>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-100 mb-5">
                <p className="text-xs text-slate-400 font-medium mb-3">Pipeline de donn&eacute;es</p>
                <div className="flex items-center gap-1.5">
                  {/* Sources stacked */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-green-50 text-green-700 border-green-200">Shopify API</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-yellow-50 text-yellow-700 border-yellow-200">Fichiers CSV</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-sky-50 text-sky-700 border-sky-200">Google Drive</span>
                  </div>
                  <span className="text-sm font-light text-slate-300">→</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-orange-50 text-orange-700 border-orange-200">n8n</span>
                  <span className="text-sm font-light text-slate-300">→</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-blue-50 text-blue-700 border-blue-200">PostgreSQL</span>
                  <span className="text-sm font-light text-slate-300">→</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-yellow-50 text-yellow-700 border-yellow-200">Power BI</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-violet-50 text-violet-700 border-violet-200">Metabase</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { value: '8', label: 'Pages dashboard', icon: '📊' },
                  { value: '6', label: 'Vues SQL', icon: '🗄️' },
                  { value: '3+', label: 'Sources int&eacute;gr&eacute;es', icon: '🔗' },
                  { value: 'P&L', label: 'Par collection', icon: '📈' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-4 border border-slate-100"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                      <span className="text-base">{stat.icon}</span>
                    </div>
                    <p className="text-xs text-slate-500" dangerouslySetInnerHTML={{ __html: stat.label }} />
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-100">
                <p className="text-xs text-slate-400 font-medium mb-3">CA par collection &mdash; Illustration</p>
                <div className="flex items-end gap-2 h-14">
                  {[65, 40, 82, 55, 90, 48, 71].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-indigo-100 rounded-t-sm hover:bg-indigo-300 transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About / Profil Section ───────────────────────────────────────────────────

function AboutSection() {
  const facts = [
    { label: 'Formation', value: 'Master en Data Management' },
    { label: 'Exp&eacute;rience', value: 'Grand groupe (VINCI) + projet entrepreneurial' },
    { label: 'Domaines', value: 'ETL, mod&eacute;lisation analytique, dashboarding, automatisation' },
    { label: 'Disponibilit&eacute;', value: 'Missions freelance &mdash; Data / BI / Analytics Engineering &mdash; Automatisation' },
  ];

  return (
    <section id="profil" className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Profil</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-8 tracking-tight">
              Data Analyst &amp; Analytics Engineer
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Titulaire d&apos;un Master en Data Management, j&apos;interviens sur l&apos;ensemble du cycle de vie de la donn&eacute;e : de l&apos;ingestion et la transformation jusqu&apos;au dashboarding et &agrave; l&apos;analyse d&eacute;cisionnelle.
              </p>
              <p>
                Mon approche combine rigueur analytique, structuration des donn&eacute;es et automatisation des flux &mdash; pour que les &eacute;quipes puissent se concentrer sur les d&eacute;cisions, pas sur la collecte manuelle.
              </p>
              <p>
                J&apos;ai travaill&eacute; sur des projets data dans un contexte grand groupe (VINCI) ainsi que sur un projet entrepreneurial concret (AmeOS / Ame Sportswear), o&ugrave; j&apos;ai con&ccedil;u et d&eacute;ploy&eacute; un entrep&ocirc;t de donn&eacute;es complet de bout en bout : collecte, transformation, mod&eacute;lisation, automatisation et reporting.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="bg-white rounded-xl px-5 py-4 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
              >
                <p
                  className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1"
                  dangerouslySetInnerHTML={{ __html: fact.label }}
                />
                <p
                  className="text-slate-800 font-medium text-sm"
                  dangerouslySetInnerHTML={{ __html: fact.value }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: <DatabaseIcon />,
    title: 'Pipelines & ETL',
    description:
      "Conception de pipelines de données pour collecter, transformer et intégrer les données depuis différentes sources : API, fichiers plats, outils métier.",
    tags: ['SQL', 'n8n', 'API REST', 'PostgreSQL'],
  },
  {
    icon: <ChartIcon />,
    title: 'Dashboards & analyse de performance',
    description:
      "Création de dashboards Power BI pour suivre les KPI clés (chiffre d'affaires, marges, coûts) et transformer vos données en un outil de pilotage clair.",
    tags: ['Power BI', 'DAX', 'KPI', 'Reporting'],
  },
  {
    icon: <ZapIcon />,
    title: 'Automatisation des flux',
    description:
      "Automatisation des flux de données et des traitements récurrents pour réduire les tâches manuelles, fiabiliser l'analyse et gagner en efficacité.",
    tags: ['n8n', 'JavaScript', 'Cron', 'ETL'],
  },
];

function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Services</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
            Services Freelance Data Analyst
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-700 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white text-slate-500 border border-slate-200 px-2.5 py-1 rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Compétences Data Section ─────────────────────────────────────────────────

const COMPETENCES = [
  { label: 'Analyse de donn\u00e9es avec SQL (PostgreSQL)', tags: ['SQL', 'PostgreSQL'] },
  { label: 'Data modeling — sch\u00e9ma en \u00e9toile, tables de faits et dimensions', tags: ['Data Modeling'] },
  { label: 'Conception de pipelines ETL (API, CSV, automatisation via n8n)', tags: ['ETL', 'n8n'] },
  { label: 'Dashboarding Power BI — KPI, m\u00e9triques business', tags: ['Power BI', 'BI'] },
  { label: 'Nettoyage, transformation et structuration des donn\u00e9es', tags: ['Data Engineering'] },
  { label: 'Automatisation des flux de donn\u00e9es', tags: ['Automatisation'] },
];

function CompetencesSection() {
  return (
    <section id="competences" className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Expertise</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
            Comp&eacute;tences Data (SQL, ETL, Power BI, Data Modeling, n8n)
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPETENCES.map((item) => (
            <div
              key={item.label}
              className="bg-slate-50 rounded-xl px-5 py-4 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
            >
              <p className="text-slate-800 font-medium text-sm leading-snug mb-3">{item.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Architecture & Modélisation Section ─────────────────────────────────────

function ModelingSection() {
  const rules = [
    'Attribution multi-sources (revenus / d\u00e9penses)',
    'Gestion des p\u00e9riodes de validit\u00e9 (valid_from / valid_to)',
    'Pr\u00e9vention du double comptage',
    'Structuration de r\u00e8gles m\u00e9tier pour garantir la coh\u00e9rence des indicateurs',
  ];

  return (
    <section id="modelisation" className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Expertise</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
            Architecture &amp; mod&eacute;lisation data
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5 text-slate-600 text-sm leading-relaxed">
            <p>
              Conception de mod&egrave;les de donn&eacute;es analytiques (sch&eacute;ma en &eacute;toile, tables de faits et dimensions) adapt&eacute;s aux besoins m&eacute;tier.
            </p>
            <div>
              <p className="font-semibold text-slate-900 mb-3">Gestion de cas complexes</p>
              <ul className="space-y-2.5">
                {rules.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-4 h-4 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">→</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Stack utilis&eacute;e</p>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL (Supabase)', 'SQL avanc\u00e9', 'Mod\u00e9lisation analytique'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Exemple concret</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sur AmeOS, j&apos;ai con&ccedil;u plus de 20 tables structur&eacute;es avec des vues SQL avanc&eacute;es pour calculer la rentabilit&eacute; par collection, g&eacute;rer les retours et garantir la fiabilit&eacute; des indicateurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── AmeOS Project Section ────────────────────────────────────────────────────

const AMEOS_DEMOS = [
  "Conception d'un pipeline ETL de bout en bout",
  "Modélisation d'une base analytique (PostgreSQL / Supabase)",
  "Structuration de règles métier complexes",
  "Migration du système BI : Power BI → Metabase (dashboards analytiques)",
  "Automatisation des flux de données via n8n",
  "Pilotage de la rentabilité et de la performance par collection",
];

const SOURCES = [
  { label: 'Shopify API', sub: 'Ventes · produits · variants\nretours · paiements', color: 'bg-green-50 border-green-200 text-green-800' },
  { label: 'Fichiers CSV', sub: 'Exports bancaires\ndépenses', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
  { label: 'Google Drive', sub: 'Données complémentaires', color: 'bg-sky-50 border-sky-200 text-sky-800' },
];

const PIPELINE = [
  { label: 'n8n', sub: 'ETL & transformation JS', color: 'bg-orange-50 border-orange-200 text-orange-800' },
  { label: 'PostgreSQL / Supabase', sub: 'Entrepôt analytique', color: 'bg-blue-50 border-blue-200 text-blue-800' },
];

const BI_OUTPUTS = [
  { label: 'Power BI', sub: 'Dashboards & KPI', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
  { label: 'Metabase', sub: 'Dashboards web', color: 'bg-violet-50 border-violet-200 text-violet-800' },
];

const DASHBOARD_PAGES = [
  {
    icon: <GlobeIcon />,
    color: 'bg-indigo-50 text-indigo-600',
    title: 'Vision globale de la performance',
    desc: "Suivi des indicateurs clés : chiffre d'affaires, profit net, marge, commandes, panier moyen et taux de retour.",
  },
  {
    icon: <LayersIcon />,
    color: 'bg-emerald-50 text-emerald-600',
    title: 'Analyse par collection (drop)',
    desc: "Analyse complète de la rentabilité par collection : P&L, structure des coûts et impact des retours.",
  },
  {
    icon: <BoxIcon />,
    color: 'bg-violet-50 text-violet-600',
    title: 'Analyse produit et variantes',
    desc: "Suivi des performances par produit et par taille : ventes, rentabilité et taux de retour.",
  },
  {
    icon: <CoinsIcon />,
    color: 'bg-amber-50 text-amber-600',
    title: 'Analyse des coûts',
    desc: "Vision détaillée des coûts (production, marketing, logistique) et de leur impact sur la marge.",
  },
  {
    icon: <ScatterIcon />,
    color: 'bg-rose-50 text-rose-600',
    title: 'Analyse avancée',
    desc: "Analyse des relations entre ventes, coûts et rentabilité (ads, retours, écoulement).",
  },
  {
    icon: <ArchiveIcon />,
    color: 'bg-cyan-50 text-cyan-600',
    title: 'Stock et projections',
    desc: "Suivi du stock restant et estimation du chiffre d'affaires potentiel.",
  },
  {
    icon: <SpeedIcon />,
    color: 'bg-orange-50 text-orange-600',
    title: 'Vélocité des ventes',
    desc: "Analyse de la vitesse d'écoulement et des performances au lancement.",
  },
];

function AmeOSSection({ scrollTo }) {
  return (
    <section id="projet" className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Projet principal</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-2 tracking-tight">Projet Data &mdash; AmeOS (Data Warehouse &amp; BI)</h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Data warehouse, ETL pipeline et dashboards Metabase con&ccedil;us pour piloter la performance d&apos;une activit&eacute; e-commerce
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Description — 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-slate-600 leading-relaxed">
              AmeOS est un syst&egrave;me data que j&apos;ai con&ccedil;u et d&eacute;velopp&eacute; int&eacute;gralement pour piloter ma propre marque e-commerce,{' '}
              <strong className="text-slate-800">Ame Sportswear</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Avant sa mise en place, les donn&eacute;es &eacute;taient dispers&eacute;es et difficiles &agrave; exploiter, rendant le pilotage de l&apos;activit&eacute; impr&eacute;cis. Il &eacute;tait difficile d&apos;avoir une vision fiable des ventes, des co&ucirc;ts, de la rentabilit&eacute; et de l&apos;impact des retours.
            </p>
            <p className="text-slate-600 leading-relaxed">
              J&apos;ai donc con&ccedil;u un syst&egrave;me data complet : centralisation des sources, transformation et structuration des donn&eacute;es, mod&eacute;lisation analytique et d&eacute;veloppement de dashboards &mdash; initialement sous Power BI, puis migr&eacute;s vers Metabase pour une meilleure accessibilit&eacute; et un partage simplifi&eacute;.
            </p>
            <p className="text-slate-600 leading-relaxed">
              L&apos;objectif : obtenir une vision claire, fiable et exploitable de la performance pour prendre de meilleures d&eacute;cisions business.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ce projet a &eacute;t&eacute; d&eacute;velopp&eacute; dans un contexte r&eacute;el d&apos;exploitation, avec des enjeux concrets de rentabilit&eacute; et de pilotage.
            </p>

          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <p className="text-sm font-bold text-slate-900 mb-5">Ce que ce projet d&eacute;montre</p>
              <p className="text-xs text-slate-500 leading-relaxed mb-4 pb-4 border-b border-slate-100">
                Plus de 20 tables structur&eacute;es, r&egrave;gles m&eacute;tier avanc&eacute;es et vues SQL pour le pilotage complet de l&apos;activit&eacute;.
              </p>
              <ul className="space-y-3.5">
                {AMEOS_DEMOS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <span className="text-sm text-slate-600 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '→', label: 'Flux data automatisés' },
                { value: '2', label: 'Shopify + données financières' },
                { value: '8', label: 'pages Metabase' },
                { value: '6', label: 'vues SQL' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl p-4 border border-slate-100 text-center hover:border-slate-200 hover:shadow-sm transition-all"
                >
                  <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pipeline subsection */}
        <div className="mt-16 pt-14 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
            Pipeline de donn&eacute;es automatis&eacute;
          </h3>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text — fixed width */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm lg:w-64 flex-shrink-0">
              <p>
                J&apos;ai con&ccedil;u un pipeline de donn&eacute;es automatis&eacute; centralisant des sources h&eacute;t&eacute;rog&egrave;nes : l&apos;API Shopify (source principale — ventes, produits, retours, paiements), des fichiers CSV de d&eacute;penses, et Google Drive comme source secondaire automatis&eacute;e pour des donn&eacute;es compl&eacute;mentaires.
              </p>
              <p>
                Les donn&eacute;es sont mises &agrave; jour automatiquement, sans intervention manuelle, ce qui permet d&apos;obtenir une base fiable et exploitable en continu.
              </p>
              <p>
                Ce pipeline garantit des donn&eacute;es &agrave; jour, structur&eacute;es et directement utilisables pour l&apos;analyse et le pilotage de la performance.
              </p>
            </div>

            {/* Architecture — takes all remaining space */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm w-fit">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                Architecture du pipeline
              </p>
              <div className="flex items-center gap-3 flex-nowrap">
                <div className="flex flex-col gap-2 flex-shrink-0">
                  {SOURCES.map((source) => (
                    <div key={source.label} className="flex flex-col items-center text-center gap-1">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border whitespace-nowrap ${source.color}`}>
                        {source.label}
                      </span>
                      <span className="text-xs text-slate-400 max-w-[90px] leading-tight whitespace-pre-line">{source.sub}</span>
                    </div>
                  ))}
                </div>
                {PIPELINE.map((step) => (
                  <React.Fragment key={step.label}>
                    <span className="text-slate-300 text-xl flex-shrink-0">&rarr;</span>
                    <div className="flex flex-col items-center text-center gap-1 flex-shrink-0">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border whitespace-nowrap ${step.color}`}>
                        {step.label}
                      </span>
                      <span className="text-xs text-slate-400 max-w-[100px] leading-tight">{step.sub}</span>
                    </div>
                  </React.Fragment>
                ))}
                <span className="text-slate-300 text-xl flex-shrink-0">&rarr;</span>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  {BI_OUTPUTS.map((tool) => (
                    <div key={tool.label} className="flex flex-col items-center text-center gap-1">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border whitespace-nowrap ${tool.color}`}>
                        {tool.label}
                      </span>
                      <span className="text-xs text-slate-400 max-w-[90px] leading-tight">{tool.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modélisation subsection */}
        <div className="mt-16 pt-14 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
            Mod&eacute;lisation de la base de donn&eacute;es
          </h3>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Text */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm flex-1">
              <p>
                Au c&oelig;ur du syst&egrave;me, j&apos;ai con&ccedil;u une base de donn&eacute;es analytique sur PostgreSQL&nbsp;/ Supabase pour structurer l&apos;ensemble des donn&eacute;es de l&apos;activit&eacute;.
              </p>
              <p>
                Le mod&egrave;le relie les collections, produits, variantes, commandes, retours, d&eacute;penses, paiements et niveaux de stock dans une architecture coh&eacute;rente, pens&eacute;e pour l&apos;analyse.
              </p>
              <p>
                Cette mod&eacute;lisation permet de rattacher chaque vente et chaque co&ucirc;t &agrave; la bonne collection, de suivre la rentabilit&eacute; par produit, de prendre en compte les retours, et de produire des indicateurs fiables pour le pilotage de l&apos;activit&eacute;.
              </p>
              <p>
                Elle int&egrave;gre &eacute;galement des r&egrave;gles m&eacute;tier essentielles, notamment pour l&apos;attribution des revenus, la gestion des d&eacute;penses allou&eacute;es, le calcul des frais de transaction et le traitement diff&eacute;renci&eacute; des retours.
              </p>
              <p>
                Cette &eacute;tape a &eacute;t&eacute; d&eacute;terminante pour transformer des donn&eacute;es brutes et dispers&eacute;es en un mod&egrave;le exploitable pour l&apos;analyse et la prise de d&eacute;cision.
              </p>
            </div>

            {/* Visual model */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm w-fit flex-shrink-0">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                Mod&egrave;le analytique
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Collections & produits',      icon: '▦', color: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
                  { label: 'Commandes & ventes',          icon: '↗', color: 'bg-emerald-50 border-emerald-100 text-emerald-700' },
                  { label: 'Retours & remboursements',    icon: '↩', color: 'bg-rose-50 border-rose-100 text-rose-700' },
                  { label: 'Dépenses & paiements',        icon: '◎', color: 'bg-amber-50 border-amber-100 text-amber-700' },
                ].map((block) => (
                  <div
                    key={block.label}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-xs font-semibold ${block.color}`}
                  >
                    <span className="text-base leading-none flex-shrink-0">{block.icon}</span>
                    <span className="leading-snug">{block.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                Reli&eacute;s dans un mod&egrave;le analytique coh&eacute;rent
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard structure subsection */}
        <div className="mt-16 pt-14 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
            Structure du dashboard analytique
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-2xl">
            Le syst&egrave;me alimente un dashboard analytique <strong className="text-slate-700">Metabase</strong> structur&eacute; en plusieurs pages, permettant d&apos;analyser l&apos;activit&eacute; &agrave; diff&eacute;rents niveaux&nbsp;: global, par collection, par produit et par co&ucirc;t. Le syst&egrave;me a &eacute;t&eacute; initialement d&eacute;velopp&eacute; sous Power BI (8 pages) avant d&apos;&ecirc;tre migr&eacute; vers Metabase pour un acc&egrave;s web, un partage simplifi&eacute; et un rafra&icirc;chissement automatique des donn&eacute;es.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DASHBOARD_PAGES.map((page) => (
              <div
                key={page.title}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${page.color}`}>
                  {page.icon}
                </div>
                <p className="font-semibold text-slate-900 text-sm mb-1.5 leading-snug">{page.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{page.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-slate-500 text-sm leading-relaxed max-w-3xl border-l-2 border-indigo-200 pl-4">
            Un tel niveau d&apos;analyse n&apos;est pas accessible via les outils natifs de Shopify. La mise en place de ce syst&egrave;me &eacute;tait n&eacute;cessaire pour obtenir une vision fiable et exploitable de la performance.
          </p>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-3xl border-l-2 border-indigo-200 pl-4">
            Ce dashboard permet de passer d&apos;une simple lecture de donn&eacute;es &agrave; un v&eacute;ritable pilotage de l&apos;activit&eacute;, avec une vision claire et actionnable.
          </p>
        </div>

        {/* Impact & valeur */}
        <div className="mt-16 relative bg-slate-900 rounded-2xl p-10 overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-800/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-1 h-6 bg-indigo-500 rounded-full" />
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Impact &amp; valeur</span>
            </div>

            <div className="max-w-2xl space-y-4 mb-8">
              <p className="text-white text-base font-medium leading-relaxed">
                Ce syst&egrave;me permet de passer d&apos;une simple lecture de donn&eacute;es &agrave; un v&eacute;ritable pilotage de l&apos;activit&eacute;.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Il offre une vision claire et fiable de la performance : rentabilit&eacute; par collection, analyse des co&ucirc;ts, impact des retours, suivi des ventes et du stock.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                La majorit&eacute; des flux sont automatis&eacute;s : les donn&eacute;es sont centralis&eacute;es, mises &agrave; jour en continu et directement exploitables, sans traitement manuel sur les ventes et les op&eacute;rations.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Certaines &eacute;tapes, notamment sur les d&eacute;penses, restent volontairement contr&ocirc;l&eacute;es manuellement afin de garantir une cat&eacute;gorisation et une allocation fiables, adapt&eacute;es aux sp&eacute;cificit&eacute;s m&eacute;tier.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Au-del&agrave; de l&apos;aspect technique, l&apos;objectif &eacute;tait de construire un outil d&eacute;cisionnel, capable de r&eacute;pondre &agrave; des probl&eacute;matiques concr&egrave;tes : quelles collections sont r&eacute;ellement rentables, o&ugrave; se situent les pertes, quels leviers activer pour am&eacute;liorer la performance.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ce projet illustre ma capacit&eacute; &agrave; concevoir des syst&egrave;mes data complets, combinant automatisation des flux et logique m&eacute;tier, pour transformer des donn&eacute;es brutes en informations directement exploitables pour la prise de d&eacute;cision.
              </p>
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-50 transition-colors"
            >
              Discutons de votre projet
              <ArrowRightIcon />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Tech Stack Section ───────────────────────────────────────────────────────

const STACK = [
  { label: 'SQL' },
  { label: 'PostgreSQL' },
  { label: 'Supabase' },
  { label: 'Power BI' },
  { label: 'Metabase' },
  { label: 'n8n' },
  { label: 'API REST' },
  { label: 'JavaScript' },
  { label: 'Python' },
];

function StackSection() {
  return (
    <section id="stack" className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Outils &amp; Technologies</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">Stack Data &amp; BI</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {STACK.map((item) => (
            <span
              key={item.label}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors cursor-default"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-900 py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Contact</span>
        <h2 className="text-3xl font-bold text-white mt-3 mb-4 tracking-tight">
          Discutons de votre projet
        </h2>
        <p className="text-slate-400 leading-relaxed mb-12">
          Vous avez besoin de structurer vos donn&eacute;es, automatiser vos flux ou construire un pilotage fiable de votre performance&nbsp;?
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:amin.bakhti95@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            <MailIcon />
            Envoyer un email
          </a>
          <a
            href="https://www.linkedin.com/in/amin-bakhti-185268240/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-500 transition-colors"
          >
            <LinkedInIcon />
            Voir mon LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-slate-500">
          <a
            href="mailto:amin.bakhti95@gmail.com"
            className="hover:text-slate-300 transition-colors"
          >
            amin.bakhti95@gmail.com
          </a>
          <span className="text-slate-700">&middot;</span>
          <a
            href="https://www.linkedin.com/in/amin-bakhti-185268240/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            linkedin.com/in/amin-bakhti
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-slate-950 py-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-slate-400 text-sm font-semibold">Amin Bakhti</p>
        <p className="text-slate-600 text-xs">Freelance Data Analyst / Analytics Engineer</p>
      </div>
    </footer>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Portfolio() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <AboutSection />
      <ServicesSection />
      <CompetencesSection />
      <ModelingSection />
      <AmeOSSection scrollTo={scrollTo} />
      <StackSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
