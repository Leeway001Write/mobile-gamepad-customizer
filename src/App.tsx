import './App.css'

function App() {

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
                Footer
            </div>
        </div>
        <div className="editor">
            <div className="screen">

            </div>
        </div>
    </>
  )
}

export default App
