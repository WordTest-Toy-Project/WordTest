import styled from "styled-components";

export const Horizon = styled.hr`
  border: 3px solid #b6b3b3;
  width: 400px;
  margin-top: 400px;
`;

export const HorizonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;
export const InputBlock = styled.div`
  text-align:right;
  margin-right: 20px;
`;
export const WordAndMeanBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  height: 600px;
  margin: 0 auto;
  margin-top: 70px;
  border: 1px solid #ccc;
  border-radius:20px;
  padding: 10px 0;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display:none;
  }
`;

export const InputText = styled.input`
  border: none;
  border-bottom: 3px solid #b6b3b3;
  margin: 0;
  background-color: #0c0c0d;
  color: white;
  font-size: 30px;
  text-align: center;
`;
export const ExampleInput = styled(InputText)`
  width: 350px;
  font-size: 25px;
  text-align: left;
  margin-top: 30px;
`;

export const NumInput = styled(InputText)`
  width: 110px;
  height: 30px;
`;

export const Text = styled.p`
  color: #b6b3b3;
  font-size: 30px;
  margin: 0;
  margin-left: 15px;
`;

export const BottomRow = styled.div`
  display: flex;
  gap: 50px;
  bottom: 10px;
  width: 750px;
  margin: 0 auto;
  position: fixed;
  bottom: 10px;
  left: 10%;
  right: 10%;
`;
