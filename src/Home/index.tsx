import { Link } from 'react-router-dom'
import calImage from '../assets/desktop-preview.jpg'
import tipCalImage from '../assets/tca-desktop-preview.jpg'
const Home = () => {
    return (
        <div className="w-screen h-screen flex px-8 border-gray-200 font-['Inter']">
            <div className="mt-7 flex gap-4">
                <Link to="/solution/calculator-app">
                    <div className="w-[200px] h-[200px] flex flex-col shadow-md justify-between">
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
                    <div className="w-[200px] h-[200px] flex flex-col shadow-md justify-between">
                        <img
                            src={tipCalImage}
                            alt="calculator app preview"
                            className="aspect-auto w-[190px]"
                        />
                        <span className="mb-4 text-center font-semibold">
                            Tip Calculator app
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Home
