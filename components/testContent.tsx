import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function testContent() {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef(null);
  const area = useRef(null);
  useLayoutEffect(() => {
    logoAppearAnimation();
  }, []);

  const logoAppearAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: area.current, //トリガー
        start: 'top top', //開始位置
        // end: 'bottom top', //終了位置
        end: '+=3000', //終了位置
        scrub: true, //スクロール量に応じて動かす
        markers: true,
      },
    });

    tl.to(boxRef.current, {
      rotation: 360,
      ease: 'out',
    });
  };
  return (
    <div
      className='flex h-full w-full items-center justify-center align-middle'
      ref={area}
    >
      <div className=' h-1/3 w-1/2  bg-blue-400' ref={boxRef}>
        asd
      </div>
    </div>
  );
}
