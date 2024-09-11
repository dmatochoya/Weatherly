import { useState } from "react";
import {
  useLazyGetCityCoordinatesQuery,
  useLazyGetCurrentWeatherQuery,
  useLazyGetWeatherForecastQuery,
} from "./weatherApiSlice";
import * as Styled from "./SearchWeather.styles";

function SearchWeather() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isInputError, setIsInputError] = useState(false);

  const [getCityCoordinates] = useLazyGetCityCoordinatesQuery();
  const [getCurrentWeather] = useLazyGetCurrentWeatherQuery();
  const [getWeatherForecast] = useLazyGetWeatherForecastQuery();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);

    if (isInputError && newValue.length > 0) {
      setIsInputError(false);
    }
  };

  const handleSearchButtonClick = async () => {
    if (searchTerm.length === 0) {
      setIsInputError(true);
      return;
    }

    try {
      const coordinatesResponse = await getCityCoordinates(searchTerm).unwrap();

      if (coordinatesResponse.length) {
        const { lon, lat } = coordinatesResponse[0];

        await getCurrentWeather({ lon, lat }).unwrap();
        await getWeatherForecast({ lon, lat }).unwrap();
      } else {
        setIsInputError(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsInputError(true);
    }

    setSearchTerm("");
  };

  return (
    <>
      <Styled.AppTitle $fontSize="6.5rem">Weatherly</Styled.AppTitle>
      <Styled.SearchInputContainer>
        <Styled.SearchIcon />
        <Styled.SearchInput
          value={searchTerm}
          onChange={handleInputChange}
          name="citySearch"
          $isError={isInputError}
        />
        <Styled.InputErrorHelperText hidden={!isInputError}>
          The information was not valid
        </Styled.InputErrorHelperText>
      </Styled.SearchInputContainer>
      <Styled.SearchButton onClick={handleSearchButtonClick}>
        Search
      </Styled.SearchButton>
    </>
  );
}

export default SearchWeather;
