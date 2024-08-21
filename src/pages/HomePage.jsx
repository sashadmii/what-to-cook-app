// eslint-disable-next-line no-unused-vars
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import SearchBar from '../components/searchBar';
// eslint-disable-next-line no-unused-vars
import Cuisines from '../components/cuisines';
// eslint-disable-next-line no-unused-vars
import Footer from '../components/footer';

export function HomePage() {
  return (
    <div>
      <SearchBar />
      <div className="flex sm:flex-col lg:flex-row sm:mt-5 lg:mt-10 sm:mr-5 ml-5 ">
        <div className="lg:flex-col lg:w-1/4">
          <Cuisines />
        </div>
        <Outlet className="lg:w-3/4 sm:w-2/3" />
      </div>
      <Footer />
    </div>
  );
}
