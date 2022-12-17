import { ReactNode, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type mainContentProps = {
  children: ReactNode;
};
export default function mainContentLayout({ children }: mainContentProps) {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const slides: gsap.TweenTarget[] = gsap.utils.toArray('.slide');

    //これでも出来る
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#container',
        // pin: true,
        // pinSpacing: true,
        scrub: 1,
        start: 'top top',
        // end: 'bottom bottom',
        markers: true,
      },
      defaults: { ease: 'none', duration: 1 },
    });

    console.log('ASDFDSAFD');
    slides.forEach((slide: gsap.TweenTarget, i) => {
      if (i == 0) {
        tl.from(slide, {
          x: '-100vw', //x方向に移動させる
          ease: 'out',
        });
      } else if (i == 1) {
        tl.from(slide, {
          x: '100vw', //x方向に移動させる
          ease: 'out',
        });
      } else if (i == 2) {
        tl.from(slide, {
          x: '100vw', //x方向に移動させる
          ease: 'out',
        });
      }
    });
  });

  return (
    <>
      <div id='container' className='relative'>
        <section
          className='panel slide sticky top-0  bg-red-50'
          id='one'
          style={{ height: '100vh' }}
        >
          Sliding Element ONE<a href='#two'>goto next Panel</a>
        </section>
        <section
          className='panel slide sticky top-0   bg-gray-700'
          id='two'
          style={{ height: '100vh' }}
        >
          Sliding Element TWO<a href='#three'>goto next Panel</a>
        </section>
        <section
          className='panel slide sticky top-0  bg-purple-400'
          id='three'
          style={{ height: '100vh' }}
        >
          Sliding Element THREE<a href='#four'>goto next Panel</a>
        </section>
      </div>
      <div
        className='panel sticky top-0 bg-red-900'
        style={{ height: '100vh' }}
      ></div>

      <div
        className='panel sticky top-0 bg-red-500'
        style={{ height: '100vh' }}
      >
        END
      </div>
    </>
  );
}
