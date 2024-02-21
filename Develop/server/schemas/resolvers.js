const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// Helper function to fetch user data by user ID
const getUserData = async (userId) => {
  return await User.findOne({ _id: userId })
    .select('-__v -password')
    .populate('savedBooks');
};

// GraphQL resolvers
const resolvers = {
  Query: {
    // Resolver for the "me" query
    me: async (parent, args, context) => {
      if (context.user) {
        // If user is authenticated, fetch and return user data
        return getUserData(context.user._id);
      }
      // If not logged in, throw an authentication error
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    // Resolver for the "login" mutation
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      // Check if the user exists and the password is correct
      if (!user || !(await user.isCorrectPassword(password))) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // Generate token and return it along with the user data
      const token = signToken(user);
      return { token, user };
    },

    // Resolver for the "addUser" mutation
    addUser: async (parent, args) => {
      // Create a new user and generate a token
      const user = await User.create(args);
      const token = signToken(user);

      // Return the token and user data
      return { token, user };
    },

    // Resolver for the "removeBook" mutation
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        // Remove a book from the user's savedBooks
        const updatedBooks = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedBooks;
      }
    },

    // Resolver for the "saveBook" mutation
    saveBook: async (parent, { bookToSave }, context) => {
      if (context.user) {
        // Save a new book to the user's savedBooks
        const updatedBooks = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: bookToSave } },
          { new: true }
        ).populate('savedBooks');
        return updatedBooks;
      }
      // If not logged in, throw an authentication error
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;