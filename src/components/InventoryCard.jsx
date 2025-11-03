import React from 'react'

const InventoryCard = ({ device, model, price, quantity }) => {
    return (
        <div className="bg-white text-black border-1 border-indigo-600  rounded-md w-88 h-48 p-6 flex items-center justify-between hover:shadow-2xl">
            {/* Text Section */}
            <div className="flex flex-col justify-center space-y-1">
                <h2 className="text-xl font-semibold">{device}</h2>
                <p className="text-black text-sm">
                    Model: <span className="font-medium text-indigo-600">{model}</span>
                </p>
                <p className="text-black text-sm">
                    Price: <span className="font-medium text-indigo-600">{price}</span>
                </p>
                <p className="text-black text-sm">
                    Quantity: <span className="font-medium text-indigo-600">{quantity}</span>
                </p>
            </div>

            {/* Image Section */}
            <img
                // src={image}
                alt={device}
                className="w-24 h-24 object-cover rounded-md border-2 border-white/30 shadow-md"
            />
        </div>
    )
}

export default InventoryCard