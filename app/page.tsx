'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

type Lang = 'bs' | 'en';

export default function Home() {
  const [lang, setLang] = useState<Lang>('bs');
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [carousel, setCarousel] = useState({ services: 0, pricing: 0, testimonials: 0 });
  const trackRefs = useRef<{ services: HTMLDivElement | null; pricing: HTMLDivElement | null; testimonials: HTMLDivElement | null }>({ services: null, pricing: null, testimonials: null });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('webora-lang') as Lang | null;
      if (saved === 'bs' || saved === 'en') setLang(saved);
    } catch (_) {}
  }, []);
  useEffect(() => {
    document.body.classList.remove('lang-bs', 'lang-en');
    document.body.classList.add('lang-' + lang);
    document.documentElement.lang = lang === 'bs' ? 'bs' : 'en';
    try { localStorage.setItem('webora-lang', lang); } catch (_) {}
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileMenuOpen(false); };
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const updateCarouselTransform = useCallback(() => {
    ['services', 'pricing', 'testimonials'].forEach((name) => {
      const track = trackRefs.current[name as keyof typeof trackRefs.current];
      if (!track?.parentElement) return;
      const outer = track.parentElement;
      const itemWidth = outer.offsetWidth + 16;
      const idx = carousel[name as keyof typeof carousel];
      track.style.transform = `translateX(-${idx * itemWidth}px)`;
    });
  }, [carousel]);
  useEffect(() => { updateCarouselTransform(); }, [carousel, updateCarouselTransform]);
  useEffect(() => {
    const onResize = () => updateCarouselTransform();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateCarouselTransform]);

  const goCarousel = (name: 'services' | 'pricing' | 'testimonials', delta: number) => {
    setCarousel((prev) => {
      const count = name === 'services' ? 3 : name === 'pricing' ? 3 : 3;
      const next = prev[name] + delta;
      return { ...prev, [name]: Math.max(0, Math.min(next, count - 1)) };
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} id="mobileNav" aria-hidden={!mobileMenuOpen}>
        <button type="button" className="mobile-nav-close" onClick={closeMobile} aria-label="Close menu">&#215;</button>
        <a href="#services" onClick={closeMobile}><span data-lang="bs">Usluge</span><span data-lang="en">Services</span></a>
        <a href="#pricing" onClick={closeMobile}><span data-lang="bs">Cijene</span><span data-lang="en">Pricing</span></a>
        <a href="#process" onClick={closeMobile}><span data-lang="bs">Proces</span><span data-lang="en">Process</span></a>
        <a href="#faq" onClick={closeMobile}>FAQ</a>
        <a href="#cta" className="btn-primary" onClick={closeMobile} style={{ fontSize: 14, marginTop: 12 }}>
          <span data-lang="bs">Zakažite razgovor</span><span data-lang="en">Book a Call</span>
        </a>
        <div className="lang-switcher" style={{ marginTop: 8 }}>
          <button type="button" className={`lang-btn ${lang === 'bs' ? 'active' : ''}`} onClick={() => setLang('bs')}>BS</button>
          <button type="button" className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
        </div>
      </div>

      <nav id="navbar" className={scrolled ? 'scrolled' : ''} aria-label="Main">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            <svg className="nav-logo-icon" viewBox="0 0 28 28" fill="none" aria-hidden>
              <circle cx="14" cy="14" r="11.5" stroke="#C8A84B" strokeWidth="1" />
              <circle cx="14" cy="14" r="6.5" stroke="#C8A84B" strokeWidth="1" strokeDasharray="2.5 2.5" />
              <path d="M8 14 L11.5 9.5 L14 14 L16.5 9.5 L20 14" stroke="#C8A84B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <em>Web</em>ora
          </a>
          <ul className="nav-links">
            <li><a href="#services"><span data-lang="bs">Usluge</span><span data-lang="en">Services</span></a></li>
            <li><a href="#pricing"><span data-lang="bs">Cijene</span><span data-lang="en">Pricing</span></a></li>
            <li><a href="#process"><span data-lang="bs">Proces</span><span data-lang="en">Process</span></a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="nav-right">
            <div className="lang-switcher">
              <button type="button" className={`lang-btn ${lang === 'bs' ? 'active' : ''}`} onClick={() => setLang('bs')}>BS</button>
              <button type="button" className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
            <a href="#cta" className="nav-cta">
              <span data-lang="bs">Zakažite poziv</span><span data-lang="en">Book a Call</span>
            </a>
          </div>
          <button type="button" className="nav-hamburger" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <main id="main-content">
      <section id="hero">
        <div className="hero-glow" />
        <div className="hero-grid-lines" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              Web Agency · Sarajevo, BA
            </div>
            <h1 className="hero-headline">
              <span data-lang="bs">Vaš biznis zaslužuje<br />prisutnost koja se<br /><em>pamti.</em></span>
              <span data-lang="en">Your business<br />deserves a presence<br />worth <em>remembering.</em></span>
            </h1>
            <p className="hero-sub">
              <span data-lang="bs">Profesionalna, pristupačna web rješenja za mala i srednja preduzeća — čist dizajn, brza isporuka i rezultati koje možete izmjeriti.</span>
              <span data-lang="en">Professional, affordable web solutions for small and medium businesses — clean design, fast delivery, and results you can measure.</span>
            </p>
            <div className="hero-actions">
              <a href="#pricing" className="btn-primary">
                <span data-lang="bs">Paketi i cijene</span><span data-lang="en">See Packages & Pricing</span>
              </a>
              <a href="#services" className="btn-ghost">
                <span data-lang="bs">Naše usluge</span><span data-lang="en">Explore Services</span>
                <span className="arrow">→</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">48<span>h</span></div>
                <div className="stat-label"><span data-lang="bs">Prva skica</span><span data-lang="en">First Draft</span></div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100<span>%</span></div>
                <div className="stat-label"><span data-lang="bs">Custom dizajn</span><span data-lang="en">Custom Design</span></div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3<span>×</span></div>
                <div className="stat-label"><span data-lang="bs">Brže od agencija</span><span data-lang="en">Faster Than Agencies</span></div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hc-top">
                <div className="hc-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
                <div className="hc-status">Live</div>
              </div>
              <div className="hc-title">Restoran Azra — Landing Page</div>
              <div className="hc-sub"><span data-lang="bs">Isporučeno za 5 dana · €490</span><span data-lang="en">Delivered in 5 days · €490</span></div>
              <div className="hc-bar"><div className="hc-bar-fill" style={{ width: '100%' }} /></div>
            </div>
            <div className="hero-card">
              <div className="hc-top">
                <div className="hc-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div>
                <div className="hc-status">Live</div>
              </div>
              <div className="hc-title">Biroservis Kovač — <span data-lang="bs">Poslovni sajt</span><span data-lang="en">Business Site</span></div>
              <div className="hc-sub"><span data-lang="bs">Isporučeno za 10 dana · €990</span><span data-lang="en">Delivered in 10 days · €990</span></div>
              <div className="hc-bar"><div className="hc-bar-fill" style={{ width: '100%' }} /></div>
            </div>
            <div className="hero-card">
              <div className="hc-top">
                <div className="hc-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                <div className="hc-status" style={{ color: '#E2C97E' }}><span data-lang="bs">U izradi</span><span data-lang="en">In Progress</span></div>
              </div>
              <div className="hc-title">Moda Bašćaršija — Web Platform</div>
              <div className="hc-sub"><span data-lang="bs">U izradi · €1,990</span><span data-lang="en">In progress · €1,990</span></div>
              <div className="hc-bar"><div className="hc-bar-fill" style={{ width: '62%' }} /></div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-section">
        <div className="marquee-track">
          {[
            { bs: 'Landing Stranice', en: 'Landing Pages' },
            { bs: 'Poslovni Sajtovi', en: 'Business Websites' },
            { bs: 'Web Platforme', en: 'Web Platforms' },
            { bs: 'SEO Optimizacija', en: 'SEO Optimization' },
            { bs: 'Responsive Dizajn', en: 'Responsive Design' },
            { bs: 'Brza Isporuka', en: 'Fast Delivery' },
            { bs: 'Pristupačne Cijene', en: 'Affordable Pricing' },
            { bs: 'Sarajevo & Regija', en: 'Sarajevo & Beyond' },
          ].concat([
            { bs: 'Landing Stranice', en: 'Landing Pages' },
            { bs: 'Poslovni Sajtovi', en: 'Business Websites' },
            { bs: 'Web Platforme', en: 'Web Platforms' },
            { bs: 'SEO Optimizacija', en: 'SEO Optimization' },
            { bs: 'Responsive Dizajn', en: 'Responsive Design' },
            { bs: 'Brza Isporuka', en: 'Fast Delivery' },
            { bs: 'Pristupačne Cijene', en: 'Affordable Pricing' },
            { bs: 'Sarajevo & Regija', en: 'Sarajevo & Beyond' },
          ]).map((item, i) => (
            <div key={i} className="marquee-item">
              <span data-lang="bs">{item.bs}</span><span data-lang="en">{item.en}</span>
            </div>
          ))}
        </div>
      </div>

      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-left reveal">
              <div className="section-badge"><span data-lang="bs">O Webori</span><span data-lang="en">About Webora</span></div>
              <h2 className="about-headline">
                <span data-lang="bs">Napravljeno za biznise<br />koji <em>grade</em> ovaj grad.</span>
                <span data-lang="en">Built for the businesses<br />that <em>build</em> this city.</span>
              </h2>
              <p className="about-body">
                <span data-lang="bs">Većina web agencija u regiji ima cijene koje su nedostupne biznisima kojima su najviše potrebne. Weboru smo osnovali kako bismo zatvorili taj jaz — donoseći profesionalnu digitalnu prisutnost sarajevskim restoranima, servisima, buticima i stručnjacima, bez agencijskog cjenovnika.</span>
                <span data-lang="en">Most web agencies in the region price out the businesses that need them most. We built Webora to close that gap — delivering world-class digital presence to Sarajevo&apos;s restaurants, service providers, boutiques, and professionals, without the agency price tag.</span>
              </p>
              <p className="about-body">
                <span data-lang="bs">Nismo template shop. Svaki projekat počinje razumijevanjem vašeg biznisa, vaših kupaca i vaših ciljeva — i završava web stranicom koja stvarno radi za vas.</span>
                <span data-lang="en">We&apos;re not a template shop. Every project starts with understanding your business, your customers, and your goals — and ends with a website that actually works for you.</span>
              </p>
              <a href="#cta" className="btn-primary" style={{ marginTop: 12 }}><span data-lang="bs">Razgovarajmo</span><span data-lang="en">Let&apos;s Talk</span></a>
            </div>
            <div className="about-right reveal reveal-delay-2">
              <div className="about-pillars">
                {[
                  { num: '01', bsT: 'Lokalni korijeni, globalni dizajn', enT: 'Locally rooted, globally designed', bsD: 'Razumijemo bosansko tržište i govorimo jezikom vaših kupaca — a gradimo prema međunarodnim standardima.', enD: 'We understand the Bosnian market and speak the language of your customers — while building to international standards.' },
                  { num: '02', bsT: 'Brzina bez kompromisa', enT: 'Speed without sacrifice', bsD: 'Sedmice, ne mjeseci. Krećemo se brzo jer vaš biznis ne može čekati — i nikad ne žrtvujemo kvalitet radi brzine.', enD: "Weeks, not months. We move fast because your business can't wait — and we never cut corners to get there." },
                  { num: '03', bsT: 'Rezultati, ne samo estetika', enT: 'Results, not just aesthetics', bsD: 'Lijep izgled je minimum. Važno je da li vaša stranica pretvara posjetioce u kupce, pozive ili rezervacije.', enD: 'Beautiful is the baseline. What matters is whether your site converts visitors into customers, calls, or bookings.' },
                  { num: '04', bsT: 'Dugoročno partnerstvo', enT: 'Long-term partnership', bsD: 'Nakon lansiranja, i dalje smo tu — za ažuriranja, rast i sve što dolazi. Niste broj tiketa.', enD: "After launch, we're still here — for updates, growth, and whatever comes next. You're not a ticket number." },
                ].map((p) => (
                  <div key={p.num} className="pillar">
                    <div className="pillar-number">{p.num}</div>
                    <div className="pillar-title"><span data-lang="bs">{p.bsT}</span><span data-lang="en">{p.enT}</span></div>
                    <div className="pillar-desc"><span data-lang="bs">{p.bsD}</span><span data-lang="en">{p.enD}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="services-bg-orb" />
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge"><span data-lang="bs">Šta gradimo</span><span data-lang="en">What We Build</span></div>
            <h2 className="section-headline">
              <span data-lang="bs">Svaki biznis ima<br /><em>drugačiju</em> polazišnu tačku.</span>
              <span data-lang="en">Every business has a<br /><em>different</em> starting point.</span>
            </h2>
          </div>
          <div className="services-grid">
            {[
              { bsT: 'Landing Stranica', enT: 'Landing Page', bsD: 'Savršen prvi korak online. Čista, profesionalna stranica koja ostavlja pravi utisak i navodi posjetioce na akciju.', enD: 'Your perfect first step online. A clean, professional page that makes the right impression and drives visitors to act.', features: [{ bs: 'Custom dizajn, 1 stranica', en: '1-page custom design' }, { bs: 'Prilagođeno za mobitel', en: 'Mobile-responsive' }, { bs: 'Kontakt forma + Google Maps', en: 'Contact form + maps' }, { bs: 'Isporučeno za 5–7 dana', en: 'Delivered in 5–7 days' }, { bs: '14 dana podrške', en: '14 days support' }] },
              { bsT: 'Poslovni Sajt', enT: 'Business Website', bsD: 'Kompletno rješenje za biznise koji žele ostaviti ozbiljan online utisak i privući više kupaca.', enD: 'The complete package for businesses ready to make a serious online impression and attract more customers.', features: [{ bs: '5–7 stranica, custom dizajn', en: '5–7 custom-designed pages' }, { bs: 'CMS — sami mijenjate sadržaj', en: 'CMS — edit your own content' }, { bs: 'SEO + Google Analytics', en: 'SEO + Google Analytics' }, { bs: '30 dana podrške', en: '30 days support' }, { bs: 'Isporučeno za 10–14 dana', en: 'Delivered in 10–14 days' }] },
              { bsT: 'Web Platforma', enT: 'Web Platform', bsD: 'Custom platforme za biznise koji su spremni na rast — sistemi za rezervacije, e-commerce, portali za klijente.', enD: 'Custom platforms for businesses ready to scale — booking systems, e-commerce, client portals, and more.', features: [{ bs: 'Custom funkcionalnosti i integracije', en: 'Custom functionality & integrations' }, { bs: 'E-commerce ili sistem rezervacija', en: 'E-commerce or booking system' }, { bs: 'Napredna analitika i performanse', en: 'Advanced analytics & performance' }, { bs: '90 dana podrške', en: '90 days support' }] },
            ].map((s, i) => (
              <div key={i} className={`service-card reveal reveal-delay-${i + 1}`}>
                <div className="service-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
                <div className="service-title"><span data-lang="bs">{s.bsT}</span><span data-lang="en">{s.enT}</span></div>
                <div className="service-desc"><span data-lang="bs">{s.bsD}</span><span data-lang="en">{s.enD}</span></div>
                <ul className="service-features">
                  {s.features.map((f, j) => (
                    <li key={j}><svg className="check-icon" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#C8A84B" strokeWidth="1" /><path d="M5 8l2 2 4-4" stroke="#C8A84B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg><span data-lang="bs">{f.bs}</span><span data-lang="en">{f.en}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="carousel-wrap" id="servicesCarousel">
            <div className="carousel-track-outer">
              <div className="carousel-track" id="servicesTrack" ref={(el) => { trackRefs.current.services = el; }}>
                {[
                  { bsT: 'Landing Stranica', enT: 'Landing Page', bsD: 'Čista, profesionalna stranica koja ostavlja pravi utisak.', enD: 'A clean, professional page that makes the right impression.', feats: [{ bs: 'Custom dizajn, 1 stranica', en: '1-page custom design' }, { bs: 'Prilagođeno za mobitel', en: 'Mobile-responsive' }, { bs: 'Isporučeno za 5–7 dana', en: 'Delivered in 5–7 days' }] },
                  { bsT: 'Poslovni Sajt', enT: 'Business Website', bsD: 'Kompletno rješenje za ozbiljan online nastup.', enD: 'The complete package for a serious online impression.', feats: [{ bs: '5–7 stranica, custom dizajn', en: '5–7 custom-designed pages' }, { bs: 'CMS — sami mijenjate sadržaj', en: 'CMS — edit your own content' }, { bs: 'Isporučeno za 10–14 dana', en: 'Delivered in 10–14 days' }] },
                  { bsT: 'Web Platforma', enT: 'Web Platform', bsD: 'Custom platforme za biznise koji su spremni na rast.', enD: 'Custom platforms for businesses ready to scale.', feats: [{ bs: 'Custom funkcionalnosti', en: 'Custom functionality' }, { bs: 'E-commerce ili rezervacije', en: 'E-commerce or bookings' }, { bs: '90 dana podrške', en: '90 days support' }] },
                ].map((s, i) => (
                  <div key={i} className="service-card">
                    <div className="service-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
                    <div className="service-title"><span data-lang="bs">{s.bsT}</span><span data-lang="en">{s.enT}</span></div>
                    <div className="service-desc"><span data-lang="bs">{s.bsD}</span><span data-lang="en">{s.enD}</span></div>
                    <ul className="service-features">{s.feats.map((f, j) => (<li key={j}><svg className="check-icon" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#C8A84B" strokeWidth="1" /><path d="M5 8l2 2 4-4" stroke="#C8A84B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg><span data-lang="bs">{f.bs}</span><span data-lang="en">{f.en}</span></li>))}</ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-dots" id="servicesDots">
              {[0, 1, 2].map((i) => (<button key={i} type="button" className={`carousel-dot ${carousel.services === i ? 'active' : ''}`} onClick={() => setCarousel((c) => ({ ...c, services: i }))} aria-label={`Slide ${i + 1}`} />))}
            </div>
            <div className="carousel-arrows">
              <button type="button" className="carousel-arrow" onClick={() => goCarousel('services', -1)} disabled={carousel.services === 0}>←</button>
              <button type="button" className="carousel-arrow" onClick={() => goCarousel('services', 1)} disabled={carousel.services === 2}>→</button>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge"><span data-lang="bs">Cijene</span><span data-lang="en">Pricing</span></div>
            <h2 className="section-headline">
              <span data-lang="bs">Transparentne cijene.<br /><em>Bez iznenađenja.</em></span>
              <span data-lang="en">Transparent pricing.<br /><em>No surprises.</em></span>
            </h2>
            <p className="section-sub">
              <span data-lang="bs">Svaki paket ima fiksnu cijenu. Znate tačno šta plaćate prije nego što počnemo.</span>
              <span data-lang="en">Every package is a fixed price. You know exactly what you&apos;re paying before we start.</span>
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card reveal reveal-delay-1">
              <div className="pricing-plan">Starter</div>
              <div className="pricing-name">Spark</div>
              <div className="pricing-desc"><span data-lang="bs">Vaš prvi korak online. Čista, profesionalna landing stranica koja ostavlja pravi utisak.</span><span data-lang="en">Your first step online. A clean, professional landing page that makes the right impression.</span></div>
              <div className="pricing-price">
                <div className="pricing-amount"><span>€</span>490</div>
                <div className="pricing-period"><span data-lang="bs">Jednokratno · Fiksna cijena</span><span data-lang="en">One-time · Fixed price</span></div>
              </div>
              <ul className="pricing-features">
                {[{ bs: 'Custom dizajn, 1 stranica', en: '1-page custom design' }, { bs: 'Responsive za mobitel', en: 'Mobile-responsive' }, { bs: 'Kontakt forma + mapa', en: 'Contact form + maps' }, { bs: 'SEO osnove + brzi hosting', en: 'Basic SEO + fast hosting' }, { bs: 'Isporučeno za 5–7 radnih dana', en: 'Delivered in 5–7 business days' }, { bs: '14 dana podrške', en: '14 days post-launch support' }].map((f, i) => (<li key={i}><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg><span data-lang="bs">{f.bs}</span><span data-lang="en">{f.en}</span></li>))}
                <li className="muted-feature"><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>CMS</li>
                <li className="muted-feature"><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg><span data-lang="bs">Više stranica</span><span data-lang="en">Multi-page structure</span></li>
              </ul>
              <a href="#cta" className="pricing-cta outline"><span data-lang="bs">Počnimo</span><span data-lang="en">Get Started</span></a>
            </div>
            <div className="pricing-card featured reveal reveal-delay-2">
              <div className="pricing-badge"><span data-lang="bs">Najpopularnije</span><span data-lang="en">Most Popular</span></div>
              <div className="pricing-plan">Growth</div>
              <div className="pricing-name">Presence</div>
              <div className="pricing-desc"><span data-lang="bs">Kompletni paket za biznise koji žele ozbiljan digitalni identitet i više kupaca.</span><span data-lang="en">The complete package for businesses ready to make a serious online impression.</span></div>
              <div className="pricing-price">
                <div className="pricing-amount"><span>€</span>990</div>
                <div className="pricing-period"><span data-lang="bs">Jednokratno · Fiksna cijena</span><span data-lang="en">One-time · Fixed price</span></div>
              </div>
              <ul className="pricing-features">
                {[{ bs: '5–7 custom stranica', en: '5–7 custom-designed pages' }, { bs: 'CMS — sami uređujete sadržaj', en: 'CMS — edit your own content' }, { bs: 'Kompletni on-page SEO', en: 'Full on-page SEO optimization' }, { bs: 'Google Analytics + Search Console', en: 'Google Analytics + Search Console' }, { bs: 'Blog / vijesti sekcija', en: 'Blog / news section' }, { bs: 'Isporučeno za 10–14 radnih dana', en: 'Delivered in 10–14 business days' }, { bs: '30 dana podrške', en: '30 days post-launch support' }, { bs: 'Besplatna domena + vodič za hosting', en: 'Free domain + hosting guide' }].map((f, i) => (<li key={i}><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg><span data-lang="bs">{f.bs}</span><span data-lang="en">{f.en}</span></li>))}
              </ul>
              <a href="#cta" className="pricing-cta primary"><span data-lang="bs">Odaberite ovaj paket</span><span data-lang="en">Start This Package</span></a>
            </div>
            <div className="pricing-card reveal reveal-delay-3">
              <div className="pricing-plan">Scale</div>
              <div className="pricing-name">Platform</div>
              <div className="pricing-desc"><span data-lang="bs">Za biznise kojima treba više od web stranice — custom funkcije, e-commerce, rezervacije i integracije.</span><span data-lang="en">For businesses that need more than a website — custom features, e-commerce, bookings, and integrations.</span></div>
              <div className="pricing-price">
                <div className="pricing-amount"><span>€</span>1,990</div>
                <div className="pricing-period"><span data-lang="bs">Početna cijena · Prilagođeno projektu</span><span data-lang="en">Starting price · Scoped per project</span></div>
              </div>
              <ul className="pricing-features">
                {[{ bs: 'Sve iz Presence paketa', en: 'Everything in Presence' }, { bs: 'E-commerce ili sistem rezervacija', en: 'E-commerce or booking system' }, { bs: 'Custom integracije (CRM, plaćanja…)', en: 'Custom integrations (CRM, payments…)' }, { bs: 'Korisnički nalozi i dashboardi', en: 'User accounts & dashboards' }, { bs: 'Audit performansi i konverzija', en: 'Performance & conversion audit' }, { bs: 'Namjenski project manager', en: 'Dedicated project manager' }, { bs: '90 dana podrške', en: '90 days post-launch support' }].map((f, i) => (<li key={i}><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg><span data-lang="bs">{f.bs}</span><span data-lang="en">{f.en}</span></li>))}
              </ul>
              <a href="#cta" className="pricing-cta outline"><span data-lang="bs">Zatražite ponudu</span><span data-lang="en">Request a Quote</span></a>
            </div>
          </div>
          <div className="carousel-wrap" id="pricingCarousel">
            <div className="carousel-track-outer">
              <div className="carousel-track" id="pricingTrack" ref={(el) => { trackRefs.current.pricing = el; }}>
                {[
                  { period: { bs: 'Jednokratno · Fiksna cijena', en: 'One-time · Fixed price' }, feats: [{ bs: 'Custom dizajn, 1 stranica', en: '1-page custom design' }, { bs: 'Isporučeno za 5–7 dana', en: 'Delivered in 5–7 days' }, { bs: '14 dana podrške', en: '14 days support' }], cta: { bs: 'Počnimo', en: 'Get Started' }, featured: false },
                  { period: { bs: 'Jednokratno · Fiksna cijena', en: 'One-time · Fixed price' }, feats: [{ bs: '5–7 custom stranica + CMS', en: '5–7 custom pages + CMS' }, { bs: 'Kompletni SEO + Analytics', en: 'Full SEO + Analytics' }, { bs: '30 dana podrške', en: '30 days support' }], cta: { bs: 'Odaberite ovaj paket', en: 'Start This Package' }, featured: true },
                  { period: { bs: 'Početna cijena', en: 'Starting price' }, feats: [{ bs: 'Sve iz Presence + custom funkcije', en: 'Everything in Presence + custom' }, { bs: 'E-commerce ili rezervacije', en: 'E-commerce or bookings' }, { bs: '90 dana podrške', en: '90 days support' }], cta: { bs: 'Zatražite ponudu', en: 'Request a Quote' }, featured: false },
                ].map((p, i) => (
                  <div key={i} className={`pricing-card ${p.featured ? 'featured' : ''}`} style={{ transform: 'none' }}>
                    {p.featured && <div className="pricing-badge"><span data-lang="bs">Najpopularnije</span><span data-lang="en">Most Popular</span></div>}
                    <div className="pricing-plan">{i === 0 ? 'Starter' : i === 1 ? 'Growth' : 'Scale'}</div>
                    <div className="pricing-name">{i === 0 ? 'Spark' : i === 1 ? 'Presence' : 'Platform'}</div>
                    <div className="pricing-price"><div className="pricing-amount"><span>€</span>{i === 0 ? '490' : i === 1 ? '990' : '1,990'}</div><div className="pricing-period"><span data-lang="bs">{p.period.bs}</span><span data-lang="en">{p.period.en}</span></div></div>
                    <ul className="pricing-features">{p.feats.map((f, j) => (<li key={j}><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg><span data-lang="bs">{f.bs}</span><span data-lang="en">{f.en}</span></li>))}</ul>
                    <a href="#cta" className={`pricing-cta ${p.featured ? 'primary' : 'outline'}`} style={{ marginTop: 24 }}><span data-lang="bs">{p.cta.bs}</span><span data-lang="en">{p.cta.en}</span></a>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-dots" id="pricingDots">
              {[0, 1, 2].map((i) => (<button key={i} type="button" className={`carousel-dot ${carousel.pricing === i ? 'active' : ''}`} onClick={() => setCarousel((c) => ({ ...c, pricing: i }))} aria-label={`Slide ${i + 1}`} />))}
            </div>
            <div className="carousel-arrows">
              <button type="button" className="carousel-arrow" onClick={() => goCarousel('pricing', -1)} disabled={carousel.pricing === 0}>←</button>
              <button type="button" className="carousel-arrow" onClick={() => goCarousel('pricing', 1)} disabled={carousel.pricing === 2}>→</button>
            </div>
          </div>
          <p className="pricing-note reveal">
            <span data-lang="bs">Sve cijene u EUR. Niste sigurni koji paket odgovara? <strong>Zakažite besplatnih 20 minuta</strong> — reći ćemo vam tačno šta trebate, bez pritiska.</span>
            <span data-lang="en">All prices in EUR. Not sure which package fits? <strong>Book a free 20-minute consultation</strong> — we&apos;ll tell you exactly what you need, no pressure.</span>
          </p>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge"><span data-lang="bs">Kako radimo</span><span data-lang="en">How We Work</span></div>
            <h2 className="section-headline">
              <span data-lang="bs">Jednostavan proces.<br /><em>Izvrsni</em> rezultati.</span>
              <span data-lang="en">Simple process.<br /><em>Exceptional</em> results.</span>
            </h2>
            <p className="section-sub">
              <span data-lang="bs">Četiri jasna koraka od prvog razgovora do live web stranice — bez tajni, bez kašnjenja, bez iznenađenja.</span>
              <span data-lang="en">Four clear steps from first conversation to live website — no mystery, no delays, no surprises.</span>
            </p>
          </div>
          <div className="process-steps">
            {[
              { num: '01', bsT: 'Upoznajemo se', enT: 'Discovery Call', bsD: 'Provedemo 20–30 minuta razumijevajući vaš biznis, ciljeve i publiku. Besplatno, bez obaveza.', enD: 'We spend 20–30 minutes understanding your business, goals, and audience. Free, no commitment.' },
              { num: '02', bsT: 'Dizajn i prijedlog', enT: 'Design & Proposal', bsD: 'Za 48 sati dobijate detaljnu ponudu i prvi dizajnerski pravac na odobrenje — prije nego što počnemo graditi.', enD: 'Within 48 hours, you receive a detailed proposal and a first design direction — before we build anything.' },
              { num: '03', bsT: 'Gradimo i usavršavamo', enT: 'Build & Refine', bsD: 'Razvijamo vašu stranicu s dva kruga revizija. Vi ste uključeni, ali mi radimo sav težak posao.', enD: "We develop your site with two rounds of revisions. You're involved, but we handle all the heavy lifting." },
              { num: '04', bsT: 'Lansiranje i podrška', enT: 'Launch & Support', bsD: 'Lansiramo vašu stranicu, provedemo vas kroz nju i ostajemo dostupni dugo nakon lansiranja.', enD: 'We launch your site, walk you through it, and stay available for questions and growth — long after go-live.' },
            ].map((step, i) => (
              <div key={step.num} className={`process-step reveal reveal-delay-${i + 1}`}>
                <div className="step-num">{step.num}</div>
                <div className="step-title"><span data-lang="bs">{step.bsT}</span><span data-lang="en">{step.enT}</span></div>
                <div className="step-desc"><span data-lang="bs">{step.bsD}</span><span data-lang="en">{step.enD}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container">
          <div className="why-grid">
            <div className="why-left reveal">
              <div className="section-badge"><span data-lang="bs">Zašto Webora</span><span data-lang="en">Why Webora</span></div>
              <h2 className="why-headline">
                <span data-lang="bs">Web agencija kakvu<br />sarajevski biznisi<br /><em>stvarno trebaju.</em></span>
                <span data-lang="en">The web agency<br />Sarajevo&apos;s businesses<br /><em>actually need.</em></span>
              </h2>
              <p className="why-body">
                <span data-lang="bs">Velike agencije naplaćuju 5.000 EUR+ i rade mjesecima. Freelanceri su nepredvidljivi. Template alati ostavljaju vas da izgledate isto kao svi. Webora je drugačija: brza, pristupačna, profesionalna i lokalna.</span>
                <span data-lang="en">Big agencies charge €5,000+ and take months. Freelancers are hit-or-miss. Template builders make you look like everyone else. Webora is different: fast, affordable, professional, and local.</span>
              </p>
              <div className="why-cards">
                {[
                  { bsT: 'Isporuka u danima, ne mjesecima', enT: 'Delivered in days, not months', bsD: 'Većina projekata je online za 2 sedmice. Vaš biznis ne može čekati 3 mjeseca na web stranicu.', enD: "Most projects are live within 2 weeks. Your business can't afford to wait 3 months for a website." },
                  { bsT: 'Pravi dizajn, ne template', enT: 'Real design, not templates', bsD: 'Svaki sajt gradimo od nule prema vašem brendu. Nećete izgledati kao konkurencija — ni kao iko drugi.', enD: "Every site is built from scratch to fit your brand. You won't look like your competitors — or like anyone else." },
                  { bsT: 'Partner, ne dobavljač', enT: 'A partner, not a vendor', bsD: 'Ponosimo se svakim sajtom koji lansiramo. Kad vi rastete, rastemo i mi — i tu smo na duži rok.', enD: "We take pride in every site we launch. When you grow, we grow — and we're here for the long run." },
                ].map((c, i) => (
                  <div key={i} className="why-card">
                    <div className="why-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                    <div>
                      <div className="why-card-title"><span data-lang="bs">{c.bsT}</span><span data-lang="en">{c.enT}</span></div>
                      <div className="why-card-desc"><span data-lang="bs">{c.bsD}</span><span data-lang="en">{c.enD}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-right reveal reveal-delay-2">
              <div className="comparison-table">
                <div className="ct-header">
                  <div className="ct-col-label" />
                  <div className="ct-col-label"><span data-lang="bs">Drugi</span><span data-lang="en">Others</span></div>
                  <div className="ct-col-label highlight">Webora</div>
                </div>
                {[
                  { feat: { bs: 'Rok isporuke', en: 'Delivery time' }, other: { bs: '2–4 mj.', en: '2–4 months' }, webora: '5–14 days' },
                  { feat: { bs: 'Fiksna cijena', en: 'Fixed pricing' }, other: '✗', webora: '✓' },
                  { feat: { bs: 'Custom dizajn', en: 'Custom design' }, other: 'Template', webora: { bs: 'Uvijek', en: 'Always' } },
                  { feat: { bs: 'Podrška nakon', en: 'Post-launch support' }, other: { bs: 'Ekstra', en: 'Extra cost' }, webora: { bs: 'Uključeno', en: 'Included' } },
                  { feat: { bs: 'Lokalno znanje', en: 'Local knowledge' }, other: '✗', webora: '✓' },
                  { feat: { bs: 'Početna cijena', en: 'Starting price' }, other: '€2,000+', webora: '€490' },
                  { feat: { bs: 'Besplatna konsultacija', en: 'Free consultation' }, other: '✗', webora: '✓' },
                ].map((row, i) => (
                  <div key={i} className="ct-row">
                    <div className="ct-feature"><span data-lang="bs">{typeof row.feat === 'object' ? row.feat.bs : row.feat}</span><span data-lang="en">{typeof row.feat === 'object' ? row.feat.en : row.feat}</span></div>
                    <div className="ct-val ct-x"><span data-lang="bs">{typeof row.other === 'object' ? row.other.bs : row.other}</span><span data-lang="en">{typeof row.other === 'object' ? row.other.en : row.other}</span></div>
                    <div className="ct-val ct-check"><span data-lang="bs">{typeof row.webora === 'object' ? row.webora.bs : row.webora}</span><span data-lang="en">{typeof row.webora === 'object' ? row.webora.en : row.webora}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge"><span data-lang="bs">Klijenti</span><span data-lang="en">Client Stories</span></div>
            <h2 className="section-headline">
              <span data-lang="bs">Šta kažu naši<br /><em>klijenti.</em></span>
              <span data-lang="en">What our clients<br /><em>say.</em></span>
            </h2>
          </div>
          <div className="testimonials-grid">
            {[
              { bsQ: 'Tri godine smo odlagali web stranicu jer je svaka ponuda bila izvan dosega. Webora je isporučila nešto prekrasno za manje od dvije sedmice — i unutar budžeta. Telefon nije stao zvoniti od tada.', enQ: "We had been putting off a website for three years because every quote was out of reach. Webora delivered something beautiful in less than two weeks — within budget. Our phone has not stopped ringing since.", name: 'Amira Hadžić', role: { bs: 'Vlasnica', en: 'Owner' }, suffix: ', Salon Azura · Sarajevo', initial: 'A' },
              { bsQ: 'Kao maloj računovodstvenoj firmi trebalo nam je nešto profesionalno što klijentima daje povjerenje. Webora je tačno razumjela što trebamo — rezultat izgleda kao da smo platili deset puta više.', enQ: "As a small accounting firm, we needed something professional that gave clients confidence. Webora understood exactly what we needed — the result looks like it cost ten times what we paid.", name: 'Miroslav Kovačević', role: { bs: 'Partner', en: 'Partner' }, suffix: ', KM Računovodstvo · Sarajevo', initial: 'M' },
              { bsQ: 'Proces je bio nevjerovatno gladak. Postavili su odlična pitanja na početku, dali realan rok i ispunili svako obećanje. Šest mjeseci kasnije, 40% novih rezervacija dolazi kroz web stranicu.', enQ: "The process was incredibly smooth. They asked great questions upfront, gave a realistic timeline, and delivered on every promise. Six months later, 40% of our new bookings come through the website.", name: 'Damir Brkić', role: { bs: 'Direktor', en: 'Director' }, suffix: ', Servis Brkić · Mostar', initial: 'D' },
            ].map((t, i) => (
              <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                <div className="stars">★★★★★</div>
                <div className="quote-icon">&quot;</div>
                <p className="testimonial-text"><span data-lang="bs">{t.bsQ}</span><span data-lang="en">{t.enQ}</span></p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initial}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role"><span data-lang="bs">{t.role.bs}</span><span data-lang="en">{t.role.en}</span>{t.suffix}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-wrap" id="testimonialsCarousel">
            <div className="carousel-track-outer">
              <div className="carousel-track" id="testimonialsTrack" ref={(el) => { trackRefs.current.testimonials = el; }}>
                {[
                  { bsQ: 'Webora je isporučila nešto prekrasno za manje od dvije sedmice — i unutar budžeta. Telefon nije stao zvoniti od tada.', enQ: 'Webora delivered something beautiful in less than two weeks — within budget. Our phone has not stopped ringing since.', name: 'Amira Hadžić', role: 'Salon Azura · Sarajevo', initial: 'A' },
                  { bsQ: 'Webora je tačno razumjela što trebamo — rezultat izgleda kao da smo platili deset puta više.', enQ: 'Webora understood exactly what we needed — the result looks like it cost ten times what we paid.', name: 'Miroslav Kovačević', role: 'KM Računovodstvo · Sarajevo', initial: 'M' },
                  { bsQ: 'Šest mjeseci kasnije, 40% novih rezervacija dolazi kroz web stranicu.', enQ: 'Six months later, 40% of our new bookings come through the website.', name: 'Damir Brkić', role: 'Servis Brkić · Mostar', initial: 'D' },
                ].map((t, i) => (
                  <div key={i} className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <div className="quote-icon">&quot;</div>
                    <p className="testimonial-text"><span data-lang="bs">{t.bsQ}</span><span data-lang="en">{t.enQ}</span></p>
                    <div className="testimonial-author">
                      <div className="author-avatar">{t.initial}</div>
                      <div><div className="author-name">{t.name}</div><div className="author-role">{t.role}</div></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-dots" id="testimonialsDots">
              {[0, 1, 2].map((i) => (<button key={i} type="button" className={`carousel-dot ${carousel.testimonials === i ? 'active' : ''}`} onClick={() => setCarousel((c) => ({ ...c, testimonials: i }))} aria-label={`Slide ${i + 1}`} />))}
            </div>
            <div className="carousel-arrows">
              <button type="button" className="carousel-arrow" onClick={() => goCarousel('testimonials', -1)} disabled={carousel.testimonials === 0}>←</button>
              <button type="button" className="carousel-arrow" onClick={() => goCarousel('testimonials', 1)} disabled={carousel.testimonials === 2}>→</button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-left reveal">
              <div className="section-badge">FAQ</div>
              <h2 className="faq-headline">
                <span data-lang="bs">Pitanja koja<br />često <em>dobijamo.</em></span>
                <span data-lang="en">Questions we<br />get <em>often.</em></span>
              </h2>
              <p className="faq-desc">
                <span data-lang="bs">Ne možete naći odgovor? Pišite nam — obično odgovorimo u roku od par sati.</span>
                <span data-lang="en">Can&apos;t find what you&apos;re looking for? Send us a message — we usually reply within a few hours.</span>
              </p>
              <a href="#cta" className="btn-ghost"><span data-lang="bs">Pitajte nas bilo šta</span><span data-lang="en">Ask us anything</span> <span className="arrow">→</span></a>
            </div>
            <div className="faq-items reveal reveal-delay-2">
              {[
                { bsQ: 'Da li trebam dostaviti sadržaj (tekst, fotografije)?', enQ: 'Do I need to provide content (text, photos)?', bsA: 'Radimo s onim što imate. Ako imate tekst i fotografije — odlično. Ako ne, možemo pomoći s prijedlozima teksta i pronaći profesionalne stock fotografije. Nikad nismo dozvolili da projekat stane zbog sadržaja.', enA: "We can work with whatever you have. If you have text and photos ready, great. If not, we can help with copy suggestions and source professional stock imagery. We've never let a project stall because a client didn't have content ready." },
                { bsQ: 'Mogu li sami ažurirati web stranicu?', enQ: 'Will I be able to update the website myself?', bsA: 'Da — svi Presence i Platform paketi uključuju CMS, tako da možete ažurirati tekst, slike i cijene bez ijedne linije koda. Uključujemo i kratki video walkthrough nakon lansiranja.', enA: "Yes — all Business and Platform packages include a CMS, so you can update text, images, and pricing without touching any code. We also provide a short walkthrough video after launch." },
                { bsQ: 'Šta ako trebam izmjene nakon lansiranja?', enQ: 'What if I need changes after launch?', bsA: 'Svaki paket uključuje post-launch podršku (14–90 dana). Nakon toga nudimo maintenance plan od 49 EUR/mj, ili jednokratne izmjene. Nikad nećete ostati sami s web stranicom.', enA: 'Every package includes post-launch support (14–90 days). After that, we offer a maintenance plan from €49/month, or one-off changes. You\'ll never be left alone with a website you can\'t update.' },
                { bsQ: 'Kako funkcioniraju plaćanja?', enQ: 'How do payments work?', bsA: 'Plaćanje dijelimo 50/50: 50% unaprijed, a ostatak kada odobrite finalnu stranicu — prije nego što predamo fajlove i objavimo stranicu. Prihvatamo bankovni transfer i lokalne načine plaćanja.', enA: 'We split payments 50/50: 50% before we start, and 50% when you approve the final site — before we hand over files and push it live. We accept bank transfer and local payment options.' },
                { bsQ: 'Da li radite s biznisima izvan Sarajeva?', enQ: 'Do you work with businesses outside Sarajevo?', bsA: 'Apsolutno. Korijeni su nam u Sarajevu, ali radimo remotely s klijentima širom Bosne i Hercegovine, regije i međunarodnog tržišta. Cijeli naš proces funkcioniše savršeno putem e-maila i video poziva.', enA: "Absolutely. While we're rooted in Sarajevo, we work remotely with clients across Bosnia and Herzegovina, the wider region, and internationally. Our entire process works perfectly via email and video calls." },
                { bsQ: 'Na kojoj platformi gradite sajtove?', enQ: 'What platform do you build on?', bsA: 'Zavisi od vaših potreba. Za landing stranice koristimo brzi, custom kod. Za poslovne sajtove s CMS-om koristimo WordPress ili Webflow. Za kompleksne platforme — prilagođavamo tehnologiju projektu. Uvijek preporučujemo ono što je najbolje za vas.', enA: "It depends on your needs. For landing pages we use fast, custom code. For business sites with CMS we use WordPress or Webflow. For complex platforms we match technology to the project. We always recommend what's best for your specific situation." },
              ].map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <div className="faq-question" role="button" tabIndex={0} onClick={() => toggleFaq(i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(i); } }} aria-expanded={openFaq === i}>
                    <span data-lang="bs">{faq.bsQ}</span><span data-lang="en">{faq.enQ}</span>
                    <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden><polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <div className="faq-answer"><span data-lang="bs">{faq.bsA}</span><span data-lang="en">{faq.enA}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-glow" />
        <div className="container">
          <div className="cta-inner reveal">
            <div className="section-badge" style={{ justifyContent: 'center', marginBottom: 24 }}>
              <span data-lang="bs">Počnimo graditi</span><span data-lang="en">Let&apos;s Build Something</span>
            </div>
            <h2 className="cta-headline">
              <span data-lang="bs">Spremni za izgradnju<br />vaše <em>digitalne prisutnosti?</em></span>
              <span data-lang="en">Ready to build your<br /><em>digital presence?</em></span>
            </h2>
            <p className="cta-sub">
              <span data-lang="bs">Počnite s besplatnim razgovorom od 20 minuta. Reći ćemo vam tačno šta trebate, koliko košta i koliko brzo možemo isporučiti.</span>
              <span data-lang="en">Start with a free 20-minute call. We&apos;ll tell you exactly what you need, what it will cost, and how fast we can deliver.</span>
            </p>
            <div className="cta-actions">
              <a href="mailto:hello@webora.ba" className="btn-primary"><span data-lang="bs">Zakažite besplatan poziv</span><span data-lang="en">Book a Free Call</span></a>
              <a href="mailto:hello@webora.ba" className="btn-ghost"><span data-lang="bs">Pošaljite poruku</span><span data-lang="en">Send Us a Message</span> <span className="arrow">→</span></a>
            </div>
            <div className="cta-contact-row">
              <a href="mailto:hello@webora.ba" className="cta-contact-item"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>hello@webora.ba</a>
              <a href="tel:+38761000000" className="cta-contact-item"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.06 2.22 2 2 0 012 0h3a2 2 0 012 1.72c.13 1 .39 1.97.75 2.9a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.18-1.18a2 2 0 012.11-.45c.93.36 1.9.62 2.9.75A2 2 0 0122 16.92z" /></svg>+387 61 000 000</a>
              <div className="cta-contact-item"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>Sarajevo, Bosnia &amp; Herzegovina</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-logo"><em>Web</em>ora</div>
              <p className="footer-brand-desc">
                <span data-lang="bs">Profesionalna web rješenja za mala i srednja preduzeća u Sarajevu i regiji. Napravljeno s pažnjom. Isporučeno s preciznošću.</span>
                <span data-lang="en">Professional web solutions for small and medium businesses in Sarajevo and beyond. Built with care. Delivered with precision.</span>
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" title="Instagram" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                <a href="#" className="social-link" title="LinkedIn" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
                <a href="#" className="social-link" title="Facebook" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></a>
              </div>
            </div>
            <div>
              <div className="footer-col-title"><span data-lang="bs">Usluge</span><span data-lang="en">Services</span></div>
              <ul className="footer-links">
                <li><a href="#services"><span data-lang="bs">Landing Stranice</span><span data-lang="en">Landing Pages</span></a></li>
                <li><a href="#services"><span data-lang="bs">Poslovni Sajtovi</span><span data-lang="en">Business Websites</span></a></li>
                <li><a href="#services">Web Platforme</a></li>
                <li><a href="#pricing"><span data-lang="bs">Cijene</span><span data-lang="en">Pricing</span></a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title"><span data-lang="bs">Kompanija</span><span data-lang="en">Company</span></div>
              <ul className="footer-links">
                <li><a href="#about"><span data-lang="bs">O Webori</span><span data-lang="en">About Webora</span></a></li>
                <li><a href="#process"><span data-lang="bs">Naš Proces</span><span data-lang="en">Our Process</span></a></li>
                <li><a href="#testimonials"><span data-lang="bs">Klijenti</span><span data-lang="en">Client Stories</span></a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title"><span data-lang="bs">Kontakt</span><span data-lang="en">Contact</span></div>
              <ul className="footer-links">
                <li><a href="mailto:hello@webora.ba">hello@webora.ba</a></li>
                <li><a href="tel:+38761000000">+387 61 000 000</a></li>
                <li><a href="#cta"><span data-lang="bs">Zakažite poziv</span><span data-lang="en">Book a Free Call</span></a></li>
                <li><a href="#cta"><span data-lang="bs">Pokrenite projekat</span><span data-lang="en">Start a Project</span></a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2025 Webora. <span data-lang="bs">Sva prava zadržana.</span><span data-lang="en">All rights reserved.</span> · <a href="#"><span data-lang="bs">Politika privatnosti</span><span data-lang="en">Privacy Policy</span></a></div>
            <div className="footer-tagline">Your vision. Our craft. The web, done right.</div>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
