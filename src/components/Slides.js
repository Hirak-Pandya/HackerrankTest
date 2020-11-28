import { render } from "enzyme";
import React, { Component } from "react";

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  reset = () => {
    this.setState({ count: 0 });
  };
  Next = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Prev = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <div id="navigation" className="text-center">
          <button
            onClick={this.reset}
            data-testid="button-restart"
            className="small outlined"
          >
            Restart
          </button>
          <button
            onClick={this.Prev}
            data-testid="button-prev"
            className="small"
          >
            Prev
          </button>
          <button
            onClick={this.Next}
            data-testid="button-next"
            className="small"
          >
            Next
          </button>
        </div>
        <div id="slide" className="card text-center">
          <h1 data-testid="title">
            {this.props.slides[this.state.count].title}
          </h1>
          <p data-testid="text">{this.props.slides[this.state.count].text}</p>
        </div>
      </div>
    );
  }
}

export default Slides;
