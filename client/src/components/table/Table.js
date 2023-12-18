import { TableContainer, Row0, Row1, Row2, Row3, Img } from "./style";

import { useState } from "react";

export default function Table({ studyWord, onDeleteWord, updateScrapStatus }) {
  const [clickedWordId, setClickedWordId] = useState(null);
  console.log(clickedWordId);
  const handleImageClick = (wordId) => {
    // 클릭한 이미지의 단어 아이디를 state에 저장
    setClickedWordId(wordId);

    // 서버로 DELETE 요청 보내기
    onDeleteWord(wordId);
    window.location.reload();
  };
  const handleClick = (wordId) => {
    // 클릭한 이미지의 단어 아이디를 state에 저장
    setClickedWordId(wordId);

    // 서버로 DELETE 요청 보내기
    updateScrapStatus(wordId);
  };

  return (
    <>
      {studyWord.map((test) => (
        <TableContainer key={test.word_id}>
          <Row0>
            <Image test={test} onClick={()=>handleClick(test.word_id)} />
          </Row0>
          <Row1>{test.word}</Row1>
          <Row2>{test.meaning}</Row2>
          <Row3>
            <img
              src="./image/xbtn.png"
              alt="삭제"
              width="35px"
              onClick={() => handleImageClick(test.word_id)}
            />
          </Row3>
        </TableContainer>
      ))}
    </>
  );
}

// Image 컴포넌트
function Image({onClick}) {
    const [isScrap, setIsScrap] = useState(false);
    function scrapClick(){
      if(isScrap === false){
        setIsScrap(!isScrap);
      }
    }
  return <Img onClick={()=>{
    onClick(),
    scrapClick();
  }} $isScrap={isScrap} />;
}
