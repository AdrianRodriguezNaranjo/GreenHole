import React from "react";
import Header from "@/components/Header";


const AboutUs = () => {
    // type of the constant as a functional component, uses TypeScript for type checking. 
    return (
        //// JSX structure. (JavaScript XML) structure that the component will render. 
        // It defines the visual representation of the component.
        // JSX is a syntax extension for JavaScript and is used in React for describing what the UI should look like.
        <div className=" ">
            <Header></Header>
            <div className= "h-screen flex-col flex">
                <img src="/images/friends.webp" alt="Team picture" className="w-full h-auto max-h-64"></img>
                <div className="flex flex-col gap-4 p-6">
                    <h2 className="font-sans text-xl font-bold text-teal-800">Meet the team</h2>
                    <p className="text-lg source_sans.className text-gray-800">Hi! We are designers and developers from Spain, Denmark and
                    Iceland and this is an Sustainable island created by --- and funded by Erasmus plus.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;