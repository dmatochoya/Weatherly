import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useLazyGetCityCoordinatesQuery,
  useLazyGetCurrentWeatherQuery,
  useLazyGetForecastWeatherQuery,
} from "./weatherApiSlice";
import useEnterKeyListener from "../../hooks/useEnterKeyListener";
import * as StyledCommon from "../../common/components/styled";
import * as StyledSearch from "./SearchWeather.styles";

const Styled = { ...StyledSearch, Common: { ...StyledCommon } };

function SearchWeather() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isInputError, setIsInputError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [getCityCoordinates] = useLazyGetCityCoordinatesQuery();
  const [getCurrentWeather] = useLazyGetCurrentWeatherQuery();
  const [getForecastWeather] = useLazyGetForecastWeatherQuery();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);

    if (isInputError && newValue.length > 0) {
      setIsInputError(false);
    }
  };

  const handleSearch = async () => {
    if (searchTerm.trim().length === 0) {
      setIsInputError(true);
      return;
    }

    setSearchTerm("");

    try {
      const coordinatesResponse = await getCityCoordinates(searchTerm).unwrap();

      if (coordinatesResponse.length > 0) {
        const { lon, lat } = coordinatesResponse[0];

        await Promise.all([
          getCurrentWeather({ lon, lat }).unwrap(),
          getForecastWeather({ lon, lat }).unwrap(),
        ]);

        if (isHomePage) {
          navigate("/weather");
        }
      } else {
        setIsInputError(true);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? `Error fetching data: ${error.message}`
          : "Unknown error occurred";
      console.error(errorMessage);

      setIsInputError(true);
    }
  };

  useEnterKeyListener(handleSearch);

  const handleAppTitleClick = () => {
    if (!isHomePage) {
      navigate("/");
    }
  };

  return (
    <>
      <Styled.AppTitle
        $fontSize={isHomePage ? "6.5rem" : "2.6rem"}
        $isClickable={!isHomePage}
        onClick={handleAppTitleClick}
      >
        Weatherly
      </Styled.AppTitle>
      <Styled.SearchInputContainer>
        <Styled.SearchIcon />
        <Styled.SearchInput
          value={searchTerm}
          onChange={handleInputChange}
          $isError={isInputError}
        />
        <Styled.InputErrorHelperText hidden={!isInputError}>
          The information was not valid
        </Styled.InputErrorHelperText>
      </Styled.SearchInputContainer>
      <Styled.Common.Button onClick={handleSearch}>Search</Styled.Common.Button>
    </>
  );
}

export default SearchWeather;
