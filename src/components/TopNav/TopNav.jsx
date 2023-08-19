import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";


const TopNav = () => {
    return (
        <div
            className="flex flex-row justify-between items-center bg-[#ff6c2c1c] bg-opacity-30 py-4 px-6 rounded-full backdrop-blur-md md:my-8 z-0 my-12 w-full"
        >
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#db9cdc] to-[#38bff8] hover:from-[#38bff8] hover:to-[#db9cdc] hover:scale-105 duration-300">
                Fahad Ibne Hossain
            </h1>
            <Link to="https://drive.google.com/u/0/uc?id=1GyDaEsBnn39ScQVBh2foPbFpv2RbKpWf&export=download"
                  className="flex justify-between items-center gap-2 bg-black text-white bg-opacity-30 hover:bg-opacity-50 hover:scale-105 duration-300 px-6 py-3 rounded-full text-lg">
                Resume <ArrowDownTrayIcon className="w-6" />
            </Link>
        </div>
    );
};

export default TopNav;
