import axios from "axios";

export const request = (method, url, params, payload) => {
  return axios({
    baseURL: 'https://codifylab.com/ru/api/',
    url,
    headers: {'ngrok-skip-browser-warning': 'true',
    },
    method,
    data: payload,
    params
  })
      .then(({ data }) => data)
      .catch(error => {
        console.log(error)
      })
}