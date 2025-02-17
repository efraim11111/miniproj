import React from 'react'

const Loading = ({ on }) => {
    if (on) return (
        <div className="bg-gray-200 z-10 h-screen absolute top-0 w-full flex items-center justify-center">
            <div className="flex items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                <div className="ml-4 text-xl font-semibold text-gray-800">Loading...</div>
            </div>
        </div>
    )
}

export default Loading