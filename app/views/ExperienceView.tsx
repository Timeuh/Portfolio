'use client';

import Carousel from '@components/carousel/Carousel';
import useLanguage from '@hooks/useLanguage';
import explanation from '@texts/portfolio/experience/explanation';
import {
  explanationStyle,
  explanationTitleStyle,
  firstSpanStyle,
  secondSpanStyle,
  sectionStyle,
} from '@styles/views/ExperienceView.styles';
import ExperienceCards from '@components/experience_cards/ExperienceCards';

export default function ExperienceView() {
  const {langage} = useLanguage();

  return (
    <section id={'experience'} className={sectionStyle}>
      <div className={explanationStyle}>
        <h2 className={explanationTitleStyle}>{explanation.title[langage]}</h2>
        <p>
          {explanation.content.firstPart[langage]}
          <span className={firstSpanStyle}>{explanation.content.firstSpan[langage]}</span>
          {explanation.content.secondPart[langage]}
          <span className={secondSpanStyle}>{explanation.content.secondSpan[langage]}</span>
          {explanation.content.lastPart[langage]}
        </p>
      </div>
      <Carousel />
      <ExperienceCards />
    </section>
  );
}
