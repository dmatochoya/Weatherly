import * as StyledCommon from "../../common/components/styled";
import * as StyledHome from "./Home.styles";

const S = { ...StyledCommon, ...StyledHome };

function Home() {
  const isError = false;
  console.log("what");

  return (
    <S.Section>
      <S.AppTitle $fontSize="6.5rem">Weatherly</S.AppTitle>
      <S.SearchInputContainer>
        <S.SearchIcon />
        <S.SearchInput $isError={isError} />
        <S.InputErrorHelperText hidden={!isError}>
          The information was not valid
        </S.InputErrorHelperText>
      </S.SearchInputContainer>
      <S.SearchButton>Search</S.SearchButton>
    </S.Section>
  );
}

export default Home;
