import {combineReducers} from 'redux'
import todos, * as fromTodos from './todos'

export const rootReducer = combineReducers(
    {
        todos
    }
)

export const getVisibleTodos = (state, filter) =>
    fromTodos.getVisibilityTodos(state.todos, filter);

