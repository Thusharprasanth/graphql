import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
//importing typeDefs from schema.js
import { typeDefs }  from './schema.js'

//server setup

const server = new ApolloServer({
    //typeDefs
    typeDefs,
    //Resolvers
})

const { url } = await startStandaloneServer(server, {
    listen : {port : 4000}
})

console.log("server running at port 4000...");