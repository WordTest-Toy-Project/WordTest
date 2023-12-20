import Table from "../../components/table/Table";
import Text from "../../components/table/Text";

import { WordContainer, TableContainer } from "./style";

export default function WordTable(props) {

  return (
    <WordContainer>
      <Text />
      <TableContainer>
        <Table props={props.storedUser} />
      </TableContainer>
    </WordContainer>
  );
}
