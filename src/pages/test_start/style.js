import styled from "styled-components";

export const InputText = styled.input`
  border: none;
  border-bottom: 3px solid #b6b3b3;
  background-color: #0c0c0d;
  color: white;
  font-size: 30px;
  width: 350px;
`;

export const Text = styled.p`
  color: #b6b3b3;
  font-size: 50px;
  padding-left: 20px;
  margin: 0;
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

export const WordOrMean = styled.h3`
  font-size: 50px;
  color: white;
`;

export const WordOrMeanBlock = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;