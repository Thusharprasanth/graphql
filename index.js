import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// import db
import db from './_db.js'
//importing typeDefs from schema.js
import { typeDefs }  from './schema.js'

const resolvers = {
    Query : {  
        games(){
            return db.games
        },
        authors(){
            return db.authors
        },
        reviews(){
            return db.reviews
        },
        review(_,args){
            return db.reviews.find((review)=> review.id === args.id)
        }
    }
}

//server setup

const server = new ApolloServer({

    typeDefs, //first argument
    resolvers // second argument

})

const { url } = await startStandaloneServer(server, {
    listen : {port : 4000}
})

console.log("server running at port 4000...");