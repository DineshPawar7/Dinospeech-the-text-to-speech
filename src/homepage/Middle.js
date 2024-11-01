import React from 'react';
import './home-css/Middle.css';
import { FiMousePointer } from "react-icons/fi";
import { MdAudiotrack, MdOutlineWifiCalling3  } from "react-icons/md";
import { FaYoutube, FaBookReader  } from "react-icons/fa";
import { PiMegaphoneDuotone } from "react-icons/pi";



const Middle = () => {
  return (
    <>
      <section className="Middle-section">
        <div className="Middle-content">
          <h1 className="Middle-heading">Convert your word into voice</h1>
          <p className="Middle-description">
            From text-to-speech to AI dubbing, our innovative tools break down language barriers, give a voice to the voiceless, and create authentic, human-like interactions, reshaping the way we communicate in the digital world.
          </p>
          <button className="Middle-button">
            Get Started <FiMousePointer className='pointer-icon' />
          </button>
        </div>
        <div className="Middle-image-container">
          <img 
            src="https://voixoff.pro/wp-content/uploads/2023/04/robot-intelligence-artificielle-parlant-au-micro.jpg" 
            alt="Example" 
            className="Middle-image" 
          />
        </div>
      </section>

      <section className="Middle-crd">
        <div className='middle-card-heading'>Create audio files for your commercial use</div>
        <div className="Middle-cards">
        <Card title="Audiobook & Podcast" icon={<MdAudiotrack />} />
        <Card title="Youtube Videos" icon={<FaYoutube />} />
        <Card title="Advertisement" icon={<PiMegaphoneDuotone />} />
        <Card title="E-Learning Material" icon={<FaBookReader  />} />
        <Card title="Call Centers & IVR System" icon={<MdOutlineWifiCalling3  />} />
        </div>
      </section>
      <section className='share-audio-middle'>
  <h1 className='share-audio-heading'>Share audio across multiple platforms</h1>
  <div className="share-audio-images">
    <img 
      src="https://voicemaker.in/images/sharing-1.svg" 
      alt="Platform 1" 
      className="share-audio-image" 
    />
    <img 
      src="https://voicemaker.in/images/sharing-2.svg" 
      alt="Platform 2" 
      className="share-audio-image" 
    />
    <img 
      src="https://voicemaker.in/images/sharing-3.svg" 
      alt="Platform 3" 
      className="share-audio-image" 
    />
    <img 
      src="https://voicemaker.in/images/sharing-4.svg" 
      alt="Platform 3" 
      className="share-audio-image" 
    />
    <img 
      src="https://voicemaker.in/images/sharing-5.svg" 
      alt="Platform 3" 
      className="share-audio-image" 
    />
    <img 
      src="https://voicemaker.in/images/sharing-6.svg" 
      alt="Platform 3" 
      className="share-audio-image" 
    />
  </div>
</section>


    </>
  );
};

const Card = ({ title, icon }) => {
  return (
    <div className="Middle-card">
      <div className="Middle-card-icon">{icon}</div>
      <h2 className="Middle-card-title">{title}</h2>
    </div>
  );
};

export default Middle;
