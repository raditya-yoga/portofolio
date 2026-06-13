import MouseSpotlight from './components/MouseSpotlight';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import CreativeRoots from './components/sections/CreativeRoots';
import FeaturedQuote from './components/sections/FeaturedQuote';
import LeadershipTimeline from './components/sections/LeadershipTimeline';
import Achievements from './components/sections/Achievements';
import ProjectsShowcase from './components/sections/ProjectsShowcase';
import SkillsDashboard from './components/sections/SkillsDashboard';
import CurrentFocus from './components/sections/CurrentFocus';
import BeyondTechnology from './components/sections/BeyondTechnology';
import Connect from './components/sections/Connect';
import './App.css';

function App() {
  return (
    <>
      {/* Background Interactive Mouse Spotlight (for desktop viewports) */}
      <MouseSpotlight />

      {/* Floating Glassmorphic Header */}
      <Header />

      {/* Main Storytelling Sections in Approved Sequence */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        {/* 1. Hero: Cinematic hook with core highlights */}
        <Hero />

        {/* 2. Creative Roots: Chronological path from Videography to Code */}
        <CreativeRoots />

        {/* 3. Featured Quote & Impact Snapshot: Transition text and metrics */}
        <FeaturedQuote />

        {/* 4. Leadership Timeline: Vertical evolution tracking and soft skills */}
        <LeadershipTimeline />

        {/* 5. Achievements Showcase: Spotlight-lit award gallery */}
        <Achievements />

        {/* 6. Projects Showcase: Product launch style case studies */}
        <ProjectsShowcase />

        {/* 7. Skills & Tools Dashboard: Technical stack chips */}
        <SkillsDashboard />

        {/* 8. Current Focus: Growth areas and active learning */}
        <CurrentFocus />

        {/* 9. Beyond Technology: Industrial design and hardware interests */}
        <BeyondTechnology />

        {/* 10. Let's Connect: High-end networking terminal */}
        <Connect />
      </main>
    </>
  );
}

export default App;
