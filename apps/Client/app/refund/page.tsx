'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    title: '7-Day Return Policy',
    content:
      'Clients can request a refund within 7 days of project delivery. Refund requests must be submitted in writing to support@cleven.studio with a valid reason and proof of dissatisfaction.'
  },
  {
    title: 'Eligibility for Refund',
    content:
      "Refunds are applicable only if the delivered service does not meet the agreed-upon specifications or requirements. If a project has been fully completed and delivered as agreed upon, a refund will not be granted. Partial refunds may be granted for ongoing projects based on the amount of work completed. Refunds are not available for services that were delayed due to the client's failure necessary information or materials."
  },
  {
    title: 'Non-Refundable Services',
    content:
      'Custom web development projects that have been fully completed and approved by the client. Services that involve third-party software, tools, or hosting fees. Any consultation fees or project planning charges',
  },
  {
    title: 'Refund Processing',
    content:
      'Approved refunds will be processed within 7-10 business days from the date of approval. Refunds will be issued to the original payment method used during the purchase. Cleven Studios reserves the right to decline refund requests if they do not meet the criteria outlined in this policy.',
  }
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