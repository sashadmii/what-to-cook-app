import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { useAppSelector } from '../../store/hooks';
import { changeList, ListState } from '../../store/list/listSlice';

function LogoLink() {
  const { offset } = useAppSelector(({ list }) => list);
  const dispatch = useDispatch();

  const handleClick = (): void => {
    const fetchData: ListState = {
      recipes: [],
      offset: offset + 15,
      random: true,
    };

    dispatch(changeList(fetchData));
  };

  return (
    <Link
      onClick={handleClick}
      to="/"
      className="flex flex-row gap-2 m-5 hover:text-caramel items-end cursor-pointer">
      <Logo className="hover:stroke-caramel" />
      <h3 className="font-serifFont text-3xl">WHAT TO COOK</h3>
    </Link>
  );
}

export default LogoLink;
