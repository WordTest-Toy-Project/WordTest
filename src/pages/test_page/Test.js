//library
import { Link } from "react-router-dom";

import {
  BottomRow,  
  ExampleInput,  
  HorizonBlock,
  NumInput,
  Text,
  InputBlock,
  WordAndMeanBlock,
  WordAndMeanInput,
}  from "./style";
//components
import Header from "../../components/header/Header";
import  PuppleInputButton  from "../../components/button/PuppleButton/PuppleInputButton";
import Title from '../../components/title/Title';

export default function Test() {
    return (
      <>
        <Header/>
        <Title title={"Word Test"}/>
        <InputBlock >
          <Text style={{position:"absolute", top:"-60px"}}>문제 수 입력</Text>
          <NumInput type={"text"} maxLength={3}></NumInput>
          <Text>문제</Text>
        </InputBlock>
          
        <HorizonBlock>
          <ExampleInput type={"text"} disabled={true} placeholder="단어"></ExampleInput>
          <ExampleInput type={"text"} disabled={true} placeholder="뜻"></ExampleInput>
        </HorizonBlock>

        <WordAndMeanBlock>
          <div style={{display:"flex",flexDirection:"row"}}>
           <WordAndMeanInput></WordAndMeanInput>
           <WordAndMeanInput></WordAndMeanInput>
          </div>
          <div style={{display:"flex",flexDirection:"row"}}>
           <WordAndMeanInput></WordAndMeanInput>
           <WordAndMeanInput></WordAndMeanInput>
          </div>
          <div style={{display:"flex",flexDirection:"row"}}>
           <WordAndMeanInput></WordAndMeanInput>
           <WordAndMeanInput></WordAndMeanInput>
          </div>
          
        </WordAndMeanBlock>
        
        <BottomRow>
          <PuppleInputButton 
            type={"button"}
            title={"등록"} 
            width={200+"px"} 
            height={90+"px"} 
            fontsize={35+"px"}/> 
            
          <PuppleInputButton 
            type={"button"}
            title={"입력 추가"} 
            width={200+"px"} 
            height={90+"px"} 
            fontsize={29+"px"}/>

          <Link to="/test-start">
            <PuppleInputButton 
            type={"submit"}
            title={"시작"} 
            width={200+"px"} 
            height={90+"px"} 
            fontsize={35+"px"}/>
          </Link>

          <PuppleInputButton 
            type={"button"}
            title={"초기화"} 
            width={200+"px"} 
            height={90+"px"} 
            fontsize={35+"px"}/>
        </BottomRow>


      </>
    );
}
