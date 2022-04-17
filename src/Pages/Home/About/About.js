import React from 'react'
import developer from '../../../images/developer.png'
import fb from '../../../images/icons/facebook.svg'
import insta from '../../../images/icons/ig.svg'
import Linkedin from '../../../images/icons/linkedin.svg'
import '../../../Styles/About.css'

const About = () => {
    return (
        <div className="about-me grid grid-cols-2 gap-10 px-20">
            <div className="mx-auto mt-24">
                <h2 className="text-4xl font-[600]">Hello, This is Forhad</h2>
                <p>
                    <small>Junior Web Developer</small>
                </p>
                <p className="my-3 leading-7">
                    My Goal to is to become a reasonable Frontend Developer by 2022 and afterwards be a Fullstack
                    developer by 2023. To achieve that goal I always try to keep myself in touch to coding. Um so much
                    interested to have project and to practice more and more what I have just learned.
                </p>

                <div>
                    <p className="font-semibold mb-1">Connect with me</p>
                    <div className="connect flex gap-3">
                        <a href="https://facebook.com/forhadu2">
                            <img src={fb} alt="" />
                        </a>
                        <a href="https://instagram.com/forhad_63">
                            <img src={insta} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/forhadu/">
                            <img src={Linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <img width={'350'} src={developer} alt="" />
            </div>
        </div>
    )
}

export default About
