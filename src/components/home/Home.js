import React, { useEffect, useState } from 'react';
import './Home.css';




const Home = () => {
    const [quote, setQuote] = useState('');
    const [error, setError] = useState('');

    useEffect(() =>{
        fetch(`${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            if(response.ok)
                return response.json();
            throw response;
        })
        . then(data => {
            setQuote(data.content);
        })
        .catch(error => setError("A Good Day for a quote...!"))
    }, [])

    if(error)
        return (
        <div id="div">
        <div id="quotes">
            <h2>Hello There Ani, Welcome to our site!</h2>
        </div>
        <div id="quote">
            <h2>{error}</h2>
        </div>
        
        </div>    
        )
    return (
        <div>
        <div id="quotes">
            <h2>Welcome to our site!!!!</h2>;
        </div>
        <div id="container">
            <h2>{quote}</h2>
        </div>
        </div>    
        )
    
}



export default Home;
