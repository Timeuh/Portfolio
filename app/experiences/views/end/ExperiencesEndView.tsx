import Link from 'next/link';
import {vExpEnd_button, vExpEnd_end, vExpEnd_svg, vExpEnd_text} from './ExperienceEndView.styles';

export default function ExperiencesEndView() {
  return (
    <section className={vExpEnd_end}>
      <h2 className={vExpEnd_text}>
        Si vous êtes convaincu par ces expériences et que vous souhaitez travailler avec moi, ou que vous voulez en
        savoir plus, n’hésitez pas à me contacter !
      </h2>
      <Link href={'/contact'} className={`group ${vExpEnd_button}`}>
        <h3>Contacter</h3>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={vExpEnd_svg}
        >
          <path d='M12 5v14' />
          <path d='m19 12-7 7-7-7' />
        </svg>
      </Link>
    </section>
  );
}
