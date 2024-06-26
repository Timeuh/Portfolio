'use client';

import useExperiences from '../../hooks/useExperiences';
import Image from 'next/image';
import {
  exp_vExp_bottomLooper,
  exp_vExp_experience,
  exp_vExp_looperBase,
  exp_vExp_otherBottomLooper,
  exp_vExp_otherTopLooper,
  exp_vExp_rainbowLooper,
  exp_vExp_toLeftBackground,
  exp_vExp_topLooper,
  exp_vExp_toRightBackground,
} from './ExperiencesView.styles';
import ExperienceFactory from '../../components/experience_factory/ExperienceFactory';
import ExperiencesSidebar from '../../components/sidebar/sidebar/ExperiencesSidebar';
import ExperiencesNavMenu from '../../components/navmenu/navmenu/ExperiencesNavMenu';

export default function ExperiencesView() {
  const experiences = useExperiences();

  if (!experiences.isSuccess) {
    return (
      <section id={'experiences-display'}>
        <div className={`${exp_vExp_experience} ${exp_vExp_toLeftBackground}`}>
          <Image
            src={'/images/portfolio/experiences/looper_blue.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={`${exp_vExp_looperBase} ${exp_vExp_topLooper}`}
          />
          <Image
            src={'/images/portfolio/experiences/looper_purple.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={`${exp_vExp_looperBase} ${exp_vExp_bottomLooper}`}
          />
          <ExperienceFactory isLoading />
        </div>
        <div className={`${exp_vExp_experience} ${exp_vExp_toRightBackground}`}>
          <Image
            src={'/images/portfolio/experiences/looper_rainbow.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={exp_vExp_rainbowLooper}
          />
          <ExperienceFactory isLoading />
        </div>
        <div className={`${exp_vExp_experience} ${exp_vExp_toLeftBackground}`}>
          <Image
            src={'/images/portfolio/experiences/looper_blue.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={`${exp_vExp_looperBase} ${exp_vExp_otherTopLooper}`}
          />
          <Image
            src={'/images/portfolio/experiences/looper_purple.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={`${exp_vExp_looperBase} ${exp_vExp_otherBottomLooper}`}
          />
          <ExperienceFactory isLoading />
        </div>
      </section>
    );
  }

  return (
    <section>
      <ExperiencesSidebar data={experiences.data} />
      <ExperiencesNavMenu data={experiences.data} />
      <section id={'experiences-display'}>
        <div
          id={`${experiences.data.items[0].company}-${experiences.data.items[0].id}`}
          className={`${exp_vExp_experience} ${exp_vExp_toLeftBackground}`}
        >
          <Image
            src={'/images/portfolio/experiences/looper_blue.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={`${exp_vExp_looperBase} ${exp_vExp_topLooper}`}
          />
          <Image
            src={'/images/portfolio/experiences/looper_purple.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={`${exp_vExp_looperBase} ${exp_vExp_bottomLooper}`}
          />
          <ExperienceFactory experience={experiences.data.items[0]} />
        </div>
        <div
          id={`${experiences.data.items[1].company}-${experiences.data.items[1].id}`}
          className={`${exp_vExp_experience} ${exp_vExp_toRightBackground}`}
        >
          <Image
            src={'/images/portfolio/experiences/looper_rainbow.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={exp_vExp_rainbowLooper}
          />
          <ExperienceFactory experience={experiences.data.items[1]} />
        </div>
        <div
          id={`${experiences.data.items[2].company}-${experiences.data.items[2].id}`}
          className={`${exp_vExp_experience} ${exp_vExp_toLeftBackground}`}
        >
          <Image
            src={'/images/portfolio/experiences/looper_blue.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={`${exp_vExp_looperBase} ${exp_vExp_otherTopLooper}`}
          />
          <Image
            src={'/images/portfolio/experiences/looper_purple.png'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={`${exp_vExp_looperBase} ${exp_vExp_otherBottomLooper}`}
          />
          <ExperienceFactory experience={experiences.data.items[2]} />
        </div>
      </section>
    </section>
  );
}
