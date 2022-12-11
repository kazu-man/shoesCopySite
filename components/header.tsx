import Image from 'next/image';
import headerDotStyle from '../styles/HeaderBtn.module.css';

export default function header() {
  return (
    <>
      <header className='mt-4 flex h-10 justify-between'>
        <div className='relative h-full w-52'>
          <Image src='/logo_996_b.svg' fill={true} alt={'left logo'} />
        </div>
        <div className='flex'>
          <div className='relative mx-3 h-full w-12'>
            <Image src='/logo_nb_b.svg' fill={true} alt={'right logo'} />
          </div>
          <div className={`${headerDotStyle.headerDot}`}></div>
        </div>
      </header>
    </>
  );
}
