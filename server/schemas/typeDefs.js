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
        tradeID: ID!
        plantName: String!
        quantity: Int!
    
    }

    type Wish{
        wishID: ID!
        plantInterested: String!
    }

    type Auth {
        token: ID
        user: User
    }    
    
    type Query {
        users: [User]
        me: User
    }

    type Mutation {
        addUser(
            userName: String!,
            email: String!,
            password: String!
        ): Auth 
        login(
            email: String!, 
            password: String!
        ): Auth
        addWish(wishName: [ID]!): Wish
        addTrade(
            _id: ID!,
            plantName: String!,
            quantity: Int!
        ): Trade
    }

`;

module.exports = typeDefs;
