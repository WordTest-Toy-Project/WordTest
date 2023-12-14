import Header from '../../components/header/Header';
import Title from '../../components/title/Title';

import {
  Desc,
  Result,
  WrongWord,
  WordLength
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
    return (
      <>
        <Header />
        <Title title={"Word Test"}/>
        <Result><span style={{color: "red"}}>{sampleJson.length}</span> 문제 정답!</Result>
        <Desc><span style={{color: "yellow"}}>오답 단어</span></Desc>
        {sampleJson.map((word) => (
          <WrongWord key={word.id}>
            <div><p>{word.id + 1}.</p></div>
            <WordLength><p style={{padding: "0 30px"}}>{word.word}</p><hr /></WordLength>
            <WordLength><p style={{padding: "0 30px"}}>{word.mean}</p><hr /></WordLength>
          </WrongWord>
        ))}
      </>
    );
  }