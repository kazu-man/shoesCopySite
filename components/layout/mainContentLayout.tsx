import { ReactNode } from 'react';
type mainContentProps = {
  children: ReactNode;
};
export default function mainContentLayout({ children }: mainContentProps) {
  return (
    <>
      <section className='h-96 w-full bg-red-600' style={{ height: '3000px' }}>
        {children}
      </section>
    </>
  );
}
