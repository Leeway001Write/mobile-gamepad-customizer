import { useState } from 'react';
import './App.css';

import Screen from './components/Screen'
import { type ButtonProps } from './components/Screen'

function App() {
    const [ toExport, setToExport ] = useState("");

    function exportJSON(): void {
        setToExport("export this");
    }

    const data: ButtonProps = {
        appearance: {
            position: {
                x: 25,
                y: 10,
            },
            scale: {
                x: 50,
                y: 40,
            },
            circle: false,
            forceAspectRatio: false,
            unpressed: {
                color: '777777',
                opacity: 0.8,
                border: {
                    color: 'dddddd',
                    thickness: 12,
                    radius: 24,
                },
                text: "Press button (A)",
                textColor: "white",
                fontFamily: 'Consolas',
                fontSize: 24,
                textAlignX: 'left',
                textAlignY: 'top',

                image: {
                    source: "https://duckduckgo.com/i/f0521b601b3e6d3f.jpg",
                    fit: "cover",
                    opacity: 0.5,
                }
            },
            pressed: {
                color: '777777',
                opacity: 1,
                border: {
                    color: 'dddddd',
                    thickness: 12,
                    radius: 24,
                },
                text: "(A)",
                textColor: "white",
                fontFamily: 'Consolas',
                fontSize: 24,
                textAlignX: 'right',
                textAlignY: 'bottom',

                image: undefined,
            },
            animationTime: 0,
            zIndex: 1,
        },
    }

    return (
    <>
        <div className="overlay">
            <div className="top pane">
                <h2>Settings</h2>
            </div>
            <div className="left pane">
                <div className="library menu">
                    Add components
                </div>
                <div className="contents menu">
                    Existing components
                </div>
            </div>
            <div className="right pane">
                Properties
            </div>
            <div className="bottom pane">
                <button onClick={ exportJSON }>Export</button>
            </div>

            {toExport !== "" &&
                <div className="export pane">
                    <textarea value={toExport}></textarea>
                    <button onClick={() => setToExport("")}>close</button>
                </div>
            }
        </div>
        <div className="editor">
            <div className="screen">
                <Screen {...data} />
            </div>
        </div>
    </>
    )
}

export default App
