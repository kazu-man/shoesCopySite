import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

export default function shoeMove() {
  gsap.registerPlugin(ScrollTrigger);
  const area = useRef<HTMLInputElement>(null);
  const rotationTarget = useRef(null);
  const CONTENT_NUM = 10;
  const baseContent = (i: number) => {
    return (
      <div className='slide relative inline-block h-5/6 w-1/2' key={'shoe' + i}>
        <Image
          ref={rotationTarget}
          src='/shoes1.jpg'
          fill={true}
          alt={'right logo'}
          className='w-auto'
          objectFit='contain'
        />
      </div>
    );
  };
  const shoesContents: ReactNode[] = [];

  for (let i = 0; i < CONTENT_NUM; i++) {
    shoesContents.push(baseContent(i));
  }

  useEffect(() => {
    logoAppearAnimation();
  }, []);

  const logoAppearAnimation = () => {
    const slides = gsap.utils.toArray('.slide');
    const client_w = area.current!.getBoundingClientRect().width;
    console.log(client_w);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: area.current,
        start: 'top bottom',
        end: 'max',
        scrub: true,
      },
    });

    tl.to(slides, {
      x: '-=' + client_w * CONTENT_NUM,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % client_w),
      },
      ease: 'none',
      //   repeat: -1,
      //   duration: 4,
    });
  };

  return (
    <div className='h-full w-full overflow-hidden bg-[#baa8a0]' ref={area}>
      <div className='h-full w-full whitespace-nowrap'>{shoesContents}</div>
    </div>
  );
}
