import './App.scss';
import Header from './layout/header/Header';

const pillars = [
  {
    number: '01',
    title: 'Carbon Thumbprint',
    description:
      'Helping people and organizations understand and reduce their everyday carbon impact.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=85',
    icon: 'leaf',
  },
  {
    number: '02',
    title: 'Waste Voltaic SDG Awareness',
    description:
      'Taking practical sustainability education to schools, offices, events and communities.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
    icon: 'book',
  },
  {
    number: '03',
    title: 'Mandir Sugamta',
    description:
      'Making places of worship more accessible, eco-friendly and self-sustaining.',
    image:
      'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=85',
    icon: 'temple',
  },
  {
    number: '04',
    title: 'WISE Wastepreneurs',
    description:
      'Building green livelihoods through entrepreneurship, circularity and local action.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
    icon: 'people',
  },
  {
    number: '05',
    title: 'WISE Talks',
    description:
      'Sharing fresh ideas and inspiring conversations for a cleaner, greener future.',
    image:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85',
    icon: 'mic',
  },
];

const moments = [
  {
    title: 'Learning for a greener tomorrow',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85',
    icon: 'book',
  },
  {
    title: 'Places of worship, in harmony with nature',
    image:
      'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=85',
    icon: 'temple',
  },
  {
    title: 'Small actions. Lasting change.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=85',
    icon: 'recycle',
  },
  {
    title: 'Growing a greener community',
    image:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85',
    icon: 'people',
  },
];

const projects = [
  {
    title: 'Net Zero Schools Initiative',
    description:
      'Helping schools make waste segregation and sustainable habits part of everyday learning.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85',
  },
  {
    title: 'Temple Sustainability Project',
    description:
      'Supporting cleaner, more accessible places of worship rooted in community care.',
    image:
      'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=85',
  },
  {
    title: 'Wastepreneur Training Cohort',
    description:
      'Equipping aspiring entrepreneurs to turn local waste challenges into green livelihoods.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85',
  },
];

const impactStats = [
  { value: '50+', label: 'Schools impacted', icon: 'school' },
  { value: '10,000+', label: 'Lives touched', icon: 'people' },
  { value: '25 tons', label: 'Plastic diverted', icon: 'recycle' },
  { value: '500+', label: 'Trees planted', icon: 'tree' },
];

function Icon({ name, className = '' }) {
  const paths = {
    leaf: <path d="M20.8 3.2C11.5 3.1 5 6.8 5 13.2a6.8 6.8 0 0 0 6.8 6.8c6.4 0 10.1-6.5 9-16.8ZM3 21l9-9" />,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z" /><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h8M8 10h6" /></>,
    temple: <><path d="m3 9 9-6 9 6M5 10h14M6 10v8m4-8v8m4-8v8m4-8v8M3 21h18M4 18h16" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.6V20" /></>,
    mic: <><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8" /></>,
    recycle: <><path d="m7 7 2-3h5l2 3M17 7h3l2 4-2 3M19 14l-2 4h-5l-2-3M7 17H4l-2-4 2-3M5 10l2-3m11 0 2 3m-11 8-3-1" /></>,
    school: <><path d="m3 9 9-6 9 6M5 10h14v10H5zM9 20v-6h6v6M3 10h18" /></>,
    tree: <><path d="M12 22v-8m0-1-5 2 2-5-4-1 5-7 2 4 2-4 5 7-4 1 2 5-5-2" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    heart: <path d="M20.8 8.7c0 5.4-8.8 11.3-8.8 11.3S3.2 14.1 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z" />,
    arrow: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.leaf}
    </svg>
  );
}

