import { TableContainer, Row0, Row1, Row2, Row3, Img } from "./style";
//import axiosInstance from "./../../utils/axiosInterceptor/axiosInterceptor";
//import { useState } from "react";

export default function Table({ studyWord }) {
  //const [wordState, setWordState] = useState(studyWord);

  //const sendScrapHandler = async (wordId) => {
  //   setWordState((prevState) => {
  //     const updatedWordState = { ...prevState };
  //     updatedWordState[wordId] = {
  //       ...updatedWordState[wordId],
  //       is_scrap: !updatedWordState[wordId].is_scrap,
  //     };
  //     return updatedWordState;
  //   });
  //   try {
  //     // scrap 상태를 서버에 전달
  //     await axiosInstance.post(`/scrap/${wordId}`, {
  //       isScrap: wordState[wordId].is_scrap,
  //     });
  //     alert("스크랩이 완료되었습니다!");
  //   } catch (error) {
  //     if (error.response.status === 400) {
  //       alert("이미 스크랩 된 글입니다.");
  //     }
  //     console.log("스크랩 실패: ", error.response.data.message);
  //   }
  // };

  return (
    <>
      {studyWord.map((test) => (
        <TableContainer key={test.id}>
          <Row0>
            <Image />
          </Row0>
          <Row1>{test.word}</Row1>
          <Row2>{test.meaning}</Row2>
          <Row3>
            <img src="./image/xbtn.png" alt="삭제" width="35px" />
          </Row3>
        </TableContainer>
      ))}
    </>
  );
}

// Image 컴포넌트
function Image() {
  return <Img />;
}
