import axios from 'axios';
import TokenService from 'services/TokenService';

export const serverRequest = async (
  method,
  url,
  isHeader,
  data = {},
  params = {},
  contentType = 'application/json'
) => {
  let headers = {};
  if (isHeader) {
    if (TokenService.getLocalAccessToken()) {
      headers = {
        'Content-Type': contentType,
        Authorization: `Bearer ${TokenService.getLocalAccessToken()}`
      };
    } else {
      // TODO: check if auth fails
    }
  }
  const config = {
    method,
    url,
    data,
    params,
    headers,
    baseURL: process.env.REACT_APP_BACKEND_BASE_ENDPOINT
  };
  const response = await axios(config);
  return response;
};
