import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";
const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer:String, $title:String, $contents: String{

    createBoard(writer:$writer , title:$title , contents:$contents ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(나의그래프큐엘셋팅);
  //<결과, 변수>

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables가 $임
        writer: "훈2",
        title: "ㅎㅇ",
        contents: "반갑",
      },
    });
    console.log(result);
  };
  return <button onClick={onClickSubmit}>GRAPHQL-ApI</button>;
}
