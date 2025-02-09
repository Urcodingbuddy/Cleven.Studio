'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-14">
            <img src="./Cleven removeBg.png" alt="cleven.studio" className=" h-16 object-cover cursor-pointer " />
            </div>
            <span className="text-xl font-bold">CLEVEN.STUDIO</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed font-medium ">
          ClevenStudios is the go-to platform for startups and businesses looking for affordable, high-quality web solutions. With expert design, seamless development, and powerful management tools, we help you build, optimize, and scale your online presence effortlessly.
          </p>
          <div className="flex items-center space-x-6 pt-2">
          </div>
        </div>

        {/* Product Links */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold tracking-wider">SERVICES</h3>
          <ul className="space-y-4">
            {[
              "Website Maintenance & Support",
              "Website Speed Optimization",
              "Bug Fixing & Debugging",
              "Content Update & managment",
              "Social Media Integration",
              "Minimum wival product(MVP)"
            ].map((item) => (
              <li key={item}>
                <Link 
                  href="#" 
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wider">SUPPORT</h3>
          <ul className="space-y-4">
            {[
              'Help',
              'Live chat',
              'Open-A-ticket',
              'Discord',
            ].map((item) => (
              <li key={item}>
                <Link 
                  href="#" 
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More From Wix & Company Links */}
        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider">MORE FROM CLEVEN.STUDIO</h3>
            <ul className="space-y-4">
              {[
                'ABOUT US ',
                'Website Design',
                'Website Templates',
                'eCommerce Website',
                'Appointment Scheduling',
                'Portfolio Website',
                'Blog Website'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold tracking-wider">LEGAL</h3>
            <ul className="space-y-2">
              {[
                'Terms & Condition',
                'Privacy Policy',
                'Refund Policy',
                'support@cleven.studio',
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
