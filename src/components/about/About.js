import React, { useState } from "react";
import "./About.css"


const About = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        alert("Thank you! You will receive a welcome email shortly");
    }

    return (
        <> 
            <div id="About">
                Daily Quotes is meant to be inspirational and make you think about your day
            </div>
            <div id="Form1"> 
                <form onSubmit={onSubmit}>
                    <h3>Sign Up For Updates</h3>
                    <label>
                    Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                    Email:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default About;