import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
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
    router.push(`/09-04-boards/${result.data.createBoard.number}`);
  };
  const onClickUpdete = async () => {
    const myvariables = {
      number: Number(router.query.number),
    };
    if (writer !== "") {
      myvariables.writer = writer;
    }
    if (title !== "") {
      myvariables.title = title;
    }
    if (contents !== "") {
      myvariables.contents = contents;
    }

    //여기서 수정하기
    const result = await updateBoard({
      variables: myvariables,
    });
    router.push(`/setion09/09-04-boards/${result.data.updeteBoard.number}`);
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
    data={props.data}
  />
);
