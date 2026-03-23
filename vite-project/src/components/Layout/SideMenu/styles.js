import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  width: 150px;
  background: #0f0c01;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
`;

export const UserBox = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Name = styled.h3`
  margin: 8px 0 4px;
`;

export const Email = styled.p`
  font-size: 12px;
  color: #9ca3af;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NavItem = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 10px;

&:hover {
  text-decoration: underline;
}
`;
