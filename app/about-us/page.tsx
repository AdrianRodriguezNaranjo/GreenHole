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
                <img src="/images/team.jpg" alt="Team picture" className="w-full h-auto max-h-64"></img>
                <div className="flex flex-col gap-4 p-6">
                    <h2 className="font-sans text-xl font-bold text-logo-color">Meet the team</h2>
                    <p className="text-lg source_sans.className text-dark-gray font-serif"> 
                        Hi! Meet the dream team behind “GreenHole” . We are web developers and designers on a mission to make the world a greener, better place! 
                        Iceland is represented by Kat.
                        From Denmark, we've got Lasse
                        From Gran Canaria, meet Adrian and Miguel.
                    <br />
                        With Erasmus+ funding in our pockets and a shared vision for a sustainable future,
                        we're diving headfirst into our project to build a web application that is aligning with United Nations World Goals and making a difference. Thank you for having a look!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;