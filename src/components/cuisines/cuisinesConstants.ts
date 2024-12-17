export type CuisineType = {
    key: string;
    value: CuisinesList;
}

export enum CuisinesList {
    African = 'African',
    Asian = 'Asian',
    American = 'American',
    British = 'British',
    Cajun = 'Cajun',
    Caribbean = 'Caribbean',
    Chinese = 'Chinese',
    European = 'European',
    French = 'French',
    German = 'German',
    Greek = 'Greek',
    Indian = 'Indian',
    Irish = 'Irish',
    Italian = 'Italian',
    Japanese = 'Japanese',
    Jewish = 'Jewish',
    Korean = 'Korean',
    Mediterranean = 'Mediterranean',
    Mexican = 'Mexican',
    Nordic = 'Nordic',
    Southern = 'Southern',
    Spanish = 'Spanish',
    Thai = 'Thai',
    Vietnamese = 'Vietnamese',
}

export const CUISINES_MAP = Object.entries(CuisinesList).map(([key, value]) => ({ key, value }));
