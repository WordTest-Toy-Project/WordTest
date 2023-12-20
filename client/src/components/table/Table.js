import { TableContainer, Row0, Row1, Row2, Row3, Img } from "./style";

export default function Table({ storedUser, changeInfo }) {
  return (
    <>
      {storedUser.map((test, index) => (
        <TableContainer key={index}>
          <Row0>
            <Image test={test} changeInfo={changeInfo} />
          </Row0>
          <Row1>{test.word}</Row1>
          <Row2>{test.meaning}</Row2>
          <Row3>
            <img
              src="./image/xbtn.png"
              alt="삭제"
              width="35px"
            />
          </Row3>
        </TableContainer>
      ))}
    </>
  );
}

// Image 컴포넌트
function Image(props) {
  const scrapHandler = () => {
    props.changeInfo(props.test.id);
  }
  return <Img  $isScrap={props.test.is_scrap} onClick={scrapHandler}/>;
}
