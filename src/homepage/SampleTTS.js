import React, { useState } from "react";
import '../homepage/home-css/SampleTTS.css';
import { FaPlay, } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";


const SampleTTS = () => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('en');
    const MAX_WORDS = 200;

    const handleSpeak = () => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = language === 'en' ? 'en-US' : 'hi-IN';
        window.speechSynthesis.speak(speech);
    };

    const handleDownload = () => {
        const speech = new SpeechSynthesisUtterance(text);
        const blob = new Blob([speech.text], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'speech.wav';
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleTextChange = (e) => {
        const inputText = e.target.value;
        const wordCount = inputText.split(' ').filter(word => word).length;
        if (wordCount <= MAX_WORDS) {
            setText(inputText);
        } else {
            alert(`You can only enter up to ${MAX_WORDS} words.`);
        }
    };

    const wordCount = text.split(' ').filter(word => word).length;

    return (
        <div className="tts-section">
            <h2 className="tts-heading">Free Trials</h2>
            <select className="language-selector" value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
            </select>
            <textarea 
                id="tts-input" 
                className="tts-input" 
                placeholder="Type your text here..."
                value={text}
                onChange={handleTextChange}
                maxLength={1000} // Set maxLength for the textarea
            />
            <div className="word-count">{wordCount}/{MAX_WORDS}</div>
            <div className="button-container">
                <button className="tts-button" onClick={handleSpeak}><FaPlay /></button>
                <button className="tts-button" onClick={handleDownload}><MdOutlineFileDownload /></button>
            </div>
        </div>
    );
};

export default SampleTTS;
