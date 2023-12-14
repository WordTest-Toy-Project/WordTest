
import Header from "../../components/header/Header";
import  PuppleInputButton  from "../../components/button/PuppleButton/PuppleInputButton";
import {BottomRow, Horizon, HorizonBlock, InputText}  from "./style";
import { NumInput ,Text, InputBlock} from "./style";
import { WordAndMeanBlock } from "./style";
import { Link } from "react-router-dom";
export default function Test() {
    return (
      <>
        <Header/>
        <div>
          <InputBlock >
            <Text style={{position:"absolute", top:"-60px"}}>문제 수 입력</Text>
            <NumInput type={"text"} maxLength={3}></NumInput>
            <Text>문제</Text>
          </InputBlock>
          
          <HorizonBlock>
            <Horizon/>
        
            <Horizon/>
            
          </HorizonBlock>

        </div>
        
        
        <BottomRow>
          <PuppleInputButton 
          title={"등록"} 
          width={200+"px"} 
          height={90+"px"} 
          fontsize={35+"px"}/> 
          <PuppleInputButton 
          title={"입력 추가"} 
          width={200+"px"} height={90+"px"} 
          fontsize={35+"px"}/>
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
        <div>
        <WordAndMeanBlock>
           <InputText></InputText>
           <InputText></InputText>
        </WordAndMeanBlock>
        </div>

      </>
    );
}
