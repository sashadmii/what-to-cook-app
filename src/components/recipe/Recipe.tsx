import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetRecipeByIdQuery } from '../../api/api';
import { Ingredient } from '../../api/apiTypes';
import { useAppDispatch } from '../../store/hooks';
import { fetchRecipe } from '../../store/recipe/recipeSlice';

function Recipe(): JSX.Element {
  const dispatch = useAppDispatch();
  const recipeId = Number(useParams().id);
  const ingredients: Ingredient[] = [];

  const { data, error, isLoading } = useGetRecipeByIdQuery(recipeId, {
    skip: !recipeId,
  });

  useEffect(() => {
    if (!data) return;
    dispatch(
      fetchRecipe({
        ingredient: data.extendedIngredients[0].nameClean,
      })
    );
  }, [data, dispatch]);

  if (data) {
    const list: number[] = [];

    data?.extendedIngredients.filter((ingredient: Ingredient): Ingredient[] => {
      if (!list.includes(ingredient.id)) {
        list.push(ingredient.id);
        ingredients.push(ingredient);
      }

      return ingredients;
    });
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Ooops... Something went wrong</h1>;
  }

  return (
    <section
      className="flex sm:flex-col lg:flex-row sm:w-full lg:w-3/4 h-fit overflow-auto mr-7 
      bg-plaster p-10 rounded-3xl break-normal">
      <img
        className="object-fill sm:full lg:w-1/2 h-1/2 sm:mr-0 lg:mr-16 sm:mb-5 lg:mb-0 rounded-lg"
        src={data?.image}
        alt={data?.title}
      />
      <div>
        <h2 className="font-serifFont text-3xl mb-5">{data?.title}</h2>
        <ul className="mt-5 ml-4 list-disc">
          {ingredients.map((ingredient: Ingredient) => (
            <li key={ingredient.id}>{ingredient.nameClean}</li>
          ))}
        </ul>
        <div
          className="mt-5 list-disc"
          dangerouslySetInnerHTML={{
            __html: data!.instructions,
          }}></div>
      </div>
    </section>
  );
}

export default Recipe;

{
  /* <div className="mt-5 ml-4">
  {data?.analyzedInstructions[0].steps.map((step) => (
    <p key={step.number}>{step.step}</p>
  ))}
</div>; */
}
