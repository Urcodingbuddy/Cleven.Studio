"use client"

import React from 'react';
import {
  Search,
  Calendar,
  Download,
  Filter,
  ChevronDown,
  ChevronUp,
  Receipt,
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortDirection, setSortDirection] = useState('desc');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  

  const orders = [
    {
      id: '#3521',
      start: '21/4/25',
      end: '21/5/25',
      amount: '$129.03',
      status: 'PAID',
      date: '2025-04-21',
    },
    {
      id: '#2522',
      start: '21/4/25',
      end: '21/5/25',
      amount: '$129.03',
      status: 'PAID',
      date: '2025-04-15',
    },
    {
      id: '#9521',
      start: '21/4/25',
      end: '21/5/25',
      amount: '$129.03',
      status: 'Failed',
      date: '2025-04-10',
    },
    {
      id: '#6521',
      start: '21/4/25',
      end: '21/5/25',
      amount: '$129.03',
      status: 'PAID',
      date: '2025-04-05',
    },
    {
      id: '#7733',
      start: '15/4/25',
      end: '15/5/25',
      amount: '$99.99',
      status: 'PAID',
      date: '2025-04-01',
    },
  ];

  const filteredOrders = orders
    .filter(
      (order) =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (statusFilter === 'all' ||
          order.status.toLowerCase() === statusFilter.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortDirection === 'desc'
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

  const toggleSort = () => {
    setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
  };

  const handleOrderClick = (orderId: string) => {
    setSelectedOrder(selectedOrder === orderId ? null : orderId);
  };

  const handleDownload = (e: React.MouseEvent, orderId: string) => {
    e.stopPropagation();
    // Implement download logic here
    console.log('Downloading invoice for order:', orderId);
  };

  return (


    <div className="w-full bg-[#0c0c0c] text-white rounded-2xl mr-3 my-3 p-3 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center">
            <Receipt size={20} className="sm:size-6 text-white/80" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">Order History</h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search by invoice ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#161616] rounded-lg py-2.5 sm:py-3 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            />
            <Search
              className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
              className="bg-[#161616] rounded-lg py-2.5 sm:py-3 px-4 flex items-center gap-2 hover:bg-[#1A1A1A] transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              <Filter size={16} className="sm:size-[18px]" />
              <span>Filters</span>
              {showFilters ? <ChevronUp size={16} className="sm:size-[18px]" /> : <ChevronDown size={16} className="sm:size-[18px]" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleSort}
              className="bg-[#161616] rounded-lg py-2.5 sm:py-3 px-4 flex items-center gap-2 hover:bg-[#1A1A1A] transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              <Calendar size={16} className="sm:size-[18px]" />
              <span>Date</span>
              {sortDirection === 'desc' ? (
                <ChevronDown size={16} className="sm:size-[18px]" />
              ) : (
                <ChevronUp size={16} className="sm:size-[18px]" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[#161616] rounded-lg p-4 sm:p-6 mb-6 overflow-hidden"
            >
              <h3 className="font-medium mb-4">Filter by Status</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['all', 'paid', 'failed', 'pending'].map((status) => (
                  <motion.button
                    key={status}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStatusFilter(status)}
                    className={`px-4 sm:px-6 py-2 rounded-full text-sm transition-all ${
                      statusFilter === status
                        ? 'bg-white text-black font-medium'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-[#161616] rounded-t-2xl p-4 mb-4 hidden sm:block">
          <div className="grid grid-cols-6 text-sm text-gray-400">
            <div className="col-span-1">Invoice ID</div>
            <div className="col-span-1">Start Date</div>
            <div className="col-span-1">End Date</div>
            <div className="col-span-1">Amount</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>
        </div>

        {filteredOrders.length > 0 ? (
          <div className="space-y-3">
            {filteredOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  onClick={() => handleOrderClick(order.id)}
                  className={`bg-[#161616] rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedOrder === order.id ? 'ring-2 ring-white/20' : ''
                  }`}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-6 items-center p-4 gap-y-2 sm:gap-y-0">
                    <div className="col-span-1 font-medium">{order.id}</div>
                    <div className="col-span-1 text-right sm:text-left order-1 sm:order-none">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          order.status.toLowerCase() === 'paid'
                            ? 'bg-green-500/10 text-green-400'
                            : order.status.toLowerCase() === 'failed'
                            ? 'bg-red-500/10 text-red-400'
                            : 'bg-yellow-500/10 text-yellow-400'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 text-sm text-gray-400">
                      <span className="sm:hidden">Start: </span>
                      {order.start}
                    </div>
                    <div className="col-span-2 sm:col-span-1 text-sm text-gray-400">
                      <span className="sm:hidden">End: </span>
                      {order.end}
                    </div>
                    <div className="col-span-1 font-medium">
                      <span className="sm:hidden">Amount: </span>
                      {order.amount}
                    </div>
                    <div className="col-span-1 flex justify-end space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={(e) => handleDownload(e, order.id)}
                      >
                        <Download size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {selectedOrder === order.id ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {selectedOrder === order.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#1A1A1A] rounded-lg mt-2 p-4 sm:p-6 border border-white/5"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                          <h3 className="text-base sm:text-lg font-medium mb-4">
                            Order Details
                          </h3>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-gray-400">Order Date:</span>
                              <span>{order.date}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-gray-400">
                                Billing Period:
                              </span>
                              <span>
                                {order.start} - {order.end}
                              </span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-gray-400">
                                Payment Method:
                              </span>
                              <span>Credit Card •••• 4242</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-medium mb-4 mt-6 md:mt-0">
                            Invoice Summary
                          </h3>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-gray-400">Subtotal:</span>
                              <span>$119.00</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-gray-400">Tax:</span>
                              <span>$10.03</span>
                            </div>
                            <div className="flex justify-between items-center py-2 text-base sm:text-lg font-medium mt-4">
                              <span>Total:</span>
                              <span>{order.amount}</span>
                            </div>
                          </div>

                          <div className="mt-6">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={(e) => handleDownload(e, order.id)}
                              className="w-full bg-white hover:bg-white/90 text-black transition-colors rounded-lg py-2.5 sm:py-3 px-4 flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
                            >
                              <Download size={16} className="sm:size-[18px]" />
                              <span>Download Invoice</span>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#161616] rounded-2xl p-6 sm:p-8 text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <Receipt size={40} className="sm:size-12 text-gray-500" />
              <p className="text-gray-400">No orders found matching your filters.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('');
                  setStatusFilter('all');
                }}
                className="mt-2 text-white underline hover:text-gray-300"
              >
                Clear filters
              </motion.button>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 sm:mt-8 text-center text-sm text-gray-500"
        >
          Showing {filteredOrders.length} of {orders.length} orders
        </motion.div>
      </motion.div>
    </div>
  );
}