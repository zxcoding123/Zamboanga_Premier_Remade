
import { Mail, LibraryBig } from 'lucide-react';
import Magnet from '../../blocks/Animations/Magnet/Magnet'
import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent';
import Inage from '../Images/Image-New.avif';
import CountUp from '../../blocks/TextAnimations/CountUp/CountUp'



function LandingHeader() {
    return (
        <section className="bg-gradient-online p-40 bg-gradient-online overflow-visible">

            <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.5}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between pt-10 overflow-visible">
                    <Magnet padding={100} disabled={false} magnetStrength={20}>
                        <div className="hidden md:flex space-x-6  flex-col">
                            <h1 className="text-2xl text-blue-400 font-semibold bg-white w-max p-2 rounded-full
                         ">Premier Medical Center Zamboanga</h1>
                            <h1 className="text-5xl pt-5">
                                <span className=" font-medium text-blue-400 text-gradient">Transform
                                    Your Health</span></h1>
                            <p className="text pt-5 max-w-md text-blue-950">Explore a variety of tailored services aimed at enhancing your overall health and wealthness.</p>
                            <div className="flex flex-row space-x-4 mt-5 items-center">
                                <button className="bg-blue-400 text-white border border-white px-4 py-2  
    rounded-full hover:bg-white hover:border-blue-400 hover:text-blue-400 
    transition duration-300 ease-in-out flex items-center space-x-2">
                                    <LibraryBig className='w-5 h-5' /> &nbsp;
                                    Learn More
                                </button>

                                <button className="bg-white text-blue-400 border border-blue-400 px-4 py-2  
    rounded-full hover:bg-blue-400 hover:border-white hover:text-white  
    transition duration-300 ease-in-out flex items-center space-x-2">
                                    <Mail className="w-5 h-5" /> &nbsp;
                                    <span>Contact Us</span>
                                </button>
                            </div>
                            <div className="container mt-5 flex flex-row divide-x divide-gray-400">
                                <div className="flex flex-col p-3">
                                    <h1 className="text-3xl text-blue-500 pb-2 font-semibold"><CountUp
                                        from={0}
                                        to={25}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    /></h1>
                                    <p className="text-1xl">Years of Experience</p>
                                </div>
                                <div className=" flex flex-col  p-3">
                                 <h1 className="text-3xl text-blue-500 pb-2 font-semibold">
                                    <CountUp
                                        from={0}
                                        to={500}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    /></h1>
                                    <p className="text-1xl">Trusted by patients</p>
                                </div>
                                <div className=" flex flex-col  p-3">
                                    <h1 className="text-3xl text-blue-500 pb-2 font-semibold">
                                         <CountUp
                                        from={0}
                                        to={250}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    </h1>
                                    <p className="text-0xl">Professional Doctors</p>
                                </div>
                            </div>
                        </div>
                    </Magnet>
                    <Magnet padding={100} disabled={false} magnetStrength={20}>
                        <div className="hidden md:flex">
                            <img
                                src={Inage}
                                alt="Description"
                                className="w-full h-100 border-4 border-blue-300 rounded-2xl shadow-md"
                            />
                        </div>
                    </Magnet>
                </div>
            </AnimatedContent>

        </section>

    )
}

export default LandingHeader