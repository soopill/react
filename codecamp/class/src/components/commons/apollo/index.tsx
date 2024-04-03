import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IAPolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IAPolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴터 메모리에 백엔드에서 받아온 데이터 임시저장 >나중에 더 자세히
  });

  // prettier-ignore

  return(
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>


    )
}
