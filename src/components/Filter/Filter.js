import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactSlice';
import { Layout } from './Filter.styled';

export function Filter() {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleFilterChange = event => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <Layout>
        <label htmlFor="filter">Find contacts by name</label>
        <input
            type="text"
            id="filter"
            name="filter"
            placeholder="Search contacts by name"
            value={filter}
            onChange={handleFilterChange}
        />
        </Layout>
    );
}




