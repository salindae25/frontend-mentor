import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Calculator from "./Calculator";
import Home from "./Home";
import { SolutionLayout } from "./Layouts";
const routerMap = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/solution",
    Component: SolutionLayout,
    children: [
      {
        path: "/solution/calculator-app",
        Component: Calculator,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routerMap} />
    </>
  );
}

export default App;
