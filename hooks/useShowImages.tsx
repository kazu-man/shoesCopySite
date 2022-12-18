import { useState } from 'react';
import Image from 'next/image';

type shoeImagesProps = {
  shoes: string[];
};

export default function useShoeImages(shoeImagesProps: shoeImagesProps) {
  const { shoes } = shoeImagesProps;
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((current) => {
      if (shoes.length - 1 <= current) return 0;
      return current + 1;
    });
  };

  const before = () => {
    setIndex((current) => {
      if (current == 0) return shoes.length - 1;
      return current - 1;
    });
  };

  const shoeImageEl = (
    <Image
      src={shoeImagesProps.shoes[index]}
      fill={true}
      alt={'right logo'}
      className='w-auto'
      objectFit='contain'
    />
  );

  return {
    next,
    before,
    shoeImageEl,
  };
}
