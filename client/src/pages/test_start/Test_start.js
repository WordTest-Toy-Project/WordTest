import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  BottomRow,
  Text,
  WordOrMean,
  WordOrMeanBlock,
} from "./style";
import InputText from "../../components/input/InputText";
import Header from "../../components/header/Header";
import PuppleInputButton from "../../components/button/PuppleButton/PuppleInputButton";
import Title from "../../components/title/Title";
import sampleJson from "../../sample.json";

const TestStart = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);
  const [wordQuiz, setWordQuiz] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState([]);
  const storedToggleState = JSON.parse(localStorage.getItem("wordAndMeanToggle"));
  const [displayWord, setDisplayWord] = useState(storedToggleState);
  if(user === null){
    setUser();
    setDisplayWord();
  }
  useEffect(() => {
    if (user && user.words) {
      const allWords = [...user.words, ...sampleJson[0].words];
      const uniqueWordsSet = new Set(allWords.map(wordObj => wordObj.word));
      const uniqueWords = Array.from(uniqueWordsSet, word => allWords.find(obj => obj.word === word));
      const shuffledWords = [...uniqueWords];

      for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
      }

      setWordQuiz(shuffledWords.slice(0, 10));
      setAnswers(Array(10).fill(''));
    }
  }, [user]);

  const handleInputChange = (value, index) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  const handleAnswerSubmit = () => {
    if (!wordQuiz.length) {
      return;
    }

    const newResult = wordQuiz.map((wordObj, index) => {
      const isWrong = displayWord
        ? wordObj.meaning !== answers[index]
        : wordObj.word !== answers[index];

      return {
        word: wordObj.word,
        meaning: wordObj.meaning,
        is_wrong: isWrong,
      };
    });

    setResult(newResult);
  };

  useEffect(() => {
    if (result.length > 0) {
      localStorage.setItem("result", JSON.stringify(result));
      navigate('/test-result', { state: { result } });
    }
  }, [result, navigate]);

  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <Text>10 문제</Text>

      <WordOrMeanBlock>
        {wordQuiz.map((wordObj, index) => (
          <div key={index}>
            <WordOrMean>{`${index + 1}. ${displayWord ? wordObj.word : wordObj.meaning}`}</WordOrMean>
            <InputText 
              value={answers[index]}
              onChange={(e) => handleInputChange(e.target.value, index)}
            />
          </div>
        ))}
      </WordOrMeanBlock>
      
      <BottomRow>
        <PuppleInputButton
          type="button"
          title={"제출"}
          onClick={handleAnswerSubmit}
        />
      </BottomRow>
    </>
  );
};

export default TestStart;
