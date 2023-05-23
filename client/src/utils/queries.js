import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    _id
    email
    userName
    trade {
      plantId
      plantImage
      plantName
    }
    wish {
      plantId
      plantImage
      plantName
    }
  }
}
`;

export const QUERY_USERS = gql`
query users {
  users {
    _id
    email
    userName
    trade {
      plantId
      plantImage
      plantName
    }
    wish {
      plantId
      plantImage
      plantName
    }
  }
}
`;

export const QUERY_WISHTRADE = gql `
query WishTrade($plantId: Int!) {
  wishTrade(plantId: $plantId) {
    _id
    email
    userName
    trade {
      plantId
      plantImage
      plantName
    }
  }
}`