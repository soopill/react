import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div>===================1111 22222 3333 ================</div>
      <Example school="초초">
        <div>
          <input type="text" />
          <div>나 철수</div>
          <button>클릭</button>
        </div>
        <div>=================== 11111 22222 3333 =================</div>
      </Example>
    </div>
  );
}
