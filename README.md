# Weatherly

Weatherly is a weather forecasting application built with React, TypeScript, and Modern Redux (RTK), with integrations to OpenWeather API for fetching real-time weather data and forecasts. The project is deployed on Vercel, leveraging serverless functions to securely manage the API key for OpenWeather.

## Features

- **City Search**: Search for any city to view its weather conditions.
- **Weather Dashboard**: After searching for a city, you're presented with current weather data and an up-to 6-day forecast.
- **Temperature Unit Toggle**: Switch between Celsius and Fahrenheit units.
- **Error Handling**: Managed using `react-error-boundary` for a robust user experience.
- **Serverless Functions**: Serverless functions are deployed in Vercel to prevent exposure of the OpenWeather API key in the frontend.

## Live Demo

The app is deployed on Vercel and can be accessed at:  
[Weatherly](https://weatherlytoday.vercel.app/)

## Tech Stack

- **React** (with `vite` scaffolding)
- **TypeScript**: Type safety
- **Redux Toolkit (RTK)**: For managing global state
- **RTK Query**: For handling data fetching
- **styled-components**: For styling
- **react-router-dom**: For routing
- **react-error-boundary**: For handling errors
- **Vercel**: For hosting

## Setup

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dmatochoya/Weatherly.git
   cd weatherly
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

In the root directory, copy the .env.example file to .env:

```bash
cp .env.example .env
```

You can obtain your API key by signing up at [OpenWeather](https://openweathermap.org/).

Then, add your OpenWeather API key in the .env file:

```bash
VITE_API_KEY=your_openweather_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

## License

This project is licensed under the MIT License.
