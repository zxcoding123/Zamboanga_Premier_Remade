

import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent';

import Image from '../Images/clinic.png';

function AboutUs() {
    return (
<section className="relative bg-blue-900 overflow-hidden py-20 px-6">

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
    <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
          <img src={Image} alt="Description" className="w-25 h-25" />

      <h1 className="text-4xl md:text-5xl font-medium text-white">
        Your Health, Our Priority
      </h1>

      {/* Description */}
      <p className="text-white text-lg max-w-xl">
        At Premier Medical Center Zamboanga, we are committed to delivering compassionate and innovative healthcare. With a team of dedicated professionals, we provide accessible, quality care tailored to every individual in our community.
      </p>

      {/* Bullet points */}
      <ul className="text-white text-left list-disc list-inside space-y-2 max-w-lg mx-auto">
        <li>✔️ Comprehensive diagnostics and laboratory services</li>
        <li>✔️ Specialized consultations in key medical fields</li>
        <li>✔️ Emergency and outpatient care, 24/7</li>
        <li>✔️ Patient-focused and tech-enhanced treatments</li>
      </ul>

      {/* Button */}
      <div className="pt-4">
        <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition">
          Learn More About Us
        </button>
      </div>
    </div>
  </AnimatedContent>
</section>

        
    );
}

export default AboutUs