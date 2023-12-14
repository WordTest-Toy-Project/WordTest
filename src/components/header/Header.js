import { 
    BackButton,
    GearButton,
    HeaderWrap,
    Img
} from "./style";
import { Link } from "react-router-dom";
import Title from "../title/Title";
export default function Header(){
    return (
        <div style={{height: "100px"}}>
            <HeaderWrap>
                <Title title={"Word Test"}/>
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
        </div>
    );
}