import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Glass } from '../../icons/magnGlass.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeList } from '../../store/list/listSlice';

function SearchBar(): JSX.Element {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const { offset } = useAppSelector(({ list }) => list);

  const searchRecipes = (): void => {
    dispatch(
      changeList({
        recipes: [],
        searchParam: search,
        offset: offset + 15,
      })
    );
    setSearch('');
  };

  return (
    <header className="mt-6 m-5 flex sm:flex-col lg:flex-row lg:justify-between gap-3">
      <div className="flex flex-row gap-2 items-end sm:mb-5 lg:mb-0">
        <Logo />
        <h3 className="font-serifFont text-3xl">WHAT TO COOK</h3>
      </div>
      <div className="flex flex-row">
        <input
          className="border border-cocoa rounded-full sm:w-full lg:w-96 p-1.5 pl-3 focus: outline-none"
          name="search"
          type="text"
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key === 'Enter') searchRecipes();
          }}
          placeholder="Search for a recipe"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setSearch(e.target.value)
          }
        />
        <button className="button" id="buttonSearch">
          <Glass
            className="size-10 stroke-cocoa pl-2 transition ease-in-out duration-500 lg:hover:scale-125 cursor-pointer"
            onClick={searchRecipes}
          />
        </button>
      </div>
    </header>
  );
}

export default SearchBar;
