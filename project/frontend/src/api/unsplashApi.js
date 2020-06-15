import axios from "axios";

export function getRandomImage() {
  return axios
    .get(
      "https://source.unsplash.com/featured/1600x900/?food,restaurant,cafe"
    )
    .then((response) => response.request.responseURL)
    .catch((error) => {
      throw error
    })
}