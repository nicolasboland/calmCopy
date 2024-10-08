import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

export const runtime = 'edge';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HYPERGRAPH_LINK
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_HYPERGRAPH_TOKEN_DEV;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;