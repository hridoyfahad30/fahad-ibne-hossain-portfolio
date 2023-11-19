/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import particleConfig from "./components/particleConfig";
import SideNav from "./components/SideNav/SideNav";
import HeroProfile from "./components/Pages/Profile";
import AboutPage from "./components/Pages/AboutPage";
import MyService from "./components/Pages/MyService";
import MySkills from "./components/Pages/MySkills";
import MyProjects from "./components/Pages/MyProjects";
import ContactMe from "./components/Pages/ContactMe.jsx";

const LandingPage = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particleConfig}
            />
            <div>
                <div
                    className="bg-gradient-to-tl from-[#0a3b63af] to-[#0f5c6e63] bg-opacity-20 text-white min-h-screen flex justify-between">
                    {/* Side Nav Section */}
                    <SideNav />

                    <div className="lg:w-10/12 my-2 px-4 mx-2 lg:mx-6">

                        {/* Profile Section */}
                        <HeroProfile />

                        {/* About Section */}
                        <AboutPage />

                        {/* My Service Section */}
                        <MyService />

                        {/* My Service Section */}
                        <MySkills />

                        {/* My Service Section */}
                        <MyProjects />

                        {/* My Service Section */}
                        <ContactMe />

                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
