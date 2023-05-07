import { Link, Outlet } from "react-router-dom";
import LeftArrow from "../assets/left-arrow.svg";

const SolutionLayout = () => {
  return (
    <main>
      <span className="w-5 h-5 absolute">
        <Link to={"/"} aria-label="home" title="Go to home">
          <img
            src={LeftArrow}
            alt="go back icon"
            className="text-red-50 bg-yellow-100"
          />
        </Link>
      </span>
      <Outlet />
    </main>
  );
};
export default SolutionLayout;
