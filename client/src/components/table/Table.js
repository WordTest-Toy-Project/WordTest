import React, { useEffect, useState } from "react";
<<<<<<< HEAD

import {
  TableContainer,
  Row0,
  Row1,
  Row2,
  Row3,
  Img,
} from "./style";

=======
import { TableContainer, Row0, Row1, Row2, Row3, Img as StyledImg } from "./style";
>>>>>>> js/dev

export default function Table({ storedUser }) {
  const [deletedUserId, setDeletedUserId] = useState(null);
  const [filteredUser, setFilteredUser] = useState(storedUser);

  useEffect(() => {
    if (deletedUserId !== null) {
      // 삭제된 사용자를 필터링하여 상태 업데이트
      setFilteredUser((prevUsers) =>
        prevUsers.filter((_, index) => index !== deletedUserId)
      );
    }
  }, [deletedUserId]);
  const handleDelete = (index) => {
    // 삭제된 사용자의 인덱스를 설정하여 useEffect를 트리거
    setDeletedUserId(index);
  };

  console.log(filteredUser);
  console.log(deletedUserId);
  const handleScrap = (index) => {
    // 스크랩 상태를 변경하여 이미지 업데이트
    const updatedUser = [...filteredUser];
    updatedUser[index].is_scrap = !updatedUser[index].is_scrap;
    setFilteredUser(updatedUser);
  };

  return (
    <>
      {filteredUser.map((test, index) => (
        <TableContainer key={index}>
          <Row0>
            <Image
              isScrap={test.is_scrap}
              onClick={() => handleScrap(index)}
            />
          </Row0>
          <Row1>{test.word}</Row1>
          <Row2>{test.meaning}</Row2>
          <Row3>
            <img
              src="./image/xbtn.png"
              alt="삭제"
              width="35px"
              onClick={() => handleDelete(index)}
            />
          </Row3>
        </TableContainer>
      ))}
    </>
  );
}

// Image 컴포넌트
function Image({ isScrap, onClick }) {
  return <StyledImg $isScrap={isScrap} onClick={onClick} />;
}
