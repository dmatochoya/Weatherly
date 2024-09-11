export type Coordinates = {
  lat: number;
  lon: number;
};

type CityData = {
  name: string;
  country: string;
};

type WeatherData = {
  weather: [{ icon: string }];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  dt: number;
  timezone: number;
};

export type GeocodingApiResponse = Array<Coordinates & CityData>;
export type CurrentWeatherApiResponse = WeatherData;
export type WeatherForecastApiResponse = Array<WeatherData & { pop?: number }>;
