import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount    
        savedBooks {
          bookId
          authors
          description
          image
          link
          title
        }
      }
  }
`;

