import axios from "axios";

export const request = (method, url, params, payload) => {
  return axios({
    baseURL: 'http://192.168.68.118:8000/ru/api/',
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