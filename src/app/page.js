'use client';

import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        } else {
          // Fallback
          const input = document.createElement('input');
          input.value = window.location.href;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          document.body.removeChild(input);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        }
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Ticker */}
      <aside className="ticker-strip" aria-label="Ticker announcement">
        <div className="ticker-track">
          <div className="ticker-item">
            NIKAIRIEL <span>•</span> A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM <span>•</span> A WARRANTY CLAIM IS DECIDED ON RECORDS <span>•</span> KEEP YOURS, AND ASK FOR THEIRS IN WRITING <span>•</span> IF IT IS NOT IN WRITING, IT DID NOT HAPPEN <span>•</span> 15 STEPS IN THE CHECKLIST <span>•</span> 4 RECORDS TO KEEP BEFORE ANYTHING GOES WRONG <span>•</span>
          </div>
          <div className="ticker-item" aria-hidden="true">
            NIKAIRIEL <span>•</span> A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM <span>•</span> A WARRANTY CLAIM IS DECIDED ON RECORDS <span>•</span> KEEP YOURS, AND ASK FOR THEIRS IN WRITING <span>•</span> IF IT IS NOT IN WRITING, IT DID NOT HAPPEN <span>•</span> 15 STEPS IN THE CHECKLIST <span>•</span> 4 RECORDS TO KEEP BEFORE ANYTHING GOES WRONG <span>•</span>
          </div>
        </div>
      </aside>

      {/* Header */}
      <header className="site-header">
        <div className="shell header-container">
          <a href="#" className="logo-group">
            <div className="logo-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <span className="logo-text">NikAiriel</span>
          </a>

          {/* Nav links: hidden on small screens */}
          <nav className="nav-links">
            <a href="#the-15-steps" className="nav-link">The 15 steps</a>
            <a href="#key-numbers" className="nav-link">Key numbers</a>
          </nav>

          <a href="/checklist.txt" download="checklist.txt" className="btn-dark" style={{ flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section" style={{ borderBottom: '1px solid var(--outline)' }}>
        <div className="shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="pill-label">
                <span className="pill-dot"></span>
                <span>WARRANTY CLAIM CHECKLIST</span>
              </div>
              <h1 className="headline-display">NikAiriel</h1>
              <p className="lead-p">
                A free checklist for anyone about to file a warranty claim.
              </p>
              <p className="body-p" style={{ maxWidth: '58ch' }}>
                A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
              </p>

              <div className="hero-actions">
                <a href="#the-15-steps" className="btn-primary">
                  <span>Explore The Checklist</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="/checklist.txt" download="checklist.txt" className="btn-ghost">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download (.txt)</span>
                </a>
                <button onClick={handlePrint} className="btn-ghost" type="button" title="Print checklist">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  <span>Print</span>
                </button>
              </div>
            </div>

            {/* Right Headline Card */}
            <div className="headline-card">
              <div className="pill-label pill-label-dark">
                <span className="pill-dot"></span>
                <span>THE IDEA IN ONE LINE</span>
              </div>
              <div className="headline-card-text">
                &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
              </div>
              <div className="headline-card-rule">
                <span className="headline-card-rule-label">CORE RULE</span>
                <span className="headline-card-rule-val">
                  if it is not in writing, it did not happen.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-muted" style={{ borderBottom: '1px solid var(--outline)' }}>
        <div className="shell">
          <div className="section-header-stack">
            <div className="pill-label">
              <span className="pill-dot"></span>
              <span>AUDIENCE</span>
            </div>
            <h2 className="headline-lg">WHO THIS IS FOR</h2>
          </div>

          <div className="card" style={{ maxWidth: '900px', borderLeft: '4px solid var(--primary)' }}>
            <p className="lead-p" style={{ color: 'var(--on-surface-strong)', fontWeight: 500, margin: 0 }}>
              Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
            </p>
          </div>
        </div>
      </section>

      {/* KEY NUMBERS (Hidden note heading as instructed) */}
      <section id="key-numbers" className="section" style={{ borderBottom: '1px solid var(--outline)' }}>
        <div className="shell">
          <div className="section-header-stack" style={{ marginBottom: '36px' }}>
            <div className="pill-label">
              <span className="pill-dot"></span>
              <span>OVERVIEW</span>
            </div>
            <h2 className="headline-lg">At a glance</h2>
          </div>

          <div className="stat-container">
            <div className="stat-grid">
              <div className="stat-cell">
                <div className="stat-num">15</div>
                <div className="stat-caption">steps in the checklist.</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">4</div>
                <div className="stat-caption">records to keep before anything goes wrong.</div>
              </div>
              <div className="stat-cell stat-cell-hot">
                <div className="stat-num">1</div>
                <div className="stat-caption">rule: if it is not in writing, it did not happen.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE 15 STEPS CHECKLIST */}
      <main id="the-15-steps" className="section">
        <div className="shell">
          <div className="section-header-stack">
            <div className="pill-label">
              <span className="pill-dot"></span>
              <span>THE 15 STEPS</span>
            </div>
            <h2 className="headline-lg">The Complete Checklist</h2>
            <p className="lead-p">
              Follow each step sequentially to keep clean documentation throughout your claim.
            </p>
          </div>

          {/* Group 1: BEFORE ANYTHING GOES WRONG */}
          <div className="checklist-group">
            <h3 className="checklist-group-title">
              <span className="pill-label" style={{ fontSize: '11px', padding: '4px 10px' }}>PHASE 1</span>
              <span>BEFORE ANYTHING GOES WRONG</span>
            </h3>
            <div className="checklist-items">
              <div className="step-card">
                <div className="step-badge">1</div>
                <div className="step-content">
                  <div className="step-title">Keep the invoice.</div>
                  <div className="step-desc">Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.</div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-badge">2</div>
                <div className="step-content">
                  <div className="step-title">Register the product.</div>
                  <div className="step-desc">Many brands ask you to register on their website or app; some add extra warranty when you do.</div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-badge">3</div>
                <div className="step-content">
                  <div className="step-title">Read the warranty card once.</div>
                  <div className="step-desc">Note how long it lasts, what it covers, and what it excludes.</div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-badge">4</div>
                <div className="step-content">
                  <div className="step-title">Record the condition.</div>
                  <div className="step-desc">Take a few dated photos of the product once it is installed or unboxed.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Group 2: WHEN THE FAULT APPEARS */}
          <div className="checklist-group">
            <h3 className="checklist-group-title">
              <span className="pill-label" style={{ fontSize: '11px', padding: '4px 10px' }}>PHASE 2</span>
              <span>WHEN THE FAULT APPEARS</span>
            </h3>
            <div className="checklist-items">
              <div className="step-card">
                <div className="step-badge">5</div>
                <div className="step-content">
                  <div className="step-title">Record the fault.</div>
                  <div className="step-desc">Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.</div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-badge">6</div>
                <div className="step-content">
                  <div className="step-title">Raise the complaint in writing.</div>
                  <div className="step-desc">Use email, the brand&apos;s website or its app, not only a phone call, so there is a record.</div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-badge">7</div>
                <div className="step-content">
                  <div className="step-title">Note every reference number.</div>
                  <div className="step-desc">Write down the complaint or ticket number, the date and the name of anyone you speak to.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Group 3: WHEN A TECHNICIAN VISITS */}
          <div className="checklist-group">
            <h3 className="checklist-group-title">
              <span className="pill-label" style={{ fontSize: '11px', padding: '4px 10px' }}>PHASE 3</span>
              <span>WHEN A TECHNICIAN VISITS</span>
            </h3>
            <div className="checklist-items">
              <div className="step-card">
                <div className="step-badge">8</div>
                <div className="step-content">
                  <div className="step-title">Ask for the job sheet.</div>
                  <div className="step-desc">Ask the technician for a copy of the visit report or job sheet before they leave.</div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-badge">9</div>
                <div className="step-content">
                  <div className="step-title">Ask what was tested.</div>
                  <div className="step-desc">Ask which test or instrument was used to reach the diagnosis.</div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-badge">10</div>
                <div className="step-content">
                  <div className="step-title">Take your own photos.</div>
                  <div className="step-desc">Photograph the product and anything the technician points to, during the visit.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Group 4: IF THE CLAIM IS REFUSED (Dark Section styling from DESIGN.md) */}
          <div className="checklist-group">
            <div className="dark-panel">
              <div className="section-header-stack" style={{ marginBottom: '32px' }}>
                <div className="pill-label pill-label-dark">
                  <span className="pill-dot"></span>
                  <span>PHASE 4</span>
                </div>
                <h3 className="headline-lg" style={{ color: '#FFFFFF', marginTop: '14px', marginBottom: 0 }}>
                  IF THE CLAIM IS REFUSED
                </h3>
              </div>

              <div className="checklist-items">
                <div className="step-card">
                  <div className="step-badge">11</div>
                  <div className="step-content">
                    <div className="step-title">Ask for the reason in writing.</div>
                    <div className="step-desc">Request a written explanation that names the exact cause and the evidence for it.</div>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-badge">12</div>
                  <div className="step-content">
                    <div className="step-title">Ask for the technical report.</div>
                    <div className="step-desc">If the refusal rests on an inspection, ask for that inspection report.</div>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-badge">13</div>
                  <div className="step-content">
                    <div className="step-title">Escalate inside the company.</div>
                    <div className="step-desc">Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.</div>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-badge">14</div>
                  <div className="step-content">
                    <div className="step-title">Keep it factual.</div>
                    <div className="step-desc">Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.</div>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-badge">15</div>
                  <div className="step-content">
                    <div className="step-title">Know your consumer helpline.</div>
                    <div className="step-desc">Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CALL TO ACTION (Hidden note heading as instructed) */}
      <section className="section section-muted" style={{ borderTop: '1px solid var(--outline)', borderBottom: '1px solid var(--outline)' }}>
        <div className="shell">
          <div className="cta-grid">
            {/* CTA 1 */}
            <div className="cta-card">
              <div>
                <div className="pill-label" style={{ marginBottom: '16px' }}>
                  <span className="pill-dot"></span>
                  <span>SAVE RECORDS</span>
                </div>
                <div className="cta-card-lead">
                  Download the checklist and keep it with your invoices.
                </div>
              </div>
              <div>
                <a href="/checklist.txt" download="checklist.txt" className="btn-primary" style={{ width: 'fit-content' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download checklist (.txt)</span>
                </a>
              </div>
            </div>

            {/* CTA 2 */}
            <div className="cta-card">
              <div>
                <div className="pill-label" style={{ marginBottom: '16px' }}>
                  <span className="pill-dot"></span>
                  <span>HELP OTHERS</span>
                </div>
                <div className="cta-card-lead">
                  Share it with a friend who just bought something expensive.
                </div>
              </div>
              <div>
                <button onClick={handleShare} type="button" className="btn-ghost" style={{ width: 'fit-content' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                  <span>{copied ? 'Link Copied to Clipboard!' : 'Share checklist link'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (Hidden note heading as instructed) */}
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-grid">
            <div>
              <div className="logo-group" style={{ marginBottom: '14px' }}>
                <div className="logo-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="logo-text" style={{ fontSize: '18px' }}>NikAiriel</span>
              </div>
              <p className="footer-note-text">
                NikAiriel is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
              </p>
            </div>

            <div>
              <div className="footer-col-title">NAVIGATION</div>
              <ul className="footer-list">
                <li><a href="#the-15-steps" className="footer-link">The 15 steps</a></li>
                <li><a href="#key-numbers" className="footer-link">Key numbers</a></li>
                <li><a href="#the-15-steps" className="footer-link">Before anything goes wrong</a></li>
                <li><a href="#the-15-steps" className="footer-link">If the claim is refused</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">RESOURCES</div>
              <ul className="footer-list">
                <li><a href="/checklist.txt" download="checklist.txt" className="footer-link">Download (.txt)</a></li>
                <li><button onClick={handleShare} type="button" className="footer-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>Copy page link</button></li>
                <li><button onClick={handlePrint} type="button" className="footer-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>Print friendly version</button></li>
                <li><a href="#" className="footer-link">Back to top ↑</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-legal-line">
            <span>NikAiriel — Consumer Warranty Guide</span>
            <span>All wording sourced from records</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
