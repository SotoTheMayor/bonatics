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
}
`;

export const ADD_TRADE = gql`
mutation addTrade($tradeData: TradeInput) {
  addTrade(tradeData: $tradeData) {
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

export const ADD_WISH = gql`
mutation addWish ($wishData: WishInput) {
  addWish (wishData: $wishData) {
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

// export const REMOVE_TRADE = gql `
// mutation Mutation($plantId: String!) {
//   removeTrade(plantId: $plantId) {
//     _id
//     email
//     userName
//     trade {
//       plantId
//       plantImage
//       plantName
//     }
//     wish {
//       plantId
//       plantImage
//       plantName
//     }
//   }
// }`;

// export const REMOVE_WISH = gql `
// mutation Mutation($plantId: String!) {
//   removeWish(plantId: $plantId) {
//     _id
//     email
//     userName
//     trade {
//       plantId
//       plantImage
//       plantName
//     }
//     wish {
//       plantId
//       plantImage
//       plantName
//     }
//   }
// }`;