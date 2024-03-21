import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { IBoardWriteProps, IMyvariables } from "./BoardWrite.types";



export default function BoardWrite(props: IBoardWriteProps) {
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
    router.push(`/10-02-typescript-boards/${result.data.createBoard.number}`);
  };
  const onClickUpdate = async () => {
    
    const myvariables: IMyvariables = {
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
    router.push(
      `/setion10/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
