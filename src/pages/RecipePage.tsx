// import { Link } from 'react-router-dom';

import Footer from '../components/footer/Footer';
import LogoLink from '../components/logoLink/logoLink';
import Recipe from '../components/recipe/Recipe';
import SimilarRecipes from '../components/similarRecipes/SimilarRecipes';
// import { ReactComponent as Logo } from '../icons/logo.svg';

export const RecipePage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <LogoLink />
      {/* <Link
        to="/"
        className="flex flex-row gap-2 m-5 hover:text-caramel items-end cursor-pointer">
        <Logo className="hover:stroke-caramel" />
        <h3 className="font-serifFont text-3xl">WHAT TO COOK</h3>
      </Link> */}
      <div className="flex sm:flex-col lg:flex-row m-5">
        <div className="sm:w-full lg:w-1/4">
          <SimilarRecipes />
        </div>
        <Recipe />
      </div>
      <Footer />
    </div>
  );
};
