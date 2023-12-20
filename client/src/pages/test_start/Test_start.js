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

const TestStart = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);
  const [wordQuiz, setWordQuiz] = useState([]);
  const [answers, setAnswers] = useState(Array(wordQuiz.length).fill(''));
  const [result, setResult] = useState([]);
  console.log(result);
  useEffect(() => {
    if (user && user.words) {
      const shuffledWords = [...user.words];
      for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
      }

      setWordQuiz(shuffledWords);
    }
  }, [user]);

  if (user === null) {
    setUser(user);
    navigate("/");
  }

  const handleInputChange = (value, index) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = value;
      return newAnswers;
    });
    
  };
console.log("현재 정답 상태:", answers);
  const handleAnswerSubmit = () => {
    if (!wordQuiz) {
      return;
    }

    const newResult = wordQuiz.map((wordObj, index) => {
      return {
        word: wordObj.word,
        meaning: wordObj.meaning,
        is_wrong: wordObj.meaning !== answers[index],
      };
    });
    setResult(newResult);
    localStorage.setItem("answer", JSON.stringify(answers));
  };

  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <Text>{wordQuiz.length} 문제</Text>

      <WordOrMeanBlock>
        {wordQuiz.map((wordObj, index) => (
          <div key={index}>
            <WordOrMean>{`${index + 1}. ${wordObj.word}`}</WordOrMean>
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
