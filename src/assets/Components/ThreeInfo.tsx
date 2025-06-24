import { HeartHandshake, HandHelping, BadgeCheck } from 'lucide-react';
import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent';

function ThreeContent() {
    return (
        <section className="bg-gradient-online-1 py-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto text-center space-y-12">
  {/* Section Header */}
  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
    What Defines Us at PMCZ
  </h2>

  {/* Patient-Centered */}
  <AnimatedContent
    distance={150}
    direction="vertical"
    reverse={false}
    duration={1.2}
    ease="power3.out"
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    delay={0.1}
  >
    <div className="bg-white p-8 rounded-2xl shadow-md text-left hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <HeartHandshake className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-blue-800">Patient-Centered</h3>
      </div>
      <p className="text-blue-700 text-sm">
        At Premier Medical Center Zamboanga (PMCZ), we treat every client with dignity and respect. Our approach places the patient at the heart of every healthcare decision, ensuring they're involved in all matters concerning their well-being.
      </p>
    </div>
  </AnimatedContent>

  {/* Medical Altruism */}
  <AnimatedContent
    distance={150}
    direction="vertical"
    reverse={false}
    duration={1.2}
    ease="power3.out"
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    delay={0.4}
  >
    <div className="bg-white p-8 rounded-2xl shadow-md text-left hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <HandHelping className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-blue-800">Medical Altruism</h3>
      </div>
      <p className="text-blue-700 text-sm">
        PMCZ is rooted in medical altruism — the selfless pursuit of others' well-being even at a cost to oneself. This core value drives our hospital’s vision and shapes the compassionate care we provide every day.
      </p>
    </div>
  </AnimatedContent>

  {/* Culture of Excellence */}
  <AnimatedContent
    distance={150}
    direction="vertical"
    reverse={false}
    duration={1.2}
    ease="power3.out"
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    delay={0.7}
  >
    <div className="bg-white p-8 rounded-2xl shadow-md text-left hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <BadgeCheck className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-blue-800">Culture of Excellence</h3>
      </div>
      <p className="text-blue-700 text-sm">
        We believe excellence isn’t an act, but a culture. At PMCZ, we pursue measurable improvements in the quality of patient care through a commitment to continuous learning, innovation, and accountability.
      </p>
    </div>
  </AnimatedContent>
</div>


            <div className="max-w-4xl mx-auto text-center space-y-12 mt-25">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                    Our Core Values at PMCZ
                </h2>
            </div>
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-25 text-center">
  {[
    {
      title: "Our Mission",
      iconPath: "M12 6v6l4 2",
      text: "To provide a state of the art, comprehensive, globally competitive quality health care delivered by highly competent, committed, and compassionate health professionals for the region.",
    },
    {
      title: "Our Services",
      iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4",
      text: "We offer a variety of healthcare services that cater to the diverse needs of our patients. Our services include primary care, speciality care, diagnostic testing, and more.",
    },
    {
      title: "Our Providers",
      iconPath: "M16 14a4 4 0 00-8 0m8 0v4H8v-4m8 0a4 4 0 01-8 0",
      text: "Our team of healthcare providers consists of board-certified physicians, nurses, and support staff who are committed to providing exceptional care to our patients. We ensure that our providers stay up-to-date with the latest medical advancements and techniques.",
    },
  ].map(({ title, iconPath, text }, i) => (
    <AnimatedContent
      key={i}
      distance={120}
      direction="vertical"
      duration={1.1}
      delay={i * 0.3} // 👈 key for staggered effect
      initialOpacity={0.1}
      animateOpacity
      scale={1.05}
    >
      <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
        <div className="bg-blue-100 p-4 rounded-full mb-4 transition transform hover:scale-105">
          <svg
            className="w-10 h-10 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d={iconPath}></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-blue-700 text-sm">{text}</p>
      </div>
    </AnimatedContent>
  ))}
</div>

        </section>

    )
}

export default ThreeContent;