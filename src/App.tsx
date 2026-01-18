import { useState, useEffect } from 'react';
import './App.css';

import Screen from './components/Screen'
import { type ButtonProps } from './components/Screen'

function App() {
    const defaultProps: ButtonProps = {
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

                image: undefined,
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

    const [ toExport, setToExport ] = useState(defaultProps);
    const [ exporting, setExporting ] = useState(false);

    function exportJSON(): void {
        setExporting(true);
        const exportBox = document.getElementById("export-box") as HTMLTextAreaElement;
        exportBox.value = JSON.stringify(toExport, null, 2);
        // localStorage.setItem("autosave", JSON.stringify(toExport));
    }

    function importJSON(): void {
        const exportBox = document.getElementById("export-box") as HTMLTextAreaElement;
        const imported = JSON.parse(exportBox.value);
        setToExport(imported);
        setExporting(false);
    }

    useEffect(() => {
        const autosave = localStorage.getItem("autosave");
        if (autosave) {
            setToExport(JSON.parse(autosave));
        } else {
            setToExport(defaultProps);
        }
    }, [])

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

            {exporting &&
                <div className="export pane">
                    <textarea id="export-box"></textarea>
                    <button onClick={importJSON}>close</button>
                </div>
            }
        </div>
        <div className="editor">
            <div className="screen">
                <Screen {...toExport} />
            </div>
        </div>
    </>
    )
}

export default App
