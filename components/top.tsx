import Image from 'next/image';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
// doesn't support ES Modules, so you would need to import the UMD files
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function top() {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef(null);
  const area = useRef(null);
  const bandRef = useRef(null);
  useLayoutEffect(() => {
    logoAppearAnimation();
  }, []);
  const logoAppearAnimation = () => {
    const tl = gsap.timeline();
    tl.from(boxRef.current, { y: '50%', opacity: 0, duration: 0.5 });
    tl.from(bandRef.current, {
      xPercent: -100,
      duration: 1.5,
      ease: 'power1.inOut',
    });
    tl.to(
      boxRef.current,
      {
        width: '350vw',
        height: '80vh',
        duration: 1,
        ease: 'power1.inOut',
        delay: 0.3,
      },
      '<'
    );

    tl.to(boxRef.current, {
      x: '-250vw', //x方向に移動させる
      ease: 'out',
      scrollTrigger: {
        trigger: area.current, //トリガー
        start: 'top top', //開始位置
        end: '+=' + '1000vh', //終了位置
        pin: true, //ピン留め
        scrub: true, //スクロール量に応じて動かす
        // pinSpacing: false,
      },
    });
  };

  return (
    <>
      <article
        className='relative'
        style={{ width: '100vx', height: '100vh' }}
        ref={area}
      >
        <div className='absolute bottom-0'>
          <div
            className='relative '
            ref={boxRef}
            style={{ width: '100vw', height: '20vh' }}
          >
            <Image
              src='/top_main_logo.svg'
              fill={true}
              alt={'right logo'}
              className='w-auto'
              // onLoadingComplete={logoAppearAnimation}
            />
          </div>
          <div
            className='bg-[#c6433c]'
            ref={bandRef}
            style={{ width: '100vx', height: '2vh' }}
          ></div>
        </div>
      </article>
    </>
  );
}
