import Title from "../../components/title/Title";
import Header from "../../components/header/Header";
import sampleJson from '../../sample.json';
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

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Mypage({ username }) {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const userObject = storedUser ? JSON.parse(storedUser) : null;
  const userId = userObject ? userObject.username : "";

  const [imageIndex, setImageIndex] = useState(0);

  const handleWordAndMeanToggle = () => {
    // Toggle between different images
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const handleDeleteAccount = () => {
    const isConfirmed = window.confirm("정말로 계정을 삭제하시겠어요?");

    if(isConfirmed){
      //아이디 찾기
    const updatedSampleJson = sampleJson.filter((user) => user.id !== userObject.id);
    localStorage.setItem('sampleJson', JSON.stringify(updatedSampleJson));
    localStorage.removeItem("user");
    navigate("/");
    console.log(sampleJson[0].id);
    }
    
  };

  return (
    <>
      <Div>
        <Header $back={true} $title={false} $addWord={false} $gear={false} />

        <Title title={"My Page"}></Title>

        <IdBox>ID : {userId}</IdBox>
        <Text></Text>
        <Horizon></Horizon>
        <Link to="/favorite" style={{ textDecoration: "none" }}>
          <Extra>즐겨찾기</Extra>
        </Link>

        <Text>테스트</Text>
        <Horizon></Horizon>

        <WordAndMean onClick={handleWordAndMeanToggle}>
          <Extra style={{ marginLeft: 150 + "px" }}>단어/뜻</Extra>
          <Img src={imageIndex === 0 ? "/image/s2.png" : "/image/s1.png"}></Img>
        </WordAndMean>


        <Bottom>
          <BottomButton onClick={() => handleDeleteAccount()}>
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