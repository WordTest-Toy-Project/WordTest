import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 800px;
  height: 60px;
  margin: 0 auto;
`;

export const TableContainer = styled(Container)`
  background-color: white;
`;

export const TextContainer = styled(Container)`
  background-color: black;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Rows = styled(Row)`
  border: 1px solid #000;
  color: black;
  font-size: 20px;
  font-weight: 400;
`;

export const Row0 = styled(Rows)`
  width: 100px;
`;
export const Row1 = styled(Rows)`
  width: 300px;
`;
export const Row2 = styled(Rows)`
  width: 300px;
`;
export const Row3 = styled(Rows)`
  width: 100px;
`;

export const Rows0 = styled(Row)`
  width: 100px;
`;
export const Rows1 = styled(Row)`
  width: 300px;
`;
export const Rows2 = styled(Row)`
  width: 300px;
`;
export const Rows3 = styled(Row)`
  width: 100px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${props => (props.$scrapState ? './image/starf.svg' : './image/stare.svg')});
`;