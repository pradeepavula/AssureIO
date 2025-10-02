import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import Datacenter from "../../../public/icons/Datacenter.svg"
import Security from "../../../public/icons/Security.svg"
import desktop from "../../../public/icons/desktop.svg"
import cloud from "../../../public/icons/cloud.svg"
import backup from "../../../public/icons/backup.svg"
import network from "../../../public/icons/network.svg"

const ToolKit = () => {

    const features = [
        {
            icon: Datacenter,
            title: "Datacenter Operations",
            desc: "Ensure high availability, scalability, and seamless performance for your critical business infrastructure."
        },
        {
            icon: Security,
            title: "IT Security",
            desc: "Protect your business with advanced cybersecurity strategies, compliance, and real-time monitoring."
        },
        {
            icon: desktop,
            title: "Desktop Support",
            desc: "Responsive support services to keep your workforce productive and your systems running smoothly."
        },
        {
            icon: cloud,
            title: "Cloud Solutions",
            desc: "Scalable cloud hosting and migration services tailored for your business needs."
        },
        {
            icon: backup,
            title: "Backup & Disaster Recovery",
            desc: "Comprehensive solutions to safeguard your data and ensure business continuity."
        },
        {
            icon: network,
            title: "Network Management",
            desc: "End-to-end monitoring and optimization of networks to reduce downtime and boost efficiency."
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Trusted Technologies & Reliable Operations
                    </h2>
                    <p>
                        Where Technology Meets Reliability
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit