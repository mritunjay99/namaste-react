import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        avatar_url: "",
        name: "Dummy name",
        location: "Dummy location",
        login: "",
      },
    };
    console.log(" constructor called");
  }
  async componentDidMount() {
    console.log(" componentDidMount called");
    const response = await fetch(
      "https://api.github.com/users/mritunjayYadav88",
      {
        headers: {
          Authorization: "Bearer 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",
        },
      }
    );
    const data = await response.json();
    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount called");
  }
  render() {
    console.log("render called");
    const { name, location, login, avatar_url } = this.state.userInfo;
    //const { count } = this.state;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
