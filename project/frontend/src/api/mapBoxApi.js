import axios from "axios";


const token = process.env.REACT_APP_MAPBOX_TOKEN;

export function convertSearchLocationToCoordinates(searchLocation) {
  return axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchLocation}.json?access_token=${token}`
  ).then(response => {
    if (response.status === 200)  return response.data.features;
    throw new Error();
  }).catch(error => {
    throw error;
  })
}