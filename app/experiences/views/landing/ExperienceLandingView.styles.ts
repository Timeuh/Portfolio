import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const exp_vExpLanding_experienceLanding = vstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  gap: {
    base: 8,
    md: 12,
    xl: 16,
  },
  h: 'screen',
  justifyContent: 'center',
  position: 'relative',
  transition: 'all 0.5s',
  zIndex: 3,
});

const exp_vExpLanding_container = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    base: 'column',
    xl: 'row',
  },
  gap: {
    base: 8,
    md: 12,
  },
  justifyContent: 'center',
  px: {
    base: 3,
    md: 8,
    xl: 12,
  },
});

const exp_vExpLanding_textContainer = vstack({
  alignItems: {
    base: 'center',
    xl: 'end',
  },
  gap: {
    base: 8,
    md: 12,
  },
  justifyContent: 'center',
  px: {
    base: 3,
    md: 8,
  },
});

const exp_vExpLanding_image: string = css({
  borderRadius: '2xl',
  h: {
    base: '250px',
    md: '350px',
    xl: '500px',
  },
  objectFit: 'cover',
  shadow: {
    base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
    _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
  },
  w: {
    base: '80%',
    md: '50%',
    xl: '70%',
  },
});

const exp_vExpLanding_title = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '4xl',
    md: '6xl',
    xl: '7xl',
  },
  fontWeight: 'bold',
});

const exp_vExpLanding_paragraph = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontSize: {
    base: '1.4em',
    md: '4xl',
    xl: '5xl',
  },
  textAlign: {
    base: 'center',
    xl: 'right',
  },
});

const exp_vExpLanding_svg = css({
  h: {
    base: 7,
    md: 12,
  },
  rotate: {
    base: '-90deg',
    _groupHover: '0deg',
  },
  stroke: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  strokeWidth: 4,
  transition: 'all 0.3s ease-in-out',
  w: {
    base: 7,
    md: 12,
  },
});

const exp_vExpLanding_button = hstack({
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'xl',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontSize: {
    base: '2xl',
    md: '4xl',
  },
  fontWeight: 'semibold',
  gap: {
    base: 2,
    md: 4,
  },
  justifyContent: 'center',
  p: {
    base: 2,
    md: 4,
  },
  shadow: {
    _hover: '0 5px 8px 2px token(colors.p_blue.main)',
  },
  w: {
    base: '4/5',
    md: '1/2',
  },
  transition: 'all 0.3s ease-in-out',
});

export {
  exp_vExpLanding_experienceLanding,
  exp_vExpLanding_textContainer,
  exp_vExpLanding_image,
  exp_vExpLanding_title,
  exp_vExpLanding_paragraph,
  exp_vExpLanding_svg,
  exp_vExpLanding_button,
  exp_vExpLanding_container,
};
