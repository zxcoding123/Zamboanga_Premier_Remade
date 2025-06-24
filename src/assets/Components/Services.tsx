import {
    HeartPulse,
    ClipboardList,
    ShieldCheck,
    Flower,
    Hospital,
    Video,
    Stethoscope, Users
} from "lucide-react";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '../../splide-custom.css';

import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent';
import FadeContent from '../../blocks/Animations/FadeContent/FadeContent'
import Magnet from '../../blocks/Animations/Magnet/Magnet';

function Services() {
    return (
        <div className="">
            <div className="flex justify-between pt-25 p-10 pr-25 pl-25 bg-blue-900">

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={true}
                    duration={1.0}
                    ease="power.out"
                    initialOpacity={0.0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                >
                    <h1 className="text-4xl text-white">We offer a wide range of services to meet your needs.</h1>
                </AnimatedContent>
                <div className=" flex flex-col  p-3">
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        duration={1.5}
                        ease="power.out"
                        initialOpacity={0.0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.6}
                    >

                        <div className='container'>
                            <h1 className="text-5xl text-white pb-2 text-right">25k+</h1>
                            <p className="text-2xl text-white font-semibold">Distributed Heatlh Services</p>
                        </div>
                    </AnimatedContent>
                </div>
            </div>

            <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>

                <div className="container-fluid text-center pt-15 pb-15">
                    <h1 className="text-5xl text-blue-950 font-semibold mt-5 mb-10">Discover the Power of Our Services</h1>
                    <p className="text-blue-950 mb-10">Explore a variety of tailored services aimed at enhancing your health and wellness.</p>
                </div>

            </FadeContent>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="container pl-10">
                    <h1 className="text-5xl text-blue-950 pb-2 font-semibold">What We Do</h1>
                    <p className="w-300 text-blue-950 pb-2">  We provide a comprehensive range of healthcare services tailored to your unique needs — from diagnostics and consultations to round-the-clock emergency care. Our focus is on quality, compassion, and innovation to help you live your healthiest life.</p>
                </div>
            </FadeContent>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 py-8">
                {[
                    {
                        icon: <HeartPulse className="text-blue-600 w-10 h-10 mb-4" />,
                        title: 'Health Monitoring Program',
                        desc: 'Real-time vitals tracking and alerts for proactive care. Helps monitor chronic conditions and track recovery.',
                    },
                    {
                        icon: <ClipboardList className="text-blue-600 w-10 h-10 mb-4" />,
                        title: 'Integrated Care Plan',
                        desc: 'Personalized treatment plans involving specialists, primary care, and support services to ensure holistic outcomes.',
                    },
                    {
                        icon: <ShieldCheck className="text-blue-600 w-10 h-10 mb-4" />,
                        title: 'Preventive Health Services',
                        desc: 'Includes screenings, vaccinations, and wellness checkups to detect issues early and keep patients healthy long-term.',
                    },
                    {
                        icon: <Flower className="text-blue-600 w-10 h-10 mb-4" />,
                        title: 'Holistic Health Management',
                        desc: 'Combines mental, physical, and emotional well-being support through lifestyle coaching, counseling, and nutrition.',
                    },
                    {
                        icon: <Hospital className="text-blue-600 w-10 h-10 mb-4" />,
                        title: 'Recovery Center',
                        desc: 'Dedicated post-acute recovery services, rehabilitation therapy, and personalized follow-up care.',
                    },
                    {
                        icon: <Video className="text-blue-600 w-10 h-10 mb-4" />,
                        title: 'Telemedicine Communication',
                        desc: 'Seamless virtual consultations, remote monitoring, and direct chat with healthcare professionals from any device.',
                    },
                ].map((item, i) => (
                    <AnimatedContent
                        key={i}
                        distance={50}
                        direction="vertical"
                        reverse={false}
                        duration={0.6}
                        ease="power.out"
                        initialOpacity={0.0}
                        animateOpacity
                        scale={1.05}
                        threshold={0.2}
                        delay={0.2 + i * 0.2}
                    >
                        <div className="bg-blue-50 p-6 rounded-xl flex flex-col shadow hover:shadow-lg hover:scale-105 transition duration-300">
                            {item.icon}
                            <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                            <p className="text-sm text-blue-700 mt-2">{item.desc}</p>
                        </div>
                    </AnimatedContent>
                ))}
            </div>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="mt-20 pl-25 pr-25">
                    <h1 className="text-5xl text-blue-950 pb-2 font-semibold pt-10 text-right">How We Do</h1>
                    <p className=" text-blue-950 pb-2 text-right">    At Premier Medical Center Zamboanga, we combine expertise, advanced technology, and a patient-first approach to deliver exceptional care. Our process focuses on accurate diagnostics, personalized treatment plans, and continuous support to ensure optimal health outcomes.</p>
                </div>
            </FadeContent>
            <div className="container mx-auto text-center pb-10">
                
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 3,
                        focus: 'center',
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        pagination: false,
                        gap: '1rem',
                        breakpoints: {
                            768: { perPage: 1 },
                            1024: { perPage: 2 },
                        },
                    }}
                    className="mt-6"
                >
                 
                    <SplideSlide>
                        <div className="slide-content p-6 bg-white rounded-xl shadow-md text-blue-900 transition duration-300 is-active:bg-blue-100 is-active:border-blue-500 is-active:border-2">
                            <Stethoscope className="  mb-2" />
                            <h2 className="text-xl font-bold">Comprehensive Diagnostics</h2>
                            <p className="mt-2">
                                We offer state-of-the-art diagnostic services including X-rays, ultrasound, and laboratory testing.
                            </p>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className="slide-content p-6 bg-white rounded-xl shadow-md text-blue-900 transition duration-300 is-active:bg-blue-100 is-active:border-blue-500 is-active:border-2">
                            <Users className="w-8 h-8  mb-2" />
                            <h2 className="text-xl font-bold">Specialty Consultations</h2>
                            <p className="mt-2">
                                Access to experienced medical specialists across internal medicine, pediatrics, OB-GYN, and more.
                            </p>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className="slide-content p-6 bg-white rounded-xl shadow-md text-blue-900 transition duration-300 is-active:bg-blue-100 is-active:border-blue-500 is-active:border-2">
                            <Hospital className="w-8 h-8  mb-2" />
                            <h2 className="text-xl font-bold">Emergency & Outpatient Care</h2>
                            <p className="mt-2">
                                24/7 emergency services and fast outpatient care to meet immediate healthcare needs.
                            </p>
                        </div>
                    </SplideSlide>

                </Splide>

            </div>
        </div>





    )
}

export default Services;