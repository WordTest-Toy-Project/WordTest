import styled from "styled-components";

export const Horizon = styled.hr`
    border: 3px solid #B6B3B3;
    width: 400px;
    margin-top: 400px;
`;

export const HorizonBlock = styled.div`
    display :flex;
    align-items:center;
    
`;
export const InputBlock = styled.div`
    display:flex;
    position: absolute;
    right:20px;
    top:380px;
    
`;
export const WordAndMeanBlock = styled(HorizonBlock)`
    margin-top: 0px;
   gap:30px;
`;

export const InputText = styled.input`
    border:none;
    border-bottom: 3px solid #B6B3B3;
    margin:0;
    background-color: #0C0C0D;
    color: white;
    font-size: 30px;
    text-align:center;
    
`;
export const NumInput = styled(InputText)`
    width:110px;
    height:30px;
`;


export const Text = styled.p`
    color : #B6B3B3;
    font-size:30px;
    margin: 0;
    margin-left:15px;
`;

export const BottomRow = styled.div`
    position: absolute;
    display:flex;
    gap:50px;
    bottom: 10px;
    margin-left:72px;
    margin-right:72px;
    justify-content:center;
    align-items:center;
    width:90%
`;
