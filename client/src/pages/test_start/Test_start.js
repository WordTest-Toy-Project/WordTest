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
import sampleJson from "../../sample.json"
const TestStart = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);
  const [wordQuiz, setWordQuiz] = useState([]);
  const [answers, setAnswers] = useState(Array(wordQuiz.length).fill(''));
  const [result, setResult] = useState([]);
  const [displayWord, setDisplayWord] = useState(true); // 기본적으로는 word 표시
  console.log(result);
  if(user === null) {
    setUser();
  }

  useEffect(() => {
    if (user && user.words) {
      const allWords = [...user.words,...sampleJson[0].words]
      const shuffledWords = [...allWords];
      console.log(shuffledWords);
      for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
      }

      setWordQuiz(shuffledWords);
      setAnswers(Array(shuffledWords.length).fill(''));
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
    if (!wordQuiz) {
      return;
    }

    const newResult = wordQuiz.map((wordObj, index) => {
      const isWrong = displayWord ? (wordObj.meaning !== answers[index]) : (wordObj.word !== answers[index]);
      return {
        word: wordObj.word,
        meaning: wordObj.meaning,
        is_wrong: isWrong,
      };
    });

    setResult(newResult);
    localStorage.setItem("result", JSON.stringify(newResult)); // Save updated result to local storage
    navigate('/test-result');
  };

  useEffect(() => {
    const storedToggleState = localStorage.getItem("wordAndMeanToggle");
    if (storedToggleState) {
      const toggleState = JSON.parse(storedToggleState);
      setDisplayWord(toggleState);
    }
  }, []);

  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <Text>10 문제</Text>

      <WordOrMeanBlock>
        {wordQuiz.slice(0, 10).map((wordObj, index) => (
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
