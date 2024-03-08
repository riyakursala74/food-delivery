import React from "react";

// Added as a class based components to undestand the thinking behind react class
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
  }

  // render is a function
  render() {
    <div className="user-card">
      <h3>{this.props.name}</h3>
      <h4>{this.props.role}</h4>
      <button
        onClick={() => {
          this.setState({ likes: this.state.likes + 1 });
        }}
      >
        Like
      </button>
      <h3>Likes: {this.state.likes}</h3>
    </div>;
  }
}

export default UserClass;
