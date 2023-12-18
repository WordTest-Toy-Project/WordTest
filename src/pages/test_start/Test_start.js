import {
  BottomRow,
  InputText,
  Text,
  WordOrMean,
  WordOrMeanBlock,
} from "./style";
//components
import Header from "../../components/header/Header";
import PuppleInputButton from "../../components/button/PuppleButton/PuppleInputButton";
import Title from "../../components/title/Title";

export default function Test_start() {
  return (
    <>
      <Header $back={true} $title={false} $addWord={false} $gear={true} />
      <Title title={"Word Test"} />
      <Text>{"13"} 문제</Text>

      <WordOrMeanBlock>
        <WordOrMean>
          {"num. "} {"word"}
        </WordOrMean>
        <InputText></InputText>
        <WordOrMean>
          {"num. "} {"word"}
        </WordOrMean>
        <InputText></InputText>
        <WordOrMean>
          {"num. "} {"word"}
        </WordOrMean>
        <InputText></InputText>
        <WordOrMean>
          {"num. "} {"word"}
        </WordOrMean>
        <InputText></InputText>
      </WordOrMeanBlock>

      <BottomRow>
        <PuppleInputButton type="submit" title={"제출"}></PuppleInputButton>
      </BottomRow>
    </>
  );
}