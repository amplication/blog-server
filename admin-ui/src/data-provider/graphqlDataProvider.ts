import buildGraphQLProvider from "ra-data-graphql-amplication";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CREDENTIALS_LOCAL_STORAGE_ITEM } from "../constants";

const httpLink = createHttpLink({
  uri: `${window.__RUNTIME_CONFIG__.REACT_APP_SERVER_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(CREDENTIALS_LOCAL_STORAGE_ITEM);
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default buildGraphQLProvider({
  client: apolloClient,
});
