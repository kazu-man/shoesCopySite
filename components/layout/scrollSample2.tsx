import { ReactNode, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type mainContentProps = {
  children: ReactNode;
};
export default function mainContentLayout({ children }: mainContentProps) {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    //     {
    //   // yes, we can add it to an entire timeline!
    //   scrollTrigger: {
    //     trigger: '#container',
    //     pin: true, // pin the trigger element while active
    //     start: 'top top', // when the top of the trigger hits the top of the viewport
    //     end: '+=500', // end after scrolling 500px beyond the start
    //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //     // snap: {
    //     //   snapTo: 'labels', // snap to the closest label in the timeline
    //     //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     //   ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
    //     // },
    //   },
    // });

    // add animations and labels to the timeline
    tl.addLabel('start')
      .from('.slide1', {
        xPercent: 100,
        scrollTrigger: {
          trigger: '#container',
          pin: true, // pin the trigger element while active
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: '+=500', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // snap: {
          //   snapTo: 'labels', // snap to the closest label in the timeline
          //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          //   ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
          // },
        },
      })
      .addLabel('color')
      .from('.slide2', {
        backgroundColor: '#28a92b',
        xPercent: 100,
        scrollTrigger: {
          trigger: '#container2',
          pin: true, // pin the trigger element while active
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: '+=500', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // snap: {
          //   snapTo: 'labels', // snap to the closest label in the timeline
          //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          //   ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
          // },
        },
      })
      .addLabel('spin')
      .from('.slide3', {
        xPercent: 100,
        scrollTrigger: {
          trigger: '#container3',
          pin: true, // pin the trigger element while active
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: '+=500', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // snap: {
          //   snapTo: 'labels', // snap to the closest label in the timeline
          //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          //   ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
          // },
        },
      })
      .addLabel('end');
  });

  return (
    <>
      <div id='container' className='relative'>
        <section
          className='panel slide1 bg-red-50'
          id='one'
          style={{ height: '100vh' }}
        >
          Sliding Element ONE<a href='#two'>goto next Panel</a>
        </section>
      </div>
      <div id='container2'>
        <section
          className='panel slide2 bg-gray-700'
          id='two'
          style={{ height: '100vh' }}
        >
          Sliding Element TWO<a href='#three'>goto next Panel</a>
        </section>
      </div>
      <div id='container3'>
        <section
          className='panel slide3 bg-purple-400'
          id='three'
          style={{ height: '100vh' }}
        >
          Sliding Element THREE<a href='#four'>goto next Panel</a>
        </section>
      </div>
      {/* </div> */}
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
