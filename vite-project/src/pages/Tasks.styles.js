import styled from "styled-components";

export const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    flex: 1;
    min-height: 0;
    padding: 1.5rem;
    overflow-y: auto;
`;

export const SearchInput = styled.input`
    padding: 0.5rem;
    border-radius: 1rem;
    border: none;
    width: 100%;
`;

export const SearchContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    row-gap: 1rem;
    background-color: black;
`;