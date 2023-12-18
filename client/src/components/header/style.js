import styled from "styled-components";
import {GrayBox} from "../button/GrayButton/style";
export  const HeaderWrap = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 20px 40px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
`;

export const Img = styled.img`
    width:90px;
    height:90px;
`;

export const Button = styled(GrayBox)`

`;

export const Title = styled.div`
    font-size: 40px;
`;

export const AddWord = styled.div`
    font-size: 25px;
    color: #fff;
`;

export const BackTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;