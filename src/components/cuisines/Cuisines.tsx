import { useAppDispatch } from '../../store/hooks';
import { changeList } from '../../store/list/listSlice';
import { ListState } from '../../store/list/listSlice';
import { CUISINES_MAP, CuisinesList, CuisineType } from './cuisinesConstants';

function Cuisines(): JSX.Element {
  const dispatch = useAppDispatch();

  const fetchCuisine = (cuisine: CuisinesList): void => {
    const updatedCuisines: ListState = {
      cuisine: cuisine,
      searchParam: '',
      offset: 0,
    };

    dispatch(changeList(updatedCuisines));
  };

  return (
    <aside className="lg:bg-plaster lg:p-8 rounded-3xl mt-5">
      <h3 className="font-serifFont text-3xl  mb-5">Choose cuisine:</h3>
      <ul>
        {CUISINES_MAP.map(
          (cuisine: CuisineType): JSX.Element => (
            <li
              key={cuisine.key}
              className="sm:inline-block lg:block sm:w-fit sm:bg-plaster sm:mr-2 mb-2 lg:mr-0 
            sm:p-2 lg:p-0 sm:rounded-xl">
              <button
                className="sm:text-sm lg:text-lg sm:pr-2 sm:pl-2 lg:p-0 
              text-left hover:text-caramel cursor-pointer"
                onClick={(): void => fetchCuisine(cuisine.value)}>
                {cuisine.value}
              </button>
            </li>
          )
        )}
      </ul>
    </aside>
  );
}

export default Cuisines;
