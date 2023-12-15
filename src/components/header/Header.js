import { 
    Button,
    HeaderWrap,
    Img,
    Title,
    AddWord,
    BackTitle
} from "./style";
import { Link } from "react-router-dom";
export default function Header({$back, $title, $addWord, $gear}){
    return (
        <div style={{height: "100px"}}>
            <HeaderWrap>
                <BackTitle>
                    {$back ? <Link to="/main">
                    <Button style={{left: "20px"}}>
                        <Img src="/image/back_arrow.svg"></Img>
                    </Button>
                </Link> : null}
                {$title ? <Title>Word Test</Title> : null}
                </BackTitle>
                {$addWord ? <Link to="/test" style={{textDecoration: "none"}}>
                    <AddWord>단어 추가</AddWord>
                </Link> : null}
                {$gear ? <Link to="/mypage">
                    <Button style={{right: "20px"}}>
                        <Img src="/image/gear.png"></Img>
                    </Button>
                </Link> : null}
            </HeaderWrap>
        </div>
    );
}