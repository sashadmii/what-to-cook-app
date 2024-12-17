import { Link } from 'react-router-dom';

import { useGetSimilarRecipesQuery } from '../../api/api';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchRecipe } from '../../store/recipe/recipeSlice';

function SimilarRecipes(): JSX.Element {
  const dispatch = useAppDispatch();
  const ingredient = useAppSelector(({ recipe }) => recipe?.ingredient);

  const { data, error, isLoading } = useGetSimilarRecipesQuery(ingredient!, {
    skip: !ingredient,
  });

  if (isLoading || !data) {
    return <h2>Loading similar recipes...</h2>;
  }

  if (error) {
    return <h2>Ooops... Something went wrong</h2>;
  }

  const handleClick = (recipeId: number): void => {
    dispatch(fetchRecipe({ id: recipeId }));
  };

  return (
    <div className="flex flex-col lg:bg-plaster sm:p-0 lg:p-10 mb-8 rounded-3xl lg:mr-5 sm:mr-0">
      <h3 className="font-serifFont text-3xl mb-5">Similar Recipes:</h3>
      {data.map(
        (result): JSX.Element => (
          <Link
            key={result.id}
            to={`/recipe/${result.id}`}
            className="text-left mb-1 sm:bg-plaster sm:pl-4 sm:pt-2 sm:pr-4 sm:pb-2 lg:p-0 sm:rounded-3xl 
          lg:hover:text-caramel cursor-pointer"
            onClick={(): void => handleClick(result.id)}>
            {result.title}
          </Link>
        )
      )}
    </div>
  );
}

export default SimilarRecipes;
