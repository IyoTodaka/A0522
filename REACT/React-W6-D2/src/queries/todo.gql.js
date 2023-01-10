import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query getTodos {
    todolist {
      done
      id
      text
      timestamp
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($text: String! ) {
    insert_todolist(objects: { text: $text }) {
      returning {
        text
        id
      }
    }
  }
`;