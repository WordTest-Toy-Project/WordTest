import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  BottomRow,
  InputText,
  Text,
  WordOrMean,
  WordOrMeanBlock,
} from "./style";
import Header from "../../components/header/Header";
import PuppleInputButton from "../../components/button/PuppleButton/PuppleInputButton";
import Title from "../../components/title/Title";

const TestStart = () => {
  const navigate = useNavigate();
  const [randomWords, setRandomWords] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const fetchRandomWords = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_LOCAL_URL}/study`
        );
        const shuffledWords = response.data.sort(() => Math.random() - 0.5);

        setRandomWords(shuffledWords.slice(0, 10));
      } catch (error) {
        console.error("Error fetching random words:", error);
      }
    };

    fetchRandomWords();
  }, []);

  const handleAnswerSubmit = async () => {
    try {
      const promises = randomWords.map(async (wordObj, index) => {
        const userAnswer = userAnswers[index]?.trim();
        const isCorrect = userAnswer === wordObj.mean;

        if (!isCorrect) {
          // 답이 틀린 경우, 데이터베이스 업데이트
          await axios.put(
            `${process.env.REACT_APP_LOCAL_URL}/updateword/${wordObj.id}`,
            { userAnswer }
          );
        }

        return isCorrect;
      });

      const results = await Promise.all(promises);

      // 다음 작업 수행
      navigate("/test-result", {
        state: { userAnswers, correctCount: results.filter((isCorrect) => isCorrect).length },
      });
    } catch (error) {
      console.error("Error updating words:", error);
    }
  };

  const handleInputChange = (index, value) => {
    setUserAnswers((prevUserAnswers) => {
      const newUserAnswers = [...prevUserAnswers];
      newUserAnswers[index] = value;
      return newUserAnswers;
    });
  };

  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <Text>{"10"} 문제</Text>

      <WordOrMeanBlock>
        {randomWords.map((wordObj, index) => (
          <React.Fragment key={index}>
            <WordOrMean>{`${index + 1}. ${wordObj?.word}`}</WordOrMean>
            <InputText
              value={userAnswers[index] || ""}
              onChange={(e) => handleInputChange(index, e.target.value)}
            ></InputText>
          </React.Fragment>
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
