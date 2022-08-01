import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoLists";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.handleHideComponent = () => {
            this.setState({ show: false });
        };
        this.handleShowComponent = () => {
            this.setState({ show: true });
        };
    }
    render() {
        return (
            <div className="App">
                {this.state.show ? (
                    <>
                        <button onClick={this.handleHideComponent}>
                            Hide List
                        </button>
                        <ToDoList />
                    </>
                ) : (
                    <button onClick={this.handleShowComponent}>
                        Show List
                    </button>
                )}
            </div>
        );
    }
}

export default App;
