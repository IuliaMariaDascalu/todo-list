import { StyledButton } from "./styles";

export default function Button({ children, onClick, type }) {
  return (
    <StyledButton onClick={onClick} type={type}>{children}</StyledButton>
  );
}