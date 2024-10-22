import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { changeList } from '../../store/list/listSlice';
import useListQueries from './listHooks';
import { fetchRecipe } from '../../store/recipe/recipeSlice';

function List() {
  const curCuisine = useSelector((state) => state.list?.cuisine);
  const search = useSelector((state) => state.list.searchParam);
  const offsetNum = useSelector((state) => state.list.offset);
  const total = useSelector((state) => state.list.total);
  const dispatch = useDispatch();

  const { data, error, isLoading, refetch } = useListQueries();

  useEffect(() => {
    if (!curCuisine && !search) {
      refetch();
    }
  }, [refetch, curCuisine, search]);

  const openRecipe = (recipeId) => {
    dispatch(fetchRecipe({ id: recipeId }));
  };

  const fetchMoreRecipes = () => {
    let fetchData = {
      cuisine: search ? '' : curCuisine,
      searchParam: search ? search : '',
      offset: offsetNum + 15,
    };

    dispatch(changeList(fetchData));
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ooops... Something went wrong</h1>;

  if (!data.length) return <h1>There is no data...</h1>;

  return (
    <section className="flex flex-col items-center">
      <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-3 sm:gap-4 lg:gap-5 sm:p-0 lg:p-5 sm:mt-5 lg:mt-0 sm:w-full w-fit h-fit overflow-auto">
        {data.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="flex flex-col items-center h-auto bg-plaster sm:p-5 lg:p-7 rounded-3xl lg:hover:scale-105 transition ease-in-out duration-500 cursor-pointer"
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
        hidden={data.length === total ? true : false}
        className="bg-plaster pt-3 pb-3 pl-5 pr-5 rounded-full w-40 mt-5 hover:scale-110 hover:bg-cocoa hover:text-plaster transition ease-in-out duration-500 cursor-pointer">
        Load More
      </button>
    </section>
  );
}

export default List;
