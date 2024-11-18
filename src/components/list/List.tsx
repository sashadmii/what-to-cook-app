import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useGetRecipesQuery } from '../../api/apiRewritten';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  ListState,
  loadMoreRecipes,
  setRecipes,
} from '../../store/list/listSlice';
import { fetchRecipe } from '../../store/recipe/recipeSlice';

function List(): JSX.Element {
  const { cuisine, searchParam, offset, total, recipes } = useAppSelector(
    ({ list }) => list
  );
  const dispatch = useAppDispatch();

  const type = cuisine || searchParam ? 'complexSearch' : 'random';

  const { data, isLoading, error } = useGetRecipesQuery({
    type,
    cuisine,
    searchParam,
    offset,
  });

  useEffect(() => {
    if (data) {
      dispatch(
        setRecipes({
          recipes: data?.recipes || data?.results,
          total: data?.totalResults,
        })
      );
    }
  }, [data, dispatch]);

  const fetchMoreRecipes = (): void => {
    const fetchData: ListState = {
      cuisine,
      searchParam,
      offset: offset + 15,
    };

    dispatch(loadMoreRecipes(fetchData));
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ooops... Something went wrong</h1>;

  if (!data) return <h1>There is no data...</h1>;

  const openRecipe = (recipeId: number): void => {
    dispatch(fetchRecipe({ id: recipeId }));
  };

  return (
    <section className="flex flex-col items-center">
      <div
        className="sm:flex sm:flex-col lg:grid lg:grid-cols-3 sm:gap-4 lg:gap-5 
      sm:p-0 lg:p-5 sm:mt-5 lg:mt-0 sm:w-full w-fit h-fit overflow-auto">
        {recipes?.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="flex flex-col items-center h-auto bg-plaster sm:p-5 lg:p-7 rounded-3xl 
            lg:hover:scale-105 transition ease-in-out duration-500 cursor-pointer"
            onClick={() => openRecipe(recipe.id)}>
            <img
              className="sm:w-full lg:w-fit h-auto rounded-lg"
              src={recipe.image}
              alt={recipe.title}
            />
            <h2 className="mt-3 lg:text-xl md:text-lg sm:text-sm text-center">
              {recipe.title}
            </h2>
          </Link>
        ))}
      </div>
      <button
        onClick={fetchMoreRecipes}
        hidden={recipes?.length === total ? true : false}
        className="bg-plaster pt-3 pb-3 pl-5 pr-5 rounded-full w-40 mt-5 
        hover:scale-110 hover:bg-cocoa hover:text-plaster transition ease-in-out 
        duration-500 cursor-pointer">
        Load More
      </button>
    </section>
  );
}

export default List;
