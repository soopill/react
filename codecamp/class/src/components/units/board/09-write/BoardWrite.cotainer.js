import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables가 $임
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/09-03-boards/${result.data.createBoard.number}`);
  };
  const onClickUpdete = async () => {
    //여기서 수정하기
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    router.push(`/setion09/09-03-boards/${result.data.updeteBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter = event.target.value;
  };
  const onChangeTitle = (event) => {
    setTitle = event.target.value;
  };
  const onChangeContents = (event) => {
    setContents = event.target.value;
  };
}

return (
  <BoardWriteUI
    onClickSubmit={onClickSubmit}
    onClickUpdete={onClickUpdete}
    onChangeWriter={onChangeWriter}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    isEdit={props.isEdit}
  />
);
