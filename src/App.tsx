import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Calculator from './Calculator'
import Home from './Home'
import { SolutionLayout } from './Layouts'
import TipCalculator from './TipCalculator'
import HuddleHome from './HuddleHome'
const routerMap = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        loader: () => {
            document.title = "Frontend Mentor | Salinda's solutions "
            return true
        },
    },
    {
        path: '/solution',
        Component: SolutionLayout,
        children: [
            {
                path: '/solution/calculator-app',
                Component: Calculator,
                loader: () => {
                    document.title = 'Frontend Mentor | Calculator app'
                    return true
                },
            },
            {
                path: '/solution/tip-calculator-app',
                Component: TipCalculator,
                loader: () => {
                    document.title = 'Frontend Mentor | Tip calculator app'
                    return true
                },
            },
            {
                path: '/solution/huddle-home',
                Component: HuddleHome,
                loader: () => {
                    document.title =
                        'Frontend Mentor | Huddle landing page with single introductory section'
                    return true
                },
            },
        ],
    },
])
function App() {
    return (
        <>
            <RouterProvider router={routerMap} />
        </>
    )
}

export default App
