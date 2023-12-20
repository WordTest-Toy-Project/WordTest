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
import axios from "axios";

//components

import Header from "../../components/header/Header";


export default function Main() {
  const [randomWord, setRandomWord] = useState({ word: "", meaning: "" });
  const [sampleData, setSampleData] = useState([]);
  
  const fetchRandomWord = () => {
    try {
      // sample.json 파일에서 랜덤 단어 가져오기
      const randomIndex = Math.floor(Math.random() * sampleData.length);
      const randomWordData = sampleData[randomIndex];
      setRandomWord({ word: randomWordData.word, meaning: randomWordData.meaning });
    } catch (error) {
      console.log("Error fetching random word:", error);
    }
  };

  useEffect(() => {
    // sample.json 파일에서 데이터 가져오기
    const fetchData = async () => {
      try {
        const response = await axios.get("/sample.json");
        setSampleData(response.data);
      } catch (error) {
        console.error("Error fetching sample data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // 페이지가 로드될 때마다 랜덤 단어 가져오기
    fetchRandomWord();
  }, [sampleData]);

  return (
    <div>
      <Container>
        <Header $back={false} $title={false} $addWord={false} $gear={true} />

        <WordTest>Word Test</WordTest>

        <WordContainer>
          <TodayWord>
            오늘의 <Yellow>단어</Yellow>
          </TodayWord>
          <RandomWord onLoad={fetchRandomWord}>{randomWord.word} : {randomWord.meaning} </RandomWord>
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
