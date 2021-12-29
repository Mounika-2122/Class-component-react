import React from "react";
  
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ change: !this.state.change });
          }}
        >
          Click On Here!
        </button>
        {this.state.change ? (
          <h1>Full Stack Web Developer</h1>
        ) : (
          <h1>Front End Developer</h1>
        )}
      </div>
    );
  }
}
  
export default App;