import { CuisinesList } from '../components/cuisines/cuisinesConstants';

export type RecipeCard = {
  id?: number;
  image?: string;
  title?: string;
  instructions?: string;
  ingredient?: string;
  summary?: string;
};

export type Recipes = {
  recipes: RecipeCard[];
  totalResults: number;
  results: [];
};

export type fetchDataType = 'random' | 'complexSearch';

export type ParamsType = {
  type?: fetchDataType;
  cuisine?: CuisinesList | null;
  searchParam?: string | null;
  offset: number;
  number?: number;
  apiKey?: string;
};

export type Ingredient = {
  id: number;
  nameClean: string;
};

export type RecipeType = {
  id: number;
  image: string;
  extendedIngredients: Ingredient[];
  title: string;
  instructions: string;
};

export type SimilarRecipeType = {
  id: number;
  title: string;
};
