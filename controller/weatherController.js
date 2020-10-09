const weatherController = {};
require("dotenv").config();
const apikey = process.env.OPEN_WEATHER_KEY;
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
const axios = require("axios");



weatherController.getWeatherData = async (req, res, next) => {
  try {
    let city = req.query.q;
    let lon = req.query.lon;
    let lat = req.query.lat;

    if (city) {
      console.log("hehe", city);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
      let response = await axios.get(url);
      console.log("response city: ", response);
      res.send({ status: "success", data: response.data });
    } else if (lon && lat) {
      console.log("lon-lat", lon, lat);
      let url = `https://api.openweathermap.org/data/2.5/weather?&lon=${lon}&lat=${lat}&appid=${apikey}&units=metric`;
      let response = await axios.get(url);
      console.log("response: ", response);
      res.send({ status: "success", data: response.data });
    }
  } catch (err) {
      console.log("err.message", err.message);
    res.status(400).send({ status: "fail", data: err.message });
  }
};

module.exports = weatherController;
