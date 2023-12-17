import Header from "../../components/header/Header";
import WordTable from "../../containers/wordTable/WordTable";

import { Title } from "./style";

export default function Favorite() {
  //Favorite 페이지에서 단어 정보를 WordTable->Table로 전달
  const sampleJson = [
    {
      id: 0,
      word: "Apple",
      meaning: "사과",
    },
    {
      id: 1,
      word: "Banana",
      meaning: "바나나",
    },
    {
      id: 2,
      word: "Chicken",
      meaning: "치킨",
    },
  ];
  return (
    <>
      <Header $back={true} $title={true} $addWord={false} $gear={false} />
      <Title>
        즐겨찾기 <span style={{ color: "yellow" }}>단어</span>
      </Title>
      <WordTable studyWord={sampleJson} />
    </>
  );
}
