import React from 'react';


const MoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
);

const MonthlySales = () => {

    const salesData = [
        { month: 'Jan', height: '40%' }, 
        { month: 'Feb', height: '60%' }, 
        { month: 'Mar', height: '80%' }, 
        { month: 'Apr', height: '40%' }, 
        { month: 'May', height: '20%' }, 
        { month: 'Jun', height: '40%' }, 
        { month: 'Jul', height: '60%' },
        { month: 'Aug', height: '20%' }, 
        { month: 'Oct', height: '80%' }, 
        { month: 'Nov', height: '60%' }, 
        { month: 'Dec', height: '20%' }, 
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Monthly Sales</h3>
                {/* <button className="text-gray-400 hover:text-gray-600">
                    <MoreIcon />
                </button> */}
            </div>
            
            <div className="flex" style={{ height: '200px' }}>
                <div className="flex flex-col justify-between text-xs text-gray-400 pr-2 py-1">
                    <span>400</span>
                    <span>300</span>
                    <span>200</span>
                    <span>100</span>
                    <span>0</span>
                </div>

                <div className="w-full flex items-end justify-between border-l border-b border-gray-200 pl-2">
                    {salesData.map((data) => (
                        <div key={data.month} className="flex-1 flex flex-col items-center px-1">
                            <div
                                className="w-3 bg-blue-500 rounded-t-md"
                                title={data.month}
                                    
                            ></div>
                            <span className="text-xs text-gray-500 mt-1">{data.month}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonthlySales;