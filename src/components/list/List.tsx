// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import type { Recipe } from '../../api/apiTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeList, ListState } from '../../store/list/listSlice';
import { fetchRecipe } from '../../store/recipe/recipeSlice';
// import useListQueries from './listHooks';
import useListQueries from './listHooksRewritten';

function List(): JSX.Element {
  const { cuisine, searchParam, offset, total } = useAppSelector(
    ({ list }) => list
  );
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useListQueries();
  // console.info('data>>>', data);
  // console.info('length>>>', data?.length);

  // useEffect(() => {
  //   if (!cuisine && !searchParam) {
  //     refetch();
  //   }
  // }, [refetch, cuisine, searchParam]);

  const openRecipe = (recipeId: number): void => {
    dispatch(fetchRecipe({ id: recipeId }));
  };

  const fetchMoreRecipes = (): void => {
    const fetchData: ListState = {
      cuisine,
      searchParam,
      offset: offset + 15,
    };

    dispatch(changeList(fetchData));
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ooops... Something went wrong</h1>;

  if (!data?.length) return <h1>There is no data...</h1>;

  return (
    <section className="flex flex-col items-center">
      <div
        className="sm:flex sm:flex-col lg:grid lg:grid-cols-3 sm:gap-4 lg:gap-5 
      sm:p-0 lg:p-5 sm:mt-5 lg:mt-0 sm:w-full w-fit h-fit overflow-auto">
        {data?.map((recipe) => (
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
        hidden={data.length === total ? true : false}
        className="bg-plaster pt-3 pb-3 pl-5 pr-5 rounded-full w-40 mt-5 
        hover:scale-110 hover:bg-cocoa hover:text-plaster transition ease-in-out 
        duration-500 cursor-pointer">
        Load More
      </button>
    </section>
  );
}

// function List(): JSX.Element {
//   const { cuisine, searchParam, offset, total } = useAppSelector(
//     ({ list }) => list
//   );
//   const dispatch = useAppDispatch();

//   const { data, error, isLoading, refetch } = useListQueries();

//   useEffect(() => {
//     if (!cuisine && !searchParam) {
//       refetch();
//     }
//   }, [refetch, cuisine, searchParam]);

//   const openRecipe = (recipeId: number): void => {
//     dispatch(fetchRecipe({ id: recipeId }));
//   };

//   const fetchMoreRecipes = (): void => {
//     const fetchData: ListState = {
//       cuisine: searchParam ? null : cuisine,
//       searchParam: searchParam ? searchParam : null,
//       offset: offset + 15,
//     };

//     dispatch(changeList(fetchData));
//   };

//   if (isLoading) return <h1>Loading...</h1>;

//   if (error) return <h1>Ooops... Something went wrong</h1>;

//   if (!data?.length) return <h1>There is no data...</h1>;

//   return (
//     <section className="flex flex-col items-center">
//       <div
//         className="sm:flex sm:flex-col lg:grid lg:grid-cols-3 sm:gap-4 lg:gap-5
//       sm:p-0 lg:p-5 sm:mt-5 lg:mt-0 sm:w-full w-fit h-fit overflow-auto">
//         {data?.map(
//           (recipe: Recipe): JSX.Element => (
//             <Link
//               key={recipe.id}
//               to={`/recipe/${recipe.id}`}
//               className="flex flex-col items-center h-auto bg-plaster sm:p-5 lg:p-7 rounded-3xl
//             lg:hover:scale-105 transition ease-in-out duration-500 cursor-pointer"
//               onClick={(): void => openRecipe(recipe.id)}>
//               <img
//                 className="sm:w-full lg:w-fit h-auto rounded-lg"
//                 src={recipe.image}
//                 alt={recipe.title}
//               />
//               <h2 className="mt-3 lg:text-xl md:text-lg sm:text-sm text-center">
//                 {recipe.title}
//               </h2>
//             </Link>
//           )
//         )}
//       </div>
//       <button
//         onClick={fetchMoreRecipes}
//         hidden={data.length === total ? true : false}
//         className="bg-plaster pt-3 pb-3 pl-5 pr-5 rounded-full w-40 mt-5
//         hover:scale-110 hover:bg-cocoa hover:text-plaster transition ease-in-out
//         duration-500 cursor-pointer">
//         Load More
//       </button>
//     </section>
//   );
// }

export default List;
