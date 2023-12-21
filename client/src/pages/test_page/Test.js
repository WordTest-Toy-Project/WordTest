//library
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
//import axios from "axios";
import {
  BottomRow,
  ExampleInput,
  HorizonBlock,
  Text,
  InputBlock,
  WordAndMeanBlock,
} from "./style";
//components
import Header from "../../components/header/Header";
import PuppleInputButton from "../../components/button/PuppleButton/PuppleInputButton";
import Title from "../../components/title/Title";
import WordAndMeanInput from "../../components/input/WordAndMeanInput";
//sample code
import sampleJson from '../../sample.json';
//import { AddWord } from "../../components/header/style";


export default function Test() {
  // 초기 화면 입력창 개수
  const [addWords, setAddWords] = useState(
    Array.from({ length: 3 }, () => ({ id:sampleJson[0].words.length-1 ,word: "", mean: "" }))
  );


  // 단어 study에 추가
  const handleRegisterClick = () => {
    const newWords = addWords.map((wordObj, index) => ({
      id: sampleJson[0].words.length + index,
      word: wordObj.word,
      meaning: wordObj.meaning,
      isWrong: false,
      isScrap: false,
    }));
    console.log(newWords);
    
    sampleJson[0].words.push(...newWords);
    setAddWords(Array.from({ length: 3 }, () => ({ word: "", meaning: "" })));
    console.log(sampleJson[0].words);
    localStorage.setItem(sampleJson,JSON.stringify(sampleJson));
    
  };


  const handleInputChange = (index, field, value) => {
    setAddWords((prevAddWords) => {
      const newAddWords = [...prevAddWords];
      newAddWords[index][field] = value;
      return newAddWords;
    });
  };

  const handleAddInput = () => {
    setAddWords((prevAddWords) => [...prevAddWords, { word: "", meaning: "" }]);
  };

  //초기화 버튼
  const handleResetClick = () => {
    // 페이지를 리로드합니다.
    window.location.reload();
  };

  useEffect(() => {
    // 페이지 로딩 시 로컬 스토리지에서 데이터 불러오기
    const storedSampleJson = JSON.parse(localStorage.getItem('sampleJson'));
    if (storedSampleJson) {
      // 데이터가 있다면 적용
      
    }
  }, []);

  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <InputBlock>
        {/* <Text style={{ position: "absolute", top: "-60px" }}>문제 수 입력</Text> */}
        {/* <NumInput type={"text"} maxLength={3}></NumInput> */}
        <Text>시험은 총 10문제</Text>
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
      
      <WordAndMeanBlock  style={{ 
        marginTop: "70px", padding: "10px", border: "1px solid #ccc", borderRadius:"20px"
        }}>
        {addWords.map((wordObj, index) => (
          <div key={index} style={{
            display: "flex",
            flexDirection: "row",
           
          }}>
            
              <WordAndMeanInput
                className={"w"}
                value={wordObj.word}
                onChange={(e) => handleInputChange(index, "word", e.target.value)}
                placeholder="단어"
              />
              <WordAndMeanInput
              className={"m"}
                value={wordObj.meaning}
                onChange={(e) => handleInputChange(index, "meaning", e.target.value)}
                placeholder="뜻"
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