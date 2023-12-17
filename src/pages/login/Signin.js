import { Desc, InputContainer, SignBtn } from "./style";

//library
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//components
import LoginInput from "../../components/input/LoginInput";
import Title from "../../components/title/Title";
import Fotter from "../../components/footer/Footer";

export default function Signin() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const LoginHandler = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/signin`,
        {
          username: user.username,
          password: user.password,
        },
      );
      if (response.status === 200) {
        console.log("로그인 성공!");
        alert("로그인 성공!");
        navigate("/main");
      } else {
        console.error("로그인 실패");
      }
    } catch (error) {
      // 에러가 발생했을 때 에러 메시지 출력
      if (axios.isAxiosError(error)) {
        console.error("Axios 에러:", error.response?.data || error.message);
      } else {
        console.error("네트워크 오류:", error.message);
      }
    }
  };

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
