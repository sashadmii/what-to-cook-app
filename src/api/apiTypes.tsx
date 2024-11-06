import { CuisinesList } from '../components/cuisines/cuisinesConstants';

export type Recipe = {
  id: number;
  image?: string;
  title?: string;
  instructions?: string;
  ingredient?: string;
};

export type Recipes = {
  recipes: Recipe[];
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

//this should be deleted later
export type ByCuisineSearch = {
  cuisine: CuisinesList | null | undefined;
  offset: number;
};

export type BySearch = {
  searchParam: string | null | undefined;
  offset: number;
};
