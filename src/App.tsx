import { useState } from 'react';
import './App.css';

function App() {
    const [ toExport, setToExport ] = useState("");

    function exportJSON(): void {
        setToExport("export this");
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

            </div>
        </div>
    </>
    )
}

export default App
