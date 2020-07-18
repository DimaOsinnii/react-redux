import {createStore} from "redux";
import todos from "../reducers";
// import {loadState, saveState} from '../utils/localStorage'
// import throttle from 'loadsh/throttle'

const logger = (store) => (next) => {
    if (!console.group) {
        return next;
    }
    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c actions', 'color: blue', action)
        const returnValue = next(action)
        console.log('%c next store', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue
    }
};

const promise = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
        return action.then(next);
    }
    next(action);
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware =>
        store.dispatch = middleware(store)(store.dispatch)
    );
};


const configureStore = () => {

    // const preloadedState = loadState();
    // const store = createStore(rootReducer, preloadedState);

    const store = createStore(todos);
    const middlewares = [promise];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    // store.subscribe(throttle(() => {
    //     saveState({
    //         todos: store.getState().todos
    //     });
    // }, 1000));

    wrapDispatchWithMiddlewares(store, middlewares);

    return store;
}


export default configureStore;