import {
  Desc,
  InputContainer
} from './style';

import LoginInput from "../../components/loginInput/LoginInput";
import Title from "../../components/title/Title";
import Fotter from "../../components/footer/Footer";

export default function Signin() {
  const childCount = 3; // childCount 값을 동적으로 변경하거나 로직에 따라 설정

  return (
    <>
      <Title title={"Word Test"}/>
      <Desc>간단한 테스트 시작하기</Desc>
      <InputContainer $childCount={childCount}>
        <LoginInput type={"text"} placeholder={"ID 입력"}/>
        <LoginInput type={"password"} placeholder={"Password 입력"}/>
        <LoginInput type={"password"} placeholder={"Password 재입력"}/>
      </InputContainer>
      <Fotter desc={"간편 회원가입"} signup={"signup"}/>
    </>
  );
}
