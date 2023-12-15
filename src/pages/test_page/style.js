import styled from "styled-components";

export const Horizon = styled.hr`
    border: 3px solid #B6B3B3;
    width: 400px;
    margin-top: 400px;
   
`;

export const HorizonBlock = styled.div`
    display :flex;
    align-items:center;
    justify-content:center;
`;
export const InputBlock = styled.div`
    display:flex;
    position: absolute;
    right:20px;
    top:350px;
    
`;
export const WordAndMeanBlock = styled(HorizonBlock)`
    flex-direction:column;
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
export const ExampleInput = styled(InputText)`
    width:400px;
    font-size:25px;
    margin-top: 400px;
    text-align:left;
    margin-left:50px;
    margin-right:50px;
`;

export const WordAndMeanInput =styled(InputText)`
    width:350px;
    height:40px;
    font-size:40px;
    margin: 0 auto;
    margin-top: 100px;
    margin-left:50px;
    margin-right:50px;
    
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
    position: fixed;
    display:flex;
    gap:50px;
    bottom: 10px;
    margin-left:72px;
    margin-right:72px;
    justify-content:center;
    align-items:center;
    width:90%
`;
