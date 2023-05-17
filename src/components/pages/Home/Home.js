import React from 'react';
import './Home.css';

const Home = () => {
    return ( <
        div className = "container" >
        <
        h1 className = "title" > StreamSwap < /h1> <
        p className = "subtitle" > Discover the amazing features: < /p> <
        div className = "feature" >
        <
        img className = "feature-icon"
        src = "icon-1.png"
        alt = "Feature Icon" / >
        <
        div >
        <
        h2 className = "feature-title" > Feature 1 < /h2> <
        p className = "feature-description" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /p> < /
        div > <
        /div> { / * Add more feature sections * / } < /
        div >
    );
};

export default Home;