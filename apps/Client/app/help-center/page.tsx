'use client'

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HelpCenter() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const faqItems = [
    {
      id: 1,
      question: "What is Cleven Studio, and what services do you offer?",
      answer: "Cleven Studio is a digital agency specializing in web development, UI/UX design, and creative solutions for businesses. We offer website creation, app development, branding services, and ongoing maintenance and support packages tailored to your needs."
    },
    {
      id: 2,
      question: "How do I report a bug or technical issue?",
      answer: "To report a bug or technical issue, you can use the 'Report Bug' option in the Help Center, send an email to support@cleven.studio, or contact us through live chat for immediate assistance. Please include as much detail as possible including screenshots if available."
    },
    {
      id: 3,
      question: "What payment methods does Cleven Studio accept?",
      answer: "We accept a variety of payment methods including all major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and cryptocurrency (Bitcoin, Ethereum). For ongoing services, we offer monthly or annual subscription options."
    },
    {
      id: 4,
      question: "What is your refund policy?",
      answer: "Our refund policy allows for full refunds within 14 days of purchase for most services if you're not satisfied. For custom development work, refunds are handled on a case-by-case basis. Please contact our customer support team to discuss your specific situation."
    },
    {
      id: 5,
      question: "Do you offer customer support outside of business hours?",
      answer: "Yes, we provide 24/7 support for critical issues through our emergency support channel. Regular inquiries are handled during business hours (9 AM - 6 PM EST, Monday to Friday)."
    }
  ];

  const toggleFaq = (id: number): void => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen w-screen bg-[#0c0c0c] text-white">
      {/* Header */}
      <header className="py-6 px-6 md:px-12">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8">
          </div>
          <button 
            onClick={() => { router.back() }}
            className="relative flex items-center justify-center p-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 transition-all duration-300 hover:bg-[#67e8f9]/20 hover:border-[#67e8f9] group"
            aria-label="Back"
          >
            <ArrowLeft className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#67e8f9]"/>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-sm bg-gray-900/90 text-[#67e8f9] rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-[#67e8f9]/20">
              Back
            </span>
          </button>
            <div className="text-xl font-semibold">Help Center</div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-8 animate-fade-in">How Can We Help You?</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12 transition-all duration-300 hover:scale-102">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for articles, tickets, or chat history..."
              className="w-full py-3 px-4 pl-10 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg className="h-5 w-5 text-gray-400 hover:text-white transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Quick Access Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="#get-started">
              <div className="bg-gray-900 p-5 rounded-lg text-center transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 cursor-pointer border border-transparent hover:border-gray-700">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Get Started</span>
                </div>
              </div>
            </Link>
            
            <Link href="#live-chat">
              <div className="bg-gray-900 p-5 rounded-lg text-center transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 cursor-pointer border border-transparent hover:border-gray-700">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Live Chat</span>
                </div>
              </div>
            </Link>
            
            <Link href="#knowledge-base">
              <div className="bg-gray-900 p-5 rounded-lg text-center transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 cursor-pointer border border-transparent hover:border-gray-700">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Knowledge Base</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
        
        {/* Help & Support Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Help & Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="#faqs">
              <div className="bg-gray-900 p-5 rounded-lg text-center transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 cursor-pointer border border-transparent hover:border-gray-700">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>FAQ's</span>
                </div>
              </div>
            </Link>
            
            <Link href="#reset-password">
              <div className="bg-gray-900 p-5 rounded-lg text-center transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 cursor-pointer border border-transparent hover:border-gray-700">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <span>Reset Password</span>
                </div>
              </div>
            </Link>
            
            <Link href="#report-bug">
              <div className="bg-gray-900 p-5 rounded-lg text-center transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 cursor-pointer border border-transparent hover:border-gray-700">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Report Bug</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
        
        {/* Community Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Collaborate with the Cleven.studio community!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-38 max-w-xl">
            <Link href="https://discord.gg/clevenstudio" target="_blank">
              <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:translate-x-1 cursor-pointer">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                <span>Discord</span>
              </div>
            </Link>
            
            <Link href="https://cleven-studio.slack.com" target="_blank">
              <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:translate-x-1 cursor-pointer">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                </svg>
                <span>Slack</span>
              </div>
            </Link>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="mb-12" id="faqs">
          <h2 className="text-xl font-semibold mb-6">FAQ's</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div 
                key={faq.id}
                className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-800"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${expandedFaq === faq.id ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="p-4 pt-0 bg-gray-800 animate-fade-in">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Cleven Studio. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
