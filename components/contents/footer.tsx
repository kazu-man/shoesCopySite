import Image from 'next/image';

export default function footer() {
  return (
    <div className='selection:bg-black selection:text-white'>
      <div className='mb-10 grid grid-flow-row grid-cols-5'>
        <div className='sticky top-0 col-span-2 ml-4 flex h-2/3 w-2/3'>
          <Image
            src='/newBalance.svg'
            fill={true}
            alt={'right logo'}
            className='w-auto'
          />
        </div>
        <div className='col-span-3 col-start-3 h-full w-full p-5 text-justify text-5xl leading-normal tracking-tight'>
          {
            '1988年の登場以来、ニューバランスを代表するスタンダードモデルとして現在まで長く愛される「996」。2021年9月、履き心地、デザイン性はそのままに、バックロゴなどのマイナーチェンジを経て、"NewStandard"として生まれ変わった。そんな新定番モデル「996」をニューノーマル時代を生き生きと駆ける女性たちが履きこなす。'
          }
          <div className='p-4'>
            <button className='m-2 inline-block rounded-full border border-[#28282a] bg-transparent p-6 text-base font-semibold text-[#28282a] hover:border-transparent hover:bg-[#28282a] hover:text-white'>
              ニューバランス 公式オンラインストア
            </button>
            <button className='m-2 inline-block rounded-full border border-[#28282a] bg-transparent p-6 text-base font-semibold text-[#28282a] hover:border-transparent hover:bg-[#28282a] hover:text-white'>
              ABC-MART 公式オンラインストア
            </button>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-between pb-10'>
        <div className='flex items-end text-sm'>New Balance</div>
        <div>
          <div className='relative mx-auto h-28 w-28 cursor-pointer hover:rotate-12'>
            <Image
              src='/cow.webp'
              fill={true}
              alt={'right logo'}
              className='w-auto'
              objectFit='contain'
            />
          </div>
          <div className='w-full'>© NEW BALANCE JAPAN, INC.</div>
        </div>
      </div>
    </div>
  );
}
