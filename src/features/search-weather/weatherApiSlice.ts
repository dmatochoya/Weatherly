import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Coordinates,
  GeocodingApiResponse,
  CurrentWeatherApiResponse,
  ForecastWeatherApiResponse,
} from "../../types/apiTypes";

const apiKey = import.meta.env.VITE_API_KEY;

interface BuildEndpointParams {
  coords: Coordinates;
  apiCallType: string;
}

const buildEndpoint = ({ coords, apiCallType }: BuildEndpointParams) =>
  `data/2.5/${apiCallType}?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${apiKey}`;

export const weatherApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/",
  }),
  reducerPath: "weatherApi",
  endpoints: (build) => ({
    getCityCoordinates: build.query<GeocodingApiResponse, string>({
      query: (city) => `geo/1.0/direct?q=${city}&appid=${apiKey}`,
    }),
    getCurrentWeather: build.query<CurrentWeatherApiResponse, Coordinates>({
      query: (coords) => buildEndpoint({ coords, apiCallType: "weather" }),
    }),
    getForecastWeather: build.query<
      ForecastWeatherApiResponse["list"],
      Coordinates
    >({
      query: (coords) => buildEndpoint({ coords, apiCallType: "forecast" }),
      transformResponse: (response: ForecastWeatherApiResponse) =>
        response.list,
    }),
  }),
});

export const {
  useLazyGetCityCoordinatesQuery,
  useLazyGetCurrentWeatherQuery,
  useLazyGetForecastWeatherQuery,
} = weatherApiSlice;
