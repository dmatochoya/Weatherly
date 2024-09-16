import styled from "styled-components";

const Button = styled.button`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  min-width: 9.2rem;
  height: 2.8rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export default Button;
