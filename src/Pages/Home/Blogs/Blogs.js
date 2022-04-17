import React from 'react'
import blogPic1 from '../../../images/Authentication-vs.-Authorization-feature.png'
import blogPic3 from '../../../images/firebase.png'
import blogPic4 from '../../../images/startablog.png'
import blogPic2 from '../../../images/Why-firebase-is-used.png'
import '../../../Styles/Blog.css'
import Blog from '../Blog/Blog'

const Blogs = () => {
    return (
        <div className="bg-gray-100 pt-10 pb-16">
            <p className="text-4xl italic font-[600] text-center my-3 pb-8">𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜 𝓂𝓎 𝒷𝓁𝑜𝑔</p>

            <section className="blog">
                <div className="bg-white rounded-md p-5">
                    <Blog
                        title={'What is the difference between Authentication and Authorization?'}
                        shares="1.5"
                        author={'Forhad'}
                    />
                    <div className="post">
                        <img src={blogPic1} alt="" />

                        <p className="text-gray-600 leading-7 my-5">
                            As enterprises advance towards digital maturity in the times of robust cloud-based systems
                            and stringent online security, authentication and authorization are used in conjunction
                            (also, often interchangeably) with each other. Though both the terms sound similar, they
                            refer to entirely different security processes. Within the scope of customer identity and
                            access management (CIAM), authentication verifies a user's identity, while authorization
                            validates if the user has access to perform a specific function. In other words,
                            authentication is identifying users by confirming who they say they are, while authorization
                            is the process of establishing the rights and privileges of a user. Both processes play
                            equally important roles in securing sensitive data assets from breaches and unauthorized
                            access. Here, we'll cover how they're defined and what distinguishes one from the other.
                        </p>

                        <h4 className="mt-3 mb-1 text-2xl">Authentication</h4>

                        <p className="text-gray-600 leading-7">
                            Authentication is the process of identifying users and validating who they claim to be. One
                            of the most common and obvious factors to authenticate identity is a password. If the user
                            name matches the password credential, it means the identity is valid, and the system grants
                            access to the user.
                        </p>

                        <h4 className="mt-3 mb-1 text-2xl">Authorization</h4>

                        <p className="text-gray-600 leading-7">
                            Authorization happens after a user’s identity has been successfully authenticated. It is
                            about offering full or partial access rights to resources like database, funds, and other
                            critical information to get the job done.
                        </p>
                    </div>

                    <hr className="my-3" />

                    <Blog title={'Why Using Firebase?'} shares="2.3" author={'Tom Cruise'} />
                    <div className="post">
                        <img src={blogPic2} alt="" />
                        <p className="text-gray-600 leading-7 my-5">
                            Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities
                            and helps with the backend development of Android, iOS, or web and even some products that
                            support Unity3D too.
                        </p>
                        <h3 className="mt-3 mb-1 text-2xl">Other options we have to implement authentication</h3>
                        <ul className="list-disc pl-8">
                            <li>Okta</li>
                            <li>Auth0</li>
                            <li>Amazon Cognito</li>
                            <li>Passport</li>
                            <li>MongoDB</li>
                            <li>JSON Web Token</li>
                        </ul>
                    </div>

                    <hr className="my-3" />
                    <Blog
                        title={'What other services do firebase provide than authentication?'}
                        shares="1.2"
                        author="Tom Hanks"
                    />
                    <div className="post">
                        <img src={blogPic3} alt="" />
                        <h4 className="mt-3 mb-1 text-2xl">Firebase top functionalities are listed below</h4>
                        <ul className="list-disc pl-8">
                            <li>
                                <span className="font-semibold">Firebase Hosting:</span> Firebase includes an
                                easy-to-use hosting service for static files.
                            </li>
                            <li>
                                <span className="font-semibold">Firebase Database:</span> Used to store users data like
                                chat messages, users details and other metadata.
                            </li>
                            <li>
                                <span className="font-semibold">Firebase Cloud Storage:</span> Used to store
                                user-generated content like the profile picture, multimedia messages, etc.
                            </li>
                            <li>
                                <span className="font-semibold">Firebase Cloud Messaging:</span> Used to send
                                notification.
                            </li>
                            <li>
                                <span className="font-semibold">Firebase Remote Config:</span> Used to perform A/B
                                testing on the go.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="aside-content grid grid-cols-1 gap-6 text-center">
                    <div className="bg-white rounded p-5">
                        <p className="text-xl">
                            Over <span className="font-semibold">1,320,000+</span> Readers
                        </p>
                        <p className="text-gray-500">
                            <small>Get fresh content everyday from us</small>
                        </p>
                        <div className="social-connect grid grid-cols-4 gap-y-2 mt-2">
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/facebook-app.svg"
                                alt=""
                            />
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/twitter-app.svg"
                                alt=""
                            />
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/youtube-app.svg"
                                alt=""
                            />
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/ig-instagram.svg"
                                alt=""
                            />
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/pinterest-square-color.svg"
                                alt=""
                            />

                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/linkedin-app.svg"
                                alt=""
                            />
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/37-communication-chat-call/new-mail.svg"
                                alt=""
                            />
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/wa-whatsapp.svg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div>
                        <img src={blogPic4} alt="" />
                    </div>

                    <div>
                        <img
                            className="w-full rounded"
                            src="https://gcommerceja.com/restimg2/prop/template/1/gCommerce/w250/h600/place%20your%20ad%20%20250%20x%20600%20.jpg"
                            alt=""
                        />
                    </div>

                    <div className="rounded">
                        <img
                            src="https://bddirectories.com/wp-content/uploads/2020/10/place-your-ad-here-ppc-pay-per-click.png"
                            alt=""
                        />
                    </div>

                    <div>
                        <img
                            className="w-full rounded"
                            src="https://gcommerceja.com/restimg2/prop/template/1/gCommerce/w250/h600/place%20your%20ad%20%20250%20x%20600%20.jpg"
                            alt=""
                        />
                    </div>

                    <div className="rounded">
                        <img
                            src="https://bddirectories.com/wp-content/uploads/2020/10/place-your-ad-here-ppc-pay-per-click.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs
