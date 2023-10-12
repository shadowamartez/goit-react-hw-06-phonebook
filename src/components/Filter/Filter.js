import { Layout } from "./Filter.styled";

export function Filter({ filter, onFilterChange }) {
    return (
        <Layout>
        <label htmlFor="filter">Find contacts by name</label>
        <input
            type="text"
            id="filter"
            name="filter"
            placeholder="Search contacts by name"
            value={filter}
            onChange={onFilterChange}
        />
        </Layout>
    );
};



