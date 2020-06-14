
const geoOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maxiumAge: 0,
};

function getGeoPositionSuccess(position) {
  const crd = position.coords;
  return {
    latitude: crd.latitude,
    longitude: crd.longitude
  }
};

function getGeoPositionError(error) {
    return { code: error.code, message: error.message };
};

export function getGeoPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(getGeoPositionSuccess(position))
      },(error) => {
      reject(getGeoPositionError(error))
      },
      geoOptions
    );
  })
};