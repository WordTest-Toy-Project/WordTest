import styled from "styled-components";


export const InputText = styled.input`
    border:none;
    border-bottom: 3px solid #B6B3B3;
    background-color: #0C0C0D;
    color: white;
    font-size: 30px;
    width:350px;
`;

export const Text = styled.p`
    color : #B6B3B3;
    font-size:30px;
    
    margin-left:15px;
    margin-top:-130px;
`;
export const InputBlock = styled.div`
    display:flex;
    position: absolute;
    left:20px;
    top:350px;
    
`;
export const BottomRow = styled.div`
    position: fixed;
    display:flex;
    gap:50px;
    bottom: 10px;
    margin-left:72px;
    margin-right:72px;
    justify-content:right;
    align-items:center;
    width:90%
`;

export const WordOrMean = styled.h3`
    font-size:50px;
    color:white;

`;

export const WordOrMeanBlock = styled.div`
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:column;
    margin-top:130px;
`;