import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import Checkbox from "./checkbox";

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

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  // const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
  //   alert(event.currentTarget.id + "클릭");
  // };

  const qqq1 = () => {
    alert("1번");
  };
  const qqq4 = (event) => {
    event.stopPropagation();
    alert("4번");
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={qqq1}>
          <Checkbox />
          <span style={{ margin: "10px" }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.witer}</span>
        </div>
      ))}
    </div>
  );
}
//다른곳에서 가져와도 버블링이 발생함
