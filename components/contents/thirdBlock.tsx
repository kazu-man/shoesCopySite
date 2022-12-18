import Image from 'next/image';

export default function thirdBlock({ image }: { image: string }) {
  return (
    <div className='flex h-full w-full items-center justify-center bg-[#eeeae4]'>
      <div className='relative h-5/6 w-3/4'>
        <Image
          src={image}
          fill={true}
          alt={'right logo'}
          className='w-auto'
          objectFit='cover'
        />
      </div>
    </div>
  );
}
