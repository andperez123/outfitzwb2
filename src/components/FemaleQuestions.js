import React from 'react';

const FemaleQuestions = ({
    vibe,
    setVibe,
    comfortLevel,
    setComfortLevel,
    priority,
    setPriority,
    accessories,
    setAccessories,
    mood,
    setMood,
    adventurous,
    setAdventurous,
    focus,
    setFocus,
    detailing,
    setDetailing
}) => {
    return (
        <div className="questions">
            <div className="question">
                <label>What vibe do you want for your outfit?</label>
                <select value={vibe} onChange={(e) => setVibe(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="elegant">Elegant</option>
                    <option value="casual">Casual</option>
                    <option value="bohemian">Bohemian</option>
                    <option value="sporty">Sporty</option>
                </select>
            </div>

            <div className="question">
                <label>What is your comfort level?</label>
                <select value={comfortLevel} onChange={(e) => setComfortLevel(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="comfortable">Comfortable</option>
                    <option value="vibrant">Vibrant</option>
                    <option value="formal">Formal</option>
                </select>
            </div>

            <div className="question">
                <label>What is your priority for the outfit?</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="style">Style</option>
                    <option value="flexibility">Flexibility</option>
                    <option value="functionality">Functionality</option>
                </select>
            </div>

            <div className="question">
                <label>What accessories do you want?</label>
                <input
                    type="text"
                    value={accessories}
                    onChange={(e) => setAccessories(e.target.value)}
                    placeholder="Enter accessories (e.g., jewelry, bag)"
                />
            </div>

            <div className="question">
                <label>What mood do you want to convey?</label>
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="classic">Classic</option>
                    <option value="modern">Modern</option>
                    <option value="playful">Playful</option>
                </select>
            </div>

            <div className="question">
                <label>How adventurous are you with colors and patterns?</label>
                <select value={adventurous} onChange={(e) => setAdventurous(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="neutral">Neutral</option>
                    <option value="soft">Soft tones</option>
                    <option value="bold">Bold colors</option>
                </select>
            </div>

            <div className="question">
                <label>What’s the main focus for your outfit?</label>
                <select value={focus} onChange={(e) => setFocus(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="confidence">Confidence</option>
                    <option value="comfort">Comfort</option>
                    <option value="style">Style</option>
                </select>
            </div>

            <div className="question">
                <label>What kind of detailing do you prefer in your clothing?</label>
                <select value={detailing} onChange={(e) => setDetailing(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="clean">Clean and simple</option>
                    <option value="textured">Textured and rugged</option>
                    <option value="tailored">Tailored and structured</option>
                </select>
            </div>
        </div>
    );
};

export default FemaleQuestions;