import React from 'react';
import logo from '../assets/logo.png';

const Home = () => {
    return ( <
        div >
        <
        img src = { logo }
        alt = "Logo" / >
        <
        h1 > Welcome to our Crypto Application < /h1> <
        p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec at hendrerit magna, sed varius massa.Duis sit amet dui et est fermentum vehicula.Nunc nec neque mi.Pellentesque a lacus tristique, semper neque id, venenatis metus. <
        /p> { /* Add more content and sections as needed */ } <
        /div>
    );
};

export default Home;