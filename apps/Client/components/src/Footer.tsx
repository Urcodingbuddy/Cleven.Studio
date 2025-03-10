'use client';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white/5 h-full lg:h-[100vh] flex items-center text-white py-20">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-2">
            <div>
              <Link href="/"><img src="./Cleven removeBg.png" alt="cleven.studio" className="h-16 object-cover cursor-pointer" /></Link>
            </div>
            <span className="text-xl font-bold">CLEVEN.STUDIO</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed font-medium">
            ClevenStudios is the go-to platform for startups and businesses looking for affordable, high-quality web solutions. With expert design, seamless development, and powerful management tools, we help you build, optimize, and scale your online presence effortlessly.
          </p>
          {/*add Social media handles here*/ }
          <div className="flex items-center space-x-6 pt-2"></div>
        </div>

        {/* Product Links */}
        <div className="space-y-6 mt-5">
          <h3 className="text-sm font-semibold tracking-wider">SERVICES</h3>
          <ul className="space-y-4">
            {[
              { name: "Website Maintenance & Support", link: "/pricing/webMaintenace" },
              { name: "Bug Fixing & Debugging", link: "/pricing/bug-fixing" },
              { name: "Content Update & Management", link: "/pricing/content-update" },
              { name: "Minimum Viable Product (MVP)", link: "/pricing/mvp" },
              { name: "Website Speed Optimization", link: "/pricing/speed_optimization" },
              { name: "Social Media Integration", link: "/pricing/social_media" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.link} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div className="space-y-4 mt-5">
          <h3 className="text-sm font-semibold tracking-wider">SUPPORT</h3>
          <ul className="space-y-4">
            {[
              { name: 'Help', link: '/help-center' },
              { name: 'Live Chat', link: '/support#live-chat' },
              { name: 'Open a Ticket', link: '/support#ticket' },
              { name: 'Discord', link: 'https://discord.gg/PsH86NfA' },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.link} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More From Cleven.Studio & Company Links */}
        <div className="space-y-8 sm:space-y-12 mt-5">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider">MORE FROM CLEVEN.STUDIO</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Website Design', link: '/services#website-design' },
                { name: 'Website Templates', link: '/services#templates' },
                { name: 'eCommerce Website', link: '/services#ecommerce' },
                { name: 'Appointment Scheduling', link: '/services#scheduling' },
                { name: 'Portfolio Website', link: '/services#portfolio' },
                { name: 'Blog Website', link: '/services#blog' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider">LEGAL</h3>
            <ul className="space-y-4">
              {[
                { name: 'Terms & Conditions', link: '/legal#terms' },
                { name: 'Privacy Policy', link: '/privacy-policy' },
                { name: 'Refund Policy', link: '/legal#refund' },
                { name: 'support@cleven.studio', link: 'mailto:support@cleven.studio' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
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

export default Footer;