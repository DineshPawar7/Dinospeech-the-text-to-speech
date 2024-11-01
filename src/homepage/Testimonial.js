import React from "react";
import './home-css/Testimonial.css'; // Import CSS for styling
import { IoMdStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";


const Testimonial = () => {
  return (
    <div className="container">
        <h1>What Our Clients Say</h1>
        <div className="testimonial-container">
            <div className="testimonial">
                <p>"Incredible voiceovers that elevate my videos to sound truly professional. It’s an essential tool for all content creators!"</p>
                <div className="user-info">
                    <img src="https://yt3.googleusercontent.com/USDG8MRbI-zu7r7Br8T57-k7BY1IMmFTYQ2NVMYrfU1G7I68p8_5bWxtJgppoidYfGbDKtP5cw=s160-c-k-c0x00ffffff-no-rj" alt="User Logo" className="user-logo" />
                    <div>
                        <h4>qodWord</h4>
                        <p className="profession">Content Creator</p>
                    </div>
                </div>
                <div className="stars"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
            </div>
            <div className="testimonial">
                <p>"This website has become an essential part of my daily routine; it boosts my productivity and creativity like never before!"</p>
                <div className="user-info">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQED221HI45BrA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722418508345?e=1732147200&v=beta&t=igKx18ZDXnnedieDOx8kEex81lU49T2lLslZkzyZPfI" alt="User Logo" className="user-logo" />
                    <div>
                        <h4>Shubham Tribhuvan</h4>
                        <p className="profession">Senior Software Developer</p>
                    </div>
                </div>
                <div className="stars"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
            </div>
            <div className="testimonial">
                <p>"This text-to-speech website features an excellent UI and is truly a game changer, helping countless users effortlessly bring their words to life."</p>
                <div className="user-info">
                    <img src="https://avatars.githubusercontent.com/u/175672643?v=4" alt="User Logo" className="user-logo" />
                    <div>
                        <h4>Dinesh Pawar</h4>
                        <p className="profession">Software Engineer/ Author</p>
                    </div>
                </div>
                <div className="stars"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><CiStar />
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default Testimonial;
