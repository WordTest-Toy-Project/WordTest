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

  useEffect(() => {
    if (user && user.words) {
      // 단어 배열을 복사하여 새로운 배열을 만듭니다.
      const shuffledWords = [...user.words];
      // Fisher-Yates 알고리즘을 사용하여 배열을 섞습니다.
      for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
      }

      setWordQuiz(shuffledWords);
    }
  }, [user]);

  if(user === null){
    setUser(user);
    navigate("/");
  }

  const handleInputChange = (value, index) => {
    // 해당 인덱스의 단어에 대한 상태를 업데이트합니다.
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = value;
      return newAnswers;
    });
    
  };
  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <Text>{"10"} 문제</Text>

      <WordOrMeanBlock>
        {wordQuiz.map((wordObj, index) => (  <div key={index}>
          <WordOrMean>{`${index + 1}. ${wordObj.word}`}</WordOrMean>
          <InputText
            value={answers[index]}
            onChange={(e)=>handleInputChange(e.target.value)}
          />
        </div>
        ))}
      </WordOrMeanBlock>
      <BottomRow>
        <PuppleInputButton
          type="button"
          title={"제출"}
          //onClick={handleAnswerSubmit}
        />
      </BottomRow>
    </>
  );
};

export default TestStart;
