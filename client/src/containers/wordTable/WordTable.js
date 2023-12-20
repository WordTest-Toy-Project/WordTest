import Table from "../../components/table/Table";
import Text from "../../components/table/Text";

import { WordContainer, TableContainer } from "./style";

export default function WordTable({ storedUser, changeInfo }) {

  return (
    <WordContainer>
      <Text />
      <TableContainer>
        <Table storedUser={storedUser} changeInfo={changeInfo} />
      </TableContainer>
    </WordContainer>
  );
}
