import { ArrowRight, Code2, Bug, Puzzle , LineChart, Shield, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Maintenance and support",
    description: "Keep your website running smoothly with ongoing support, maintenance, and updates.",
    icon: Code2,
  },
  {
    title: "Bug Fixing & Debugging",
    description: "Get help with fixing bugs and resolving issues to ensure your website works flawlessly..",
    icon: Bug,
  },
  {
    title: "Content Update & Management",
    description: "Stay up-to-date with regular content updates, blog management, e-Commerce and other content services.",
    icon: Puzzle,
  },
  {
    title: "Minimum Viable Product(MVP)",
    description: "Data-driven insights to help grow your business.",
    icon: LineChart,
  },
  { 
    title: "Website Speed Optimization",
    description: "Improve your website’s performance and reduce load times with our optimization tools.",
    icon: Shield,
  },
  {
    title: "Social Media Integration",
    description: "Connect your website with your social media platforms seamlessly, enhancing engagement",
    icon: Smartphone,
  },
];

export const Services = () => {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-20">
          <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Services
          </h1>
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 text-[1.1rem]  mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group border-2 border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-white/30 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="mb-6 inline-block p-4 bg-white/5 rounded-2xl">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <button className="flex items-center text-sm font-medium cursor-pointer text-white/70 hover:text-white transition-colors duration-200">
                  View  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};