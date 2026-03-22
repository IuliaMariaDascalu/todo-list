import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    overflow-y: scroll;
`;

export const SearchInput = styled.input`
    padding: 0.5rem;
    border-radius: 1rem;
    border: none;
    width: 100%;
`;

export const SearchButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    background-color: #333;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const FilterButton = styled.select`
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    background-color: #333;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;

export const FilterOption = styled.option`
    background-color: #0f0c01;
    color: white;
`;

export const FilterContainer = styled.div`
    display: flex;
    column-gap: 1.5rem;
    justify-content: flex-end;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: black;
`;