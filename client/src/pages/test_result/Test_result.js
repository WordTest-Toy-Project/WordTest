import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PuppleInputButton from "../../components/button/PuppleButton/PuppleInputButton";

import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Desc, Result, WrongWord, WordLength, BottomRow } from "./style";
import axios from "axios";
export default function Test_result() {
  const [wrongWords, setWrongWords] = useState([]);

  useEffect(() => {
    const fetchWrongWords = async () => {
      try {
        // is_wrong가 true인 단어를 불러오는 API를 호출합니다.
        const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/test-result`);
        const data = response.data;
    
        if (Array.isArray(data.words)) {
          // data.words가 배열인 경우에만 업데이트
          setWrongWords(data.words);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching wrong words:", error);
      }
    };

    fetchWrongWords();
  }, []);


  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <Result>
        <span style={{ color: "red" }}>{wrongWords.length}</span> 문제 오답!
      </Result>
      <Desc>
        <span style={{ color: "yellow" }}>오답 단어</span>
      </Desc>
      {wrongWords.map((word) => (
        <WrongWord key={word.id}>
          <div>
            <p>.</p>
          </div>
          <WordLength>
            <p style={{ padding: "0 30px" }}>{word.word}</p>
            <hr style={{ marginTop: "-20px" }} />
          </WordLength>
          <WordLength>
            <p style={{ padding: "0 30px" }}>{"sqs"}</p>
            <hr style={{ marginTop: "-20px" }} />
          </WordLength>
        </WrongWord>
      ))}
      <Link to="/main">
        <BottomRow>
          <PuppleInputButton type={"button"} title={"메인으로 돌아가기"} />
        </BottomRow>
      </Link>
    </>
  );
}
