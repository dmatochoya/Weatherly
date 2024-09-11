import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Coordinates,
  GeocodingApiResponse,
  CurrentWeatherApiResponse,
  WeatherForecastApiResponse,
} from "../../types/apiTypes";

const apiKey = import.meta.env.VITE_API_KEY;

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
      query: ({ lat, lon }) =>
        `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    }),
    getWeatherForecast: build.query<WeatherForecastApiResponse, Coordinates>({
      query: ({ lat, lon }) =>
        `data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    }),
  }),
});

export const {
  useLazyGetCityCoordinatesQuery,
  useLazyGetCurrentWeatherQuery,
  useLazyGetWeatherForecastQuery,
} = weatherApiSlice;
