import { Link, Outlet } from 'react-router-dom'
import LeftArrow from '../assets/left-arrow.svg'

const SolutionLayout = () => {
    return (
        <main className="relative">
            <span className="absolute h-5 w-5">
                <Link to={'/'} aria-label="home" title="Go to home">
                    <img
                        src={LeftArrow}
                        alt="go back icon"
                        className="bg-yellow-100 text-red-50"
                    />
                </Link>
            </span>
            <Outlet />

            <div className="attribution font-['League_Spartan']">
                Challenge by{' '}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by{' '}
                <a href="https://github.com/salindae25">Salinda Ekanayake</a>.
            </div>
        </main>
    )
}
export default SolutionLayout
