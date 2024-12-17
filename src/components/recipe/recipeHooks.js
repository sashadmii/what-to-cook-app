import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks.tsx';
import { useParams } from 'react-router-dom';

import { fetchRecipe } from '../../store/recipe/recipeSlice.tsx';
import { useGetRecipeByIdQuery } from '../../api/apiRewritten.tsx';

export const useRecipeQueries = () => {
  const dispatch = useAppDispatch();
  const recipeId = useParams().id;

  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeIsLoading,
  } = useGetRecipeByIdQuery(recipeId, {
    skip: !recipeId,
  });

  useEffect(() => {
    if (!recipeData) return;
    dispatch(
      fetchRecipe({
        ingredient: recipeData.extendedIngredients[0].name,
      })
    );
  }, [recipeData, dispatch]);

  return {
    data: recipeData,
    error: recipeError,
    isLoading: recipeIsLoading,
  };
};
