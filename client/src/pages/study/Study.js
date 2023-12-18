import Header from "../../components/header/Header";
import WordTable from "../../containers/wordTable/WordTable";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Study() {
  const storedUser = localStorage.getItem("user");
  // Study 페이지에서 단어 정보를 WordTable->Table로 전달
  const user = storedUser ? JSON.parse(storedUser) : null;
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
      })
      .catch((error) => console.error("Error:", error));
  };

  const onScrapWord = (wordId) => {
  // 단어 스크랩 상태를 확인
  const isScrapped = studyWord.find((word) => word.word_id === wordId)?.is_scrap || false;

  // 스크랩 여부에 따라 요청 보내기
  const requestUrl = isScrapped
    ? `http://localhost:9000/scrapWord/${wordId}`
    : `http://localhost:9000/deleteScrapWord/${wordId}`;

  // 서버로 POST 또는 DELETE 요청을 보내는 코드 작성
  fetch(requestUrl, {
    method: isScrapped ? "DELETE" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user.user_id, // 이 부분은 실제 사용자 ID 필드에 맞게 수정해야 합니다.
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // 서버 응답 로그 출력
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
