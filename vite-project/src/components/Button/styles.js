import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: ${props => {
        switch (props.type) {
            case 'primary':
                return '#3b60a0';
            case 'secondary':
                return '#8f8f8f';
            default:
                return '#0f0c01';
        }
    }};
    color: white;
    border: 1px solid ${props => {
        switch (props.type) {
            case 'primary':
                return '#3b60a0';
            case 'secondary':
                return '#8f8f8f';
            default:
                return 'white';
        }
    }};
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: ${props => {
            switch (props.type) {
                case 'primary':
                    return '#334f84';
                case 'secondary':
                    return '#878784';
                default:
                    return 'black';
            }
        }};
    }
`;