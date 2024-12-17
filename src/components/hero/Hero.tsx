import SearchBar from '../searchBar';

function Hero(): JSX.Element {
  return (
    <div className="bg-[url('./images/heroBG.png')] h-screen bg-cover pt-5 ">
      <SearchBar />
      <div className="flex-col h-5/6 content-center pl-5">
        <h1 className="font-serifFont text-5xl mt-5 mb-5">
          EASY RECIPES FOR ANY OCCASION
        </h1>
        <p className="text-xl w-6/12">
          Organize your favorite recipes, discover new culinary inspiration, and
          make every meal unforgettable — all in one place.
        </p>
      </div>
    </div>
  );
}

export default Hero;
