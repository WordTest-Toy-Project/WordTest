import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PuppleInputButton from "../../components/button/PuppleButton/PuppleInputButton";

import { Link } from "react-router-dom";
import { Desc, Result, WrongWord, WordLength, BottomRow } from "./style";

export default function Test_result() {
  const storedResult = JSON.parse(localStorage.getItem('result')) || [];
  const wrongAnswers = Array.isArray(storedResult) ? storedResult.filter(user => user.is_wrong === true) : [];
  console.log(wrongAnswers);

  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <Result>
        <span style={{ color: "red" }}>{wrongAnswers.length}</span> 문제 오답!
      </Result>
      <Desc>
        <span style={{ color: "yellow" }}>오답 단어</span>
      </Desc>
      {wrongAnswers.map((word, index) => (
        <WrongWord key={index}>
          <div>
            <p>{index+1}</p>
          </div>
          <WordLength>
            <p style={{ padding: "0 30px" , textAlign:"center" }}>{word.word}</p>
            <hr style={{ marginTop: "-20px" }} />
          </WordLength>
          <WordLength>
            <p style={{ padding: "0 30px", textAlign:"center"}}>{word.meaning}</p>
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
