import Header from "../../components/header/Header";
import WordTable from "../../containers/wordTable/WordTable";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Study() {
  // Study 페이지에서 단어 정보를 WordTable->Table로 전달
  const [studyWord, setStudyWord] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_LOCAL_URL}/study`,
        );
        setStudyWord(response.data);
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    fetchData();
  }, []);

  const onDeleteWord = (wordId) => {
    // 서버로 DELETE 요청을 보내는 코드 작성
    fetch(`http://localhost:9000/deleteWord/${wordId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // 서버 응답 로그 출력
        // 삭제에 성공했다면 화면에서 해당 단어를 업데이트
        // 예: onDeleteSuccess 함수를 호출하여 studyWord 상태를 업데이트
      })
      .catch((error) => console.error("Error:", error));
  };

  const onScrapWord = (wordId) => {
    // 서버로 POST 요청을 보내는 코드 작성
    fetch(`http://localhost:9000/scrapWord/${wordId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // 서버 응답 로그 출력
        // 스크랩에 성공했다면 화면에서 해당 단어를 업데이트
        // 예: onScrapSuccess 함수를 호출하여 studyWord 상태를 업데이트
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <Header $back={true} $title={true} $addWord={true} $gear={false} />
      <WordTable
        studyWord={studyWord}
        onDeleteWord={onDeleteWord}
        onScrapWord={onScrapWord}
      />
    </>
  );
}
