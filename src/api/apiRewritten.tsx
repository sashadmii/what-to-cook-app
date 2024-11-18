import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ParamsType, Recipe, Recipes } from './apiTypes';
import { createURLParams } from './utils';

const key = process.env.REACT_APP_API_KEY;
// const key = process.env.REACT_APP_API_ADD_KEY;
// const key = process.env.REACT_APP_API_ADD_KEY2

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com' }),
  endpoints: (build) => ({
    getRecipes: build.query<Recipes, ParamsType>({
      query: (params) => {
        const fetchParams = {
          ...params,
          number: 15,
          apiKey: key,
        };
        delete fetchParams.type;

        return `/recipes/${params.type}?${createURLParams<ParamsType>(
          fetchParams
        )}`;
      },
    }),

    getSimilarRecipes: build.query<Recipes, string>({
      query: (ingredient) =>
        `/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${key}`,
    }),
    getRecipeById: build.query<Recipe, number>({
      query: (recipeId) =>
        `/recipes/${recipeId}/information?includeNutrition=false&apiKey=${key}`,
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetSimilarRecipesQuery,
  useGetRecipeByIdQuery,
} = recipesApi;
