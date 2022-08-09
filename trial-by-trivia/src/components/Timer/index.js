import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect, useRef } from 'react';

let color = '#3E98C7';


export default function Timer() {
    const [isPlayed, setIsPlayed] = useState(false);
    const [mode, setMode] = useState('safe');
    const [secondsLeft, setSecondsLeft] = useState(15)

    const secondsLeftRef = useRef(secondsLeft);
    // const isPlayedRef = useRef(isPlayed);
    const modeRef = useRef(mode);

    function switchMode() {
        const nextMode = (modeRef.current === 'safe' ? 'danger' : 'safe');
        // const nextSeconds = (nextMode === 'safe' ? 10 : 0);

        setMode(nextMode);
        modeRef.current = nextMode;
        
        // setSecondsLeft(nextSeconds);
        // secondsLeftRef.current = nextSeconds;
    }

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current)
    }

    function initTimer() {
        setSecondsLeft(15);
    }

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if(secondsLeftRef.current === 5) {
                switchMode();
                color = '#D73949';
            }
            if (secondsLeftRef.current === 0) {
                return
            } else {
                tick();
            };
             
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    // let totalSeconds = mode === 'safe' ? 10 : 0;
    let totalSeconds = 15;


    let seconds = secondsLeft;
    // let percentage = Math.round(seconds / totalSeconds) * 100;

    
    console.log("This is the total seconds", totalSeconds);
    let percentage = (seconds / totalSeconds) * 100;
    // console.log("This is the percentage", percentage);

    return (
        <div>
            <CircularProgressbar value={percentage} text={seconds} styles={buildStyles( {
                strokeLinecap: 'butt',
                pathColor: color,
                textColor: color,
                trailColor: 'rgba(0, 0, 0, 0.2)',
                backgroundColor: '#3e98c7',
                })} />
        </div>
    )
}
