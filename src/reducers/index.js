import {combineReducers} from "redux";
import byId, * as fromById from "./byId";
import createList, * as fromList from "./CreateList";

const listByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed'),
});

const todos = combineReducers({
    byId,
    listByFilter,
});

export default todos;

export const getVisibilityTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
};