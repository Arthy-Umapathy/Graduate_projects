import React from "react"
import MemeGenerator from "./MemeGenerator"
import Header from "./Header"

class App extends React.Component{
    constructor() {
        super()
        this.state={

        }
    }

    render() {
        return (
            <div>
                <Header />
                <MemeGenerator/>
            </div>
            
        )
    }
}

export default App