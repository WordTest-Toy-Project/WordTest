import Table from "../../components/table/Table";
import Text from "../../components/table/Text";

import { WordContainer, TableContainer } from "./style";

export default function WordTable({ studyWord }) {
  return (
    <WordContainer>
      <Text />
      <TableContainer>
        <Table studyWord={studyWord} />
      </TableContainer>
    </WordContainer>
  );
}
