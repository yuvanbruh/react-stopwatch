// App.jsx
import { useEffect, useRef, useState } from 'react';
import './App.css';  // Import your CSS file
import Content from './components/Content';

function App() {
    const button = useRef();
    const display = useRef();
    const [Count, setCount] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);

    function start() {
        if (!running) {
            setRunning(true);
            intervalRef.current = setInterval(() => {
                setCount((Count) => Count + 1);
            }, 1000);
        }
    }

    function stop() {
        if (running) {
            button.current.style.backgroundColor = "blue";
            clearInterval(intervalRef.current);
            setRunning(false);
        }
    }

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <Content drake={Count} />
            <div id="display" ref={display}>
                <h1>{Count} Seconds</h1>
            </div>
            <button onClick={start}>Start</button>
            <button ref={button} onClick={stop}>Stop</button>
        </>
    );
}

export default App;
