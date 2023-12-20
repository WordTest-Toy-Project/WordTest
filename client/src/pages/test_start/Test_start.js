import {
  BottomRow,
  InputText,
  Text,
  WordOrMean,
  WordOrMeanBlock,
} from "./style";
//components
import Header from "../../components/header/Header";
import PuppleInputButton from "../../components/button/PuppleButton/PuppleInputButton";
import Title from "../../components/title/Title";
//library
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";


export default function Test_start() {
  const navigate = useNavigate();

  const [randomWords, setRandomWords] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const fetchRandomWords = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/study`);
        const shuffledWords = response.data.sort(() => Math.random() - 0.5);

        setRandomWords(shuffledWords.slice(0,10));
      } catch (error) {
        console.error("Error fetching random words:", error);
      }
    };

    fetchRandomWords();
  }, []);

  const handleAnswerSubmit = () => {
    // 사용자의 답과 정답을 비교하여 맞은 경우 correctCount 증가
    const newCorrectCount = userAnswers.reduce(
      (count, userAnswer, index) =>
        userAnswer === randomWords[index]?.mean
          ? count + 1
          : count,
      correctCount
    );
  
    setCorrectCount(newCorrectCount);
  
    try {
      const promises = randomWords.map(async (wordObj, index) => {
        // 사용자가 입력한 답과 정답을 비교
        const isWrong = userAnswers[index]?.mean !== wordObj.mean;
        
        if (isWrong) {
          // 답이 틀린 경우, 데이터베이스 업데이트
          await axios.put(`${process.env.REACT_APP_LOCAL_URL}/updateword/${wordObj.id}`, { userAnswer: userAnswers[index] });
        }
  
        return isWrong;
      });
      const wrongAnswers = Promise.all(promises);
  
      // wrongAnswers 배열에는 각 단어에 대한 정답 여부가 true 또는 false로 저장됩니다.
      console.log(wrongAnswers);
  
      // 다음 작업 수행
    } catch (error) {
      console.error("Error updating words:", error);
    }
    // 사용자의 답과 정답을 다음 페이지에 전달
    navigate("/test-result", {
      state: { userAnswers, correctCount: newCorrectCount },
    });
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
              value = {userAnswers[index] || ""}
              onChange={(e) => handleInputChange(index,e.target.value)}
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
}