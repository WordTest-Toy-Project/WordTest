import styled from 'styled-components';

export const Desc = styled.p`
  text-align: center;
  font-size: 26px;
  color: white;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => (props.$childCount === 4 ? '310px' : '400px')};
  gap: 20px;
`;

export const SignBtn = styled.button`
  width: 380px;
  height: 65px;
  font-size: 20px;
  border-radius: 10px; 
  text-align: center;
  color: white;
  background-color: #0C0C0D;
  border: none;
`;