import React from 'react'
import { Link } from "react-router-dom"
const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
                <p className="text-gray-600 mt-2">The page you are looking for doesn't exist or has been moved.</p>
                <Link to={"/admin/dashboard"}>
                    <button
                        href="/admin/dashboard"
                        className="mt-6 inline-block px-6 py-3 text-sm font-medium leading-5 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                    >
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound