//컴포넌트 위에 만들면 컴포넌트가 리랜더링되어도 다시 만들어지지않음
const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "망고" },
  { number: 7, title: "바나나" },
];

export default function MapFruitsPage() {
  const aaa = [
    <div>1 레드향</div>,
    <div>2 샤인머스켓 </div>,
    <div3>3 산딸기</div3>,
  ];

  const bbb = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  return (
    <div>
      <div>{aaa}</div>
      =====================
      <div>{bbb}</div>
    </div>
  );
}
