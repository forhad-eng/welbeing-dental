import React, { useState } from 'react'
import { PuffLoader } from 'react-spinners'

const LoadingSpinner = () => {
    let [loading] = useState(true)

    return (
        <div style={{ height: 'calc(100vh - 150px)' }} className="flex items-center justify-center">
            <PuffLoader loading={loading} size={100} />
        </div>
    )
}

export default LoadingSpinner
