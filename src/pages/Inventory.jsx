import React from 'react'
import Navbar from '../components/Navbar'
import InventoryCard from '../components/InventoryCard'
const Inventory = () => {

    const data = [
        { device: 'iPhone', model: '12 Pro Max', price: '$1000', quantity: '100' },
        { device: 'Samsung', model: 'S22 Ultra', price: '$900', quantity: '100' },          
        { device: 'OnePlus', model: '10 Pro', price: '$800', quantity: '100' },
        { device: 'Xiaomi', model: 'Redmi 10', price: '$900', quantity: '100' },
        { device: 'Huawei', model: 'P20 Pro', price: '$700', quantity: '100' },
        { device: 'Oppo', model: 'F30', price: '$600', quantity: '100' },
        { device: 'LG', model: 'G7 ThinQ', price: '$500', quantity: '100' },
        { device: 'Asus', model: 'ZenFone Max', price: '$400', quantity: '100' },
        { device: 'Motorola', model: 'Moto G7 Power', price: '$300', quantity: '100' }, 
        { device: 'Google', model: 'Pixel 5', price: '$200', quantity: '100' },
        { device: 'Apple', model: 'iPhone 12', price: '$100', quantity: '100' },
        { device: 'Microsoft', model: 'Surface Pro 7', price: '$80', quantity: '100' },
        
    ];

    return (

        <div>
            <Navbar />
            <div className=" flex flex-col items-center justify-center bg-gray-100">
                <div className="grid grid-cols-3 gap-x-30 gap-y-9 p-6 max-w-6xl">
                    {data.map((item, index) => (
                        <InventoryCard key={index} device={item.device} model={item.model} price={item.price} quantity={item.quantity} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Inventory