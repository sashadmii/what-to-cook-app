import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ByCuisineSearch, BySearch, Recipes } from '../types';

const key = process.env.REACT_APP_API_KEY;
// const key = process.env.REACT_APP_API_ADD_KEY;

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com' }),
  endpoints: (build) => ({
    getRandomRecipes: build.query<Recipes, void>({
      query: () =>
        `/recipes/random?apiKey=${key}&number=15&includeNutrition=false`,
    }),
    getSimilarRecipes: build.query({
      query: (ingredient) =>
        `/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${key}`,
    }),
    getRecipeById: build.query({
      query: (recipeId) =>
        `/recipes/${recipeId}/information?includeNutrition=false&apiKey=${key}`,
    }),
    getRecipesByCuisine: build.query<Recipes, ByCuisineSearch>({
      query: ({ cuisine, offset }) =>
        `/recipes/complexSearch?cuisine=${cuisine}&offset=${offset}&number=15&apiKey=${key}`,
    }),
    searchRecipes: build.query<Recipes, BySearch>({
      query: ({ searchParam, offset }) =>
        `/recipes/complexSearch?query=${searchParam}&offset=${offset}&number=15&apiKey=${key}`,
    }),
  }),
});

export const {
  useGetRandomRecipesQuery,
  useGetSimilarRecipesQuery,
  useGetRecipeByIdQuery,
  useGetRecipesByCuisineQuery,
  useSearchRecipesQuery,
} = recipesApi;
