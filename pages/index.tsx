import Head from 'next/head';
import Header from '../components/header';
import MainContentLayout from '../components/layout/mainContentLayout';
import Top from '../components/top';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Header /> */}
      {/* <Top /> */}
      <MainContentLayout>Main!!!</MainContentLayout>
    </div>
  );
}
