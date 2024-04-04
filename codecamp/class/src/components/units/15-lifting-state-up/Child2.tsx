export default function Child2(props: any): JSX.Element {
  return (
    <div>
      <div>자식2 : {props.count}</div>
      <button onClick={props.onClickCount}>올리기</button>
    </div>
  );
}
