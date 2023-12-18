//library
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {
  BottomRow,
  ExampleInput,
  HorizonBlock,
  NumInput,
  Text,
  InputBlock,
  WordAndMeanBlock,
} from "./style";
//components
import Header from "../../components/header/Header";
import PuppleInputButton from "../../components/button/PuppleButton/PuppleInputButton";
import Title from "../../components/title/Title";
import WordAndMeanInput from "../../components/input/WordAndMeanInput";

export default function Test() {
  const [addWords, setAddWords] = useState(
    Array.from({ length: 3 }, () => ({ word: "", mean: "" })),
  );

  const handleInputChange = (index, field, value) => {
    setAddWords((prevAddWords) => {
      const newAddWords = [...prevAddWords];
      newAddWords[index][field] = value;
      return newAddWords;
    });
  };

  const handleAddInput = () => {
    setAddWords((prevAddWords) => [...prevAddWords, { word: "", mean: "" }]);
  };

  const handleRegisterClick = async () => {
    try {
      // 만약 단어 또는 뜻이 입력되지 않은 경우를 필터링합니다.
      const validAddWords = addWords.filter(
        (wordObj) => wordObj.word.trim() !== "" && wordObj.mean.trim() !== "",
      );

      if (validAddWords.length === 0) {
        // 모든 단어가 비어있는 경우 경고 메시지를 출력하거나 다른 처리를 할 수 있습니다.
        console.warn("모든 단어를 입력하세요.");
        return;
      }

      // 서버로 데이터 전송
      const response = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/addword`,
        {
          words: validAddWords,
        },
      );

      // 서버 응답 처리
      console.log(response.data);
    } catch (error) {
      console.error("Error registering words:", error);
    }
  };

  const handleResetClick = () => {
    // 페이지를 리로드합니다.
    window.location.reload();
  };

  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <InputBlock>
        <Text style={{ position: "absolute", top: "-60px" }}>문제 수 입력</Text>
        <NumInput type={"text"} maxLength={3}></NumInput>
        <Text>문제</Text>
      </InputBlock>

      <HorizonBlock>
        <ExampleInput
          type={"text"}
          disabled={true}
          placeholder="단어"
        ></ExampleInput>
        <ExampleInput
          type={"text"}
          disabled={true}
          placeholder="뜻"
        ></ExampleInput>
      </HorizonBlock>
      
      <WordAndMeanBlock>
        {addWords.map((wordObj, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "row" }}>
            <WordAndMeanInput
              value={wordObj.word}
              onChange={(e) => handleInputChange(index, "word", e.target.value)}
            />
            <WordAndMeanInput
              value={wordObj.mean}
              onChange={(e) => handleInputChange(index, "mean", e.target.value)}
            />
          </div>
        ))}
      </WordAndMeanBlock>

      <BottomRow>
        <Link to="/study">
          <PuppleInputButton
            type={"button"}
            title={"등록"}
            onClick={handleRegisterClick}
          />
        </Link>

        <PuppleInputButton
          type={"button"}
          title={"입력 추가"}
          onClick={handleAddInput}
        />

        <Link to="/test-start">
          <PuppleInputButton type={"submit"} title={"시작"} />
        </Link>

        <PuppleInputButton
          type={"button"}
          title={"초기화"}
          onClick={handleResetClick}
        />
      </BottomRow>
    </>
  );
}
