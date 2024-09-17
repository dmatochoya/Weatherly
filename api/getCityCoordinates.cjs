const fetch = require("node-fetch");

module.exports = async function (req, res) {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;
  console.log("API_KEY", process.env.API_KEY);
  if (!city || !apiKey) {
    return res.status(400).json({ error: "City and API key are required" });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: "An error occurred" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
