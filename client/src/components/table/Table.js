import React, { useEffect, useState } from "react";
import { TableContainer, Row0, Row1, Row2, Row3, Img } from "./style";

export default function Table({ storedUser }) {
  const [deletedUserId, setDeletedUserId] = useState(null);
  const [filteredUser, setFilteredUser] = useState(storedUser);

  useEffect(() => {
    if (deletedUserId !== null) {
      // 삭제된 사용자를 필터링하여 상태 업데이트
      const updatedUser = storedUser.filter((_, index) => index !== deletedUserId);
      setFilteredUser(updatedUser);
      localStorage.setItem("delete", JSON.stringify(updatedUser));
    }
  }, [deletedUserId, storedUser]);

  const handleDelete = (index) => {
    // 삭제된 사용자의 인덱스를 설정하여 useEffect를 트리거
    setDeletedUserId(index);
  };

  return (
    <>
      {filteredUser.map((test, index) => (
        <TableContainer key={index}>
          <Row0>
            <Image test={test} userId={index} />
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
function Image(props) {
  return <Img $isScrap={props.test.is_scrap} />;
}
