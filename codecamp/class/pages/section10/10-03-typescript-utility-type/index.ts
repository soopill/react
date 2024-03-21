export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}
//1. Partial 타입 다 ? 붙음
type aaa = Partial<IProfile>;
//2. Required 타입 ?사라짐
type bbb = Required<IProfile>;
//3. Pick 타입 원하는것만 쓸수잇음
type ccc = Pick<IProfile, "name" | "age">;
//4. Omit 타입 원하는 것만 뺌
type ddd = Omit<IProfile, "school">;
//5. Record타입 이중에만 고를수 있음
type eee = "철수" | "영희" | "훈이"; // Union타입
let child: eee; // 사용법 <<<

type fff = Record<eee, IProfile>;
//6. 객체의 키들로 유니온타입 만들기
type ggg = keyof IProfile; // keyof "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby";

//7. type vs interface 차이  interface는 선언병합
export interface IProfile {
  candy: number; // 선언병합으로 추가됨
}
let profile: Partial<IProfile> = {
  candy: 10,
};
