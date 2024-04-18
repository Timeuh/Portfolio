import SkillsLandingView from './views/landing/SkillsLandingView';
import CategoryTechnologiesView from './views/technologies/CategoryTechnologiesView';
import {TechCategory} from '@appTypes/portfolio';
import Sidebar from './components/sidebar/sidebar/Sidebar';
import NavMenu from './components/navmenu/navmenu/NavMenu';

export default function Page() {
  return (
    <main>
      <SkillsLandingView />
      <section id={'skills-display'}>
        <Sidebar />
        <NavMenu />
        <CategoryTechnologiesView category={TechCategory.TOOLS} />
        <CategoryTechnologiesView category={TechCategory.MASTERED} reversed />
        <CategoryTechnologiesView category={TechCategory.LEARNING} />
        <CategoryTechnologiesView category={TechCategory.PLANNED} reversed />
      </section>
    </main>
  );
}
