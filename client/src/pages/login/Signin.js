import { Desc, InputContainer, SignBtn } from "./style";

//library
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//components
import LoginInput from "../../components/input/LoginInput";
import Title from "../../components/title/Title";
import Fotter from "../../components/footer/Footer";
//sampleData
import sampleJson from '../../sample.json';

export default function Signin() {
  const navigate = useNavigate();
  console.log("샘플 데이터 확인: ", sampleJson);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const LoginHandler = () => {
    
  }

  return (
    <>
      <div style={{ height: "50px" }}></div>
      <Title title={"Word Test"} />
      <Desc>간단한 테스트 시작하기</Desc>
      <InputContainer>
        <LoginInput
          type={"text"}
          placeholder={"ID 입력"}
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <LoginInput
          type={"password"}
          placeholder={"Password 입력"}
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <SignBtn
          onClick={() => {
            LoginHandler();
          }}
        >
          로그인
        </SignBtn>
      </InputContainer>
      <Fotter desc={"간편 회원가입"} signup={"signup"} />
    </>
  );
}
