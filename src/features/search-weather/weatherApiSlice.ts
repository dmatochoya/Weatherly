import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Coordinates,
  GeocodingApiResponse,
  CurrentWeatherApiResponse,
  ForecastWeatherApiResponse,
} from "../../types/apiTypes";

const isLocal = import.meta.env.MODE === "development";
const apiKey = import.meta.env.VITE_API_KEY;

interface BuildEndpointParams {
  coords: Coordinates;
  apiCallType: string;
}

const buildEndpoint = ({ coords, apiCallType }: BuildEndpointParams) =>
  `data/2.5/${apiCallType}?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${apiKey}`;

export const weatherApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: isLocal ? "https://api.openweathermap.org" : "/api", // Use OpenWeather API locally, serverless functions in production
  }),
  reducerPath: "weatherApi",
  endpoints: (builder) => ({
    getCityCoordinates: builder.query<GeocodingApiResponse, string>({
      query: (city) =>
        isLocal
          ? `geo/1.0/direct?q=${city}&appid=${apiKey}` // OpenWeather API directly for local development
          : `getCityCoordinates?city=${city}`, // Use serverless function in production
    }),
    getCurrentWeather: builder.query<CurrentWeatherApiResponse, Coordinates>({
      query: (coords) =>
        isLocal
          ? buildEndpoint({ coords, apiCallType: "weather" }) // Direct OpenWeather API call
          : `getCurrentWeather?lat=${coords.lat}&lon=${coords.lon}&apiCallType=weather`, // Serverless function in production
    }),
    getForecastWeather: builder.query<
      ForecastWeatherApiResponse["list"],
      Coordinates
    >({
      query: (coords) =>
        isLocal
          ? buildEndpoint({ coords, apiCallType: "forecast" }) // Direct API call in development
          : `getForecastWeather?lat=${coords.lat}&lon=${coords.lon}&apiCallType=forecast`, // Serverless function in production
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
