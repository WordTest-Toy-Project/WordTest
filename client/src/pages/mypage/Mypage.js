import Title from "../../components/title/Title";
import Header from "../../components/header/Header";

import {
  IdBox,
  Div,
  Text,
  Horizon,
  Extra,
  Bottom,
  BottomButton,
  WordAndMean,
  Img,
} from "./style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Mypage({ username }) {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");

  // 가져온 정보가 있다면 JSON 형태로 파싱하여 사용자 정보 추출
  const userObject = storedUser ? JSON.parse(storedUser) : null;
  const username0 = userObject ? userObject.username : "";

  const handleDeleteAccount = async () => {
    try {
      // 서버로 DELETE 요청 보내기
      const response = await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/deleteUser`, {
        data: { username },
      });

      // 응답 처리
      console.log(response.data.message); // 서버에서 전송한 메시지 출력 또는 다른 처리 수행
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error);
      // 에러 처리: 사용자에게 알림 또는 다른 처리 수행
    }
  };

  return (
    <>
      <Div>
        <Header $back={true} $title={false} $addWord={false} $gear={false} />

        <Title title={"My Page"}></Title>

        <IdBox>ID : {username0}</IdBox>
        <Text></Text>
        <Horizon></Horizon>
        <Link to="/favorite" style={{ textDecoration: "none" }}>
          <Extra>즐겨찾기</Extra>
        </Link>

        <Text>테스트</Text>
        <Horizon></Horizon>

        <WordAndMean>
          <Extra style={{ marginLeft: 150 + "px" }}>단어/뜻</Extra>
          <Img src="/image/switch.svg"></Img>
        </WordAndMean>

        <Bottom>
          <BottomButton key={username} onClick={() => handleDeleteAccount()}>
            탈퇴하기
          </BottomButton>

          <Link to="https://github.com/morningB">
            <BottomButton>문의하기</BottomButton>
          </Link>
        </Bottom>
      </Div>
    </>
  );
}