import axios from "axios";
import {language} from "../stores";

const SITE_URL = 'https://codifylab.com/'
export const request = (method, url, lang) => {
  return axios[method](`${SITE_URL}${lang}/api/${url}`)
      .then(({ data }) => data)
      .catch(error => {
        console.log(error)
      })
}