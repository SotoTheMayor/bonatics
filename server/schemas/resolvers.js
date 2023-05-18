const { AuthenticationError } = require('apollo-server-express');
const { User, Trade, Wish } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find({})
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // trade: async (parent, { _id }) => {
        //     const params = _id ? { _id } : {};
        //     return Trade.find({params});
        // },
    },
    Mutation: {
        addUser: async (parent, { userName, email, password }) => {
            const user = await User.create({ userName, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addWish: async (parent, args) => {
            const wish = await Wish.create(args);
            return wish;
        },
        addTrade: async (parent, args) => {
            const trade = await Trade.create(args);
            return trade;
        },

        // In progress

        // deleteTrade: async (parent, { userID, plantName, traderID }) => {
        //     return Trade.findOneAndUpdate(
        //         { _id: userID },
        //         { $pull: { comments: { _id: commentId } } },
        //         { new: true }
        //       );
        // },
    },
};

module.exports = resolvers;