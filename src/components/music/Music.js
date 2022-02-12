import React from "react";
import ReactPlayer from "react-player";
import "./Music.css";


const Music = () => {
    return ( 
        <>
            <div id="Jazz">
                <h4>Enjoy Jazz During Your Day</h4>
            </div>
            <div id="Music">
                <ReactPlayer url="https://youtu.be/CdnaJPPxQow" />
            </div>
        </>
    );
}

export default Music;