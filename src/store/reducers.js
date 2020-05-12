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

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };
    case ADD_TODO:
      return {
        ...state,
        todos: todos(state.todos, action)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: todos(state.todos, action)
      };
    default:
      return state;
  }
}
