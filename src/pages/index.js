import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const modules = [
  {
    title: 'Module 1: Foundations',
    description: 'Discover the 12 unicorn habits and why vulnerability is a leadership superpower in technology.',
    link: '/training/module-1-foundations/overview',
    duration: '90 min',
  },
  {
    title: 'Module 2: Self-Awareness',
    description: 'Map your strengths, confront your armor, and develop emotional intelligence for the tech sector.',
    link: '/training/module-2-self-awareness/overview',
    duration: '90 min',
  },
  {
    title: 'Module 3: Team Building',
    description: 'Hire for unicorn traits, build psychological safety, and establish trust using the BRAVING framework.',
    link: '/training/module-3-team-building/overview',
    duration: '90 min',
  },
  {
    title: 'Module 4: Courageous Leadership',
    description: 'Navigate hard conversations, lead through transformation, and create space for innovation and failure.',
    link: '/training/module-4-courageous-leadership/overview',
    duration: '90 min',
  },
  {
    title: 'Module 5: Culture & Impact',
    description: 'Operationalize your values, practice servant leadership, and scale unicorn culture across your org.',
    link: '/training/module-5-culture/overview',
    duration: '90 min',
  },
  {
    title: 'Module 6: Integration',
    description: 'Write your leadership manifesto, build a 90-day action plan, and establish peer accountability.',
    link: '/training/module-6-integration/overview',
    duration: '90 min',
  },
];

function ModuleCard({title, description, link, duration}) {
  return (
    <div className="module-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link className="button button--primary button--sm" to={link}>
          Start Module
        </Link>
        <span style={{fontSize: '0.85rem', opacity: 0.7}}>{duration}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Leadership training for IT leaders combining Be The Unicorn and Dare To Lead">
      <header className="training-hero">
        <img
          src="img/DaringUni.png"
          alt="The Daring Unicorn Logo"
          style={{width: '160px', marginBottom: '1rem'}}
        />
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
        <div>
          <Link
            className="button button--lg"
            style={{backgroundColor: 'white', color: '#6C3FA0', fontWeight: 'bold', marginRight: '1rem'}}
            to="/training/intro">
            Start the Training
          </Link>
          <Link
            className="button button--outline button--lg"
            style={{borderColor: 'white', color: 'white'}}
            to="/training/resources/facilitator-guide">
            Facilitator Guide
          </Link>
        </div>
      </header>
      <main style={{padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{textAlign: 'center', marginBottom: '0.5rem'}}>Training Modules</h2>
        <p style={{textAlign: 'center', marginBottom: '2rem', opacity: 0.7}}>
          6 modules | 9 hours total | Designed for IT directors, VPs, and CIOs
        </p>
        <div className="module-grid">
          {modules.map((mod, idx) => (
            <ModuleCard key={idx} {...mod} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
