import formatDateFromTimestamp from "../utils/formatDateFromTimestamp";
import type {
  CurrentWeatherApiResponse,
  ForecastWeatherApiResponse,
} from "./apiTypes";

type FormattedDate = ReturnType<typeof formatDateFromTimestamp>;

interface WeatherSliceState {
  cityData: {
    name: string;
    country: string | undefined | null;
  };
  currentWeather:
    | (CurrentWeatherApiResponse & { formattedDate: FormattedDate })
    | null;
  forecastWeather: ForecastWeatherApiResponse["list"] | null;
}

export default WeatherSliceState;
