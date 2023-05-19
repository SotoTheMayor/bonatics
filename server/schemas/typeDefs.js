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
        plantId: String!,
        plantImage: String!,
        plantName: String!,
    
    }

    type Wish{
        plantId: String!,
        plantImage: String!,
        plantName: String!,
    }

    type Auth {
        token: ID
        user: User
    }    
    
    input TradeInput {
        plantId: String!,
        plantImage: String!,
        plantName: String!,
    }

    input WishInput {
        plantId: String!,
        plantImage: String!,
        plantName: String!,
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
        addWish(
            wishData: WishInput
            ): Wish
        addTrade(
            tradeData: TradeInput
        ): Trade
    }

`;

module.exports = typeDefs;
