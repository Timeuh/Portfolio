'use client';

import Image from 'next/image';
import useLanguage from '@hooks/useLanguage';
import {
  vLanding_circle,
  vLanding_circleTitle,
  vLanding_image,
  vLanding_landing,
  vLanding_name,
  vLanding_nameContainer,
} from './LandingView.styles';
import roleTitle from '@texts/portfolio/landing/roleTitle';

export default function LandingView() {
  const {language} = useLanguage();

  return (
    <section id={'landing'} className={vLanding_landing}>
      <Image
        src={'/images/portfolio/landing/profile.jpg'}
        alt={'me'}
        width={0}
        height={0}
        sizes={'100vw'}
        className={vLanding_image}
      />
      <div className={vLanding_nameContainer}>
        <h1 className={vLanding_name}>Timothée Brindejonc</h1>
      </div>
      <div className={vLanding_circle}>
        <h2 className={vLanding_circleTitle}>{roleTitle[language]}</h2>
      </div>
    </section>
  );
}
