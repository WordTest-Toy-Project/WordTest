import Header from "../../components/header/Header";
import WordTable from "../../containers/wordTable/WordTable";

import { Title } from "./style";
import sampleJson from '../../sample.json';
export default function Favorite() {
  //Favorite 페이지에서 단어 정보를 WordTable->Table로 전달
    console.log(sampleJson[0].words);
  return (
    <>
      <Header $back={true} $title={true} $addWord={false} $gear={false} />
      <Title>
        즐겨찾기 <span style={{ color: "yellow" }}>단어</span>
      </Title>
      <WordTable storedUser={sampleJson}/>
      {/* sampleJson[0] 과 sampleJson만 했을때의 차이 x */}
    </>
  );
}
