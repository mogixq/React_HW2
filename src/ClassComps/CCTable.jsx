import React, { Component } from "react";

export default class CCTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tblWidth: "100%",
    };
  }
  handleDblClick = (e) => {
    this.setState({ tblWidth: "100%" });
  }

  handleClick = (e) => {
    this.setState({ tblWidth: "50%" });
  }

  render() {
    return (
      <>
        <table
          border="1"
          onClick={this.handleClick}
          onDoubleClick={this.handleDblClick}
          style={{
            border: "4px",
            background: "beige",
            width: this.state.tblWidth,
            margin: 20,
            color: "black",
          }}
        >
          <tr>
            <td>1.1</td>
            <td>1.2</td>
            <td>1.3</td>
          </tr>
          <tr>
            <td>2.1</td>
            <td>2.2</td>
            <td>2.3</td>
          </tr>
        </table>
      </>
    );
  }
}
