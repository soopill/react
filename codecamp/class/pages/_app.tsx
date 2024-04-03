import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/types/generated/styles/globalStyles";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>=============시작부분===========</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
      <div>============끝부분==============</div>
    </div>
  );
}
