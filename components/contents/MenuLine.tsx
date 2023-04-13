import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import React from 'react';
import Image from 'next/image';
import menuStyle from '../../styles/Menu.module.css';
import { Link as Scroll } from 'react-scroll';

export type MenuLineProps = {
  baseStringList: string;
  imagePath: string;
  direction: 'left' | 'right';
  jumpTo: string;
  menuClose: Dispatch<SetStateAction<boolean>>;
};

function MenuLine(data: MenuLineProps) {
  const areaRef = useRef<HTMLDivElement>(null);
  const slideClassName = 'type-' + data.baseStringList;

  //不要なレンダリングを避けるためメモ化
  const shoesContents = React.useMemo(() => {
    const windowWidth = window.innerWidth;
    const repeatTimes = windowWidth / data.baseStringList.length;
    const slides: ReactNode[] = [];

    for (let i = 0; i < repeatTimes; i++) {
      slides.push(
        <Scroll to={data.jumpTo} smooth={true}>
          <div
            className={`${slideClassName} ${menuStyle.menuLine} flex h-auto w-auto flex-nowrap items-center`}
            key={slideClassName + i}
            onClick={() => data.menuClose(false)}
          >
            <div>{data.baseStringList}</div>
            <div className='relative mx-2 h-20 w-20'>
              <Image
                src={data.imagePath}
                fill={true}
                alt={'right logo'}
                objectFit='cover'
              />
            </div>
          </div>
        </Scroll>
      );
    }
    return slides;
  }, [data.baseStringList]);

  useEffect(() => {
    const contentsWidth =
      document.getElementsByClassName(slideClassName)[0].clientWidth;

    const slides = gsap.utils.toArray(`.${slideClassName}`);
    const timeline = gsap.timeline();

    if (data.direction === 'right') {
      timeline.set(slides, {
        x: `-${contentsWidth}`,
      });
    }

    timeline.to(slides, {
      x: `${data.direction === 'left' ? '-=' : '+='}${contentsWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x: string) => parseFloat(x) % contentsWidth),
      },
      ease: 'none',
      repeat: -1,
      duration: 8,
    });
  }, [shoesContents]);

  return React.useMemo(
    () => (
      <div
        className={`${menuStyle.menuTextArea} flex h-1/4 cursor-pointer items-center whitespace-nowrap`}
        ref={areaRef}
      >
        {shoesContents}
      </div>
    ),
    [shoesContents]
  );
}

export default React.memo(MenuLine);
