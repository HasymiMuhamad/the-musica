import { useQuery } from 'react-query';
import { SERVICES } from 'src/configs';
import { getAPI, postAPI, putAPI, deleteAPI } from 'src/api/fetcher';

export const getFeatures = async (data) => {
  return await getAPI(SERVICES.GET_LIST_OF_FEATURE, data);
};

export const createFeature = async (data) => {
  return await postAPI(SERVICES.GET_LIST_OF_FEATURE, data);
};

export const updateFeature = async (id, data) => {
  return await putAPI(SERVICES.GET_DETAIL_FEATURE(id), data);
};

export const deleteFeature = async (id) => {
  return await deleteAPI(SERVICES.GET_DETAIL_FEATURE(id));
};

// ============ HOOKS ============

export const useFeatures = (moduleId, include = 'feature,function') =>
  useQuery(
    ['list-of-feature', { moduleId }],
    async () => {
      return await getFeatures({ moduleId, include });
    },
    {
      enabled: !!moduleId && !!include,
    }
  );
