import { gql } from "@apollo/client";

// add single user, logging in doesn't need a trade or wish returned
export const ADD_USER = gql`
mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        email
        userName
      }
    }
  }
`;

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        userName
      }
    }
  }
`;