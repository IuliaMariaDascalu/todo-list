import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0f0c01;
    border-radius: 2rem;
    padding: 1.5rem;
    flex: 1;
    height: 100%;
    min-height: 0;
    max-height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
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
    color: #d4d3cf;
`;

export const Text = styled.p`
    margin: 0;
    color: white;
    font-size: 14px;
`;

export const CloseButton = styled.button`
    background-color: transparent;
    border: white solid 1px;
    border-radius: 50%;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
`;