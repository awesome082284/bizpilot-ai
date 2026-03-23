'use client'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', business: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const faqs = [
    { q: "How long does it take to set up?", a: "Most systems are built and launched within 3-5 business days. Complex projects may take 1-2 weeks." },
    { q: "Do I need any technical knowledge?", a: "Absolutely not. We handle everything — building, setup, and training. You just tell us what you need." },
    { q: "What if I'm not happy with the result?", a: "We offer unlimited revisions until you're 100% satisfied. If it's not right, we fix it — no extra charge." },
    { q: "Can I cancel anytime?", a: "Yes. No contracts, no lock-in. Cancel your monthly plan anytime with zero penalties." },
    { q: "Do you work with my type of business?", a: "We work with restaurants, salons, clinics, real estate, cleaning services, tutoring centers, and more. If you serve customers, we can help." },
  ]

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <span className="logo-icon">⚡</span> BizPilot AI
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="nav-cta">Free Consultation</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🚀 Now Accepting New Clients for Q2 2026</div>
          <h1>
            Your Business on <span className="highlight">Autopilot</span>.
            <br />Built in Days, Not Months.
          </h1>
          <p>
            We build custom AI systems that handle your bookings, customer messages,
            reviews, and admin work — so you can focus on growing your business.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="hero-cta">
              Get Your Free AI Audit &rarr;
            </a>
            <a href="#results" className="hero-secondary">
              See Results ↓
            </a>
          </div>
          <div className="hero-sub">
            ✓ Free consultation &nbsp;&nbsp; ✓ No tech skills needed &nbsp;&nbsp; ✓ Cancel anytime
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="proof-bar">
        <div className="proof-inner">
          <div className="proof-item">
            <div className="proof-number">500+</div>
            <div className="proof-label">Businesses Automated</div>
          </div>
          <div className="proof-divider"></div>
          <div className="proof-item">
            <div className="proof-number">12,000+</div>
            <div className="proof-label">Hours Saved Monthly</div>
          </div>
          <div className="proof-divider"></div>
          <div className="proof-item">
            <div className="proof-number">98%</div>
            <div className="proof-label">Client Satisfaction</div>
          </div>
          <div className="proof-divider"></div>
          <div className="proof-item">
            <div className="proof-number">3.2x</div>
            <div className="proof-label">Average ROI</div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem">
        <div className="section-label">THE PROBLEM</div>
        <h2>You Didn&apos;t Start a Business<br />to Do <span style={{color: '#dc2626'}}>Admin Work</span></h2>
        <p>Every hour you spend on repetitive tasks is an hour you&apos;re not growing your business.</p>
        <div className="pain-points">
          <div className="pain-card">
            <div className="pain-stat">73%</div>
            <h3>of small business owners work 10+ hours on admin per week</h3>
            <p>That&apos;s 520 hours a year — gone. What could you do with that time?</p>
          </div>
          <div className="pain-card">
            <div className="pain-stat">60%</div>
            <h3>of customers leave after one bad experience</h3>
            <p>Slow replies, missed calls, no follow-ups — they go to your competitor.</p>
          </div>
          <div className="pain-card">
            <div className="pain-stat">$50K+</div>
            <h3>lost revenue per year from missed leads</h3>
            <p>Every unanswered inquiry is money walking out the door.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-label">SOLUTIONS</div>
        <h2>Everything Your Business Needs.<br /><span className="highlight-dark">Built. Managed. Optimized.</span></h2>
        <p>We don&apos;t just build it and leave. We manage and optimize your systems every month.</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">📅</div>
            <h3>Smart Booking System</h3>
            <p>Customers book online 24/7. Automatic reminders reduce no-shows by 80%.</p>
            <span className="tag">Restaurants · Salons · Clinics</span>
          </div>
          <div className="service-card">
            <div className="icon">💬</div>
            <h3>AI Customer Response</h3>
            <p>Instant replies to inquiries, review responses, and follow-up messages. Never miss a lead.</p>
            <span className="tag">All Businesses</span>
          </div>
          <div className="service-card">
            <div className="icon">📊</div>
            <h3>Business Dashboard</h3>
            <p>See your revenue, customers, and performance at a glance. Make data-driven decisions.</p>
            <span className="tag">All Businesses</span>
          </div>
          <div className="service-card">
            <div className="icon">⭐</div>
            <h3>Review Booster</h3>
            <p>Automatically ask happy customers for reviews. Build your 5-star reputation on autopilot.</p>
            <span className="tag">Local Businesses</span>
          </div>
          <div className="service-card">
            <div className="icon">📱</div>
            <h3>Custom Website</h3>
            <p>Professional, fast, mobile-friendly website that converts visitors into paying customers.</p>
            <span className="tag">All Businesses</span>
          </div>
          <div className="service-card">
            <div className="icon">🔄</div>
            <h3>Workflow Automation</h3>
            <p>Connect your tools. Automate invoices, reports, emails, and data entry.</p>
            <span className="tag">All Businesses</span>
          </div>
        </div>
      </section>

      {/* RESULTS / BEFORE-AFTER */}
      <section className="results" id="results">
        <div className="section-label">RESULTS</div>
        <h2>Before &amp; After <span className="highlight-dark">BizPilot AI</span></h2>
        <div className="ba-grid">
          <div className="ba-card before">
            <div className="ba-label">❌ BEFORE</div>
            <ul>
              <li>Manually scheduling every appointment</li>
              <li>Missing customer calls and messages</li>
              <li>Zero online reviews this month</li>
              <li>No idea which marketing works</li>
              <li>Working 60+ hours a week</li>
              <li>Losing customers to competitors</li>
            </ul>
          </div>
          <div className="ba-card after">
            <div className="ba-label">✅ AFTER</div>
            <ul>
              <li>Customers book themselves 24/7</li>
              <li>AI responds in under 60 seconds</li>
              <li>15+ new 5-star reviews per month</li>
              <li>Dashboard shows what&apos;s working</li>
              <li>Freed up 20+ hours per week</li>
              <li>Revenue up 40% in 90 days</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-label">TESTIMONIALS</div>
        <h2>Trusted by Local Business Owners</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>&ldquo;BizPilot automated our entire booking system. We went from 5 no-shows a week to almost zero. It paid for itself in the first month.&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar">MR</div>
              <div>
                <strong>Maria Rodriguez</strong>
                <span>Owner, Bella Nail Spa</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>&ldquo;I was spending 3 hours a day answering the same customer questions. Now AI handles it all and I focus on cooking. Game changer.&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar">JK</div>
              <div>
                <strong>James Kim</strong>
                <span>Owner, Seoul Kitchen</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>&ldquo;Our Google reviews went from 12 to 85 in three months. New customers keep saying they found us through reviews. Incredible ROI.&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar">SP</div>
              <div>
                <strong>Sarah Patel</strong>
                <span>Owner, Bright Smile Dental</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="section-label">HOW IT WORKS</div>
        <h2>Up and Running in <span className="highlight-dark">3 Simple Steps</span></h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Free AI Audit</h3>
            <p>We analyze your business and show you exactly where AI can save you time and money. 15-minute call.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>We Build It</h3>
            <p>Our team builds your custom AI system. Tailored to your business. Ready in 3-5 days.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>You Grow</h3>
            <p>Launch, automate, and watch your business grow while we manage everything.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="section-label">PRICING</div>
        <h2>Simple, Transparent Pricing</h2>
        <p className="pricing-sub">No hidden fees. No contracts. Cancel anytime.</p>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Starter</h3>
            <p className="price-desc">Perfect for getting started</p>
            <div className="price">$199<span>/mo</span></div>
            <ul>
              <li>1 AI automation system</li>
              <li>Custom website</li>
              <li>Email support</li>
              <li>Monthly optimization</li>
              <li>Performance reports</li>
            </ul>
            <a href="#contact" className="price-btn">Start Free Trial</a>
          </div>
          <div className="price-card featured">
            <h3>Growth</h3>
            <p className="price-desc">Most popular for growing businesses</p>
            <div className="price">$399<span>/mo</span></div>
            <ul>
              <li>3 AI automation systems</li>
              <li>Custom website + dashboard</li>
              <li>Priority support</li>
              <li>Weekly optimization</li>
              <li>Review management</li>
              <li>Dedicated account manager</li>
            </ul>
            <a href="#contact" className="price-btn">Start Free Trial</a>
          </div>
          <div className="price-card">
            <h3>Enterprise</h3>
            <p className="price-desc">Full automation suite</p>
            <div className="price">Custom</div>
            <ul>
              <li>Unlimited AI systems</li>
              <li>Full business automation</li>
              <li>24/7 dedicated support</li>
              <li>Custom integrations</li>
              <li>Strategy consulting</li>
              <li>White-label options</li>
            </ul>
            <a href="#contact" className="price-btn">Contact Us</a>
          </div>
        </div>
        <div className="guarantee">
          <span>🛡️</span> 30-Day Money-Back Guarantee — If you&apos;re not satisfied, we&apos;ll refund every penny. No questions asked.
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section-label">FAQ</div>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-q">
                <span>{faq.q}</span>
                <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
              </div>
              {openFaq === i && <div className="faq-a">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-text">
            <h2>Get Your Free AI Audit</h2>
            <p>Tell us about your business and we&apos;ll show you exactly how AI can save you 20+ hours a week.</p>
            <div className="contact-benefits">
              <div>✓ Free 15-minute consultation</div>
              <div>✓ Custom automation roadmap</div>
              <div>✓ ROI estimate for your business</div>
              <div>✓ No commitment required</div>
            </div>
          </div>
          <div className="contact-form-wrap">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Business Name & Type (e.g., Joe's Pizza - Restaurant)"
                  required
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                />
                <textarea
                  placeholder="What's your biggest time-waster right now? (optional)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <button type="submit" className="form-btn">
                  Get My Free AI Audit &rarr;
                </button>
                <div className="form-note">🔒 Your info is safe. We never share your data.</div>
              </form>
            ) : (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h3>You&apos;re In!</h3>
                <p>We&apos;ll reach out within 24 hours to schedule your free AI audit. Check your inbox!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Every Day Without AI is a Day Your<br />Competitor Gets Ahead.</h2>
        <a href="#contact" className="cta-btn">
          Start Automating Today &rarr;
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="nav-logo" style={{justifyContent: 'flex-start'}}>
              <span className="logo-icon">⚡</span> BizPilot AI
            </div>
            <p>AI automation for small businesses.<br />Built in Texas. Serving everywhere.</p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 BizPilot AI. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
