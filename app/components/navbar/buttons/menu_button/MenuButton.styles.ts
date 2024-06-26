import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';

const cMenuButton_menuButton = css({
  bgGradient: 'to-tr',
  borderRadius: 10,
  display: {
    xl: 'none',
  },
  gradientFrom: {
    base: 'p_purple.800',
    _dark: 'p_purple.200',
  },
  gradientTo: {
    base: 'p_blue.800',
    _dark: 'p_blue.200',
  },
  h: {
    base: 10,
    md: 14,
  },
  position: 'relative',
  transition: 'all 0.5s',
  w: {
    base: 10,
    md: 14,
  },
});

const cMenuButton_blueCircle = circle({
  bg: 'p_blue.main',
  position: 'absolute',
  right: 1,
  size: {
    base: '22px',
    md: 8,
  },
  top: 1,
});

const cMenuButton_purpleCircle = circle({
  bg: 'p_purple.main',
  bottom: 1,
  left: 1,
  position: 'absolute',
  size: {
    base: '22px',
    md: 8,
  },
});

const cMenuButton_menu = css({
  alignItems: 'center',
  bg: {
    base: 'p_purple.light/70',
    _dark: 'p_purple.dark/70',
  },
  border: '2px solid',
  borderColor: {
    base: 'p_blue.light/50',
    _dark: 'p_blue.dark/50',
  },
  borderRadius: 7,
  display: 'flex',
  flexDirection: 'column',
  gap: {
    base: 1,
    md: '6px',
  },
  h: {
    base: 7,
    md: 10,
  },
  justifyContent: 'center',
  position: 'absolute',
  right: {
    base: '6px',
    md: '8px',
  },
  top: {
    base: '6px',
    md: '8px',
  },
  transition: 'background-color 0.5s',
  w: {
    base: 7,
    md: 10,
  },
});

const cMenuButton_menuLine = css({
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 20,
  h: '3px',
  transition: 'background-color 0.5s',
  w: '70%',
});

const cMenuButton_getNavMenu = (isActive: boolean) => {
  return css({
    display: {
      xl: 'none',
    },
    h: 'fit-content',
    left: 0,
    position: 'absolute',
    top: {
      base: '6.5vh',
      md: '7vh',
    },
    transition: 'all 0.5s',
    translate: 'auto',
    translateX: isActive ? '0' : '-110%',
    w: 'fit-content',
  });
};

export {
  cMenuButton_menuButton,
  cMenuButton_blueCircle,
  cMenuButton_purpleCircle,
  cMenuButton_menu,
  cMenuButton_menuLine,
  cMenuButton_getNavMenu,
};
