import React from 'react'
import useServices from '../../../hooks/useServices'
import Service from '../Service/Service'

const Services = () => {
    const [services] = useServices()

    return (
        <div className="px-4 md:px-16">
            <p className="text-2xl text-center font-[500] my-10 pb-2 tracking-wider">
                Our Services
                <hr style={{ height: '2px' }} className="block mx-auto w-24 bg-gray-400" />
            </p>

            <div className="grid md:grid-cols-4 gap-8 md:gap-10 my-10">
                {services.map(service => (
                    <Service key={service.id} service={service} />
                ))}
            </div>
        </div>
    )
}

export default Services
