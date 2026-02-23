'use client';

import { useEffect, useState } from 'react';

const MARQUEE_ITEMS = [
  'Landing Pages', 'Business Websites', 'Web Platforms', 'SEO Optimization',
  'Responsive Design', 'Fast Delivery', 'Affordable Pricing', 'Sarajevo & Beyond',
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            <svg className="nav-logo-icon" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="11.5" stroke="#C8A84B" strokeWidth="1" />
              <circle cx="14" cy="14" r="6.5" stroke="#C8A84B" strokeWidth="1" strokeDasharray="2.5 2.5" />
              <path d="M8 14 L11.5 9.5 L14 14 L16.5 9.5 L20 14" stroke="#C8A84B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <em>Web</em>ora
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
            <li><a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a></li>
            <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
          </ul>
          <a href="#cta" className={`nav-cta ${mobileMenuOpen ? 'mobile-open' : ''}`} onClick={() => setMobileMenuOpen(false)}>Start a Project</a>
          <div className="nav-hamburger" onClick={() => setMobileMenuOpen((o) => !o)} aria-label="Menu">
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="hero-grid-lines" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              Web Agency · Sarajevo, BA
            </div>
            <h1 className="hero-headline">
              Your business<br />deserves a <em>presence</em><br />worth remembering.
            </h1>
            <p className="hero-sub">
              Professional, affordable web solutions for small and medium businesses — clean design, fast delivery, and results you can measure.
            </p>
            <div className="hero-actions">
              <a href="#pricing" className="btn-primary">See Packages & Pricing</a>
              <a href="#services" className="btn-ghost">Explore Services <span className="arrow">→</span></a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">48<span>h</span></div>
                <div className="stat-label">First Draft Delivery</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100<span>%</span></div>
                <div className="stat-label">Custom Designs</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3<span>×</span></div>
                <div className="stat-label">Faster Than Agencies</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hc-top">
                <div className="hc-icon">
                  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                </div>
                <div className="hc-status">Live</div>
              </div>
              <div className="hc-title">Restoran Azra — Landing Page</div>
              <div className="hc-sub">Delivered in 5 days · €490</div>
              <div className="hc-bar"><div className="hc-bar-fill" style={{ width: '100%' }} /></div>
            </div>
            <div className="hero-card">
              <div className="hc-top">
                <div className="hc-icon">
                  <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                </div>
                <div className="hc-status">Live</div>
              </div>
              <div className="hc-title">Biroservis Kovač — Business Site</div>
              <div className="hc-sub">Delivered in 10 days · €990</div>
              <div className="hc-bar"><div className="hc-bar-fill" style={{ width: '100%' }} /></div>
            </div>
            <div className="hero-card">
              <div className="hc-top">
                <div className="hc-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <div className="hc-status" style={{ color: '#E2C97E' }}>In Progress</div>
              </div>
              <div className="hc-title">Moda Bašćaršija — Web Platform</div>
              <div className="hc-sub">In progress · €1,990</div>
              <div className="hc-bar"><div className="hc-bar-fill" style={{ width: '62%' }} /></div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-section">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="marquee-item">{item}</div>
          ))}
        </div>
      </div>

      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-left reveal">
              <div className="section-badge">About Webora</div>
              <h2 className="about-headline">
                Built for the businesses<br />that <em>build</em> this city.
              </h2>
              <p className="about-body">
                Most web agencies in the region price out the businesses that need them most. We built Webora to close that gap — delivering world-class digital presence to Sarajevo&apos;s restaurants, service providers, boutiques, and professionals, without the agency price tag.
              </p>
              <p className="about-body">
                We&apos;re not a template shop. Every project starts with understanding your business, your customers, and your goals — and ends with a website that actually works for you.
              </p>
              <a href="#cta" className="btn-primary" style={{ marginTop: 12 }}>Let&apos;s Talk</a>
            </div>
            <div className="about-right reveal reveal-delay-2">
              <div className="about-pillars">
                {[
                  { num: '01', title: 'Locally rooted, globally designed', desc: 'We understand the Bosnian market and speak the language of your customers — while building to international standards.' },
                  { num: '02', title: 'Speed without sacrifice', desc: "Weeks, not months. We move fast because your business can't wait — and we never cut corners to get there." },
                  { num: '03', title: 'Results, not just aesthetics', desc: 'Beautiful is the baseline. What matters is whether your site converts visitors into customers, calls, or bookings.' },
                  { num: '04', title: 'Long-term partnership', desc: "After launch, we're still here — for updates, growth, and whatever comes next. You're not a ticket number." },
                ].map((p) => (
                  <div key={p.num} className="pillar">
                    <div className="pillar-number">{p.num}</div>
                    <div className="pillar-title">{p.title}</div>
                    <div className="pillar-desc">{p.desc}</div>
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
            <div className="section-badge">What We Build</div>
            <h2 className="section-headline">Every business has a<br /><em>different</em> starting point.</h2>
            <p className="section-sub">We offer three core service areas, each designed around where you are and where you want to go.</p>
          </div>
          <div className="services-grid">
            {[
              { title: 'Landing Pages', desc: "A single, focused page designed to convert — whether you're launching a product, promoting a service, or building your first web presence.", features: ['1 fully custom-designed page', 'Mobile-first responsive design', 'Contact form + Google Maps', 'Basic SEO setup & fast loading', 'Delivered in 5–7 days'] },
              { title: 'Business Websites', desc: 'A full multi-page website that tells your complete story — built to rank, convert, and grow with your business over time.', features: ['5–7 pages (Home, About, Services…)', 'CMS integration (edit your own content)', 'On-page SEO + analytics setup', '30 days post-launch support', 'Delivered in 10–14 days'] },
              { title: 'Web Platforms', desc: 'Custom platforms for businesses ready to scale — booking systems, e-commerce, client portals, and more. Built to handle complexity without losing usability.', features: ['Custom functionality & integrations', 'E-commerce or booking systems', 'Advanced analytics & performance', '90 days post-launch support', 'Scoped timeline — typically 3–6 weeks'] },
            ].map((s, i) => (
              <div key={i} className={`service-card reveal reveal-delay-${i + 1}`}>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                </div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <ul className="service-features">
                  {s.features.map((f, j) => (
                    <li key={j}>
                      <svg className="check-icon" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#C8A84B" strokeWidth="1" /><path d="M5 8l2 2 4-4" stroke="#C8A84B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge">Pricing</div>
            <h2 className="section-headline">Transparent pricing.<br /><em>No surprises.</em></h2>
            <p className="section-sub">Every package is a fixed price. You know exactly what you&apos;re paying before we start.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card reveal reveal-delay-1">
              <div className="pricing-plan">Starter</div>
              <div className="pricing-name">Spark</div>
              <div className="pricing-desc">Your first step online. A clean, professional landing page that makes the right impression.</div>
              <div className="pricing-price">
                <div className="pricing-amount"><span>€</span>490</div>
                <div className="pricing-period">One-time · Fixed price</div>
              </div>
              <ul className="pricing-features">
                {['1-page custom design', 'Mobile-responsive', 'Contact form + maps integration', 'Basic SEO + fast hosting setup', 'Delivered in 5–7 business days', '14 days post-launch support'].map((f, i) => (
                  <li key={i}><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg> {f}</li>
                ))}
                <li className="muted-feature"><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg> CMS (content editing)</li>
                <li className="muted-feature"><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg> Multi-page structure</li>
              </ul>
              <a href="#cta" className="pricing-cta outline">Get Started</a>
            </div>
            <div className="pricing-card featured reveal reveal-delay-2">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-plan">Growth</div>
              <div className="pricing-name">Presence</div>
              <div className="pricing-desc">The complete package for businesses ready to make a serious online impression and attract more customers.</div>
              <div className="pricing-price">
                <div className="pricing-amount"><span>€</span>990</div>
                <div className="pricing-period">One-time · Fixed price</div>
              </div>
              <ul className="pricing-features">
                {['5–7 custom-designed pages', 'CMS — edit your own content', 'Full on-page SEO optimization', 'Google Analytics + Search Console', 'Blog / news section', 'Delivered in 10–14 business days', '30 days post-launch support', 'Free domain + 1st year hosting guide'].map((f, i) => (
                  <li key={i}><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg> {f}</li>
                ))}
              </ul>
              <a href="#cta" className="pricing-cta primary">Start This Package</a>
            </div>
            <div className="pricing-card reveal reveal-delay-3">
              <div className="pricing-plan">Scale</div>
              <div className="pricing-name">Platform</div>
              <div className="pricing-desc">For businesses that need more than a website — custom features, e-commerce, bookings, and integrations.</div>
              <div className="pricing-price">
                <div className="pricing-amount"><span>€</span>1,990</div>
                <div className="pricing-period">Starting price · Scoped per project</div>
              </div>
              <ul className="pricing-features">
                {['Everything in Presence', 'E-commerce or booking system', 'Custom integrations (CRM, payments…)', 'User accounts & dashboards', 'Performance & conversion audit', 'Dedicated project manager', '90 days post-launch support', 'Priority response SLA'].map((f, i) => (
                  <li key={i}><svg className="pf-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg> {f}</li>
                ))}
              </ul>
              <a href="#cta" className="pricing-cta outline">Request a Quote</a>
            </div>
          </div>
          <p className="pricing-note reveal">
            All prices in EUR. Not sure which package fits? <strong>Book a free 20-minute consultation</strong> and we&apos;ll tell you exactly what you need — no upsell, no pressure.
          </p>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge">How We Work</div>
            <h2 className="section-headline">Simple process.<br /><em>Exceptional</em> results.</h2>
            <p className="section-sub">Four clear steps from first conversation to live website — no mystery, no delays, no surprises.</p>
          </div>
          <div className="process-steps">
            {[
              { num: '01', title: 'Discovery Call', desc: 'We spend 20–30 minutes understanding your business, goals, and audience. Free, no commitment. This shapes everything.' },
              { num: '02', title: 'Design & Proposal', desc: 'Within 48 hours, you receive a detailed proposal and a first design direction for your approval — before we build anything.' },
              { num: '03', title: 'Build & Refine', desc: "We develop your site with two rounds of revisions included. You're involved, but we handle all the heavy lifting." },
              { num: '04', title: 'Launch & Support', desc: 'We launch your site, walk you through it, and stay available for questions, updates, and growth — long after go-live.' },
            ].map((step, i) => (
              <div key={step.num} className={`process-step reveal reveal-delay-${i + 1}`}>
                <div className="step-num">{step.num}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container">
          <div className="why-grid">
            <div className="why-left reveal">
              <div className="section-badge">Why Webora</div>
              <h2 className="why-headline">
                The web agency<br />Sarajevo&apos;s businesses<br /><em>actually need.</em>
              </h2>
              <p className="why-body">
                Big agencies charge €5,000+ and take months. Freelancers are hit-or-miss and go quiet. Template builders leave you with something that looks like everyone else. Webora is different: fast, affordable, professional, and local.
              </p>
              <div className="why-cards">
                {[
                  { title: 'Delivered in days, not months', desc: "Most projects are live within 2 weeks. Your business can't afford to wait 3 months for a website." },
                  { title: 'Real design, not templates', desc: "Every site is built from scratch to fit your brand. You won't look like your competitors — or like anyone else." },
                  { title: 'A partner, not a vendor', desc: "We take pride in every site we launch. When you grow, we grow — and we're here for the long run." },
                ].map((c, i) => (
                  <div key={i} className="why-card">
                    <div className="why-card-icon">
                      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    </div>
                    <div>
                      <div className="why-card-title">{c.title}</div>
                      <div className="why-card-desc">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-right reveal reveal-delay-2">
              <div className="comparison-table">
                <div className="ct-header">
                  <div className="ct-col-label" />
                  <div className="ct-col-label">Others</div>
                  <div className="ct-col-label highlight">Webora</div>
                </div>
                {[
                  ['Delivery time', '2–4 months', '5–14 days'],
                  ['Fixed pricing', '✗', '✓'],
                  ['Custom design', 'Template-based', 'Always custom'],
                  ['Post-launch support', 'Extra cost', 'Included'],
                  ['Local knowledge', '✗', '✓'],
                  ['Starting price', '€2,000+', '€490'],
                  ['Free consultation', '✗', '✓'],
                ].map((row, i) => (
                  <div key={i} className="ct-row">
                    <div className="ct-feature">{row[0]}</div>
                    <div className="ct-val ct-x">{row[1]}</div>
                    <div className="ct-val ct-check">{row[2]}</div>
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
            <div className="section-badge">Client Stories</div>
            <h2 className="section-headline">What our clients<br /><em>say.</em></h2>
          </div>
          <div className="testimonials-grid">
            {[
              { quote: "We had been putting off building a website for three years because every quote we got was out of reach. Webora delivered something beautiful in less than two weeks — and within our budget. Our phone has not stopped ringing since.", name: 'Amira Hadžić', role: 'Owner, Salon Azura · Sarajevo', initial: 'A' },
              { quote: "As a small accounting firm, we needed something professional that gave clients confidence. Webora understood exactly what we needed — the result looks like it cost ten times what we paid.", name: 'Miroslav Kovačević', role: 'Partner, KM Računovodstvo · Sarajevo', initial: 'M' },
              { quote: "The process was incredibly smooth. They asked great questions upfront, gave us a realistic timeline, and delivered on every promise. Six months later, 40% of our new bookings come through the website.", name: 'Damir Brkić', role: 'Director, Servis Brkić · Mostar', initial: 'D' },
            ].map((t, i) => (
              <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                <div className="stars"><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span></div>
                <div className="quote-icon">&quot;</div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initial}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-left reveal">
              <div className="section-badge">FAQ</div>
              <h2 className="faq-headline">Questions<br />we get <em>often.</em></h2>
              <p className="faq-desc">Can&apos;t find what you&apos;re looking for? Send us a message — we usually reply within a few hours.</p>
              <a href="#cta" className="btn-ghost">Ask us anything <span className="arrow">→</span></a>
            </div>
            <div className="faq-items reveal reveal-delay-2">
              {[
                { q: 'Do I need to provide content (text, photos)?', a: "We can work with whatever you have. If you have text and photos ready, great — we'll use them. If not, we can help with copy suggestions and source professional stock imagery that fits your brand. We've never let a project stall because a client didn't have content ready." },
                { q: 'Will I be able to update the website myself?', a: "Yes — all Business and Platform packages include a CMS (content management system), so you can update text, images, pricing, or blog posts without touching any code. We also provide a short walkthrough video after launch so you know exactly how." },
                { q: 'What if I need changes after launch?', a: 'Every package includes post-launch support (14 to 90 days depending on the package). After that period, we offer a simple maintenance plan starting at €49/month, or you can reach out for one-off changes at an hourly rate. You\'ll never be left alone with a website you can\'t update.' },
                { q: 'How do payments work?', a: 'We split payments 50/50: 50% before we start (to schedule your project), and the remaining 50% when you approve the final site — before we hand over the files and push it live. We accept bank transfer, PayPal, and local payment options.' },
                { q: 'Do you work with businesses outside Sarajevo?', a: "Absolutely. While we're rooted in Sarajevo, we work remotely with clients across Bosnia and Herzegovina, the wider region, and internationally. Our entire process works perfectly via email and video calls — distance has never been a problem." },
                { q: 'What platform do you build on?', a: "It depends on your needs. For most business websites, we use modern, fast CMS platforms. For custom platforms, we build on reliable, scalable web technologies. We always recommend the best fit for your specific situation — not just what's easiest for us." },
              ].map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => toggleFaq(i)}>
                  <div className="faq-question">
                    {faq.q}
                    <svg className="faq-chevron" viewBox="0 0 24 24" fill="none"><polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <div className="faq-answer">{faq.a}</div>
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
            <div className="section-badge" style={{ justifyContent: 'center', marginBottom: 24 }}>Let&apos;s Build Something</div>
            <h2 className="cta-headline">
              Ready to build your<br /><em>digital presence?</em>
            </h2>
            <p className="cta-sub">Start with a free 20-minute call. We&apos;ll tell you exactly what you need, what it will cost, and how fast we can deliver.</p>
            <div className="cta-actions">
              <a href="mailto:hello@webora.ba" className="btn-primary">Book a Free Call</a>
              <a href="mailto:hello@webora.ba" className="btn-ghost">Send Us a Message <span className="arrow">→</span></a>
            </div>
            <div className="cta-contact-row">
              <a href="mailto:hello@webora.ba" className="cta-contact-item">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                hello@webora.ba
              </a>
              <a href="tel:+38761000000" className="cta-contact-item">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.06 2.22 2 2 0 012 0h3a2 2 0 012 1.72c.13 1 .39 1.97.75 2.9a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.18-1.18a2 2 0 012.11-.45c.93.36 1.9.62 2.9.75A2 2 0 0122 16.92z" /></svg>
                +387 61 000 000
              </a>
              <div className="cta-contact-item">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Sarajevo, Bosnia & Herzegovina
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-logo"><em>Web</em>ora</div>
              <p className="footer-brand-desc">Professional web solutions for small and medium businesses in Sarajevo and beyond. Built with care. Delivered with precision.</p>
              <div className="footer-social">
                <a href="#" className="social-link" title="Instagram">
                  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="#" className="social-link" title="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                </a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Services</div>
              <ul className="footer-links">
                <li><a href="#services">Landing Pages</a></li>
                <li><a href="#services">Business Websites</a></li>
                <li><a href="#services">Web Platforms</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links">
                <li><a href="#about">About Webora</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#testimonials">Client Stories</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href="mailto:hello@webora.ba">hello@webora.ba</a></li>
                <li><a href="tel:+38761000000">+387 61 000 000</a></li>
                <li><a href="#cta">Book a Free Call</a></li>
                <li><a href="#cta">Start a Project</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2025 Webora. All rights reserved. · <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a></div>
            <div className="footer-tagline">Your vision. Our craft. The web, done right.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
