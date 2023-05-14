import './style.css'
import logo from '../assets/hurddle-home/logo.svg'
import baseImge from '../assets/hurddle-home/illustration-mockups.svg'
const HuddleHome = () => {
    return (
        <div className="flex min-h-screen w-screen flex-col items-center gap-6 bg-[var(--huddle-primary)] font-['Poppins'] text-white ">
            <div
                className={`flex min-h-screen w-full items-center gap-12 bg-[url('/images/huddle/bg-mobile.svg')]
bg-cover bg-no-repeat
px-8
calculator-app-mobile:flex-col
 calculator-app-desktop:gap-[40px] 
calculator-app-desktop:bg-[url('/images/huddle/bg-desktop.svg')] calculator-app-desktop:px-16`}
            >
                <img src={logo} alt="logo" className="mt-8 self-start" />
                <div className="flex flex-col items-center gap-6   calculator-app-desktop:flex-row">
                    <img
                        src={baseImge}
                        alt="mockup"
                        className="mt-8 self-start"
                    />
                    <div className="flex flex-col gap-6 calculator-app-mobile:items-center calculator-app-desktop:items-start">
                        <h3 className="text-center text-xl font-semibold calculator-app-desktop:text-left calculator-app-desktop:text-4xl">
                            Build The Community
                            <br />
                            Your Fans Will Love
                        </h3>
                        <p className=" max-w-xl calculator-app-mobile:text-center calculator-app-desktop:text-left">
                            Huddle re-imagines the way we build communities. You
                            have a voice, but so does your audience. Create
                            connections with your users as you engage in genuine
                            discussion. Register
                        </p>
                        <button
                            className="shadow-[var(--huddle-primary) ]  
              w-[200px] rounded-3xl
              bg-white py-4 text-center text-[var(--huddle-primary)] shadow-lg hover:bg-[var(--huddle-secondary)] hover:text-white"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HuddleHome
