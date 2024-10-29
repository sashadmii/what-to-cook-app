import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useEffect, useState } from 'react';

import {
  useGetRandomRecipesQuery,
  useGetRecipesByCuisineQuery,
  useSearchRecipesQuery,
} from '../../api/api.tsx';
import type { Recipe } from '../../api/apiTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeList } from '../../store/list/listSlice';

type fetchedList = {
  data: Recipe[] | undefined;
  error: Error | FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
  refetch: () => void;
};

// TODO: rewrite this hook without useEffects
function useListQueries(): fetchedList {
  const { cuisine, searchParam, offset } = useAppSelector(({ list }) => list);
  const dispatch = useAppDispatch();

  const [byCuisineList, setByCuisineList] = useState<Recipe[]>();
  const [bySearchList, setBySearchList] = useState<Recipe[]>();

  // random recipes load (on the first load or restarting the hp)
  const {
    data: randomList,
    error: randomListError,
    isLoading: randomListIsLoading,
    refetch,
  } = useGetRandomRecipesQuery();

  const randomListData = randomList?.recipes;

  // console.info('data>>>', randomList);
  // console.info('error>>>', randomListError);
  // console.info('isLoading>>>', randomListIsLoading);
  // console.info('refetch>>>', refetch);

  //loading the recipes according to the cuisine choice
  const {
    data: listByCuisine,
    error: errorByCuisine,
    isLoading: isLoadingByCuisine,
  } = useGetRecipesByCuisineQuery({ cuisine, offset }, { skip: !cuisine });

  useEffect(() => {
    if (cuisine) {
      setByCuisineList([]);
      dispatch(
        changeList({
          offset: 0,
          random: false,
          total: listByCuisine?.totalResults,
        })
      );
    }
  }, [cuisine, listByCuisine?.totalResults, dispatch]);

  useEffect(() => {
    if (listByCuisine) {
      setByCuisineList((byCuisineList = []) => [
        ...byCuisineList,
        ...listByCuisine.results,
      ]);
    }
  }, [listByCuisine]);

  //loading the recipes according to the search
  const {
    data: listBySearch,
    error: errorBySearch,
    isLoading: isLoadingBySearch,
  } = useSearchRecipesQuery({ searchParam, offset }, { skip: !searchParam });

  useEffect(() => {
    if (searchParam) {
      setBySearchList([]);
      dispatch(
        changeList({
          offset: 0,
          random: false,
          total: listBySearch?.totalResults,
        })
      );
    }
  }, [searchParam, listBySearch?.totalResults, dispatch]);

  useEffect(() => {
    if (listBySearch) {
      setBySearchList((bySearchList = []) => [
        ...bySearchList,
        ...listBySearch.results,
      ]);
    }
  }, [listBySearch]);

  return {
    data: searchParam ? bySearchList : byCuisineList || randomListData,
    error: searchParam ? errorBySearch : errorByCuisine || randomListError,
    isLoading: searchParam
      ? isLoadingBySearch
      : isLoadingByCuisine || randomListIsLoading,
    refetch,
  };
}

export default useListQueries;
