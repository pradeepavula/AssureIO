import NavLink from "../NavLink"

const Hero = () => (
    <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
        {/* overlay to darken the image */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* content aligned with project layout */}
        <div className="relative custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center text-white">
                <h1 className="text-4xl font-extrabold mx-auto sm:text-6xl">
                    From datacenter to desktop — we keep IT running
                </h1>
                <p className="max-w-xl mx-auto">
                    AssureIO — trusted partner in datacenter operations, IT security services, and desktop support.
                </p>
                <div className="mt-8 flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/Contact"
                        className="px-4 py-2 text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 rounded-lg"
                    >
                        Talk to an Expert
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="px-4 py-2 text-sm text-gray-800 bg-white hover:bg-gray-100 rounded-lg"
                        scroll={false}
                    >
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
