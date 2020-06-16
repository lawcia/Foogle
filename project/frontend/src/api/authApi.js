import axios from "axios";


export function login(username, password) {
  return axios.post('/api/v1/users/login', {
      username,
      password
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      return response.data.username
    }).catch((error) => {
      let {
        non_field_errors
      } = error.response.data
      if (non_field_errors) {
        non_field_errors === "This username or email is not valid" ? "This username is not valid" : non_field_errors;
        throw non_field_errors;
      }
      throw error;
    })
}