import React from 'react';
import HomeImage from './images/home.jpg';

const Home = () => {
    return (
        <div className="home" style={{
            backgroundImage: `url(${HomeImage})`,
            backgroundSize: "cover",
            height: "88vh"
            
            }}>
                <h1>This is the home page</h1>
        </div>
    )
}
export default Home;
