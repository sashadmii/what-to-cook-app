import { Outlet } from 'react-router-dom';

import CreateRecipeForm from '../components/createRecipeForm/createRecipeForm';
import Cuisines from '../components/cuisines/Cuisines';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero';

export function HomePage(): JSX.Element {
  return (
    <div>
      <Hero />
      <Cuisines />
      <div className="flex justify-center sm:mt-5 lg:mt-10 lg:mr-1 lg:ml-1 sm:mr-5 ml-5">
        <Outlet />
      </div>
      <CreateRecipeForm />
      <Footer />
    </div>
  );
}
