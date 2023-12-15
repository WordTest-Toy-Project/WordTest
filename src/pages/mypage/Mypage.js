import Title from "../../components/title/Title";
import Header from '../../components/header/Header';

import { 
  IdBox,
  Div,
  Text,
  Horizon,
  Extra,
  Bottom,
  BottomButton,
  WordAndMean,
  Img,
} from "./style";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Mypage() {
  const [users,setUsers] = useState([
    { id: 1, password: 'asdfddd' },
  ]);

  const handleDelete = (id) =>{
    const updatedUers = users.filter(user => user.id !== id);
    setUsers(updatedUers);
  }


    return (
      <>
      <Div>
        <Header $back={true} $title={false} $addWord={false} $gear={false}/>

        <Title title={"My Page"}></Title>

        <IdBox>ID : {users.id}</IdBox>
        <Text></Text>
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
        {users.map(user => (
            <BottomButton key={user.id} onClick={() => handleDelete(user.id)}>탈퇴하기</BottomButton>
            )
          )
        }

          <Link to="https://github.com/morningB">
            <BottomButton>문의하기</BottomButton>
          </Link>
          
        </Bottom>
      </Div>
      </>
    );
  }