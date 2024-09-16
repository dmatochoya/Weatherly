import { useAppSelector } from "../../../app/hooks";
import {
  selectForecastWeather,
  selectCityData,
} from "../../../features/search-weather/weatherSlice";
import formatDateFromTimestamp from "../../../utils/formatDateFromTimestamp";
import convertTemperature from "../../../utils/convertTemperature";
import getWeatherIconUrl from "../../../utils/getWeatherIconUrl";
import * as StyledCommon from "../../../common/components/styled";
import * as StyledWeatherDashboard from "../WeatherDashboard.styles";

const Styled = { ...StyledWeatherDashboard, Common: { ...StyledCommon } };

interface ForecastWeatherProps {
  currentTempUnit: "C" | "F";
}

function ForecastWeather({ currentTempUnit }: ForecastWeatherProps) {
  const forecastWeather = useAppSelector(selectForecastWeather);
  const cityData = useAppSelector(selectCityData);

  return (
    <Styled.Common.SectionFlexWrapper
      $backgroundColor="#fff"
      $padding="1.5rem 0 5.5rem"
    >
      <Styled.Common.SectionTitle $padding="2.5rem 0">
        Next {forecastWeather?.length} days in {cityData.name}
      </Styled.Common.SectionTitle>
      {forecastWeather?.map(
        ({
          dt: timestamp,
          weather: [{ icon, description }],
          main: { temp_max, temp_min },
          pop: percentOfPrecipit,
        }) => (
          <Styled.ForecastWeatherFlexCard
            key={timestamp}
            $justifyContent="space-between"
            $alignItems="center"
          >
            <time>{formatDateFromTimestamp(timestamp).shortDate}</time>
            <Styled.Common.Flex $alignItems="center">
              <img src={getWeatherIconUrl(icon + "d")} alt={description} />
              {convertTemperature(temp_max, currentTempUnit)}° /{" "}
              {convertTemperature(temp_min, currentTempUnit)}°
            </Styled.Common.Flex>
            <Styled.Common.Flex $alignItems="center">
              <img src={getWeatherIconUrl("09d")} alt="Rain icon" />
              {percentOfPrecipit}%
            </Styled.Common.Flex>
          </Styled.ForecastWeatherFlexCard>
        )
      )}
    </Styled.Common.SectionFlexWrapper>
  );
}

export default ForecastWeather;
