import {appConfig} from '../config/appConfig';

export const checkStatus = response => {
  const hasError = response.status < 200 || response.status >= 300;
  if (hasError) {
    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
};

export const withToken = url => {
  const tokenWrapper = JSON.parse(window.localStorage.getItem(appConfig.localStorage.tokenWrapperKey)!!);
  return `${url}?access_token=${tokenWrapper.token}`;
};

export const getCurrentEmail = () => {
  const tokenWrapper = JSON.parse(window.localStorage.getItem(appConfig.localStorage.tokenWrapperKey)!!);
  return tokenWrapper.email;
};