function SectionHeading({ eyebrow, children, centered = false }) {
  return (
    <div className={`section-heading${centered ? ' section-heading--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero__backdrop" />
          <div className="container hero__content">
            <span className="hero__tag">
              <Icon name="leaf" />
              Carbon net zero mission · India
            </span>
            <h1>
              Building a sustainable
              <br />
              future for <span>India.</span>
            </h1>
            <p>
              We turn everyday choices into lasting change — through education,
              community action and a more thoughtful relationship with waste.
            </p>
            <div className="hero__trust">
              <span><Icon name="shield" /> Registered non-profit</span>
              <span><Icon name="check" /> 80G tax exemption</span>
              <span><Icon name="leaf" /> Impact-driven</span>
            </div>
            <div className="hero__actions">
              <a className="button button--bright" href="#pillars">
                Explore our mission <Icon name="arrow" />
              </a>
              <a className="button button--glass" href="#donate">Support our mission</a>
            </div>
          </div>
          <a className="hero__scroll" href="#purpose" aria-label="Scroll to our purpose">
            <span />
          </a>
        </section>

        <section className="purpose section-pad" id="purpose">
          <div className="container">
            <SectionHeading eyebrow="Our purpose">A better future starts with us.</SectionHeading>
            <div className="purpose__grid">
              <article className="purpose-card purpose-card--vision">
                <div className="purpose-card__icon"><Icon name="leaf" /></div>
                <span className="purpose-card__label">Our vision</span>
                <h3>A world where living lightly comes naturally.</h3>
                <p>
                  A future where carbon net zero is woven into daily life —
                  across culture, education, workspaces and communities.
                </p>
              </article>
              <article className="purpose-card purpose-card--mission">
                <div className="purpose-card__heading">
                  <div className="purpose-card__icon"><Icon name="school" /></div>
                  <div>
                    <span className="purpose-card__label">Our mission</span>
                    <h3>Make sustainability something everyone can do.</h3>
                  </div>
                </div>
                <ul>
                  <li><Icon name="check" /> Promote practical net zero habits and systems.</li>
                  <li><Icon name="check" /> Reduce single-use and micro-plastic waste.</li>
                  <li><Icon name="check" /> Bring sustainable choices to schools and events.</li>
                  <li><Icon name="check" /> Help people build green, local livelihoods.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="journey" aria-label="Our approach">
          <div className="container journey__inner">
            <Icon name="leaf" />
            <p>Awareness <span>→</span> Action <span>→</span> Adoption <span>→</span> Impact</p>
            <span className="journey__caption">Turning awareness into everyday action.</span>
          </div>
        </section>

        <section className="pillars section-pad" id="pillars">
          <div className="container">
            <SectionHeading eyebrow="Where we work">Five pillars of impact</SectionHeading>
            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <article className="pillar-card" key={pillar.number}>
                  <div className="pillar-card__image">
                    <img src={pillar.image} alt="" loading="lazy" />
                    <span className="pillar-card__icon"><Icon name={pillar.icon} /></span>
                  </div>
                  <div className="pillar-card__body">
                    <span className="pillar-card__number">{pillar.number}</span>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                    <a href="#projects">Discover more <Icon name="arrow" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery section-pad" id="gallery">
          <div className="container">
            <SectionHeading eyebrow="The work, in moments">Change looks good on all of us.</SectionHeading>
            <div className="gallery-grid">
              {moments.map((moment, index) => (
                <article className={`gallery-card gallery-card--${index + 1}`} key={moment.title}>
                  <img src={moment.image} alt="" loading="lazy" />
                  <div className="gallery-card__caption">
                    <Icon name={moment.icon} />
                    <h3>{moment.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact" id="impact">
          <div className="container impact__inner">
            <div className="impact__intro">
              <SectionHeading eyebrow="The difference we make">Progress, made possible together.</SectionHeading>
              <p>
                Every workshop, partnership and small everyday choice adds up.
                Here is what our community has made possible so far.
              </p>
            </div>
            <div className="impact-grid">
              {impactStats.map((stat) => (
                <article className="impact-card" key={stat.label}>
                  <Icon name={stat.icon} />
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="container">
            <div className="section-topline">
              <SectionHeading eyebrow="From intention to action">Projects that move us forward.</SectionHeading>
              <a className="text-link" href="#contact">Partner with us <Icon name="arrow" /></a>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <img src={project.image} alt="" loading="lazy" />
                  <div className="project-card__body">
                    <span>Our initiative</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href="#contact" aria-label={`Learn more about ${project.title}`}>
                      Learn about this project <Icon name="arrow" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="donate" id="donate">
          <div className="container donate__grid">
            <div className="donate__copy">
              <span className="eyebrow eyebrow--light">Be part of the change</span>
              <h2>Your contribution creates a greener tomorrow.</h2>
              <p>
                Your support helps bring sustainability education to more
                children, communities and places that need it most.
              </p>
              <div className="donate__assurances">
                <span><Icon name="shield" /><b>80G</b>Tax exemption</span>
                <span><Icon name="leaf" /><b>100%</b>Thoughtful action</span>
                <span><Icon name="people" /><b>10,000+</b>Lives touched</span>
              </div>
              <div className="donate__actions">
                <a className="button button--bright" href="#contact">Donate now <Icon name="arrow" /></a>
                <a className="button button--outline-light" href="#contact">Become a volunteer</a>
              </div>
            </div>
            <div className="fund-card">
              <div className="fund-card__heading">
                <span className="eyebrow">Your support at work</span>
                <h3>Where your contribution goes</h3>
              </div>
              <div className="fund-card__content">
                <div className="donut-chart" role="img" aria-label="Fund allocation: 40% awareness, 25% accessibility, 20% education, 15% outreach">
                  <div><strong>100%</strong><span>for impact</span></div>
                </div>
                <ul>
                  <li><i className="fund-dot fund-dot--one" /><span>SDG awareness</span><b>40%</b></li>
                  <li><i className="fund-dot fund-dot--two" /><span>Accessible initiatives</span><b>25%</b></li>
                  <li><i className="fund-dot fund-dot--three" /><span>Education &amp; training</span><b>20%</b></li>
                  <li><i className="fund-dot fund-dot--four" /><span>Operations &amp; outreach</span><b>15%</b></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="partners section-pad" aria-label="Our values">
          <div className="container partners__inner">
            <div>
              <span className="eyebrow">Rooted in shared values</span>
              <h2>Working together for a living planet.</h2>
            </div>
            <div className="partners__values">
              <span><Icon name="leaf" /> Nature</span>
              <span><Icon name="school" /> Education</span>
              <span><Icon name="people" /> Community</span>
              <span><Icon name="recycle" /> Circularity</span>
              <span><Icon name="heart" /> Inclusion</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container">
          <div className="site-footer__main">
            <a className="footer-brand" href="#home" aria-label="Waste Voltaic Foundation home">
              {/* <span className="footer-brand__mark"><Icon name="leaf" /></span>
              <span>WASTE VOLTAIC<strong>FOUNDATION</strong></span> */}
              <img className="footer-brand__mark" src="https://www.wastevoltaic.org/assets/logo-DIDmVOhh.png" alt="Waste Voltaic Foundation logo" />
            </a>
            <p className="site-footer__mission">
              Making a sustainable future part of everyday life — together.
            </p>
            <div className="site-footer__contact">
              <span className="eyebrow eyebrow--light">Say hello</span>
              <a href="mailto:info@wastevoltaic.org">info@wastevoltaic.org</a>
              <a href="tel:+919909628028">+91 99096 28028</a>
              <span>Surat, Gujarat, India</span>
            </div>
          </div>
          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} Waste Voltaic Foundation</span>
            <span>For a cleaner, greener tomorrow.</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
