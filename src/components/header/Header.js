import { 
    BackButton,
    GearButton,
    HeaderWrap,
    Img,
    WordTest 
} from "./style";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <HeaderWrap>
            <WordTest>WordTest</WordTest>
            <Link to="/main">
                <BackButton>
                    <Img src="/image/back_arrow.svg"></Img>
                </BackButton>
            </Link>
            <Link to="/mypage">
                <GearButton>
                    <Img src="/image/gear.png"></Img>
                </GearButton>
            </Link>
            
        </HeaderWrap>
    );
}