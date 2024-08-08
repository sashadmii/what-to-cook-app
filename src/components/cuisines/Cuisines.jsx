import { useDispatch } from 'react-redux';

import { changeList } from '../../store/list/listSlice';
import { cuisines } from '../../store/list/constants';

function Cuisines() {
    const dispatch = useDispatch();

    const handleClick = (cuisine) => {
        dispatch(
            changeList({
                cuisine: cuisine,
                searchParam: '',
            })
        );
    };

    return (
        <aside className="lg:bg-plaster lg:p-8 rounded-3xl mt-5">
            <h3 className="font-serifFont text-3xl  mb-5">Choose cuisine:</h3>
            <ul>
                {cuisines.map((cuisine) => (
                    <li
                        key={cuisine}
                        className="sm:inline-block lg:block sm:w-fit sm:bg-plaster sm:mr-2 mb-2 lg:mr-0 sm:p-2 lg:p-0 sm:rounded-xl">
                        <button
                            className="sm:text-sm lg:text-lg sm:pr-2 sm:pl-2 lg:p-0 text-left hover:text-caramel cursor-pointer"
                            onClick={() => handleClick(cuisine)}>
                            {cuisine}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Cuisines;
