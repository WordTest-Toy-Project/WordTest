import styled from 'styled-components';

export const WordContainer = styled.div`
  width: 900px;
  height: 960px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const TableContainer = styled(WordContainer)`
  height: 900px;
  margin-top: 0;
  overflow: hidden;
  overflow-y: scroll;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{
    display:none;
  }
`;