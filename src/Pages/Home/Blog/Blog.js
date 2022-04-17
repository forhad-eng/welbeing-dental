import React from 'react'
import '../../../Styles/Blog.css'

const Blog = ({ title, shares, author }) => {
    const today = new Date()
    const date = today.toDateString()

    return (
        <div>
            <h1 className="text-3xl font-[600] leading-snug">{title}</h1>
            <p>
                <small className="text-gray-500">
                    Last updated on {date} by <span className="text-orange-500">{author}</span>
                </small>
            </p>

            <div className="social-icon flex items-center gap-3 mt-3">
                <p className="leading-4">
                    <span className="font-bold">{shares}k</span>
                    <br />
                    <small className="text-gray-500 uppercase">Shares</small>
                </p>
                <img
                    width={'90'}
                    className="rounded"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/facebook-share-button.svg"
                    alt=""
                />
                <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/twitter-share-button.png"
                    alt=""
                />
                <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/linkedin-share-button.svg"
                    alt=""
                />
                <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/pinterest-share-button.svg"
                    alt=""
                />
            </div>

            <hr className="my-3" />
        </div>
    )
}

export default Blog
