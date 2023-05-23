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
        plantId: Int!
        plantImage: String
        plantName: String!
    
    }

    type Wish{
        plantId: Int!
        plantImage: String
        plantName: String!
    }

    type Auth {
        token: ID
        user: User
    }    
    
    input TradeInput {
        plantId: Int!
        plantImage: String
        plantName: String!
    }

    input WishInput {
        plantId: Int!
        plantImage: String
        plantName: String!
    }

    type Query {
        users: [User]
        me: User
        wishTrade(plantId: Int!):[User]
        tradeWish(plantId: Int!):[User]
    }

    type Mutation {
        addUser(userName: String!,email: String!,password: String!): Auth 
        login(email: String!, password: String!): Auth
        addWish(wishData: WishInput): User
        addTrade(tradeData: TradeInput): User
        removeTrade(plantId: String!): User
        removeWish(plantId: String!): User
    }

`;

module.exports = typeDefs;
