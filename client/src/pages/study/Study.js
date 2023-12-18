import Header from "../../components/header/Header";
import WordTable from "../../containers/wordTable/WordTable";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Study() {
  const storedUser = localStorage.getItem("user");
  // Study 페이지에서 단어 정보를 WordTable->Table로 전달
  const user = storedUser ? JSON.parse(storedUser) : null;
  console.log(user);
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

const updateScrapStatus = async (wordId, userId, isScrap) => {
  try {
    const response = await fetch(`http://localhost:9000/scrapWord/${wordId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        is_scrap: isScrap,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <>
      <Header $back={true} $title={true} $addWord={true} $gear={false} />
      <WordTable
        studyWord={studyWord}
        onDeleteWord={onDeleteWord}
        updateScrapStatus={updateScrapStatus}
      />
    </>
  );
}
