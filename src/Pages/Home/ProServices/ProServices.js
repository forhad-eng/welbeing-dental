import React from 'react'
import useServices from '../../../hooks/useServices'
import ProService from '../ProService/ProService'

const ProServices = () => {
    const [services] = useServices()

    return (
        <div className="px-4 md:px-16 mb-10 md:mb-16">
            <p className="text-blue-500">Take a look</p>
            <p className="text-3xl text-gray-700 font-[500] pb-2 tracking-wider">Our Premium Services</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-0 my-2">
                {services.slice(4, 8).map(proService => (
                    <ProService key={proService.id} proService={proService} />
                ))}
            </div>
        </div>
    )
}

export default ProServices
