import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            username
            password
            items
        }
    }
`;

export const QUERY_REQUEST = gql`
    query req

`

