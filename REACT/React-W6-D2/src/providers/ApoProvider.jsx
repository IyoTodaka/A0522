import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  headers: {
    "x-hasura-admin-secret": import.meta.env.VITE_HASURA_SECRET,
    "content-type": "application/json"
  },
  cache: new InMemoryCache(),
  credentials: "omit"
});

export default function ApoProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
