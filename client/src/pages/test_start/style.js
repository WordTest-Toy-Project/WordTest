import styled from "styled-components";

export const Text = styled.p`
  color: #b6b3b3;
  font-size: 50px;
  margin: 0;
  margin-left: 30px;
`;

export const BottomRow = styled.div`
  position: fixed;
  display: flex;
  gap: 50px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  justify-content: right;
  align-items: center;
`;

export const WordOrMean = styled.h3`
  font-size: 50px;
  color: white;
  margin:20px 0;
`;

export const WordOrMeanBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 400px;
  height: 800px;
  margin: 0 auto;
  overflow: hidden;
  overflow-y: scroll;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{
    display:none;
  }
`;