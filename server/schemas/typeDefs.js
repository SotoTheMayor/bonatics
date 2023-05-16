const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        userName: String!
        password: String!
        email: String!
    }

    type tradeItem{
        _id: ID!
        userID: String!
        plantName: String!
        traderID: String!
    }

    type tradeIP{
        _id: ID!
        userID: String!
        plantName: String!
    }

    type wishList{
        _id: ID!
        userID: String!
        wishName: String!
    }
    
    type Query {
        user: [User]
    }

`;

module.exports = typeDefs;