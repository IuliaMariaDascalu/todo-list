import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0f0c01;
    border-radius: 2rem;
    padding: 2rem;
    flex: .6;
    overflow-y: scroll;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem 0;
    padding-bottom: .5rem;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.5;
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const Name = styled.h4`
    margin: 0;
    flex: 0.25;
`;

export const Text = styled.p`
    margin: 0;
    color: white;
`;