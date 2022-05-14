import { useQuery } from 'react-query';
import { SERVICES } from 'src/configs';
import { getAPI, postAPI, putAPI, deleteAPI } from 'src/api/fetcher';

export const getModules = async (data) => {
  return await getAPI(SERVICES.GET_LIST_OF_MODULE, data);
};

export const getDetailModule = async (id) => {
  return await getAPI(SERVICES.GET_DETAIL_MODULE(id));
};

export const createModule = async (data) => {
  return await postAPI(SERVICES.GET_LIST_OF_MODULE, data);
};

export const updateModule = async (id, data) => {
  return await putAPI(SERVICES.GET_DETAIL_MODULE(id), data);
};

export const deleteModule = async (id) => {
  return await deleteAPI(SERVICES.GET_DETAIL_MODULE(id));
};

// ============ HOOKS ============

export const useModules = (episodeId) =>
  useQuery(
    ['list-of-module', { episodeId }],
    async () => {
      return await getModules({ episodeId });
    },
    {
      enabled: !!episodeId,
    }
  );

export const useDetailModule = (moduleId) => {
  return useQuery(
    ['module-detail', { moduleId }],
    async () => {
      const { data } = await getDetailModule(moduleId);
      return data;
    },
    {
      enabled: !!moduleId,
    }
  );
};
