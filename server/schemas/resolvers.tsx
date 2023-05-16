const { AuthenticationError } = require('apollo-server-express');
const { User, Trade, Wish } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({})
        },
        trade: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Trade.find({params});
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        addWish: async (parent, args) => {
            const wish = await Wish.create(args);
            return wish;
        },
        addTrade: async (parent, args) => {
            const trade = await Trade.create(args);
            return trade;
        },
    }
};

module.exports = resolvers;