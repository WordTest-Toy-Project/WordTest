import Header from '../../components/header/Header';
import WordTable from '../../containers/wordTable/WordTable';

export default function Study() {
  //Study 페이지에서 단어 정보를 WordTable->Table로 전달
  const sampleJson = [
    {
      id: 0,
      word: "Apple",
      mean: "사과"
    },
    {
      id: 1,
      word: "Banana",
      mean: "바나나"
    },
    {
      id: 2,
      word: "Chicken",
      mean: "치킨"
    },
    {
      id: 3,
      word: "Room",
      mean: "방"
    },
    {
      id: 4,
      word: "Room",
      mean: "방"
    },
    {
      id: 5,
      word: "Room",
      mean: "방"
    },
    {
      id: 6,
      word: "Room",
      mean: "방"
    },
    {
      id: 7,
      word: "Room",
      mean: "방"
    },
    {
      id: 8,
      word: "Room",
      mean: "방"
    },
    {
      id: 9,
      word: "Room",
      mean: "방"
    },
    {
      id: 10,
      word: "Room",
      mean: "방"
    },
    {
      id: 11,
      word: "Room",
      mean: "방"
    },
    {
      id: 12,
      word: "Room",
      mean: "방"
    },
    {
      id: 13,
      word: "Room",
      mean: "방"
    },
    {
      id: 14,
      word: "Cup",
      mean: "컵"
    },
    {
      id: 15,
      word: "Cup",
      mean: "컵"
    },
  ]
    return (
      <>
        <Header $back={true} $title={true} $addWord={true} $gear={false}/>
        <WordTable sampleJson={sampleJson}/>
      </>
    );
  }