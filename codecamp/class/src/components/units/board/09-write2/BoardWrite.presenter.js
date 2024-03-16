import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자:{" "}
      <RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fatchBoard.writer}
      />
      제목:{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fatchBoard.title}
      />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fatchBoard.contets}
      />
      <BlueButton
        onClick={props.isEdit ? props.onClickUpdeate : props.onClikSubmit}
      >
        {props.isEdit ? "수정" : "등록"}
      </BlueButton>
      ;
    </div>
  );
}
