import Head from 'next/head';
import Header from '../components/header';
import Top from '../components/top';
import FirstBlockContents from '../components/contents/firstBlockContents/firstBlockContents';
export const SCROLL_AMOUNT = 5000;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Top />
      <FirstBlockContents />
    </div>
  );
}
