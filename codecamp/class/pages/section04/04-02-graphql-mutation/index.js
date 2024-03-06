import { gql, useMutation } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "택한", title: "ㅎㅇ", contents: "반갑") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };
  return <button onClick={onClickSubmit}>GRAPHQL-ApI</button>;
}
