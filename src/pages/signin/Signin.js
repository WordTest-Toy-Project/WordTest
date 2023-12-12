import {
  Desc,
  InputContainer
} from './style';

import LoginInput from "../../components/loginInput/LoginInput";
import Title from "../../components/title/Title";

export default function Signin() {
    return (
      <>
        <Title />
        <Desc>간단한 테스트 시작하기</Desc>
        <InputContainer>
          <LoginInput type={"text"} placeholder={"ID 입력"}/>
          <LoginInput type={"password"} placeholder={"Password 입력"}/>
        </InputContainer>
      </>
    );
  }