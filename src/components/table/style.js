import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  background-color: white;
  width: 800px;
  height: 60px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border: 1px solid #000;
`;

export const Row0 = styled(Row)`
  width: 100px;
`;

export const Row1 = styled(Row)`
  width: 300px;
`;
export const Row2 = styled(Row)`
  width: 300px;
`;
export const Row3 = styled(Row)`
  width: 100px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('./image/stare.svg');
  ${props => props.$scrapState === true && css`
    background-image: url('./image/starf.svg');
  `}
`;