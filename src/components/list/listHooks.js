import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { changeList } from '../../store/list/listSlice.js';

import {
    useGetRandomRecipesQuery,
    useGetRecipesByCuisineQuery,
    useSearchRecipesQuery,
} from '../../api/api.js';

function useListQueries() {
    const cuisine = useSelector((state) => state.list?.cuisine);
    const searchParam = useSelector((state) => state.list?.searchParam);
    const offset = useSelector((state) => state.list.offset);
    const dispatch = useDispatch();

    const [byCuisineList, setByCuisineList] = useState();
    const [bySearchList, setBySearchList] = useState();

    // random recipes load (on the first load or restarting the hp)
    const {
        data: randomList,
        error: randomListError,
        isLoading: randomListIsLoading,
        refetch,
    } = useGetRandomRecipesQuery();

    const randomListData = randomList?.recipes;

    //loading the recipes according to the cuisine choice
    const {
        data: listByCuisine,
        error: errorByCuisine,
        isLoading: isLoadingByCuisine,
    } = useGetRecipesByCuisineQuery(
        { cuisine, offset },
        {
            skip: !cuisine,
        }
    );

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
                ...listByCuisine?.results,
            ]);
        }
    }, [listByCuisine]);

    //loading the recipes according to the search
    const {
        data: listBySearch,
        error: errorBySearch,
        isLoading: isLoadingBySearch,
    } = useSearchRecipesQuery(
        { searchParam, offset },
        {
            skip: !searchParam,
        }
    );

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
                ...listBySearch?.results,
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
