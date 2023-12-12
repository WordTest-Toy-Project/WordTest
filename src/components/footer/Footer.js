import {
  Div,
  Hr,
  BottomDiv,
} from './style';

import { Link } from 'react-router-dom';

export default function Footer({desc, signup}){
  return (
    <>
      <Div>
        <Hr/>
        <span style={{color: "white", fontSize: "20px"}}>{desc}</span>
        <Hr/>
      </Div>
      <BottomDiv>
        <Link to= {signup === "Login" ? '/' : '/signup'}>
          <div style={{color: "white", fontSize: "25px"}}>{signup}</div>
        </Link>
        <div></div>
        <div></div>
      </BottomDiv>
    </> 
  );
}