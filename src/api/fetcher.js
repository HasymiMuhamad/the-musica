import { getToken } from 'src/utils/common';
// import fetch, { cencelToken } from 'src/utils/fetch';
import _ from 'lodash/fp';

const fetcher = async (method, url, data) => {
  const optionsRequest = {
    method,
    url,
    [method === 'GET' ? 'params' : 'data']: data,
    // cancelToken: cencelToken().token,
    // headers: {
    //   Authorization: getToken(),
    // },
  };

  try {
    const res = await fetch(optionsRequest);
    return res;
  } catch (error) {
    throw {
      title: error.message,
      desc: error.details.message || undefined,
    };
  }
};

const curriedFetcher = _.curryN(2, fetcher);

export const getAPI = curriedFetcher('GET');
export const postAPI = curriedFetcher('POST');
export const putAPI = curriedFetcher('PUT');
export const deleteAPI = curriedFetcher('DELETE');
