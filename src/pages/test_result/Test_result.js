import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import  PuppleInputButton  from "../../components/button/PuppleButton/PuppleInputButton";

import { Link } from 'react-router-dom';

import {
  Desc,
  Result,
  WrongWord,
  WordLength,
  BottomRow
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
        <Header $back={true} $title={false} $addWord={false} $gear={true}/>
        <Title title={"Word Test"}/>
        <Result><span style={{color: "red"}}>{sampleJson.length}</span> 문제 정답!</Result>
        <Desc><span style={{color: "yellow"}}>오답 단어</span></Desc>
        {sampleJson.map((word) => (
          <WrongWord key={word.id}>
            <div><p>{word.id + 1}.</p></div>
            <WordLength><p style={{padding: "0 30px"}}>{word.word}</p><hr style={{marginTop:"-20px"}}/></WordLength>
            <WordLength><p style={{padding: "0 30px"}}>{word.mean}</p><hr style={{marginTop:"-20px"}}/></WordLength>
          </WrongWord>
        ))}
        <Link to="/main">
          <BottomRow>
            <PuppleInputButton type={"button"} title={"메인으로 돌아가기"}/>
          </BottomRow>
        </Link>
        
      </>
    );
  }