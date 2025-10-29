import React from 'react';

const StatCard = ({ title, value, change, isUp, icon }) => {
  const changeColor = isUp ? 'text-green-500' : 'text-red-500';
  const changeArrow = isUp ? '↑' : '↓';

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-100 p-3 rounded-full">
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
          </div>
        </div>
        <div className={`text-sm font-medium ${changeColor} flex items-center`}>
          <span>{changeArrow}</span>
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;