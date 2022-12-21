import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

export default function shoesRotation() {
  gsap.registerPlugin(ScrollTrigger);
  const area = useRef(null);
  const rotationTarget = useRef(null);
  useLayoutEffect(() => {
    logoAppearAnimation();
  }, []);

  const logoAppearAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: area.current, //トリガー
        start: 'top bottom', //開始位置
        end: 'max', //終了位置
        scrub: true, //スクロール量に応じて動かす
      },
    });

    tl.to(rotationTarget.current, { rotation: 720 });
  };
  return (
    <div
      className='relative flex h-full w-full items-center justify-center bg-[#a57649]'
      ref={area}
    >
      <div className='relative h-5/6 w-5/6'>
        <Image
          ref={rotationTarget}
          src='/rotationShoes.png'
          fill={true}
          alt={'right logo'}
          className='w-auto'
          objectFit='contain'
        />
      </div>
    </div>
  );
}
