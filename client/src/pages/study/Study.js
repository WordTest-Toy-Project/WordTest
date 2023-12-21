import Header from "../../components/header/Header";
import WordTable from "../../containers/wordTable/WordTable";
//import {  useState } from "react";
import sampleJson from "../../sample.json"
export default function Study() {
  // Study 페이지에서 단어 정보를 WordTable->Table로 전달
  //const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(sampleJson[0].words)
  return (
    <>
      <Header $back={true} $title={true} $addWord={true} $gear={false} />
      <WordTable
        storedUser={sampleJson[0].words}
      />
    </>
  );
}
