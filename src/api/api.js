import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = process.env.REACT_APP_API_KEY;
// const key = process.env.REACT_APP_API_ADD_KEY;

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com' }),
    endpoints: (builder) => ({
        getRandomRecipes: builder.query({
            query: () =>
                `/recipes/random?apiKey=${key}&number=15&includeNutrition=false`,
        }),
        getSimilarRecipes: builder.query({
            query: (ingredient) =>
                `/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${key}`,
        }),
        getRecipeById: builder.query({
            query: (recipeId) =>
                `/recipes/${recipeId}/information?includeNutrition=false&apiKey=${key}`,
        }),
        getRecipesByCuisine: builder.query({
            query: ({ cuisine, offset }) =>
                `/recipes/complexSearch?cuisine=${cuisine}&offset=${offset}&number=15&apiKey=${key}`,
        }),
        searchRecipes: builder.query({
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
