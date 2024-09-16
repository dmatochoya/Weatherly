import styled from "styled-components";

export const AppTitle = styled.h1<{ $fontSize: string; $isClickable: boolean }>`
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  background: linear-gradient(93deg, #136aab 1.87%, #b0e0f5 96.48%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: ${({ $isClickable }) => $isClickable && "pointer"};
`;

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SearchIcon = styled.img.attrs({
  src: "src/assets/search.svg",
})`
  position: absolute;
  top: 0.75rem;
  left: 1rem;
`;

export const SearchInput = styled.input.attrs<{ $isError: boolean }>({
  type: "search",
  placeholder: "Search for a city...",
  name: "citySearch",
})`
  font-size: 1.17rem;
  width: 30rem;
  height: 2.813rem;
  padding: 1.25rem;
  padding-left: 2.55rem;
  border-radius: 50px;
  border: 2px double transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  &:focus {
    outline: none;
  }

  ${({ $isError, theme }) =>
    $isError && `border: 2px solid ${theme.colors.error}`}
`;

export const InputErrorHelperText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.error};
  font-size: 0.9rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.error};
  padding: 0.3rem 0 0 1.3rem;
`;
