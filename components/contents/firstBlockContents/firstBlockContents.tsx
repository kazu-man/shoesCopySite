import MainContentLayout from '../../layout/mainContentLayout';
import OneShoeRotation from './oneShoeRotation';
import SecondBlock from '../secondBlock';
import ThirdBlock from '../thirdBlock';

export default function firstBlockContents() {
  const contents = [
    <OneShoeRotation key='first' />,
    <SecondBlock image='/girl1.jpg' key='second' />,
    <ThirdBlock image='/girl2.jpg' key='third' />,
  ];

  return <MainContentLayout contents={contents}></MainContentLayout>;
}
