import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex px-8 border-gray-200 font-['Inter']">
      <div className="mt-7">
        <Link to="/solution/calculator-app">
          <div className="w-[200px] h-[200px] flex flex-col shadow-md justify-between">
            <img
              src="../../challenges/calculator-app/design/desktop-preview.jpg"
              alt="calculator app preview"
              className="aspect-auto w-[190px]"
            />
            <span className="mb-4 text-center font-semibold">
              Calculator app
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
