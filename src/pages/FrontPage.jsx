import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function FrontPage() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/signin");
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Dashboard</h1>
        <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-8 py-4 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
    </div>
  )
}

export default FrontPage