import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import headerDotStyle from '../styles/HeaderBtn.module.css';
import headerDotWhiteModeStyle from '../styles/HeaderBtnWhiteMode.module.css';

type headerProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function header({ menuOpen, setMenuOpen }: headerProps) {
  const leftLogo = !menuOpen ? '/logo_996_b.svg' : '/logo_996_b_white.svg';
  const rightLogo = !menuOpen ? '/logo_nb_b.svg' : '/logo_nb_b_white.svg';
  const dotBtn = !menuOpen
    ? headerDotStyle.headerDot
    : headerDotWhiteModeStyle.headerDot;
  return (
    <div className={`${menuOpen && 'text-white'}`}>
      <header className='fixed z-50 mt-4 flex h-10 w-full justify-between px-4'>
        <div className='relative h-full w-52'>
          <Image src={leftLogo} fill={true} alt={'left logo'} />
        </div>
        <div className='flex'>
          <div className='relative mx-3 h-full w-12'>
            <Image src={rightLogo} fill={true} alt={'right logo'} />
          </div>
          <div className={dotBtn} onClick={() => setMenuOpen(!menuOpen)}></div>
        </div>
      </header>
    </div>
  );
}
