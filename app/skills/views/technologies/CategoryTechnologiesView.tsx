'use client';

import useTechWithCategory from '@app/skills/hooks/useTechWithCategory';
import {TechCategory} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import TechnologiesDisplay from '../../components/technologies_section/TechnologiesDisplay';
import {vCatTechView_section} from '@app/skills/views/technologies/CategoryTechnologiesView.styles';

type Props = {
  category: TechCategory;
  reversed?: boolean;
};

export default function CategoryTechnologiesView({category, reversed = false}: Props) {
  const {filteredTechnologies, technologies} = useTechWithCategory(category);
  const {language} = useLanguage();

  const readyToDisplay = technologies.isSuccess && filteredTechnologies.length !== 0;

  return (
    <section id={`skills-${TechCategory[category].toLowerCase()}`} className={vCatTechView_section(reversed)}>
      {readyToDisplay ? (
        <TechnologiesDisplay technologies={filteredTechnologies} language={language} category={category} />
      ) : (
        <h1>loading</h1>
      )}
    </section>
  );
}
