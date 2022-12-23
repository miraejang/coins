import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://apollo-movies-app.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default client;
