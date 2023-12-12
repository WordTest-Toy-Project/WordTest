import {
  TableContainer,
  Row0,
  Row1,
  Row2,
  Row3,
  Image
} from './style';

export default function table(){
  const sampleJson = [
    {
      id: 0,
      scrap: true,
      word: "Apple",
      mean: "사과"
    },
    {
      id: 1,
      scrap: true,
      word: "Banana",
      mean: "바나나"
    },
    {
      id: 2,
      scrap: false,
      word: "Chicken",
      mean: "치킨"
    },
    {
      id: 3,
      scrap: true,
      word: "Room",
      mean: "방"
    },
  ]

  return (
    <>
      {sampleJson.map((test) => (
        <TableContainer key={test.id}>
          <Row0><Image 
          $scrapState={test.scrap} /></Row0>
          <Row1>{test.word}</Row1>
          <Row2>{test.mean}</Row2>
          <Row3><img src="./image/xbtn.png" alt="삭제" width="35px" /></Row3>
        </TableContainer>
      ))}
    </>
  );
}