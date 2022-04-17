import React from 'react'
import doctor from '../../../images/doctor.png'

const Doctor = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10 md:mb-16 px-6 md:px-10">
            <div className="order-2 md:order-1">
                <p className="text-3xl text-blue-500">Dr. Karen Dowson</p>
                <p>
                    <small className="text-gray-600">MBBS, BCS (Health), MS (OMS), NST (Fellow)</small>
                </p>
                <p>
                    <small className="text-gray-600">Oral &amp; Dental Surgeon</small>
                </p>
                <p
                    className="mt-10 text-sm text-gray-600 first-line:uppercase first-line:tracking-widest
                            first-letter:text-7xl first-letter:font-bold first-letter:text-gray-600 first-letter:mr-3 first-letter:float-left"
                >
                    Taking care of your teeth helps prevent cavities and gum disease. Brushing and flossing properly can
                    prevent plaque (pronounced: plak), a clear film of bacteria that sticks to your teeth. After you
                    eat, the bacteria break down sugar on your teeth into acids that eat away tooth enamel, causing
                    holes called cavities. Plaque also causes gingivitis, which is gum disease that can make your gums
                    red, swollen, and sore. We are proud to have the opportunity to give you the smile of your dreams.
                </p>
            </div>

            <div className="order-1 md:order-2">
                <img src={doctor} alt="" />
            </div>
        </div>
    )
}

export default Doctor
