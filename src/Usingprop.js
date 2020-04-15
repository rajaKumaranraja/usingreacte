import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Popsuse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temporary: "low" };
  }
  render() {
    return (
      <div>
        <button>this.props.text</button>
      </div>
    );
  }
}

export default Popsuse;

ReactDOM.render(
  <Popsuse className="c1" text="plz click me" />,
  document.getElementById("root")
);
