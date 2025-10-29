import React from 'react';
import StatCard from '../components/StatCard';
import MonthlyTarget from '../components/MonthlyTarget';
import MonthlySales from '../components/MonthlySales';
import Statistics from '../components/Statistics';
import Navbar from '../components/Navbar';

function Dashboard() {

    const UsersIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );

    const ChartBarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
        </svg>
    );

    return (
        <>
            <Navbar />
            <div className=' mx-60 mt-2'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <StatCard
                    title="Customers"
                    value="3,782"
                    change="+11.01%"
                    isUp={true}
                    icon={<UsersIcon />}
                />
                <StatCard
                    title="Orders"
                    value="5,359"
                    change="-9.05%"
                    isUp={false}
                    icon={<ChartBarIcon />}
                />
                <div className="lg:row-span-2">
                    <MonthlyTarget />
                </div>


                <div className="lg:col-span-2">
                    <MonthlySales />
                </div>


                <div className="lg:col-span-3">
                    <Statistics />
                </div>

            </div>
            </div>
        </>
    )
}

export default Dashboard