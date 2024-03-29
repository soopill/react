import { Modal } from "antd";
import { useState } from "react";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {};
  setIsOpen(true);
  const handleOK = (): void => {};
  setIsOpen(false);
  const handleCancel = (): void => {};
  setIsOpen(false);
  return (
    <>
      <button onClick={showModal}>모달 열기</button>
      <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        비번 : <input type="password" />
      </Modal>
    </>
  );
}
