import { gql } from "@apollo/client";

// Query
// Create the query in backticks ``
const GET_MOVIES_QUERY = gql`
  {
    movies {
      name
      genre
      id
    }
  }
`;

const GET_DIRECTORS_QUERY = gql`
  {
    directors {
      name
      age
      id
    }
  }
`;

// Mutation
// Query variables are used to pass the data from the frontend
// So e.g. the name is equal to the name that was passed
// PS `!` means that the variable needs to be passed in and must not be null
const ADD_MOVIE_MUTATION = gql`
  mutation ($name: String!, $genre: String!, $directorId: ID!) {
    addMovie(name: $name, genre: $genre, directorId: $directorId) {
      name
      id
    }
  }
`;

export { GET_MOVIES_QUERY, GET_DIRECTORS_QUERY, ADD_MOVIE_MUTATION };
