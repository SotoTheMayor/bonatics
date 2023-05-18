const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        userName: String!
        password: String!
        email: String!
        trade: [Trade]
        wish: [Wish]
    }

    type Trade{
        _id: ID!
        user: User!
        plantName: String!
        quantity: Int!
    
    }

    type Wish{
        _id: ID!
        userID: String!
        plantInterested: String!
    }

    type Auth {
        token: ID
        user: User
    }    
    
    type Query {
        users: User
    
    }

    type Mutation {
        addUser(
            userName: String!,
            email: String!,
            password: String!
        ): Auth 
        addWish(wishName: [ID]!): Wish
        addTrade(
            _id: ID!,
            plantName: String!,
            quantity: Int!
        ): Trade
        login(
            email: String!, 
            password: String!
        ): Auth
    }

`;

module.exports = typeDefs;
