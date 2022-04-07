import { GraphQLClient } from "graphql-request";

export default new GraphQLClient(
  "https://sp2-database.herokuapp.com/refreshToken",
  {
    credentials: "include",
  }
);
