export const createURLParams = <T extends object,>(params: T): string => {

  return Object.keys(params).reduce((acc, key: string) => {
    if (!params[key]) return acc;


    return `${acc}&${key}=${params[key]}`;
  }, '');
};