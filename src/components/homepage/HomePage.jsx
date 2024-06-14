import React from 'react';
import "./homepage.css";
import Form from "../form/Form";

export default function HomePage() {
  return (
    <div className="homepage">
        <div className="homepageBackground">
            <div className="homepageLeft">
                <h1>Find Your Future <br />
                Dream Home</h1>
                <p>We have the most listings and constant updates. Best Listings and constant updates you’ll never miss out!</p>
            </div>
            <div className="homepageRight">
                <Form />
            </div>
        </div>
    </div>
  )
}
