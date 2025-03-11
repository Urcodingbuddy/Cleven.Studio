"use client";

import { Search, FileText, Calendar, Download, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortDirection, setSortDirection] = useState("desc");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  
  const orders = [
    { id: "#3521", start: "21/4/25", end: "21/5/25", amount: "$129.03", status: "PAID", date: "2025-04-21" },
    { id: "#2522", start: "21/4/25", end: "21/5/25", amount: "$129.03", status: "PAID", date: "2025-04-15" },
    { id: "#9521", start: "21/4/25", end: "21/5/25", amount: "$129.03", status: "Failed", date: "2025-04-10" },
    { id: "#6521", start: "21/4/25", end: "21/5/25", amount: "$129.03", status: "PAID", date: "2025-04-05" },
    { id: "#7733", start: "15/4/25", end: "15/5/25", amount: "$99.99", status: "PAID", date: "2025-04-01" },
    { id: "#8844", start: "10/4/25", end: "10/5/25", amount: "$149.50", status: "Pending", date: "2025-03-28" },
    { id: "#8844", start: "10/4/25", end: "10/5/25", amount: "$149.50", status: "Pending", date: "2025-03-28" },
    { id: "#8844", start: "10/4/25", end: "10/5/25", amount: "$149.50", status: "Pending", date: "2025-03-28" },
    { id: "#8844", start: "10/4/25", end: "10/5/25", amount: "$149.50", status: "Pending", date: "2025-03-28" },
  ];

  // Filter by search query and status
  const filteredOrders = orders
    .filter(order => 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortDirection === "desc" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });

  const toggleSort = () => {
    setSortDirection(sortDirection === "desc" ? "asc" : "desc");
  };

  const handleOrderClick = (orderId: string) => {
    setSelectedOrder(selectedOrder === orderId ? null : orderId);
  };
  return (
    // Dont Touch this div 
    <div className="overflow-auto w-screen  bg-[#0c0c0c] text-white p-6 rounded-2xl mr-3 my-3 ">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-white relative">
              <div className="absolute top-0 left-1/2 h-3 w-0.5 bg-white transform -translate-x-1/2"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold">Order History</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search by invoice ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-900 rounded-lg py-3 px-4 flex items-center gap-2 hover:bg-[#3a3a48] transition-colors"
          >
            <Filter size={18} />
            <span>Filters</span>
            {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleSort}
            className="bg-gray-900 rounded-lg py-3 px-4 flex items-center gap-2 hover:bg-[#3a3a48] transition-colors"
          >
            <Calendar size={18} />
            <span>Date</span>
            {sortDirection === "desc" ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-900 rounded-lg p-4 mb-6 overflow-hidden"
            >
              <h3 className="font-medium mb-3">Filter by Status</h3>
              <div className="flex flex-wrap gap-2">
                {["all", "paid", "failed", "pending"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      statusFilter === status 
                        ? "bg-white/20 text-white" 
                        : "bg-gray-900 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-6 text-sm text-gray-400 px-4 mb-2">
          <div className="col-span-1">Invoice Id</div>
          <div className="col-span-1">Start</div>
          <div className="col-span-1">End</div>
          <div className="col-span-1">Invoice Amount</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Invoice</div>
        </div>

        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => handleOrderClick(order.id)}
                className={`bg-gray-900 rounded-2xl overflow-hidden cursor-pointer transition-all ${selectedOrder === order.id ? 'ring-2 ring-white/20' : ''}`}
              >
                <div className="grid grid-cols-6 items-center p-4">
                  <div className="col-span-1 font-bold">{order.id}</div>
                  <div className="col-span-1">{order.start}</div>
                  <div className="col-span-1">{order.end}</div>
                  <div className="col-span-1 font-bold">{order.amount}</div>
                  <div className="col-span-1">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      order.status.toLowerCase() === "paid" 
                        ? "bg-green-900/30 text-green-400" 
                        : order.status.toLowerCase() === "failed"
                        ? "bg-red-900/30 text-red-400"
                        : "bg-yellow-900/30 text-yellow-400"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button 
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Download logic would go here
                      }}
                    >
                      <FileText size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
              
              <AnimatePresence>
                {selectedOrder === order.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#2a2a38]/50 rounded-b-2xl mt-1 p-6 border-t border-white/5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Order Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Order Date:</span>
                            <span>{order.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Billing Period:</span>
                            <span>{order.start} - {order.end}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Payment Method:</span>
                            <span>Credit Card •••• 4242</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Invoice Summary</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Subtotal:</span>
                            <span>$119.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Tax:</span>
                            <span>$10.03</span>
                          </div>
                          <div className="flex justify-between font-bold mt-4">
                            <span>Total:</span>
                            <span>{order.amount}</span>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-lg py-2 px-4 flex items-center justify-center gap-2"
                          >
                            <Download size={16} />
                            <span>Download Invoice</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#2a2a38] rounded-2xl p-8 text-center"
          >
            <p className="text-gray-400">No orders found matching your filters.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
              }}
              className="mt-4 text-white underline hover:text-gray-300"
            >
              Clear filters
            </button>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          Showing {filteredOrders.length} of {orders.length} orders
        </motion.div>
      </motion.div>
    </div>
  );
}