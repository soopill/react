import axios from "axios";
import 내꺼 from "../../section01/01-01-example";

export default function RestGetPage() {
  const onClickAsync = () => {
    const result = axios.get("http://koreanjson.com/posts/1");
    console.log(result);
  };

  const onClickSync = async () => {
    const result = await axios.get("http://koreanjson.com/posts/1");
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST-API비동기</button>
      <button onClick={onClickSync}>REST-API동기</button>
      <내꺼 />
    </div>
  );
}
