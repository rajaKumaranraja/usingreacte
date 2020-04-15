import React from "react";
import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import ReactDOM from "react-dom";

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperory: false };
  }

  callMe = () => {
    this.setState({ temperory: !this.state.temperory });
  };
  render() {
    return (
      <div>
        {this.state.temperory && <Creating />}
        <button className="temp" onClick={this.callMe} id="mainButton">
          finish
        </button>
      </div>
    );
  }
}

class Creating extends React.Component {
  render() {
    return (
      <div>
        <button>newButton</button>
      </div>
    );
  }
}

export default Testing;

ReactDOM.render(<Testing />, document.getElementById("root"));
