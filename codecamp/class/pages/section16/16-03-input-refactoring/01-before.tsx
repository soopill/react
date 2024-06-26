import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

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
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables가 $임
        writer,
        title,
        contents,
      },
    });
    console.log(result);

    const onChangeWriter = (event) => {
      setWriter = event.target.value;
    };
    const onChangeTitle = (event) => {
      setTitle = event.target.value;
    };
    const onChangeContents = (event) => {
      setContents = event.target.value;
    };
  };

  return (
    <div>
      작성자: <input type="text" onChange={setWriter} />
      제목: <input type="text" onChange={setTitle} />
      내용: <input type="text" onChange={setContents} />
      <button onClick={onClickSubmit}>GRAPHQL-ApI</button>;
    </div>
  );
}
