import MainContentLayout from '../../layout/mainContentLayout';
import Image from 'next/image';
import OneShoeRotation from './oneShoeRotation';

export default function firstBlockContents() {
  const content1 = <OneShoeRotation />;
  const content2 = (
    <div className='relative h-full w-full'>
      <Image
        src='/girl1.jpg'
        fill={true}
        alt={'right logo'}
        className='w-auto'
        objectFit='cover'
      />
    </div>
  );
  const content3 = (
    <div className='flex h-full w-full items-center justify-center bg-[#eeeae4]'>
      <div className='relative h-5/6 w-3/4'>
        <Image
          src='/girl2.jpg'
          fill={true}
          alt={'right logo'}
          className='w-auto'
          objectFit='cover'
        />
      </div>
    </div>
  );

  const testContent = [content1, content2, content3];

  return <MainContentLayout contents={testContent}></MainContentLayout>;
}
