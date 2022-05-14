import { SERVICES } from 'src/configs';
import { postAPI, putAPI, deleteAPI } from 'src/api/fetcher';

export const createFunction = async (data) => {
  return await postAPI(SERVICES.CREATE_FUNCTION, data);
};

export const updateFunction = async (id, data) => {
  return await putAPI(SERVICES.GET_DETAIL_FUNCTION(id), data);
};

export const deleteFunction = async (id) => {
  return await deleteAPI(SERVICES.GET_DETAIL_FUNCTION(id));
};
