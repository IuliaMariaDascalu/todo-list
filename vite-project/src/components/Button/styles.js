import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: ${props => {
        switch (props.type) {
            case 'success':
                return 'green';
            case 'warning':
                return '#807a03';
            case 'error':
                return 'red';
            default:
                return 'gray';
        }
    }};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #a69307;
    }
`;