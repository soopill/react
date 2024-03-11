import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite() {
  const [isActive, setIsAtive] = useState(false);
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

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

    const onChangeWriter = (event) => {
      setWriter = event.target.value;
      if (event.target.value && title && contents) {
        setIsAtive(true);
      }
    };
    const onChangeTitle = (event) => {
      setTitle = event.target.value;
      if (writer && event.target.value && contents) {
        setIsAtive(true);
      }
    };
    const onChangeContents = (event) => {
      setContents = event.target.value;
      if (writer && title && event.target.value) {
        setIsAtive(true);
      }
    };
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
    />
  );
}
