import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);
  function onClickCounterUp() {
    setCount(count + 1);
  }
  function onClickCounterDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCounterUp}>카운트 올리기</button>
      <button onClick={onClickCounterDown}>카운트 내리기</button>
    </div>
  );
}
