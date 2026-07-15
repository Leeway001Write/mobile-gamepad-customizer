import { useState, useEffect } from 'react';
import './App.css';

// import Screen from './components/Screen'
import PropertiesPane from './components/Properties/Properties';

import type { FieldNode } from './properties';
import { ButtonData } from '@Leeway001Write/shared-package-mobile-gamepad';

function App() {

    const [ compList, setCompList ] = useState<Array<Record<string, FieldNode>>>([])

    const [ toExport, setToExport ] = useState({});
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
        console.log((new ButtonData()).toJSON());
        // const autosave = localStorage.getItem("autosave");
        // if (autosave) {
        //     setToExport(JSON.parse(autosave));
        // } else {
        //     setToExport(defaultProps);
        // }
    }, [])

    return (
    <>
        <div className="overlay">
            <div className="top pane">
                <button onClick={ exportJSON }>Export</button>
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
                <PropertiesPane uiComp={new ButtonData()} />
            </div>
            <div className="bottom pane">
                Footer
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
                {/* <Screen {...toExport} /> */}
            </div>
        </div>
    </>
    )
}

export default App
