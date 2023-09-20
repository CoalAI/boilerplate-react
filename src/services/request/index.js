import axios from 'axios';
import TokenService from '../TokenService';

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
  try{
    const response = await axios(config);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      await refreshToken();
      const retryConfig = { ...config, headers: { ...headers } };
      const response = await axios(retryConfig);
      return response.data;
    } else {
      console.error('Server request error:', error);
      throw error;
    }
  }
};

async function refreshToken() {
  console.log(TokenService.getLocalRefreshToken())
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_ENDPOINT}/api/token/refresh/`, {
      refresh: TokenService.getLocalRefreshToken()
    });
    TokenService.updateLocalAccessToken(response.data.access);
  } catch (error) {
    console.error('Token refresh error:', error);
    throw error;
  }
}
