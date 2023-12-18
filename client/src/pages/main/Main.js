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
  const [randomWord, setRandomWord] = useState({word:"", meaning:""});
  const fetchRandomWord = async () =>{
    try{
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/main`
        );
      setRandomWord(response.data);

    }
    catch (error) {
      console.log("Error fetching random word:", error);
    }
  }
  useEffect(() => {
    fetchRandomWord();
  },[]);

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
