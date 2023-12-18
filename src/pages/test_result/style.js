import styled from "styled-components";

export const Desc = styled.div`
  width: 850px;
  height: 120px;
  margin: 0 auto;
  border: 10px solid #892cdc;
  border-radius: 10px;
  margin-top: 70px;
  font-size: 80px;
  text-align: center;
  color: white;
`;

export const Result = styled.div`
  width: 850px;
  margin: 0 auto;
  font-size: 50px;
  color: #b6b3b3;
  padding: 0 20px;
`;

export const WrongWord = styled.div`
  display: flex;
  width: 800px;
  gap: 30px;
  color: #b6b3b3;
  font-size: 30px;
  margin: 0 auto;
`;

export const WordLength = styled.div`
  width: 300px;
  color: white;
`;

export const BottomRow = styled.div`
  position: fixed;
  display: flex;
  gap: 50px;
  bottom: 10px;
  margin-left: 72px;
  margin-right: 72px;
  justify-content: right;
  align-items: center;
  width: 90%;
`;
