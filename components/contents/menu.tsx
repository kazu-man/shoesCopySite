import { Dispatch, SetStateAction } from 'react';
import MenuLine, { MenuLineProps } from './MenuLine';

type menuProps = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function menu({ setMenuOpen }: menuProps) {
  const firstLine: MenuLineProps = {
    baseStringList: 'CM996GR2',
    imagePath: '/rotationShoes.png',
    direction: 'left',
    jumpTo: 'firstContent',
    menuClose: setMenuOpen,
  };
  const secondLine: MenuLineProps = {
    baseStringList: 'WL996HL2',
    imagePath: '/nav_gr2.webp',
    direction: 'right',
    jumpTo: 'secondContent',
    menuClose: setMenuOpen,
  };
  const thirdLine: MenuLineProps = {
    baseStringList: 'WL996HN2',
    imagePath: '/nav_hn2.webp',
    direction: 'left',
    jumpTo: 'thirdContent',
    menuClose: setMenuOpen,
  };
  const forthLine: MenuLineProps = {
    baseStringList: 'WL996HR2',
    imagePath: '/rotationShoes.png',
    direction: 'right',
    jumpTo: 'forthContent',
    menuClose: setMenuOpen,
  };
  return (
    <div className='sticky top-0 h-screen w-screen bg-[#28282a] pt-20'>
      <MenuLine {...firstLine} />
      <MenuLine {...secondLine} />
      <MenuLine {...thirdLine} />
      <MenuLine {...forthLine} />
    </div>
  );
}
