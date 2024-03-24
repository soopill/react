import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴터 메모리에 백엔드에서 받아온 데이터 임시저장 >나중에 더 자세히
  });
  return (
    <div>
      <div>=============시작부분===========</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>============끝부분==============</div>
    </div>
  );
}
