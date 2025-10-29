import React from 'react';


const MoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
);

const MonthlyTarget = () => {
    const percentage = 75.55;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Monthly Target</h3>
                {/* <button className="text-gray-400 hover:text-gray-600">
                    <MoreIcon />
                </button> */}
            </div>

           
            <div className="relative grow flex items-center justify-center my-4">
                <div className="absolute w-48 h-48">
                    <svg className="w-full h-full" viewBox="0 0 36 36" transform="rotate(-90)">
                        <path
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#f3f4f6" // gray-100
                            strokeWidth="3.8"
                        />
                        <path
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831"
                            fill="none"
                            stroke="#4f46e5" // indigo-600
                            strokeWidth="3.8"
                            strokeDasharray={`${percentage}, 100`}
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">{percentage}%</p>
                    <p className="text-sm text-green-500">+11%</p>
                </div>
            </div>

            

           
            <div className="flex justify-between text-center mt-6 pt-4 border-t border-gray-100">
                <div>
                    <p className="text-sm text-gray-500">Target</p>
                    <p className="text-base font-semibold text-gray-900">$20K <span className="text-green-500">↑</span></p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="text-base font-semibold text-gray-900">$20K <span className="text-green-500">↑</span></p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Today</p>
                    <p className="text-base font-semibold text-gray-900">$20K <span className="text-green-500">↑</span></p>
                </div>
            </div>
        </div>
    );
};

export default MonthlyTarget;