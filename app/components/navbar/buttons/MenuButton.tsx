import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';

export default function MenuButton() {
  return (
    <div
      className={css({
        height: 10,
        width: 10,
        position: 'relative',
        borderRadius: 10,
        bgGradient: 'to-tr',
        gradientFrom: 'p_purple.800',
        gradientTo: 'p_blue.800',
        transition: 'all 0.5s',
        _dark: {
          gradientFrom: 'p_purple.200',
          gradientTo: 'p_blue.200',
        },
      })}
    >
      <div className={circle({size: '22px', bgColor: 'p_purple.main', position: 'absolute', bottom: 1, left: 1})}></div>
      <div className={circle({size: '22px', bgColor: 'p_blue.main', position: 'absolute', top: 1, right: 1})}></div>
      <div
        className={css({
          bgColor: 'p_purple.light/70',
          position: 'absolute',
          top: '6px',
          right: '6px',
          height: 7,
          width: 7,
          borderRadius: 7,
          borderColor: 'p_blue.light/50',
          border: '2px solid',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          transition: 'background-color 0.5s',
          _dark: {
            bgColor: 'p_purple.dark/70',
            borderColor: 'p_blue.dark/50',
          },
        })}
      >
        <div
          className={css({
            width: '70%',
            height: '3px',
            bgColor: 'p_purple.dark',
            borderRadius: 20,
            transition: 'background-color 0.5s',
            _dark: {
              bgColor: 'p_purple.light',
            },
          })}
        ></div>
        <div
          className={css({
            width: '70%',
            height: '3px',
            bgColor: 'p_purple.dark',
            borderRadius: 20,
            transition: 'background-color 0.5s',
            _dark: {
              bgColor: 'p_purple.light',
            },
          })}
        ></div>
        <div
          className={css({
            width: '70%',
            height: '3px',
            bgColor: 'p_purple.dark',
            borderRadius: 20,
            transition: 'background-color 0.5s',
            _dark: {
              bgColor: 'p_purple.light',
            },
          })}
        ></div>
      </div>
    </div>
  );
}
