import {
  TextContainer,
  Rows0,
  Rows1,
  Rows2,
  Rows3,
} from './style';

export default function Text(){
  return (
    <TextContainer>
      <Rows0></Rows0>
      <Rows1>단어</Rows1>
      <Rows2>뜻</Rows2>
      <Rows3>삭제</Rows3>
    </TextContainer>
  );
}