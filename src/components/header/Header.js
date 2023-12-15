import { 
    BackButton,
    GearButton,
    HeaderWrap,
    Img
} from "./style";
import { Link } from "react-router-dom";
export default function Header(){
    return (
        <div style={{height: "100px"}}>
            <HeaderWrap>
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