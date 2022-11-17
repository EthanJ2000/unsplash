import { accessKey, baseApiUrl } from "../config";

import axios from "axios";

const axiosClient = axios.create();

export const get = async (endpoint: string) => {
  return axiosClient
    .get(`${baseApiUrl}${endpoint}?client_id=${accessKey}`)
    .then((response: any) => response.data)
    .catch((e: any) => console.log(e));
};
