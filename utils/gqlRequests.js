import { gql } from "graphql-request";

export const login = gql`
  mutaion login_user($email: String!, $password: String!){
      login_user(object: { identifier: $email, password: $password }){
          jwt
          user {
              id
              username
              email
          }
      }
  }
`;
