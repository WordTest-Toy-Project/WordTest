import styled from "styled-components";
import {GrayBox} from "../button/GrayButton/style";
export  const HeaderWrap = styled.div`
    display:flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content:center;
`;

export const Img = styled.img`
    width:90px;
    height:90px;
`;

export const BackButton = styled(GrayBox)`
    position:absolute;
    top:10px;
    left:10px;
`;
export const GearButton = styled(GrayBox)`
    position:absolute;
    top:10px;
    right:10px;  
`;
export const WordTest = styled.h1`
    position:absolute;
    color : white;
    text-align: center;
    font-size: 100px;
    top:80px;
  
`;
