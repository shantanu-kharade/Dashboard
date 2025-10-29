import React from 'react';

const Statistics = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Statistics</h3>
                    <p className="text-sm text-gray-500">Target you're set for each month</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        <span>Sales</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <span className="w-3 h-3 bg-blue-200 rounded-full"></span>
                        <span>Revenue</span>
                    </div>
                    <div className="flex text-sm border rounded-md overflow-hidden">
                        <button className="py-1 px-3 bg-gray-100 text-gray-900 font-medium">Monthly</button>
                        <button className="py-1 px-3 text-gray-500 hover:bg-gray-50 border-l">Quarterly</button>
                        <button className="py-1 px-3 text-gray-500 hover:bg-gray-50 border-l">Annually</button>
                    </div>
                </div>
            </div>

            
            <div className="w-full h-72">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                   
                    <path d="M 0 35 C 10 25, 20 25, 30 30 S 50 40, 60 35 S 80 20, 90 25 S 100 35, 100 35 L 100 40 L 0 40 Z" fill="rgba(191, 219, 254, 0.5)" />
                    <path d="M 0 35 C 10 25, 20 25, 30 30 S 50 40, 60 35 S 80 20, 90 25 S 100 35, 100 35" fill="none" stroke="#bfdbfe" strokeWidth="0.5" />

                  
                    <path d="M 0 30 C 10 20, 20 20, 30 25 S 50 35, 60 30 S 80 15, 90 20 S 100 30, 100 30 L 100 40 L 0 40 Z" fill="rgba(99, 102, 241, 0.3)" />
                    <path d="M 0 30 C 10 20, 20 20, 30 25 S 50 35, 60 30 S 80 15, 90 20 S 100 30, 100 30" fill="none" stroke="#6366f1" strokeWidth="0.7" />

                  
                    <text x="5" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">Jan</text>
                    <text x="15" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">Feb</text>
                    <text x="25" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">Mar</text>
                    <text x="35" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">Apr</text>
                    <text x="45" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">May</text>
                    <text x="55" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">Jun</text>
                    <text x="65" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">Jul</text>
                    <text x="75" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">Aug</text>
                    <text x="85" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">Sep</text>
                    <text x="95" y="40" dominantBaseline="hanging" textAnchor="middle" fill="#9ca3af" fontSize="3">Oct</text>
                
                </svg>
            </div>
        </div>
    );
};

export default Statistics;