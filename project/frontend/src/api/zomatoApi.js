import axios from 'axios';

const headers = {
  'user-key': process.env.REACT_APP_ZOMATO_KEY
}

export function getRestaurants(latitude, longitude, keyword){
  if(!latitude) latitude = "";
  if(!longitude) longitude = "";
  if(!keyword) keyword = "";
  const url=`https://developers.zomato.com/api/v2.1/search?q=${keyword}&lat=${latitude}&lon=${longitude}`;
  return axios.get(url, {headers})
  .then(response => {
    if(response.data?.restaurants) return response.data.restaurants;
    throw new Error("could not find restaurants");
  }).catch(error => {
    throw error;
  })
}

  

