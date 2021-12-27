import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://easycoders-movies.herokuapp.com/',
    cache: new InMemoryCache()
});