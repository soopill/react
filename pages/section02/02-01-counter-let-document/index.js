export default function CounterLetDocumentPage() {
  function onClickCounterUp() {
    const count = Number(document.getElementById("qqq").innerText) + 1;
    document.getElementById("qqq").innerText = count;
  }
  function onClickCounterDown() {
    const count = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = count;
  }

  return (
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCounterUp}>카운트 올리기</button>
      <button onClick={onClickCounterDown}>카운트 내리기</button>
    </div>
  );
}
