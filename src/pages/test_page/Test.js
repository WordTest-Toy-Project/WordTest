
import Header from "../../components/header/Header";
import  PuppleInputButton  from "../../components/button/PuppleButton/PuppleInputButton";
import {BottomRow,  ExampleInput,  HorizonBlock}  from "./style";
import { NumInput ,Text, InputBlock} from "./style";
import { WordAndMeanBlock,WordAndMeanInput } from "./style";
import { Link } from "react-router-dom";

export default function Test() {
    return (
      <>
        <Header/>
        
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
          <div>
           <WordAndMeanInput></WordAndMeanInput>
           <WordAndMeanInput></WordAndMeanInput>
          </div>
          <div>
           <WordAndMeanInput></WordAndMeanInput>
           <WordAndMeanInput></WordAndMeanInput>
          </div>
          <div>
           <WordAndMeanInput></WordAndMeanInput>
           <WordAndMeanInput></WordAndMeanInput>
          </div>
          
        </WordAndMeanBlock>

        <BottomRow>
          <PuppleInputButton 
            title={"등록"} 
            width={200+"px"} 
            height={90+"px"} 
            fontsize={35+"px"}/> 
            
          <PuppleInputButton 
            title={"입력 추가"} 
            width={200+"px"} 
            height={90+"px"} 
            fontsize={29+"px"}/>

          <Link to="/test_start">
            <PuppleInputButton 
            title={"시작"} 
            width={200+"px"} 
            height={90+"px"} 
            fontsize={35+"px"}/>
          </Link>

          <PuppleInputButton 
            title={"초기화"} 
            width={200+"px"} 
            height={90+"px"} 
            fontsize={35+"px"}/>
        </BottomRow>


      </>
    );
}
