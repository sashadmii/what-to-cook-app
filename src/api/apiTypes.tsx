import { CuisinesList } from '../components/cuisines/cuisinesConstants';

type Recipe = {
  id: number;
  image?: string;
  title?: string;
  instructions?: string;
  ingredient?: string;
};

type Recipes = {
  recipes: Recipe[];
  totalResults: number;
  results: [];
};

type ByCuisineSearch = {
  cuisine: CuisinesList | null | undefined;
  offset: number;
};

type BySearch = {
  searchParam: string | null | undefined;
  offset: number;
};

export type { Recipe, Recipes, ByCuisineSearch, BySearch };
