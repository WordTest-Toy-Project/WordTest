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

  return (
    <>
      <Header $back={true} $title={true} $addWord={true} $gear={false} />
      <WordTable studyWord={studyWord} />
    </>
  );
}
