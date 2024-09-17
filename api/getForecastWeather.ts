import type { VercelRequest, VercelResponse } from "@vercel/node";
import type { ForecastWeatherApiResponse } from "../src/types/apiTypes";

module.exports = async function (req: VercelRequest, res: VercelResponse) {
  const { lat, lon } = req.query;
  const apiKey = process.env.API_KEY;

  if (!lat || !lon || !apiKey) {
    return res
      .status(400)
      .json({ error: "Latitude, longitude, and API key are required" });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    const data = (await response.json()) as ForecastWeatherApiResponse;

    if (response.ok) {
      res.status(200).json(data.list); // Only return the forecast list
    } else {
      res.status(response.status).json({ error: "An error occurred" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
