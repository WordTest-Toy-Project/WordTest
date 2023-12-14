import Header from '../../components/header/Header';
import Table from '../../components/table/Table';
import Text from "../../components/table/Text";

import {
  WordContainer,
  TableContainer,
} from './style';

export default function Study() {
    return (
      <>
        <Header />
        <WordContainer>
          <Text />
          <TableContainer>
            <Table />
          </TableContainer>
        </WordContainer>
      </>
    );
  }