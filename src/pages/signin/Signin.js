import LoginInput from "../../components/loginInput/LoginInput";

export default function Signin() {
    return (
      <>
        <LoginInput type={"text"} placeholder={"ID 입력"}/>
        <LoginInput type={"password"} placeholder={"Password 입력"}/>
      </>
    );
  }