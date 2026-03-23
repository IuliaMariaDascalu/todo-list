import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0f0c01;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    min-height: 0;
    max-height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
`;

export const Card = styled.div`
    background-color: #0f0c01;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 2rem;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`;

export const Avatar = styled.img`
    width: 50px;
    height: auto;
    border-radius: 1rem;
`;

export const ContainerRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem 0;
    padding-bottom: .5rem;
    border-bottom: 1px solid #333;
`;

export const Description = styled.p`
    margin: 0;
    color: white;
    flex: 0.5;
`;

export const CardDescription = styled.p`
    margin: 0.5rem 0;
    color: white;
    word-wrap: break-word;
`;


export const Status = styled.p`
    margin: 0;
    flex: .25;
    text-align: ${props => props.centered ? 'center' : 'start'};
    color: ${props => props.completed ? 'green' : 'red'};
    font-weight: bold;
    font-size: 14px
`;

export const Title = styled.h2`
    color: white;
    text-align: start;
}
`;