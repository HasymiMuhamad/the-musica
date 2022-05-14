import _ from 'lodash';
import { useQuery } from 'react-query';
import { SERVICES } from 'src/configs';
import { getAPI, postAPI, putAPI } from 'src/api/fetcher';

export const searchMusic = (data) =>
  postAPI(SERVICES.GET_LIST_OF_PRIVILEGE, data);

export const getMusic = ({ page, size, search, filter }) => {
  const params = {
    page,
    size,
  };

  if (search && search.length > 2) {
    params.keyword = search;
  }

  return getAPI(SERVICES.GET_LIST_OF_PRIVILEGE, params);
};

// ============ HOOKS ============

export const useMusicData = (page = 1, size = 10, search, filter) =>
  useQuery(
    ['list-of-privilege', { page, size, search, filter }],
    async () => {
      return await getMusic({ page, size, search, filter });
    },
    {
      enabled: !!page,
    }
  );
