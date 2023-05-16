const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        userName: String!
        password: String!
        email: String!
        items: [tradeItem]
    }

    type Trade{
        _id: ID!
        userID: String!
        plantName: String!
        quantity: Int!
        traderID: String
        request: [wishList]
    }

    type Wish{
        _id: ID!
        userID: String!
        wishName: String!
    }

    type Auth {
        token: ID
        user: User
    }    
    
    type Query {
        users: User
        request(_id: [ID]!, wishName: String): [Wish]
        trade(_id: ID!, userID: String!, plantName: String!, quantity: Int!, traderID: String): [Trade]
    }

    type Mutation {
        addUser(
            firstName: String!,
            lastName: String!,
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
