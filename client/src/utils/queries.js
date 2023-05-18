import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    me {
      _id
      userName
      email
      wish {
        plantInterested
        wishID
      }
      trade {
        tradeID
        plantName
        quantity
      }
    }
  }
`;

export const QUERY_USERS = gql`
query users {
    users {
      _id
      userName
      email
      trade {
        tradeID
        plantName
        quantity
      }
    }
  }
`;