'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    title: ' Information We Collect',
    content:
      'We may collect personal information from you when you visit our website, sign up for services, or communicate with us. This includes: Personal Information: Name, email address, phone number, and other contact details, Usage Data: Information about how you access and use our website or services, including IP addresses, browser types, and device information. Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your user experience and analyze website performance.,'
  },
  {
    title: 'How We Use Your Information',
    content:
      'We use the information we collect for the following purposes To provide, operate, and maintain our services. To communicate with you, including responding to your inquiries or sending service updates. To improve our website and services based on usage patterns. To send promotional offers or newsletters, if you have opted in. To comply with legal obligations and protect our rights.',
  },
  {
    title: 'Sharing Your Information',
    content:
      'We may share your personal information with third parties in the following situations:Service Providers: We may share your information with third-party vendors and service providers who assistwith our business operations, such as hosting, payment processing, and marketing.Legal Requirements: If required by law or to protect our legal rights, we may disclose your personalinformation to comply with legal processes or government requests.Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.',
  },
  {
    title: 'Data Security',
    content:
      'We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your information..',
  },
  {
    title: 'Your Rights',
    content:
      'Depending on your location, you may have the right to:Access, update, or delete your personal information.Object to or restrict the processing of your personal information.Withdraw your consent to our processing of your information.To exercie these rights, please contact us at [email address/contact form]',
  },
  {
    title: 'Website Media',
    content:
      'We believe every user deserves to know what information we collect and how we use it. We aim to be transparent about our data collection practices.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Shield className="w-16 h-16 mx-auto mb-6 text-gray-400" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Our Personal Statement, Cookies, Third-parties</p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4 ">{section.title}</h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}