import {
  Div,
  Hr,
  BottomDiv,
} from './style';

export default function Footer({desc, signup}){
  return (
    <>
      <Div>
        <Hr/>
        <span style={{color: "white", fontSize: "20px"}}>{desc}</span>
        <Hr/>
      </Div>
      <BottomDiv>
        <div style={{color: "white", fontSize: "25px"}}>{signup}</div>
        <div></div>
        <div></div>
      </BottomDiv>
    </> 
  );
}