import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8ke0d19vv01xi5yhz80j8/master',
    cache: new InMemoryCache()
})