export default function TypescriptPage() {
  let aaa = "안녕하세요";
  aaa = 3;
  //타입추론 먼저 들어간 값으로 추론함

  let bbb: string = "반갑습니다";
  bbb = 10;
  //타입명시

  let ccc: number | string = 1000;
  ccc = "1000원";
  //타입명시가 필요

  //숫자 타입
  let ddd: number = 10;
  ddd = "철수";

  //불린
  let eee: boolean = true;
  eee = false;
  eee = "false"; //true 빈문자열이 false 문자열이 있으면 true 문자열이기때문

  //배열타입
  let fff: number[] = [1, 2, 3, 4, 5]; //문자열은 안됨
  let ggg: string[] = ["철수", "영희", "훈이", 10]; // 숫자는 안됨
  let hhh = ["철수", "영희", "훈이", 10]; //타입추론이됨

  //객체 타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string; //?넣으면 있어도 되고 없어도 됨
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "담람쥐초등학교",
  };

  profile.name = "훈이";
  profile.age = "8살";
  profile.hobby = "수영"; //hobby가 없기떄문에 추가가안됨

  //함수타입
  function add(num1: number, num2: number, unit: string): string {
    //맽 끝이 리턴 타입
    return num1 + num2 + unit;
  }
  add(1000, 2000, "원");
  const add2 = (num1: number, num2: number, unit: string): string => {
    //맽 끝이 리턴 타입
    return num1 + num2 + unit;
  };
  add2(1000, 2000, "원");

  //any타입 도저 모를때 사용 자바스크립트와 동일
  let qqq: any = 333;

  return <></>;
}
