
import Navibar from "../components/Navibar";
import React, { useEffect, useState } from "react";
import "./Lecture.css";


const API = "AIzaSyAGy4cf9EOxRtV_4c5Ea0DgACvhMjztWFI";
const channelId = "UCfESPIhHYMAAUkq3vmipacg";

var fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

export const Lectures = () => {
    const [allvideos, setAllvideos] = useState([]);

    useEffect(() => {
        fetch(fetchurl)
            .then((response) => response.json())
            .then((resJson) => {
                console.log(resJson); // Log the entire response to the console
                const items = resJson.items || [];
                const result = items.map((doc) => ({
                    ...doc,
                    videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
                }));
                setAllvideos(result);
            })
            .catch((error) => {
                console.error("Error fetching YouTube data:", error);
            });
    }, []);

    console.log(allvideos);

    return (
        <div>
            <div>
            <Navibar/>
            </div>

            {allvideos.map((item, index) => (
               
                <div className="video-container">
                <div key={index} className="container4" >
                    <iframe
                        width="560"
                        height="315"
                        src={item.videolink}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    
                </div>
                <p className="video-title" align = "center">{item.snippet.title}</p>
                </div>
                
            ))}
        </div>
    );
};
export default Lectures;