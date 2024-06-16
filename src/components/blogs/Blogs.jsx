import React from 'react';
import "./blogs.css";
import aerial1 from "../../assets/aerial1.jfif";
import aerial2 from "../../assets/aerial2.jfif";
import aerial3 from "../../assets/aerial3.jfif";
import { useState } from 'react'

export default function Blogs() {
    const blogImage = [
        {
            id: 1,
            blogPic: aerial1

        },
        {
            id: 2,
            blogPic: aerial2
        },
        {
            id: 3,
            blogPic: aerial3,
        }
    ]
    const [userBlogImage] = useState(blogImage);
    return (
        <div className="blog">
            <h1>Featured For blog</h1>
            <div className="blogSplit">
                {userBlogImage.map((item) => (
                        <div className="blogImages" key={item.id}>
                            <img src={item.blogPic} alt="blog" className="blogImage" />
                            <h5>July 2, 2020</h5>
                            <h3>Oil price fall and real estate market</h3>
                            <p>Oil Prices have dropped significantly in the last year. How has the real estate market in Oman reacted and what does the future hold?...</p>
                        </div>
                ))}
            </div>

        </div>
    )
}
