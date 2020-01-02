import React from "react";
import App from "next/app";
import withApollo from "../src/lib/apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import Header from "../src/components/layout/header";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <>
        <ApolloProvider client={apollo}>
          <Header />
          <div>
            <Component {...pageProps} />
          </div>
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
