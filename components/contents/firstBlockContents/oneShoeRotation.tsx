import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useShoeImages from '../../../hooks/useShowImages';
import { SCROLL_AMOUNT } from '../../../pages';

export default function oneShoeRotation() {
  gsap.registerPlugin(ScrollTrigger);
  const area = useRef(null);
  const targetShoeList = {
    shoes: [
      '/shoes/shoe1.jpg',
      '/shoes/shoe2.jpg',
      '/shoes/shoe3.jpg',
      '/shoes/shoe4.jpg',
      '/shoes/shoe5.jpg',
      '/shoes/shoe6.jpg',
      '/shoes/shoe7.jpg',
      '/shoes/shoe8.jpg',
      '/shoes/shoe9.webp',
      '/shoes/shoe10.jpg',
      '/shoes/shoe11.jpg',
      '/shoes/shoe12.webp',
    ],
  };
  const { next, before, shieImageEl } = useShoeImages(targetShoeList);
  useLayoutEffect(() => {
    logoAppearAnimation();
  }, []);

  let imagePacer = 0;

  const logoAppearAnimation = () => {
    gsap.timeline({
      scrollTrigger: {
        trigger: area.current, //トリガー
        start: 'top top', //開始位置
        end: '+=' + SCROLL_AMOUNT, //終了位置
        scrub: true, //スクロール量に応じて動かす
        onUpdate: (self) => {
          imagePacer++;

          if (imagePacer % 10 == 0) {
            if (self.direction > 0) {
              next();
            } else {
              before();
            }
          }
        },
      },
    });
  };
  return (
    <div className='relative h-full w-full bg-[#c6433c]' ref={area}>
      {shieImageEl}
    </div>
  );
}
