import Table from "../../components/table/Table";
import Text from "../../components/table/Text";

import {
  WordContainer,
  TableContainer,
} from './style';

export default function WordTable({sampleJson}){
  return (
    <WordContainer>
      <Text />
      <TableContainer>
        <Table $sampleJson={sampleJson}/>
      </TableContainer>
    </WordContainer>
  );
}