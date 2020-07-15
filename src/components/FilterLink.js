import React from "react";
import {NavLink} from "react-router-dom";

const FilterLink = ({filter, children}) => (
    <NavLink
        to={filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black',
        }}
    >
        {children}
    </NavLink>
);

export default FilterLink;

/*
import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link} from "../components/Link";
import {setVisibilityFilter} from "../actions";

const mapStateToProps = (state, ownProps) => ({
active: ownProps.filter ===
state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
onClick() {
dispatch(setVisibilityFilter(ownProps.filter))
}
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
export default FilterLink;*/
