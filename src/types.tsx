export interface Recipe {
  id: number;
  image: string;
  title: string;
  instructions: string;
}

export interface Recipes {
  recipes: Recipe[];
  totalResults: number;
  results: [];
}

export interface ByCuisineSearch {
  cuisine: string;
  offset: number;
}

export interface BySearch {
  searchParam: string;
  offset: number;
}
