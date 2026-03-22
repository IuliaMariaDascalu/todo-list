import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0f0c01;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 2rem;
    flex: 1;
    height: 45vh;
    overflow-y: scroll;
`;

export const Card = styled.div`
    background-color: #0f0c01;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 2rem;
    flex: 1;
    margin: 1rem;
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
    text-align: ${props => props.centered ? 'center' : 'end'};
    color: ${props => props.completed ? 'green' : 'red'};
    font-weight: bold;
`;

export const Title = styled.h2`
    margin: 0;
    color: white;
    text-align: start;
    font-size: 28px;
}
`;

Status.defaultProps = {
    completed: false,
};