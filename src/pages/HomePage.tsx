import { Outlet } from 'react-router-dom';

import SearchBar from '../components/searchBar';
import Cuisines from '../components/cuisines';
import Footer from '../components/footer';

export function HomePage() {
  return (
    <div>
      <SearchBar />
      <div className="flex sm:flex-col lg:flex-row sm:mt-5 lg:mt-10 sm:mr-5 ml-5 ">
        <div className="lg:flex-col lg:w-1/4">
          <Cuisines />
        </div>
        <div className="lg:w-3/4 sm:w-2/3">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
