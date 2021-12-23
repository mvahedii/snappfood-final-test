import axios, { AxiosRequestConfig } from "axios";

/*************************************
 *------* Setup Axios Configs *------*
 *************************************/

const client = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

/*************************************
 *------* Request Interceptor *------*
 *************************************/

client.interceptors.request.use(
  (config) => {
    config.headers!["Accept"] = "application/json";
    config.headers!["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const gate = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = client({ ...config, cancelToken: source.token }).then(
    ({ data }) => data
  );

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};
