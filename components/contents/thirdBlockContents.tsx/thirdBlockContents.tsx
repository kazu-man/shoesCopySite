import MainContentLayout from '../../layout/mainContentLayout';
import ShoeMove from './shoeMove';
import SecondBlock from '../secondBlock';
import ThirdBlock from '../thirdBlock';

export default function thirdBlockContents() {
  const contents = [
    <ShoeMove key='first' />,
    <SecondBlock image='/girl5.jpg' key='second' />,
    <ThirdBlock image='/girl6.jpg' key='third' />,
  ];

  return <MainContentLayout contents={contents}></MainContentLayout>;
}
