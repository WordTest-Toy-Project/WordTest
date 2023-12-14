import {
  TableContainer,
  Row0,
  Row1,
  Row2,
  Row3,
  Img
} from './style';

import { useState } from 'react';

export default function Table(){
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
      {sampleJson.map((test) => (
        <TableContainer key={test.id}>
          <Row0>
          <Image />
          </Row0>
          <Row1>{test.word}</Row1>
          <Row2>{test.mean}</Row2>
          <Row3><img src="./image/xbtn.png" alt="삭제" width="35px" /></Row3>
        </TableContainer>
      ))}
    </>
  );
}

function Image(){
  const [scrap, setScrap] = useState(false);
  function scrapHandler(){
    setScrap(!scrap);
  }
  return(
    <Img 
      $scrapState={scrap}
      onClick={scrapHandler}/>
  );
}