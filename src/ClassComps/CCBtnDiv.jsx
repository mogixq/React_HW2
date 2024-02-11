import { Component } from "react";

export default class CCBtnDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "beige",
    };
  }

  changeColor = (e) => {
    console.log(e.target.value);
    this.setState({
      color: e.target.value,
    });
  };

  render() {
    return (
      <div
        style={{
          margin: 20,
          padding: 20,
          borderRadius: 10,
          border: "solid white 2px",
          backgroundColor: this.state.color,
        }}
      >
        <button value="purple" onClick={this.changeColor}>
          purple
        </button>
        <button value="blue" onClick={this.changeColor}>
          blue
        </button>
        <button value="green" onClick={this.changeColor}>
          green
        </button>
        <button value="yellow" onClick={this.changeColor}>
          yellow
        </button>
        <button value="orange" onClick={this.changeColor}>
          orange
        </button>
        <button value="red" onClick={this.changeColor}>
          red
        </button>
        <button value="black" onClick={this.changeColor}>
          black
        </button>
        <button value="white" onClick={this.changeColor}>
          white
        </button>
      </div>
    );
  }
}
