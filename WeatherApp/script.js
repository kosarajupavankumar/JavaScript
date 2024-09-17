const form = document.querySelector("form");
const searchField = document.querySelector("#search_field");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchField.value;
  console.log(location);
  searchWeather(location);
});

async function searchWeather(location) {
  const apiKey = "c77a19bb3bfc4086886163212241409";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    let currentTemp = data.current.temp_c;
    let currentCondition = data.current.condition.text;
    let locationName = data.location.name;
    let localTime = data.location.localtime;
    let conditionEmoji = data.current.condition.icon;

    console.log(currentTemp);
    console.log(locationName);
    console.log(localTime);
    console.log(currentCondition);
    console.log(conditionEmoji);

    updateDOM(
      currentTemp,
      locationName,
      localTime,
      currentCondition,
      conditionEmoji
    );

    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}

function updateDOM(
  currentTemp,
  locationName,
  localTime,
  currentCondition,
  conditionEmoji
) {
  const temp = document.querySelector(".temp");
  temp.innerHTML = currentTemp + "°C";

  const location = document.querySelector(".time_location p");
  location.innerHTML = locationName;

  const time = document.querySelector(".time_location span");
  // get the day of the week and the time and also date from the local time

  const date = new Date(localTime);
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const timeOnly = date.toLocaleString("en-US", { timeStyle: "short" });
  const dateOnly = date.toLocaleDateString("en-US");
  localTime = `${timeOnly}, ${day}, ${dateOnly}`;

  time.innerHTML = localTime;

  const condition = document.querySelector(".weather_condition span");
  condition.innerHTML = currentCondition;

  const emoji = document.querySelector(".weather_condition img");
  emoji.src = "http:" + conditionEmoji;
}
