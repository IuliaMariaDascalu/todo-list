import styled from "styled-components";

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