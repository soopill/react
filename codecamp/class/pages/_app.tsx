import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>=============시작부분===========</div>
      <ApolloSetting>
        <Layout>
          <Component />
        </Layout>
      </ApolloSetting>
      <div>============끝부분==============</div>
    </div>
  );
}
