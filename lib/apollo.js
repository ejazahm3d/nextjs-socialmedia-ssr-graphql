import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { graphqlUri as GRAPHQL_URL } from "../env";
import { parseCookies } from "nookies";

export default withApollo(
  ({ ctx, headers, initialState }) => {
    return new ApolloClient({
      uri: GRAPHQL_URL,
      request: operation => {
        let cookies;
        let token;
        if (ctx) {
          cookies = parseCookies(ctx);
          token = cookies.token;
        } else {
          cookies = parseCookies();
          token = cookies.token;
        }

        operation.setContext({
          headers: token
            ? {
                Authorization: `Bearer ${token}`
              }
            : {}
        });
      },
      cache: new InMemoryCache().restore(initialState || {}),
      fetchOptions: {
        fetchOptions: "cache-and-network",
        useGETForQueries: true
      }
    });
  },
  { getDataFromTree: "ssr" }
);
