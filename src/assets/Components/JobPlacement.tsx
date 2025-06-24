import Lanyard from '../../blocks/Components/Lanyard/Lanyard';
import ScrollVelocity from '../../blocks/TextAnimations/ScrollVelocity/ScrollVelocity';
import ClickSpark from '../../blocks/Animations/ClickSpark/ClickSpark';
import Magnet from '../../blocks/Animations/Magnet/Magnet'

function JobPlacement() {
    return (
        <section className="bg-white  overflow-hidden mt-10 mb-10 ">
            <ClickSpark
                sparkColor='#122161'
                sparkSize={10}
                sparkRadius={25}
                sparkCount={8}
                duration={400}
            >
                <ScrollVelocity
                    texts={[
                        '🎯 Start Your Application'
                    ]}
                    velocity={20}
                    className="custom-scroll-text pb-10"
                />
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
                    {/* Lanyard 3D on the left */}
                    <div className="h-200 w-full">
                        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                    </div>

                    {/* Job Placement Content on the right */}
                    <div className="space-y-6 bg-blue-900 p-6 rounded-xl">
                        <h2 className="text-4xl font-semibold text-white">Explore Career Opportunities</h2>
                        <p className="text-white text-lg">
                            We are committed to helping our graduates and community thrive by connecting them with real career paths. From healthcare to admin, we help match the right people to the right roles.
                        </p>

                        <ul className="text-white list-disc list-inside space-y-2">
                            <li>🏥 Registered Nurse Openings</li>
                            <li>💻 Medical Technologist Roles</li>
                            <li>🩺 Physical Therapy Positions</li>
                            <li>📋 Administrative & Support Staff</li>
                        </ul>
                      <div className="pt-4 flex justify-center">
  <Magnet padding={100} disabled={false} magnetStrength={2}>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
      Apply Now
    </button>
  </Magnet>
</div>
                    </div>
                </div>
                <ScrollVelocity
                    texts={[
                        '📝 Submit Your Resume',

                    ]}
                    velocity={20}
                    className="custom-scroll-text"
                />
            </ClickSpark>
        </section>

    );
}

export default JobPlacement;
