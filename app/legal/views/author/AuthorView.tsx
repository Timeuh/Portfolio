'use client';

import {vLegal_bigHeading, vLegal_firstSection, vLegal_link} from '../GlobalView.styles';
import authorTexts from '../../texts/authorTexts';
import Link from 'next/link';
import useLanguage from '@hooks/useLanguage';

export default function AuthorView() {
  const {language} = useLanguage();

  return (
    <section id={'author'} className={vLegal_firstSection}>
      <h1 className={vLegal_bigHeading}>{authorTexts.title[language]}</h1>
      <p>{authorTexts.firstParagraph[language]}</p>
      <p>
        {authorTexts.secondParagraphFirstPart[language]}{' '}
        <Link href={'https://lucide.dev'} className={vLegal_link}>
          Lucide Icons
        </Link>
        {authorTexts.secondParagraphSecondPart[language]}
      </p>
      <Link
        id={'photos'}
        href={'https://unsplash.com/fr/photos/two-black-computer-monitors-on-black-table-p-xSl33Wxyc'}
        className={vLegal_link}
      >
        {authorTexts.farzadLink[language]}
      </Link>
      <Link
        href={'https://unsplash.com/fr/photos/personnes-assises-sur-une-chaise-devant-un-ordinateur-YRMWVcdyhmI'}
        className={vLegal_link}
      >
        {authorTexts.domFouLink[language]}
      </Link>
      <Link href={'https://unsplash.com/fr/photos/codes-de-programmation-GI1hwOGqGtE'} className={vLegal_link}>
        {authorTexts.brankoLink[language]}
      </Link>
      <Link
        href={'https://unsplash.com/fr/photos/personne-tenant-un-crayon-pres-dun-ordinateur-portable-5fNmWej4tAA'}
        className={vLegal_link}
      >
        {authorTexts.scottLink[language]}
      </Link>
      <Link
        href={'https://unsplash.com/fr/photos/personne-debout-pres-de-lescalier-MYbhN8KaaEc'}
        className={vLegal_link}
      >
        {authorTexts.huntersLink[language]}
      </Link>
      <Link
        href={'https://unsplash.com/fr/photos/personne-tenant-liphone-6-en-or-rose-15q2ZCDbQFU'}
        className={vLegal_link}
      >
        {authorTexts.miaBakerLink[language]}
      </Link>
      <p>{authorTexts.lastParagraph[language]}</p>
    </section>
  );
}
