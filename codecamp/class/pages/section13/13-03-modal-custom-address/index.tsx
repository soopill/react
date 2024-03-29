import { Modal } from "antd";

import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handleOK = (): void => {
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={showModal}>모달 열기</button>
      {/* 종료방식 1 모달 숨기기 : 이력서나 긴 내용 작성시 */}
      <Modal open={isOpen} onOk={handleOK} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
      {/* 종료방식2 모달 삭제 : 중요한내용 같은것이 남아있기때문에  */}
      {isOpen && (
        <Modal open={true} onOk={handleOK} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
