import Table from "../../components/table/Table";
import Text from "../../components/table/Text";

import { WordContainer, TableContainer } from "./style";

export default function WordTable({ studyWord, onDeleteWord, onScrapWord }) {
  return (
    <WordContainer>
      <Text />
      <TableContainer>
        <Table
          studyWord={studyWord}
          onDeleteWord={onDeleteWord}
          onScrapWord={onScrapWord}
        />
      </TableContainer>
    </WordContainer>
  );
}
