export type Recipe = {
  id: string;
  image: string;
  title: string;
  instructions: string;
};

export type Recipes = {
  recipes: Recipe[];
  totalResults: number;
  results: [];
};

export type ByCuisineSearch = {
  cuisine: string;
  offset: number;
};
