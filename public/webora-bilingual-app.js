(function () {
  'use strict';

  var currentLang = document.documentElement.lang || 'bs';

  var translations = {
    bs: {
      'nav-services': 'Usluge',
      'nav-pricing': 'Cijene',
      'nav-portfolio': 'Portfolio',
      'nav-faq': 'FAQ',
      'nav-cta': 'Započni Projekat',
      'hero-badge': 'Web Agencija · Sarajevo, BiH',
      'hero-headline-1': 'Vaš biznis',
      'hero-headline-2': 'zaslužuje',
      'hero-headline-3': 'prisustvo',
      'hero-headline-4': 'koje se pamti.',
      'hero-sub': 'Profesionalna, pristupačna web rješenja za mala i srednja preduzeća — čist dizajn, brza isporuka i rezultati koje možete mjeriti.',
      'hero-cta-primary': 'Pogledaj Pakete i Cijene',
      'hero-cta-secondary': 'Istraži Usluge',
      'hero-stat-1': 'Prva Verzija',
      'hero-stat-2': 'Custom Dizajn',
      'hero-stat-3': 'Brže Od Agencija',
      'card-status-live': 'Live',
      'card-status-progress': 'U Izradi',
      'card-delivered': 'Isporučeno za',
      'card-days': 'dana',
      'card-progress': 'U izradi',
      'about-badge': 'O Webori',
      'about-headline-1': 'Izgrađeno za kompanije',
      'about-headline-2': 'koje',
      'about-headline-3': 'grade',
      'about-headline-4': 'ovaj grad.',
      'about-body-1': 'Većina web agencija u regiji je van domašaja kompanija kojima su najpotrebnije. Weboru smo izgradili kako bismo zatvorili taj jaz — pružajući svjetsku digitalnu prisutnost sarajevskim restoranima, pružaocima usluga, buticima i profesionalcima, bez agencijske cijene.',
      'about-body-2': 'Nismo šablon. Svaki projekat počinje razumijevanjem vašeg biznisa, vaših kupaca i vaših ciljeva — i završava se web stranicom koja zaista radi za vas.',
      'about-cta': 'Razgovarajmo',
      'pillar-1-title': 'Lokalno ukorijenjeni, globalno dizajnirani',
      'pillar-1-desc': 'Razumijemo bosansko tržište i govorimo jezik vaših kupaca — dok gradimo po međunarodnim standardima.',
      'pillar-2-title': 'Brzina bez žrtve',
      'pillar-2-desc': 'Sedmice, ne mjeseci. Brzo se krećemo jer vaš biznis ne može čekati — i nikada ne preskačemo korake.',
      'pillar-3-title': 'Rezultati, ne samo estetika',
      'pillar-3-desc': 'Lijepo je osnova. Ono što je bitno je da li vaša stranica pretvara posjetioce u kupce, pozive ili rezervacije.',
      'pillar-4-title': 'Dugoročno partnerstvo',
      'pillar-4-desc': 'Nakon pokretanja, još smo tu — za ažuriranja, rast i šta god dođe. Niste broj u sistemu.',
      'services-badge': 'Šta Gradimo',
      'services-headline': 'Svaki biznis ima',
      'services-headline-em': 'drugačiju',
      'services-headline-end': 'početnu tačku.',
      'services-sub': 'Nudimo tri osnovne oblasti usluga, svaku prilagođenu gdje ste i gdje želite doći.',
      'pricing-badge': 'Cijene',
      'pricing-headline': 'Transparentne cijene.',
      'pricing-headline-em': 'Bez iznenađenja.',
      'pricing-sub': 'Svaki paket je fiksna cijena. Znate tačno šta plaćate prije nego što počnemo.',
      'pricing-note': 'Sve cijene u EUR. Niste sigurni koji paket odgovara? ',
      'pricing-note-strong': 'Zakažite besplatnu 20-minutnu konsultaciju',
      'pricing-note-suffix': ' i reći ćemo vam tačno šta vam treba — bez dodatne prodaje, bez pritiska.',
      'process-badge': 'Kako Radimo',
      'process-headline': 'Jednostavan proces.',
      'process-headline-em': 'Izvrsni',
      'process-headline-end': 'rezultati.',
      'process-sub': 'Četiri jasna koraka od prvog razgovora do live web stranice — bez misterije, bez kašnjenja, bez iznenađenja.',
      'portfolio-badge': 'Portfolio',
      'portfolio-headline': 'Projekti',
      'portfolio-headline-em': 'koji',
      'portfolio-headline-end': 'govore.',
      'why-badge': 'Zašto Webora',
      'why-headline': 'Web agencija',
      'why-headline-2': 'koju sarajevski biznisi',
      'why-headline-em': 'zaista',
      'why-headline-end': 'trebaju.',
      'why-body': 'Velike agencije naplate €5.000+ i traju mjeseci. Freelanceri su nepredvidivi. Webora je drugačije: brzo, pristupačno, profesionalno i lokalno.',
      'testimonials-badge': 'Priče Klijenata',
      'testimonials-headline': 'Šta naši klijenti',
      'testimonials-headline-em': 'kažu.',
      'faq-badge': 'FAQ',
      'faq-headline': 'Pitanja',
      'faq-headline-2': 'koja ',
      'faq-headline-em': 'često',
      'faq-headline-end': 'dobijamo.',
      'faq-desc': 'Ne možete naći odgovor? Pošaljite nam poruku — obično odgovorimo u roku od nekoliko sati.',
      'faq-cta': 'Pitajte nas bilo šta',
      'cta-badge': 'Hajde da Napravimo Nešto',
      'cta-headline-1': 'Spremni da izgradite svoje',
      'cta-headline-em': 'digitalno prisustvo?',
      'cta-sub': 'Započnite besplatnim 20-minutnim pozivom. Reći ćemo vam tačno šta vam treba, koliko će koštati i koliko brzo možemo isporučiti.',
      'form-name': 'Ime / Kompanija',
      'form-email': 'Email',
      'form-message': 'Poruka',
      'form-submit': 'Pošalji',
      'cta-book': 'Zakaži Besplatni Poziv',
      'cta-message': 'Pošalji Poruku',
      'cta-location': 'Sarajevo, Bosna i Hercegovina',
      'footer-desc': 'Profesionalna web rješenja za mala i srednja preduzeća u Sarajevu i šire. Izgrađeno s pažnjom. Isporučeno s preciznošću.',
      'footer-services': 'Usluge',
      'footer-landing': 'Landing Stranice',
      'footer-business': 'Poslovne Web Stranice',
      'footer-platforms': 'Web Platforme',
      'footer-company': 'Kompanija',
      'footer-process': 'Naš Proces',
      'footer-contact': 'Kontakt',
      'footer-tagline': 'Vaša vizija. Naš zanat. Web kako treba.',
      'skip-link': 'Preskoči na glavni sadržaj'
    },
    en: {
      'nav-services': 'Services',
      'nav-pricing': 'Pricing',
      'nav-portfolio': 'Portfolio',
      'nav-faq': 'FAQ',
      'nav-cta': 'Start Your Project',
      'hero-badge': 'Web Agency · Sarajevo, BiH',
      'hero-headline-1': 'Your business',
      'hero-headline-2': 'deserves a',
      'hero-headline-3': 'presence',
      'hero-headline-4': 'that stands out.',
      'hero-sub': 'Professional, affordable web solutions for small and medium businesses — clean design, fast delivery, and results you can measure.',
      'hero-cta-primary': 'View Packages & Pricing',
      'hero-cta-secondary': 'Explore Services',
      'hero-stat-1': 'First Draft',
      'hero-stat-2': 'Custom Design',
      'hero-stat-3': 'Faster Than Agencies',
      'card-status-live': 'Live',
      'card-status-progress': 'In Progress',
      'card-delivered': 'Delivered in',
      'card-days': 'days',
      'card-progress': 'In progress',
      'about-badge': 'About Webora',
      'about-headline-1': 'Built for companies',
      'about-headline-2': 'that',
      'about-headline-3': 'build',
      'about-headline-4': 'this city.',
      'about-body-1': 'Most web agencies in the region are out of reach for the companies that need them most. We built Webora to close that gap — bringing world-class digital presence to Sarajevo\'s restaurants, service providers, boutiques and professionals, without agency price tags.',
      'about-body-2': 'We\'re not a template shop. Every project starts with understanding your business, your customers and your goals — and ends with a website that actually works for you.',
      'about-cta': 'Let\'s Talk',
      'pillar-1-title': 'Locally rooted, globally designed',
      'pillar-1-desc': 'We understand the Bosnian market and speak your customers\' language — while building to international standards.',
      'pillar-2-title': 'Speed without compromise',
      'pillar-2-desc': 'Weeks, not months. We move fast because your business can\'t wait — and we never skip steps.',
      'pillar-3-title': 'Results, not just aesthetics',
      'pillar-3-desc': 'Beautiful is the baseline. What matters is whether your site turns visitors into customers, calls or bookings.',
      'pillar-4-title': 'Long-term partnership',
      'pillar-4-desc': 'After launch, we\'re still here — for updates, growth and whatever comes next. You\'re not a number in a system.',
      'services-badge': 'What We Build',
      'services-headline': 'Every business has',
      'services-headline-em': 'a different',
      'services-headline-end': 'starting point.',
      'services-sub': 'We offer three core service areas, each tailored to where you are and where you want to go.',
      'pricing-badge': 'Pricing',
      'pricing-headline': 'Transparent pricing.',
      'pricing-headline-em': 'No surprises.',
      'pricing-sub': 'Every package is a fixed price. You know exactly what you\'re paying before we start.',
      'pricing-note': 'All prices in EUR. Not sure which package fits? ',
      'pricing-note-strong': 'Book a free 20-minute consultation',
      'pricing-note-suffix': ' and we\'ll tell you exactly what you need — no upsell, no pressure.',
      'process-badge': 'How We Work',
      'process-headline': 'Simple process.',
      'process-headline-em': 'Exceptional',
      'process-headline-end': 'results.',
      'process-sub': 'Four clear steps from first conversation to live website — no mystery, no delays, no surprises.',
      'portfolio-badge': 'Portfolio',
      'portfolio-headline': 'Projects',
      'portfolio-headline-em': 'that',
      'portfolio-headline-end': 'speak.',
      'why-badge': 'Why Webora',
      'why-headline': 'The web agency',
      'why-headline-2': 'Sarajevo businesses',
      'why-headline-em': 'actually',
      'why-headline-end': 'need.',
      'why-body': 'Big agencies charge €5,000+ and take months. Freelancers are unpredictable. Webora is different: fast, affordable, professional and local.',
      'testimonials-badge': 'Client Stories',
      'testimonials-headline': 'What our clients',
      'testimonials-headline-em': 'say.',
      'faq-badge': 'FAQ',
      'faq-headline': 'Questions',
      'faq-headline-2': 'we ',
      'faq-headline-em': 'often',
      'faq-headline-end': 'get asked.',
      'faq-desc': 'Can\'t find an answer? Send us a message — we usually reply within a few hours.',
      'faq-cta': 'Ask us anything',
      'cta-badge': 'Let\'s Build Something',
      'cta-headline-1': 'Ready to build your',
      'cta-headline-em': 'digital presence?',
      'cta-sub': 'Start with a free 20-minute call. We\'ll tell you exactly what you need, what it costs and how fast we can deliver.',
      'form-name': 'Name / Company',
      'form-email': 'Email',
      'form-message': 'Message',
      'form-submit': 'Send',
      'cta-book': 'Book a Free Call',
      'cta-message': 'Send a Message',
      'cta-location': 'Sarajevo, Bosnia and Herzegovina',
      'footer-desc': 'Professional web solutions for small and medium businesses in Sarajevo and beyond. Built with care. Delivered with precision.',
      'footer-services': 'Services',
      'footer-landing': 'Landing Pages',
      'footer-business': 'Business Websites',
      'footer-platforms': 'Web Platforms',
      'footer-company': 'Company',
      'footer-process': 'Our Process',
      'footer-contact': 'Contact',
      'footer-tagline': 'Your vision. Our craft. Web done right.',
      'skip-link': 'Skip to main content'
    }
  };

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
  }

  function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    var title = lang === 'bs' ? 'Webora — Web rješenja koja traju' : 'Webora — Web Solutions Built to Last';
    var desc = lang === 'bs' ? 'Profesionalna web rješenja za mala i srednja preduzeća u Sarajevu i šire. Čist dizajn, brza isporuka, stvarni rezultati.' : 'Professional web solutions for small and medium businesses in Sarajevo and beyond. Clean design, fast delivery, real results.';
    document.title = title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = translations[lang][key];
      if (text !== undefined) setElementTranslation(el, text);
    });
    renderDynamicContent();
  }

  function setElementTranslation(el, text) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
    var arrow = el.querySelector && el.querySelector('.arrow');
    if (arrow) {
      var label = (text || '').replace(/\s*→\s*$/, '').trim();
      el.innerHTML = '';
      el.appendChild(document.createTextNode(label + ' '));
      el.appendChild(arrow);
      return;
    }
    var hasNested = el.querySelector && el.querySelector('[data-i18n]');
    if (hasNested) {
      var firstText = null;
      for (var i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].nodeType === 3) {
          firstText = el.childNodes[i];
          break;
        }
      }
      if (firstText) firstText.nodeValue = text;
    } else {
      el.textContent = text;
    }
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = translations[currentLang][key];
      if (text !== undefined) setElementTranslation(el, text);
    });
  }

  var marqueeItems = {
    bs: ['Landing stranice', 'Poslovne web stranice', 'Web shopovi', 'Branding', 'SEO', 'Održavanje', 'Brza isporuka', 'Sarajevo', 'BiH'],
    en: ['Landing pages', 'Business websites', 'Web shops', 'Branding', 'SEO', 'Maintenance', 'Fast delivery', 'Sarajevo', 'BiH']
  };

  var servicesData = {
    bs: [
      { title: 'Landing stranice', desc: 'Jednostranične stranice za kampanje, događaje ili jedan jasan cilj — brzo i pristupačno.', features: ['Brza isporuka', 'Mobile-first', 'Forme i CTA'] },
      { title: 'Poslovne web stranice', desc: 'Višestranični sajtovi za restorane, usluge i male firme — dizajn koji predstavlja vaš brend.', features: ['Do 10 stranica', 'CMS za ažuriranja', 'Kontakt i rezervacije'] },
      { title: 'Web platforme', desc: 'Složenije aplikacije: narudžbe, rezervacije, katalozi — sve što vaš biznis treba da raste.', features: ['Custom funkcionalnost', 'Integracije', 'Skalabilnost'] }
    ],
    en: [
      { title: 'Landing pages', desc: 'Single-page sites for campaigns, events or one clear goal — fast and affordable.', features: ['Fast delivery', 'Mobile-first', 'Forms & CTA'] },
      { title: 'Business websites', desc: 'Multi-page sites for restaurants, services and small businesses — design that represents your brand.', features: ['Up to 10 pages', 'CMS for updates', 'Contact & bookings'] },
      { title: 'Web platforms', desc: 'More complex apps: orders, reservations, catalogs — whatever your business needs to grow.', features: ['Custom functionality', 'Integrations', 'Scalability'] }
    ]
  };

  var pricingData = {
    bs: [
      { plan: 'Starter', name: 'Landing', desc: 'Jedna stranica, jedan cilj. Idealno za kampanje ili događaje.', amount: '490', period: 'jednokratno', features: ['Do 5 sekcija', 'Responsive dizajn', 'Kontakt forma', 'SEO osnove'], muted: [], cta: 'Započni', featured: false },
      { plan: 'Biznis', name: 'Poslovna stranica', desc: 'Višestranični sajt za vašu firmu ili brend.', amount: '990', period: 'jednokratno', features: ['Do 10 stranica', 'CMS', 'Blog opcija', 'Email integracija'], muted: ['Prioritetna podrška'], cta: 'Najpopularnije', featured: true },
      { plan: 'Platforma', name: 'Custom projekat', desc: 'Web aplikacija prilagođena vašim potrebama.', amount: '1.990+', period: 'od', features: ['Custom razvoj', 'API i integracije', 'Dugoročna podrška'], muted: [], cta: 'Konsultacija', featured: false }
    ],
    en: [
      { plan: 'Starter', name: 'Landing', desc: 'One page, one goal. Ideal for campaigns or events.', amount: '490', period: 'one-time', features: ['Up to 5 sections', 'Responsive design', 'Contact form', 'SEO basics'], muted: [], cta: 'Get Started', featured: false },
      { plan: 'Business', name: 'Business site', desc: 'Multi-page website for your company or brand.', amount: '990', period: 'one-time', features: ['Up to 10 pages', 'CMS', 'Blog option', 'Email integration'], muted: ['Priority support'], cta: 'Most Popular', featured: true },
      { plan: 'Platform', name: 'Custom project', desc: 'Web application tailored to your needs.', amount: '1,990+', period: 'from', features: ['Custom development', 'API & integrations', 'Ongoing support'], muted: [], cta: 'Consultation', featured: false }
    ]
  };

  var processData = {
    bs: [
      { title: 'Razgovor', desc: 'Razgovaramo o vašem biznisu, ciljevima i budžetu. Odlučujemo zajedno šta vam treba.' },
      { title: 'Ponuda i plan', desc: 'Šaljemo jasnu ponudu i vremenski plan. Nema skrivenih troškova.' },
      { title: 'Dizajn i razvoj', desc: 'Gradimo vašu stranicu korak po korak, s mogućnošću pregleda i povratnih informacija.' },
      { title: 'Pokretanje', desc: 'Testiranje, objava i kratka obuka — vaš sajt je živ.' }
    ],
    en: [
      { title: 'Discovery call', desc: 'We talk about your business, goals and budget. We decide together what you need.' },
      { title: 'Quote & plan', desc: 'We send a clear quote and timeline. No hidden costs.' },
      { title: 'Design & build', desc: 'We build your site step by step, with check-ins and feedback.' },
      { title: 'Launch', desc: 'Testing, go-live and a short handover — your site is live.' }
    ]
  };

  var portfolioData = {
    bs: [
      { tags: ['Landing', 'Restoran'], title: 'Restoran Azra', desc: 'Elegantna landing stranica s jelovnikom i rezervacijom.', client: 'Azra', year: '2025' },
      { tags: ['Poslovna', 'Usluge'], title: 'Biroservis Kovač', desc: 'Višestranični sajt s uslugama i kontakt formom.', client: 'Kovač', year: '2025' }
    ],
    en: [
      { tags: ['Landing', 'Restaurant'], title: 'Restaurant Azra', desc: 'Elegant landing page with menu and reservation.', client: 'Azra', year: '2025' },
      { tags: ['Business', 'Services'], title: 'Biroservis Kovač', desc: 'Multi-page site with services and contact form.', client: 'Kovač', year: '2025' }
    ]
  };

  var whyCardsData = {
    bs: [
      { title: 'Fiksne cijene', desc: 'Znate tačno koliko košta. Nema skrivenih naknada.' },
      { title: 'Brza isporuka', desc: 'Prva verzija u danima, ne mjeseci.' },
      { title: 'Lokalna podrška', desc: 'Komunikacija na vašem jeziku, u vašem vremenu.' }
    ],
    en: [
      { title: 'Fixed prices', desc: 'You know exactly what it costs. No hidden fees.' },
      { title: 'Fast delivery', desc: 'First draft in days, not months.' },
      { title: 'Local support', desc: 'Communication in your language, on your time.' }
    ]
  };

  var comparisonData = {
    bs: {
      headers: ['', 'Webora', 'Tipična agencija'],
      rows: [
        ['Vrijeme isporuke', '2–4 sedmice', '2–6 mjeseci'],
        ['Cijena (poslovna stranica)', '€990', '€3.000+'],
        ['Direktan kontakt', 'Da', 'Rijetko']
      ]
    },
    en: {
      headers: ['', 'Webora', 'Typical agency'],
      rows: [
        ['Delivery time', '2–4 weeks', '2–6 months'],
        ['Price (business site)', '€990', '€3,000+'],
        ['Direct contact', 'Yes', 'Rarely']
      ]
    }
  };

  var testimonialsData = {
    bs: [
      { text: 'Konačno smo dobili stranicu koja izgleda profesionalno i radi kako treba — brzo i bez komplikacija.', name: 'A. K.', role: 'Restoran Azra' },
      { text: 'Transparentna ponuda, brza realizacija. Preporučujem Weboru za male firme koje žele ozbiljan web.', name: 'M. K.', role: 'Biroservis Kovač' },
      { text: 'Komunikacija na bosanskom, rezultat na nivou. Zadovoljni smo i planiramo dalju saradnju.', name: 'S. H.', role: 'Moda Bašćaršija' }
    ],
    en: [
      { text: 'We finally have a site that looks professional and works as it should — fast and without hassle.', name: 'A. K.', role: 'Restaurant Azra' },
      { text: 'Transparent quote, fast delivery. I recommend Webora for small businesses that want a serious web presence.', name: 'M. K.', role: 'Biroservis Kovač' },
      { text: 'Communication in our language, result at the highest level. We\'re happy and plan to continue working together.', name: 'S. H.', role: 'Moda Bašćaršija' }
    ]
  };

  var faqData = {
    bs: [
      { q: 'Koliko traje izrada?', a: 'Landing stranica obično 1–2 sedmice, poslovna stranica 2–4 sedmice. Custom projekti dogovaramo po potrebi.' },
      { q: 'Šta je uključeno u cijenu?', a: 'Dizajn, razvoj, jedan krug izmjena i osnovna obuka. Domen i hosting nisu uključeni, ali možemo ih predložiti.' },
      { q: 'Radite li na daljinu?', a: 'Da. Većina klijenata je u BiH; radimo preko poziva, emaila i linkova za pregled.' },
      { q: 'Mogu li kasnije dodati stranice?', a: 'Da. Nudimo pakete za ažuriranje i proširenje nakon pokretanja.' }
    ],
    en: [
      { q: 'How long does it take?', a: 'Landing page usually 1–2 weeks, business site 2–4 weeks. Custom projects we agree on a case-by-case basis.' },
      { q: 'What\'s included in the price?', a: 'Design, development, one round of revisions and basic handover. Domain and hosting are not included, but we can recommend options.' },
      { q: 'Do you work remotely?', a: 'Yes. Most clients are in BiH; we work via calls, email and review links.' },
      { q: 'Can I add more pages later?', a: 'Yes. We offer update and expansion packages after launch.' }
    ]
  };

  function renderMarquee() {
    var track = document.getElementById('marqueeTrack');
    if (!track) return;
    var items = marqueeItems[currentLang] || marqueeItems.bs;
    var html = '';
    for (var i = 0; i < 2; i++) {
      items.forEach(function (label) {
        html += '<span class="marquee-item">' + label + '</span>';
      });
    }
    track.innerHTML = html;
  }

  function renderServices() {
    var grid = document.getElementById('servicesGrid');
    if (!grid) return;
    var list = servicesData[currentLang] || servicesData.bs;
    var checkIcon = '<svg class="check-icon" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
    var html = '';
    list.forEach(function (s) {
      var features = (s.features || []).map(function (f) { return '<li>' + checkIcon + ' ' + f + '</li>'; }).join('');
      html += '<div class="service-card reveal"><div class="service-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div><h3 class="service-title">' + s.title + '</h3><p class="service-desc">' + s.desc + '</p><ul class="service-features">' + features + '</ul></div>';
    });
    grid.innerHTML = html;
  }

  function renderPricing() {
    var grid = document.getElementById('pricingGrid');
    if (!grid) return;
    var list = pricingData[currentLang] || pricingData.bs;
    var pfCheck = '<svg class="pf-check" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
    var html = '';
    list.forEach(function (p) {
      var badge = p.featured ? '<div class="pricing-badge">' + (currentLang === 'bs' ? 'Najpopularnije' : 'Most Popular') + '</div>' : '';
      var features = (p.features || []).map(function (f) { return '<li>' + pfCheck + ' ' + f + '</li>'; }).join('');
      var muted = (p.muted || []).map(function (f) { return '<li class="muted-feature">' + pfCheck + ' ' + f + '</li>'; }).join('');
      var ctaClass = p.featured ? 'primary' : 'outline';
      html += '<div class="pricing-card' + (p.featured ? ' featured' : '') + ' reveal">' + badge + '<div class="pricing-plan">' + p.plan + '</div><h3 class="pricing-name">' + p.name + '</h3><p class="pricing-desc">' + p.desc + '</p><div class="pricing-price"><div class="pricing-amount">' + p.amount + '<span>€</span></div><div class="pricing-period">' + p.period + '</div></div><ul class="pricing-features">' + features + muted + '</ul><a href="#cta" class="pricing-cta ' + ctaClass + '">' + p.cta + '</a></div>';
    });
    grid.innerHTML = html;
  }

  function renderProcess() {
    var container = document.getElementById('processSteps');
    if (!container) return;
    var list = processData[currentLang] || processData.bs;
    var html = '';
    list.forEach(function (step, i) {
      html += '<div class="process-step reveal"><div class="step-num">' + (i + 1) + '</div><h3 class="step-title">' + step.title + '</h3><p class="step-desc">' + step.desc + '</p></div>';
    });
    container.innerHTML = html;
  }

  function renderPortfolio() {
    var grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    var list = portfolioData[currentLang] || portfolioData.bs;
    var html = '';
    list.forEach(function (item) {
      var tags = (item.tags || []).map(function (tag) { return '<span class="portfolio-tag">' + tag + '</span>'; }).join('');
      html += '<article class="portfolio-item reveal"><div class="portfolio-image"><span class="portfolio-icon">◆</span></div><div class="portfolio-content"><div class="portfolio-tags">' + tags + '</div><h3 class="portfolio-title">' + item.title + '</h3><p class="portfolio-desc">' + item.desc + '</p><div class="portfolio-meta"><div class="portfolio-meta-item"><span class="portfolio-meta-label">' + (currentLang === 'bs' ? 'Klijent' : 'Client') + '</span><span class="portfolio-meta-value">' + item.client + '</span></div><div class="portfolio-meta-item"><span class="portfolio-meta-label">' + (currentLang === 'bs' ? 'Godina' : 'Year') + '</span><span class="portfolio-meta-value">' + item.year + '</span></div></div></div></article>';
    });
    grid.innerHTML = html;
  }

  function renderWhy() {
    var cardsEl = document.getElementById('whyCards');
    var tableEl = document.getElementById('comparisonTable');
    var cards = whyCardsData[currentLang] || whyCardsData.bs;
    var comp = comparisonData[currentLang] || comparisonData.bs;
    if (cardsEl) {
      var html = '';
      cards.forEach(function (c) {
        html += '<div class="why-card"><div class="why-card-icon"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div><div class="why-card-title">' + c.title + '</div><div class="why-card-desc">' + c.desc + '</div></div></div>';
      });
      cardsEl.innerHTML = html;
    }
    if (tableEl && comp.headers && comp.rows) {
      var th = comp.headers.map(function (h, i) {
        return '<div class="ct-col-label' + (i === 1 ? ' highlight' : '') + '">' + h + '</div>';
      }).join('');
      var trs = comp.rows.map(function (row) {
        return '<div class="ct-row"><div class="ct-feature">' + row[0] + '</div><div class="ct-val ct-check">' + row[1] + '</div><div class="ct-val ct-x">' + row[2] + '</div></div>';
      }).join('');
      tableEl.innerHTML = '<div class="ct-header">' + th + '</div>' + trs;
    }
  }

  function renderTestimonials() {
    var grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    var list = testimonialsData[currentLang] || testimonialsData.bs;
    var html = '';
    list.forEach(function (t) {
      html += '<div class="testimonial-card reveal"><div class="quote-icon">"</div><p class="testimonial-text">' + t.text + '</p><div class="stars">★★★★★</div><div class="testimonial-author"><div class="author-avatar">' + (t.name.charAt(0) || '') + '</div><div><div class="author-name">' + t.name + '</div><div class="author-role">' + t.role + '</div></div></div></div>';
    });
    grid.innerHTML = html;
  }

  function renderFaq() {
    var container = document.getElementById('faqItems');
    if (!container) return;
    var list = faqData[currentLang] || faqData.bs;
    var chevron = '<svg class="faq-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
    var html = '';
    list.forEach(function (item) {
      html += '<div class="faq-item"><div class="faq-question" role="button" tabindex="0" aria-expanded="false">' + item.q + chevron + '</div><div class="faq-answer">' + item.a + '</div></div>';
    });
    container.innerHTML = html;
    bindFaq();
  }

  function renderDynamicContent() {
    renderMarquee();
    renderServices();
    renderPricing();
    renderProcess();
    renderPortfolio();
    renderWhy();
    renderTestimonials();
    renderFaq();
  }

  function bindFaq() {
    document.querySelectorAll('.faq-question').forEach(function (q) {
      function toggle() {
        var item = q.closest('.faq-item');
        var wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function (open) {
          open.classList.remove('open');
          var qu = open.querySelector('.faq-question');
          if (qu) qu.setAttribute('aria-expanded', 'false');
        });
        if (!wasOpen) {
          item.classList.add('open');
          q.setAttribute('aria-expanded', 'true');
        }
      }
      q.onclick = toggle;
      q.onkeydown = function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      };
    });
  }

  function initNavScroll() {
    var nav = document.getElementById('navbar');
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  }

  function initMobileMenu() {
    var hamburger = document.getElementById('navHamburger');
    var menu = document.getElementById('mobileMenu');
    if (!hamburger || !menu) return;
    function closeMenu() {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    function openMenu() {
      hamburger.classList.add('active');
      menu.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    hamburger.addEventListener('click', function () {
      if (menu.classList.contains('active')) closeMenu();
      else openMenu();
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    menu.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', closeMenu);
    });
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (lang) switchLanguage(lang);
      });
    });
  }

  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var formStatus = document.getElementById('formStatus');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = currentLang === 'bs' ? 'Hvala! Javićemo vam se uskoro.' : 'Thank you! We\'ll get back to you soon.';
      if (formStatus) {
        formStatus.textContent = msg;
        formStatus.className = 'form-status form-status-success';
        formStatus.setAttribute('role', 'status');
        formStatus.style.display = 'block';
        form.reset();
      } else {
        alert(msg);
      }
    });
  }

  applyTranslations();
  renderDynamicContent();
  initNavScroll();
  initReveal();
  initMobileMenu();
  initLangSwitcher();
  initContactForm();
})();
