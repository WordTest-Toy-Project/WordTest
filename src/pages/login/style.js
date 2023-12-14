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
  margin-top: ${props => (props.$childCount === 3 ? '310px' : '400px')};
  gap: 20px;
`;