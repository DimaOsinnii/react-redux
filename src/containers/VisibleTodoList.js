import TodoList from "../components/TodoList";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from "../actions";
import {getVisibleTodos, getErrorMessage, getIsFetching} from '../reducers'
import React, {Component} from "react";
import FetchError from "../utils/FetchError";


class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter).then(() => console.log(filter));
    }

    render() {
        const {toggleTodo, todos, errorMessage, isFetching} = this.props;
        if (isFetching && !todos.length) {
            return <p>Loading...</p>;
        }
        if (errorMessage && !todos.length) {
            return (
                <FetchError
                    message={errorMessage}
                    onRetry={() => this.fetchData()}
                />
            )
        }

        return (
            <TodoList
                todos={todos}
                onTodoClick={toggleTodo}
            />
        );
    }
}


const mapStateToProps = (state, {match: {params}}) => {
    const filter = params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter,
    }
};


VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList;