import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number : Int{
    deleteBoard(number: $number) {
      message
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards);

  //   const mysyles = {
  //     magin: "10px",
  //     padding: "0px",
  //   }; 원래는 이렇게 해서 변수로 넣으면 됨

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id),
        refetchQueries: [{ query: FETCH_BOARDS }],
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <>
          {/* <>랑 <Fragment>랑같음 import해야함 */}
          {/* Fragment에 key를 주려면 뒤에걸 써야함 */}
          {/* 특별한 이유없으면 Fragment로 감싸자 div는 1개 더 그려야함 조금느려짐 */}
          <div key={el.number}>
            {/* index는 고정이라서*/}
            <span>
              <input type="checkbox" />
            </span>
            <span style={{ margin: "10px" }}>{el.number}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.witer}</span>
            <span>
              <button id={el.number} onClick={onClickDelete}>
                삭제
              </button>
            </span>
          </div>
        </>
      ))}
    </div>
  );
}
