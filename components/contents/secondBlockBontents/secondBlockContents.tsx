import MainContentLayout from '../../layout/mainContentLayout';
import ShoesRotation from './shoesRotation';
import SecondBlock from '../secondBlock';
import ThirdBlock from '../thirdBlock';

export default function secondBlockContents() {
  const contents = [
    <ShoesRotation key='first' />,
    <SecondBlock image='/girl3.jpg' key='second' />,
    <ThirdBlock image='/girl4.jpg' key='third' />,
  ];

  return <MainContentLayout contents={contents}></MainContentLayout>;
}
