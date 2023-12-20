import {
  Container,
  Horizon,
  TodayWord,
  Yellow,
  WordTest,
  RandomWord,
  WordContainer,
  TodayLearn,
  TodayTest,
} from "./style";
//library
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

//components

import Header from "../../components/header/Header";
//samplecode
import sampleJson  from "../../sample.json"

export default function Main() {
  const [randomWord, setRandomWord] = useState({ word: "", meaning: "" });

  useEffect(() => {
    // sampleJson 배열에서 무작위 단어 가져오기
    const randomIndex = Math.floor(Math.random() * sampleJson.length);
    const randomWordData = sampleJson[randomIndex];
    setRandomWord({ word: randomWordData.word, meaning: randomWordData.meaning });
  }, [sampleJson]);

  return (
    <div>
      <Container>
        <Header $back={false} $title={false} $addWord={false} $gear={true} />

        <WordTest>Word Test</WordTest>

        <WordContainer>
          <TodayWord>
            오늘의 <Yellow>단어</Yellow>
          </TodayWord>
          <RandomWord>{randomWord.word} : {randomWord.meaning}</RandomWord>
        </WordContainer>

        <Horizon></Horizon>

        <Link to="/study">
          <TodayLearn>
            오늘의 <Yellow>학습</Yellow>
          </TodayLearn>
        </Link>

        <Link to="/test">
          <TodayTest>
            오늘의 <Yellow>Test</Yellow>
          </TodayTest>
        </Link>
      </Container>
    </div>
  );
}