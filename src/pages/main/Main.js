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
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//components
import Header from "../../components/header/Header";
import axios from "axios";

export default function Main() {
  const [todayWord, setTodayWord] = useState({
    word: "",
    mean: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_LOCAL_URL}/openai`,
        );
        setTodayWord(response.data.words);
      } catch (error) {
        console.error("Error fetching TOEIC words:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <Header $back={false} $title={false} $addWord={false} $gear={true} />

        <WordTest>Word Test</WordTest>

        <WordContainer>
          <TodayWord>
            오늘의 <Yellow>단어</Yellow>
          </TodayWord>
          <RandomWord>
            {todayWord.word} {todayWord.mean}
          </RandomWord>
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
