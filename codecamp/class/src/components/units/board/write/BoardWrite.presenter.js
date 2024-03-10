export default function BoardWriteUI(props) {
  return (
    <div>
      작성자: <input type="text" onChange={props.bbb} />
      제목: <input type="text" onChange={props.ccc} />
      내용: <input type="text" onChange={props.ddd} />
      <button onClick={props.aaa}>GRAPHQL-ApI</button>;
    </div>
  );
}
