import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

export default function twoShoesMove() {
  gsap.registerPlugin(ScrollTrigger);
  const area = useRef(null);
  const shoeRight = useRef(null);
  const shoeLeft = useRef(null);
  useLayoutEffect(() => {
    logoAppearAnimation();
  }, []);

  const logoAppearAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: area.current, //トリガー
        start: 'top bottom', //開始位置
        end: 'bottom top',
        scrub: true, //スクロール量に応じて動かす
        markers: true,
      },
    });
    tl.from(shoeLeft.current, { xPercent: -100 });
    tl.from(shoeRight.current, { xPercent: 100 }, '<');
  };
  return (
    <div
      className='flex h-full w-full items-center justify-center bg-[#6b8853]'
      ref={area}
    >
      <div className='relative h-1/2 w-1/2' ref={shoeLeft}>
        <Image
          src='/shoe-left.jpg'
          fill={true}
          alt={'right logo'}
          className='w-auto'
          objectFit='contain'
        />
      </div>
      <div className='relative h-1/2 w-1/2' ref={shoeRight}>
        <Image
          src='/shoe-right.jpg'
          fill={true}
          alt={'right logo'}
          className='w-auto'
          objectFit='contain'
        />
      </div>
    </div>
  );
}
