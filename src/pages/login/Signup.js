import {
  Desc,
  InputContainer
} from './style';

import LoginInput from "../../components/loginInput/LoginInput";
import Title from "../../components/title/Title";
import Fotter from "../../components/footer/Footer";

export default function Signup() {
    return (
      <>
        <Title />
        <Desc>간단한 테스트 시작하기</Desc>
        <InputContainer childCount={3}>
          <LoginInput type={"text"} placeholder={"ID 입력"}/>
          <LoginInput type={"password"} placeholder={"Password 입력"}/>
          <LoginInput type={"password"} placeholder={"Password 재입력"}/>
        </InputContainer>
        <Fotter desc={"돌아가기"} signup={"Login"}/>
      </>
    );
  }