import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PuppleInputButton from "../../components/button/PuppleButton/PuppleInputButton";

import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Desc, Result, WrongWord, WordLength, BottomRow } from "./style";
import sampleJson from '../../sample.json';

export default function Test_result() {
  const [wrongWords, setWrongWords] = useState([]);

  useEffect(()=>{
    const wrongWords = sampleJson[0].words.filter(word => word.is_wrong );
    setWrongWords(wrongWords);
  },[])


  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <Result>
        <span style={{ color: "red" }}>{wrongWords.length}</span> 문제 오답!
      </Result>
      <Desc>
        <span style={{ color: "yellow" }}>오답 단어</span>
      </Desc>
      {wrongWords.map((word, index) => (
        <WrongWord key={index}>
          <div>
            <p>{index+1}</p>
          </div>
          <WordLength>
            <p style={{ padding: "0 30px" , textAlign:"center" }}>{word.word}</p>
            <hr style={{ marginTop: "-20px" }} />
          </WordLength>
          <WordLength>
            <p style={{ padding: "0 30px", textAlign:"center"}}>{word.meaning}</p>
            <hr style={{ marginTop: "-20px" }} />
          </WordLength>
        </WrongWord>
      ))}
      <Link to="/main">
        <BottomRow>
          <PuppleInputButton type={"button"} title={"메인으로 돌아가기"} />
        </BottomRow>
      </Link>
    </>
  );
}
