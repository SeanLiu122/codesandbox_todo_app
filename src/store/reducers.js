import { combineReducers } from "redux";
// Reducers: are pure functions describe how the applications' state changes in response to actions sent to the store.
//  -> (previousState, action) => nextState
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from "./actions";

// Redux will call the reducer with an 'undefined' state for the first time, so return the initial state of the app.
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};
const { SHOW_ALL } = VisibilityFilters;

// reducers
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.todos.map((item, index) => {
        if (index === action.text) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    default:
      return state;
  }
}

export const todoApp = combineReducers({
  visibilityFilter,
  todos
});

// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// }
