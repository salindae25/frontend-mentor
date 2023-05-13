import { Link } from 'react-router-dom'
import calImage from '../assets/desktop-preview.jpg'
import tipCalImage from '../assets/tca-desktop-preview.jpg'
import hurddleHomeImage from '../assets/hurddle-landing-preview.jpg'
const Home = () => {
    return (
        <div className="flex h-screen w-screen border-gray-200 px-8 font-['Inter']">
            <div className="mt-7 flex gap-4">
                <Link to="/solution/calculator-app">
                    <div className="flex h-[200px] w-[200px] flex-col justify-between shadow-md">
                        <img
                            src={calImage}
                            alt="calculator app preview"
                            className="aspect-auto w-[190px]"
                        />
                        <span className="mb-4 text-center font-semibold">
                            Calculator app
                        </span>
                    </div>
                </Link>
                <Link to="/solution/tip-calculator-app">
                    <div className="flex h-[200px] w-[200px] flex-col justify-between shadow-md">
                        <img
                            src={tipCalImage}
                            alt="tip calculator app preview"
                            className="aspect-auto w-[190px]"
                        />
                        <span className="mb-4 text-center font-semibold">
                            Tip Calculator app
                        </span>
                    </div>
                </Link>
                <Link to="/solution/huddle-home">
                    <div className="flex h-[200px] w-[200px] flex-col justify-between shadow-md">
                        <img
                            src={hurddleHomeImage}
                            alt="Hurddle landing page preview"
                            className="aspect-auto w-[190px]"
                        />
                        <span className="mb-4 text-center font-semibold">
                            Hurddle landing page
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Home
