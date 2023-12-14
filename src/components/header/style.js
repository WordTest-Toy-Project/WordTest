import styled from "styled-components";
import {GrayBox} from "../button/GrayButton/style";
export  const HeaderWrap = styled.div`
    display:flex;
    flex-direction: row;
    position: relative;
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