import { Modal } from "antd";

export default function ModalAlertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록 성공",
    });
  };
  const onClickError = (): void => {
    Modal.error({
      content: "비번 틀림 ㅋ",
    });
  };
  return (
    <>
      <button onClick={onClickSuccess}>성공</button>
      <button onClick={onClickError}>실패</button>
    </>
  );
}
