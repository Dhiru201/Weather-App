import { api_key, baseUrl } from "./weatherService";

export async function getWeatherInfo({ city, coordinates }) {
  let searchUrl = baseUrl;
  if (coordinates !== undefined) {
    searchUrl =
      searchUrl +
      `?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${api_key}`;
  } else if (city !== undefined) {
    searchUrl = searchUrl + `/?q=${city}&appid=${api_key}`;
  }
  const response = await fetch(searchUrl);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || "Failed to get data");
  }
  return resData;
}
