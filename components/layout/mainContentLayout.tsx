import { ReactNode, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TestContent from '../testContent';

type mainContentProps = {
  contents: ReactNode[];
};
export default function mainContentLayout({ contents }: mainContentProps) {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const area = useRef(null);
  useLayoutEffect(() => {
    logoAppearAnimation();
  }, []);

  const logoAppearAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: area.current, //トリガー
        start: 'top top', //開始位置
        end: '+=3000', //終了位置
        pin: true, //ピン留め
        scrub: true, //スクロール量に応じて動かす
        snap: {
          snapTo: 'labelsDirectional', // snap to the closest label in the timeline
          duration: { min: 0.2, max: 5 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
          directional: true,
        },
      },
    });

    tl.addLabel('start').from(boxRef.current, {
      width: '100vw',
      ease: 'out',
      delay: 0.5,
    });

    tl.addLabel('middle').from(boxRef2.current, {
      height: '100vh',
      ease: 'out',
      delay: 0.5,
    });
    tl.addLabel('end').from(boxRef3.current, {
      delay: 0.1,
    });
  };
  return (
    <div
      className='grid grid-flow-row grid-cols-3 grid-rows-4'
      style={{ height: '100vh', width: '100vw' }}
      ref={area}
    >
      <div
        className='col-span-2 row-span-4 h-full w-full bg-red-400'
        style={{ zIndex: '999' }}
        ref={boxRef}
      >
        {/* {contents[0]} */}
        <TestContent />
      </div>
      <div
        className='col-start-3 row-span-2 h-full w-full bg-purple-400 '
        style={{ zIndex: '998' }}
        ref={boxRef2}
      >
        {contents[1]}
      </div>
      <div
        className='col-start-3 row-span-2 h-full w-full bg-green-400 '
        ref={boxRef3}
      >
        {contents[2]}
      </div>
    </div>
  );
}
