import styled from "styled-components";

import { GrayBox } from "../../components/button/GrayButton/style";

export const Div = styled.div`
    position:relative;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const IdBox = styled(GrayBox)`   
    font-size: 100px;
    color: white;
    width: 895px;
    height: 163px;
    margin-bottom: 30px;
    margin-top:40px;
    margin-left:30px;
    margin-right:30px;
    border-color:yellow;
    text-align:left;
    font-size: 50px;
    text-indent:60px;
    font-weight:bold;
`; 

export const Text = styled.p`
    font-size:54px;
    font-weight: bold;
    color: white;
    text-indent: -200px;
`;
export const Horizon = styled.hr`
    border: 3px solid #B6B3B3;
    width:50%;
    margin-top:-50px;
`;

export const Extra =styled(Text)`
    font-size:40px;
    
    :hover{
        text-decoration:none;
    }
`;

export const Bottom = styled.div`
    display:inline-block;
    margin: 50px;

`;
export const WordAndMean = styled.div`
    display: flex;
    flex-direction:row;
    
`;
export const Img = styled.img`
    width:60px;
    height:60px;
    margin-top:40px;
    margin-left:100px
`;
export const BottomButton = styled(GrayBox)`
    color:white;
    font:50px bold;
    text-align:center;
    width: 300px;
    height: 110px;
    margin-left:50px;
    margin-top:50px;
    
`;