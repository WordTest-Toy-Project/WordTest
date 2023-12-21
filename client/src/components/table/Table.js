import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Row0,
  Row1,
  Row2,
  Row3,
  Img,
} from "./style";

export default function Table({ storedUser }) {
  
  const [deletedUserId, setDeletedUserId] = useState(null);
  useEffect(() => {
    if (deletedUserId !== null) {
      const updatedUser = storedUser.filter((_, index) => index !== deletedUserId);
      localStorage.setItem("delete", JSON.stringify(updatedUser));
    }
  }, [deletedUserId, storedUser]);

  return (
    <>
      {storedUser.map((test, index) => (
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
              onClick={() => setDeletedUserId(index)}
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
