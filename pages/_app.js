import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component }) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시저장 해놓기 => 더 자세히 알아볼예정
  });

  return (
    <div>
      <div>
        =======================여기는 app.js 컴포넌트
        입니다,======================
      </div>
      <ApolloProvider client={client}>
        <Component />;
      </ApolloProvider>
      <div>
        =======================여기는 app.js 컴포넌트
        입니다,======================
      </div>
    </div>
  );
}
