interface IExampleProps {
  school: string;
  children: JSX.Element;
}
export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>영ㅇ희</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>맹구</div>
    </div>
  );
}
