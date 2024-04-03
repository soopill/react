import { gql, useQuery } from "@apollo/client";
import {
  type IQueryFetchBoardsArgs,
  type IQuery,
} from "../../../src/commons/types/generated/types";
import { type MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  //   const onClickPage1 = (event: MouseEvent<HTMLSpanElement>): void => {
  //     void refetch({ page: Number(event.currentTarget.id) });
  //   };
  //   const onClickPage2 = (event): void => {
  //     void refetch({ page: 2 });
  //   };
  //   const onClickPage3 = (event): void => {
  //     void refetch({ page: 3 });
  //   };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <>
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        </>
      ))}
      {[new Array(10).fill(1)].map(
        (
          _,
          index // 10개짜리 1만 들은 배열
        ) => (
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        )
      )}
      {/* {[1,2,3,4,5,6,7,8,9,10].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}

      {/* <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage2}>
        2
      </span>
      <span id="3" onClick={onClickPage3}>
        3
      </span> */}
    </div>
  );
}
