'use client';

import Image from 'next/image';
import {
  vProjLanding_container,
  vProjLanding_decoration,
  vProjLanding_image,
  vProjLanding_landing,
  vProjLanding_link,
  vProjLanding_linkSvg,
  vProjLanding_paragraph,
  vProjLanding_textContainer,
  vProjLanding_title,
} from './ProjectsLandingView.styles';
import useLanguage from '@hooks/useLanguage';
import Link from 'next/link';
import landingTexts from '../../texts/landingTexts';

export default function ProjectsLandingView() {
  const {language} = useLanguage();

  return (
    <section id={'projects-landing'} className={vProjLanding_landing}>
      <h1 className={vProjLanding_title}>{landingTexts.title[language]}</h1>
      <div className={vProjLanding_container}>
        <Image
          src={'/images/portfolio/projects/projects.jpg'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={vProjLanding_image}
        />
        <div className={vProjLanding_textContainer}>
          <p className={vProjLanding_paragraph}>{landingTexts.paragraph[language]}</p>
          <Link href={'#projects-display'} className={`group ${vProjLanding_link}`}>
            <h2>{landingTexts.link[language]}</h2>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={vProjLanding_linkSvg}
            >
              <path d='M12 5v14' />
              <path d='m19 12-7 7-7-7' />
            </svg>
          </Link>
          <div className={vProjLanding_decoration} />
        </div>
      </div>
    </section>
  );
}
