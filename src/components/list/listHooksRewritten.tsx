import { useEffect, useState } from 'react';

import { useGetRecipesQuery } from '../../api/apiRewritten.tsx';
import type { fetchDataType, Recipe } from '../../api/apiTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeList } from '../../store/list/listSlice.tsx';

function useListQueries() {
  const { cuisine, searchParam, offset } = useAppSelector(({ list }) => list);
  const dispatch = useAppDispatch();

  const [list, setList] = useState<Recipe[]>([]);

  const dataType: fetchDataType =
    cuisine || searchParam ? 'complexSearch' : 'random';

  const { data, error, isLoading } = useGetRecipesQuery({
    type: dataType,
    cuisine,
    searchParam,
    offset,
  });

  // useEffect(() => {
  //   if (data?.recipes) {
  //     setList(data.recipes);
  //   }
  //   if (cuisine || searchParam) {
  //     setList([]);
  //   }

  //   if (data?.results) {
  //     setList([...list, ...data.results]);
  //   }
  // }, [data]);

  useEffect(() => {
    if (data?.recipes) {
      setList(data.recipes);
    }

    dispatch(
      changeList({ cuisine, searchParam, offset, total: data?.totalResults })
    );

    if (cuisine !== cuisine || searchParam !== searchParam) {
      setList([]);
    }

    if (data?.results) {
      setList([...list, ...data.results]);
    }
  }, [cuisine, searchParam, data?.totalResults, dispatch, data]);

  console.info(list);

  return {
    // data: data?.recipes || data?.results,
    data: list,
    error,
    isLoading,
  };
}

export default useListQueries;
