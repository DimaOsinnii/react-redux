import TodoList from "../components/TodoList";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from "../actions";
import {getVisibleTodos} from "../reducers";
import React, {Component} from "react";


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
        fetchTodos(filter)
    }

    render() {
        const {toggleTodo, ...rest} = this.props;
        return (
            <TodoList
                {...rest}
                onTodoClick={toggleTodo}
            />
        );
    }
}


const mapStateToProps = (state, {match: {params}}) => {
    const filter = params.filter || 'all';
    return {
        todos: getVisibleTodos(state, params.filter || 'all'),
        filter
    }
};


VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList;