import { useAppDispatch } from '../../store/hooks';
import { changeList } from '../../store/list/listSlice';
import { ListState } from '../../store/list/listSlice';
import { CUISINES_MAP, CuisinesList, CuisineType } from './cuisinesConstants';

function Cuisines(): JSX.Element {
  const dispatch = useAppDispatch();

  const fetchCuisine = (cuisine: CuisinesList): void => {
    const updatedCuisines: ListState = {
      recipes: [],
      cuisine: cuisine,
      searchParam: '',
      offset: 0,
      random: false,
    };

    dispatch(changeList(updatedCuisines));
  };

  return (
    <div className="mt-10 ml-3 mr-3 text-center">
      <h3 className="font-serifFont text-3xl mb-5">Choose cuisine:</h3>
      <div className="scrollbar overflow-x-scroll lg:overflow-x-auto flex-grow flex-shrink whitespace-nowrap">
        <ul className="flex space-x-10 w-full">
          {CUISINES_MAP.map(
            (cuisine: CuisineType): JSX.Element => (
              <li
                key={cuisine.key}
                className="block w-40 flex-grow flex-shrink-0 text-center">
                <button
                  className="sm:text-sm lg:text-lg sm:pr-2 sm:pl-2 lg:p-0 
              text-center hover:text-caramel cursor-pointer"
                  onClick={(): void => fetchCuisine(cuisine.value)}>
                  {' '}
                  <img
                    src={`${
                      process.env.PUBLIC_URL
                    }/images/${cuisine.value.toLowerCase()}.png`}
                    alt={`${cuisine.value}`}
                  />
                  {cuisine.value}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Cuisines;
