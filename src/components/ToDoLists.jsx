import React from "react";

class ToDoList extends React.Component {
    //phase one
    constructor(props) {
        super(props);
        //initializing the state
        this.state = {
            title: "Workshop React State",
            count: 0,
            color: "red",
        };
        this.handleClick = () => {
            this.setState({ title: "HELLO GOMYCODE STUDENTS" });
        };
        this.handleIncrease = () => {
            this.setState({
                count: this.state.count + 1,
            });
        };
        this.handleSubmit = () => {
            alert(`you have to pay: ${this.state.count * 5} $`);
        };
    }

    //phase two
    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>{this.state.title}</h1>
                <h2> {this.state.count} </h2>
                <button onClick={this.handleIncrease}>Add Count</button>
                <p>total : {this.state.count * 5} </p>
                {/* <button  onClick={this.handleClick}>Click me</button> */}
                <button onClick={this.handleSubmit}>Buy Now</button>
            </div>
        );
    }
    //phase three
    componentDidMount() {
        setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
        console.log("Component did mount");
    }
    componentDidUpdate() {
        console.log("Component did update");
    }
    componentWillUnmount() {
        console.log("Component did unmount");
        alert("your list is will be lost hidden");
    }
}

export default ToDoList;
