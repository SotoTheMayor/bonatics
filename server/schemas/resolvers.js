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
                return User.findOne({ _id: context.user._id }).populate('wish', 'trade');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        wishTrade: async (parent, {plantId} , context) => {
            console.log(context.user);
            if (context.user) {
                console.log("in here");
                return User.find({"trade.plantId": plantId})
            }
        },
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
        addWish: async (parent, { wishData }, context ) => {
            if (context.user) {
            const user = await User.findByIdAndUpdate( 
                { _id: context.user._id},
                {$addToSet: { wish: wishData } },
                {
                    new: true
                }
                    
                );
                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addTrade: async (parent, { tradeData }, context ) => {
            console.log(context.user);
            console.log('trade new!!!');
            console.log(tradeData+ 'trade');
            
            if (context.user) {
            const user = await User.findByIdAndUpdate( 
                { _id: context.user._id},

                {$addToSet: { trade: tradeData } },
                {
                    new: true
                }

            );
                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeTrade: async (parent, { plantId }, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { trade: plantId } },
                    { new: true }
                )
                return user
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeWish: async (parent, { plantId }, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    {$pull: { wish: plantId } },
                    { new: true }
                )
                return user
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },

} 

module.exports = resolvers;