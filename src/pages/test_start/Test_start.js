import Header from "../../components/header/Header";
import  PuppleInputButton  from "../../components/button/PuppleButton/PuppleInputButton";
import { BottomRow, InputBlock,InputText,Text, WordOrMean,WordOrMeanBlock } from "./style";
export default function Test_start() {
    return (
      <>
       <Header/>
       <InputBlock>
        <Text>{"13"} 문제</Text>
       </InputBlock>

        <WordOrMeanBlock>
         <WordOrMean>{"num. "} {"word"}</WordOrMean>
         <InputText></InputText>
         <WordOrMean>{"num. "} {"word"}</WordOrMean>
         <InputText></InputText>
         <WordOrMean>{"num. "} {"word"}</WordOrMean>
         <InputText></InputText>
         <WordOrMean>{"num. "} {"word"}</WordOrMean>
         <InputText></InputText>

        </WordOrMeanBlock>
       


       <BottomRow>
        <PuppleInputButton 
        type="submit" 
        title={"제출"} 
        width={200+"px"} 
        height={90+"px"}
        fontsize={30+"px"}
        ></PuppleInputButton>
        </BottomRow>

       
       </>
    );

  }