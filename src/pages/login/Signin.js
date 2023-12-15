import {
  Desc,
  InputContainer,
  SignBtn
} from './style';

//library
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
//components
import LoginInput from "../../components/loginInput/LoginInput";
import Title from "../../components/title/Title";
import Fotter from "../../components/footer/Footer";

export default function Signin() {
  const childCount = 3; // childCount 값을 동적으로 변경하거나 로직에 따라 설정
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const LoginHandler = async () => {
    try{
      const response = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/signin`, {
          username: username,
          password: password,
        });
        if (response.status === 200) {
        console.log('로그인 성공!');
        alert("로그인 성공!");
        navigate('/main');
      } else {
        console.error('로그인 실패');
      }
    } catch (error) {
      // 에러가 발생했을 때 에러 메시지 출력
      if (axios.isAxiosError(error)) {
        console.error('Axios 에러:', error.response?.data || error.message);
      } else {
        console.error('네트워크 오류:', error.message);
      }
    }
  };

  return (
    <>
      <Title title={"Word Test"}/>
      <Desc>간단한 테스트 시작하기</Desc>
      <InputContainer $childCount={childCount}>
        <LoginInput type={"text"} placeholder={"ID 입력"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <LoginInput type={"password"} placeholder={"Password 입력"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <SignBtn onClick={()=>{
            LoginHandler()
          }}>로그인</SignBtn>
      </InputContainer>
      <Fotter desc={"간편 회원가입"} signup={"signup"}/>
    </>
  );
}
