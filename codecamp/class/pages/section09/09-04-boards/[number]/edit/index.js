import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.cotainer";
const FETCH_BOARD = gql`
  query fecthBoard($number: Int) {
    fatchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  return <BoardWrite isEdit={true} data={data} />;
}
