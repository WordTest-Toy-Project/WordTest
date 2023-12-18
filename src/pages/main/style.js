import styled from "styled-components";

export const GrayBox = styled.button`
  background-color: black;
  border-radius: 20px;
  border: 10px solid #4c494f;
`;

export const WordTest = styled.h1`
  color: white;
  text-align: center;
  font-size: 100px;
  margin-bottom: 100px;
`;

export const Container = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Yellow = styled.span`
  color: yellow;
`;

export const WordContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TodayWord = styled.p`
  display: block;
  color: white;
  font-size: 34px;
  text-align: left;
  position: absolute;
  top: -60px;
  left: 10px;
  margin: 0;
`;

export const RandomWord = styled(GrayBox)`
  font-size: 100px;
  color: white;
  width: 980px;
  height: 182px;
  margin-bottom: 30px;
`;

export const Horizon = styled.hr`
  border: none; /* 기본 선을 없애고 */
  border-top: 2px dashed #892cdc;
  width: 98%;
`;

export const Today = styled.button`
  background-color: #262626;
  border-radius: 20px;
  border: 10px solid #892cdc;
  font-size: 75px;
  color: white;
  margin-bottom: 40px;
  margin-top: 40px;
  width: 896px;
  height: 128px;
  text-align: left;
`;
export const TodayLearn = styled(Today)``;
export const TodayTest = styled(Today)``;
