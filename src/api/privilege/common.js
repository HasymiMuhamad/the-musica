import { useQuery } from 'react-query';
import { SERVICES } from 'src/configs';
import { getAPI } from 'src/api/fetcher';

export const getCategories = async (data) => {
  return await getAPI(SERVICES.GET_LIST_OF_CATEGORY, data);
};

export const getPlatforms = async (data) => {
  return await getAPI(SERVICES.GET_LIST_OF_PLATFORM, data);
};

// ============ HOOKS ============

export const useCategories = (platformId) =>
  useQuery(
    ['list-of-category', platformId],
    async () => {
      return await getCategories({ platformId });
    },
    {
      enabled: !!platformId,
    }
  );

export const usePlatforms = () =>
  useQuery('list-of-platform', async () => {
    return await getPlatforms();
  });
