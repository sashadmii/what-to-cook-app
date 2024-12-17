import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useGetRecipesQuery } from '../../api/api';
import { RecipeCard } from '../../api/apiTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  ListState,
  loadMoreRecipes,
  setRecipes,
} from '../../store/list/listSlice';
import { fetchRecipe } from '../../store/recipe/recipeSlice';

function List(): JSX.Element {
  const { cuisine, searchParam, offset, total, recipes, random } =
    useAppSelector(({ list }) => list);
  const dispatch = useAppDispatch();

  const type = random === true ? 'random' : 'complexSearch';

  const { data, isLoading, error } = useGetRecipesQuery({
    type,
    cuisine,
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
      recipes: [],
      cuisine,
      searchParam,
      offset: offset + 15,
      random: false,
    };

    dispatch(loadMoreRecipes(fetchData));
  };

  const openRecipe = (recipeId: number): void => {
    dispatch(fetchRecipe({ id: recipeId }));
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ooops... Something went wrong</h1>;

  if (!data) return <h1>There is no data...</h1>;

  return (
    <section className="flex flex-col items-center">
      <div
        className="sm:flex sm:flex-col lg:grid lg:grid-cols-3 sm:gap-4 lg:gap-5 
        sm:p-0 sm:mt-5 lg:mt-0 sm:w-full w-fit h-fit overflow-auto">
        {recipes?.map(
          (recipe: RecipeCard): JSX.Element => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="flex flex-col items-center h-auto sm:p-5 lg:p-2 rounded-3xl 
            lg:hover:scale-105 transition ease-in-out duration-500 cursor-pointer"
              onClick={() => openRecipe(Number(recipe.id))}>
              <img
                className="sm:w-full lg:w-fit h-auto"
                src={recipe.image}
                alt={recipe.title}
              />
              <div className="flex-col ">
                <h2 className="mt-3 lg:text-xl md:text-lg sm:text-sm text-center">
                  {recipe.title}
                </h2>
              </div>
            </Link>
          )
        )}
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
