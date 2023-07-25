import axios from "axios";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("http://koreanjson.com/posts/1");
    console.log(result); //Promise
  }
  // async function onClickSync() {
  //   const result = await axios.get("http://koreanjson.com/posts/1");
  //   console.log(result); //제대로 나옴 {title : "....."}           =====> 함수 중복 선언 문제
  //   consolo.log(result.data.title);
  // }

  const onClickSync = async () => {
    const result = await axios.get("http://koreanjson.com/posts/1");
    console.log(result); //제대로 나옴 {title : "....."}           =====> 함수 중복 선언 문제
    consolo.log(result.data.title);
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기)요청</button>
      <button onClick={onClickSync}>REST-API(동기)요청</button>
    </div>
  );
}
