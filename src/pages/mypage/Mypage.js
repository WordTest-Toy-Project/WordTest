import Page from "../../components/title/Title_MyPage";
import { IdBox } from "./style";
import { Div } from "./style";
import { Text } from "./style"; 
import { Horizon } from "./style";
import {Extra} from "./style";
import { BackButton } from "./style";
import { Bottom } from "./style";
import { BottomButton } from "./style";
import { Link } from 'react-router-dom';
import { WordAndMean } from "./style";
import { Img } from "./style";
export default function Mypage() {
    return (
      <>
      <Div>
        <Link to="/main">
          <BackButton>
            <img src="/image/back_arrow.svg" width={90} height={90}></img>
          </BackButton>
        </Link>
        <Page></Page>
        <IdBox>ID : </IdBox>
        <Text>설정</Text>
        <Horizon></Horizon>  
        <Link to="/favorite">
          <Extra>즐겨찾기</Extra>
        </Link>
        
        <Text>테스트</Text>
        <Horizon></Horizon> 
        
        <WordAndMean>
          <Extra style={{marginLeft: 150+"px"}}>단어/뜻</Extra>
            <Img src="/image/switch.svg"></Img>
        </WordAndMean>
        
        <Bottom>
          <BottomButton>탈퇴하기</BottomButton>
          <Link to="https://github.com/morningB">
            <BottomButton>문의하기</BottomButton>
          </Link>
          
        </Bottom>
      </Div>
      </>
    );
  }