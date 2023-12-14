import Header from '../../components/header/Header';
import Title from '../../components/title/Title';

import {
  Desc,
  Result,
} from './style';

export default function Test_result() {
  const sampleJson = [
    {
      id: 0,
      word: "Apple",
      mean: "사과"
    },
    {
      id: 1,
      word: "Banana",
      mean: "바나나"
    }
  ]
  sampleJson;
    return (
      <>
        <Header />
        <Title title={"Word Test"}/>
        <Result><span style={{color: "red"}}>3</span> 문제 정답!</Result>
        <Desc><span style={{color: "yellow"}}>오답 단어</span></Desc>
      </>
    );
  }