import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import WordTable from "../../containers/wordTable/WordTable";
//import {  useState } from "react";

export default function Study() {
  // Study 페이지에서 단어 정보를 WordTable->Table로 전달
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);
  console.log(user.words[2].is_scrap);

  const changeInfo = (userId) => {
    setUser((prevUser) => {
      const updatedUser = { ...prevUser };
      updatedUser.words[userId].is_scrap = !updatedUser.words[userId].is_scrap;
      return updatedUser;
  });
}
useEffect(() => {
  console.log("asdf", user);
  localStorage.setItem("scrap", JSON.stringify(user));
}, [user]);

  return (
    <>
      <Header $back={true} $title={true} $addWord={true} $gear={false} />
      <WordTable
        storedUser={storedUser.words}
        changeInfo={changeInfo}
      />
    </>
  );
}
