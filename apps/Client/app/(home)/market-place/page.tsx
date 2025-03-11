import React from "react";
import Footer from "@repo/components/Footer";
import {
  ArrowRight,
  Code2,
  Bug,
  Puzzle,
  LineChart,
  Shield,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export default function Home() {

  const buzzing = [

    {
      title: "Content Update & Management",
      description:
        "Stay up-to-date with regular content updates, blog management, e-Commerce and other content services.",
      icon: Puzzle,
      link: "/services#content-update",
    },
    {
      title: "Web Maintenance and support",
      description:
        "Keep your website running smoothly with ongoing support, maintenance, and updates.",
      icon: Code2,
      link: "/pricing/webMaintenace",
    },
    {
      title: "Minimum Viable Product(MVP)",
      description: "Data-driven insights to help grow your business.",
      icon: LineChart,
      link: "/services#mvp",
    },

  ]


  const newDeals = [
    {
      title: "Web Maintenance and support",
      description: "Keep your website running smoothly with ongoing support, maintenance, and updates.",
      icon: Code2,
      link: "/pricing/webMaintenace",
    },
    {
      title: "Bug Fixing & Debugging",
      description:
        "Get help with fixing bugs and resolving issues to ensure your website works flawlessly..",
      icon: Bug,
      link: "/services#bug-fixing",
    },
    {
      title: "Content Update & Management",
      description:
        "Stay up-to-date with regular content updates, blog management, e-Commerce and other content services.",
      icon: Puzzle,
      link: "/services#content-update",
    },
  ];

  const services = [
    {
      title: "Web Maintenance and support",
      description:
        "Keep your website running smoothly with ongoing support, maintenance, and updates.",
      icon: Code2,
      link: "/pricing/webMaintenace",
    },
    {
      title: "Bug Fixing & Debugging",
      description:
        "Get help with fixing bugs and resolving issues to ensure your website works flawlessly..",
      icon: Bug,
      link: "/services#bug-fixing",
    },
    {
      title: "Content Update & Management",
      description:
        "Stay up-to-date with regular content updates, blog management, e-Commerce and other content services.",
      icon: Puzzle,
      link: "/services#content-update",
    },
    {
      title: "Minimum Viable Product(MVP)",
      description: "Data-driven insights to help grow your business.",
      icon: LineChart,
      link: "/services#mvp",
    },
    {
      title: "Website Speed Optimization",
      description:
        "Improve your website's performance and reduce load times with our optimization tools.",
      icon: Shield,
      link: "/services#speed-optimization",
    },
    {
      title: "Social Media Integration",
      description:
        "Connect your website with your social media platforms seamlessly, enhancing engagement",
      icon: Smartphone,
      link: "/services#social-media",
    },
  ];

  return (
    <>
      <main className="ml-18">
        <div id="logo" className="p-6">
          <h1 className="text-white text-2xl ">Market Place </h1>
        </div>

        {/* Dimmy image */}
        <div className="flex p-4 ">
          <img
            src="https://www.udgamschool.com/wp-content/uploads/2023/05/dummy-image-grey-e1398449111870.jpg"
            className="w-screen h-60 object-cover "
            alt=""
          />
        </div>

        {/* New-Deals */}
        <div className="p-6">
          <h1 className="text-white text-2xl ">New Deal's</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
            {newDeals.map((service, index) => (
              <div
                key={index}
                className="relative group border-2 border-white/10 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:border-white/30 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="mb-6 inline-block p-4 bg-white/5 rounded-2xl">
                    <service.icon className="w-8 h-8 text-white " />
                  </div>

                    <h3 className="text-2xl font-semibold mb-4 text-white ">
                    {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    <Link href={service.link}>
                    <button className="flex items-center text-md font-medium cursor-pointer text-white/70 hover:text-white transition-colors duration-200">
                      View <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buzzing */}
        <div className="p-6" >
          <h2 className="text-2xl text-white" >What's buzzing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
            {buzzing.map((service, index) => (
              <div
                key={index}
                className="relative group border-2 border-white/10 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:border-white/30 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="mb-6 inline-block p-4 bg-white/5 rounded-2xl">
                    <service.icon className="w-8 h-8 text-white " />
                  </div>

                    <h3 className="text-2xl font-semibold mb-4 text-white ">
                    {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    <Link href={service.link}>
                    <button className="flex items-center text-md font-medium cursor-pointer text-white/70 hover:text-white transition-colors duration-200">
                      View <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* services */}

        <div className="p-6" >
          <h1 className="text-white text-2xl " >Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group border-2 border-white/10 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:border-white/30 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="mb-6 inline-block p-4 bg-white/5 rounded-2xl">
                    <service.icon className="w-8 h-8 text-white " />
                  </div>

                    <h3 className="text-2xl font-semibold mb-4 text-white ">
                    {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    <Link href={service.link}>
                    <button className="flex items-center text-md font-medium cursor-pointer text-white/70 hover:text-white transition-colors duration-200">
                      View <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10" >
        <p className="text-gray-500 absolute left-[38%]" >© Copyright 2024-2027 cleven.studio. All Rights Reserved</p>
        </div>

      </main>

    </>
  );
}
