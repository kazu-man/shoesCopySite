import Image from 'next/image';

export default function secondBlock({ image }: { image: string }) {
  return (
    <div className='relative h-full w-full'>
      <Image
        src={image}
        fill={true}
        alt={'right logo'}
        className='w-auto'
        objectFit='cover'
      />
    </div>
  );
}
