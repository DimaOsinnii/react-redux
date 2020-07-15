import React from "react";
import FilterLink from "./FilterLink";

const Footer = ({store}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter='all'
            store={store}>
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter='active'
            store={store}>
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter='completed'
            store={store}>
            Completed
        </FilterLink>
        {' '}
    </p>
)

export default Footer;