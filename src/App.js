import React, { Component } from "react";
import formData from "form-data";
import axios from "axios";
import ErrorBoundary from "./Components/ErrorBoundary";
import StrainForm from "./Components/StrainForm"
import { Route, Link, Switch, withRouter } from "react-router-dom";
import "./App.css";
import GuestContainerLayout from "./GuestsContainer/GuestContainer";
import Home from "./Components/Home";
import UserDashboard from "./Components/UserDashboard.js";
import UserStrainContainer from "./Components/UserStrainContainer";
import Profile from "./Components/Profile.js";
import EditProfile from "./Components/EditProfile.js";
import { useAlert } from "react-alert";
import {Card, Segment, Menu, Sidebar} from "semantic-ui-react"
import Error from "./Components/Error";

class App extends Component {
  state = {
    user: {
      friendships: [],
      strain_reviews: [],
      gallery: []
    },
    token: "",
    displayStrainReviewForm: false,
    displayPhotoForm: false,
    displayPostForm: false
  };

  //----------------------Life Cycle Methods should go here--------------------//
  componentDidMount = () => {
    let token = localStorage.token;

    if (token) {
      fetch("http://localhost:3000/api/v1/current_user", {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "content-type": "application/json",
          accepts: "application/json"
        }
      })
        .then(resp => resp.json())
        .then(userData => {
          this.setState({
            user: { ...userData.user },
            avatar: userData.user.avatar
          });
        })
        .then(() => this.props.history.push("/dashboard/"));
    } else {
      this.props.history.push("/login");
    }
  };

  componentDidUpdate(nextState, prevProps) {
    if (nextState.user == true && this.state.errors === false) {
      this.props.histroy.push("/dashboard");
    }
    console.log("in the component will update", this.state);
  }

  //---------------------------------------------------------------------------------------

  //-----------------------Fetch&API Handlers Should Go Here---------------------------------

  signupSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    }).then(res => {
      if (!res.ok) {
        res.text().then(text => alert(text));
      } else {
        return res
          .json()
          .then(userData => {
            this.setState({
              user: { ...userData.user },
              token: userData.jwt,
              avatar: userData.user.avatar
            });
          })
          .then(() => localStorage.setItem("token", this.state.token))
          .then(this.props.history.push("/dashboard/"));
      }
    });
  };

  loginSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    }).then(res => {
      if (!res.ok) {
        res.text().then(text => alert(text));
      } else {
        return res
          .json()
          .then(userData => {
            this.setState({
              user: { ...userData.user },
              token: userData.jwt,
              avatar: userData.user.avatar
            });
          })
          .then(() => localStorage.setItem("token", this.state.token))
          .then(this.props.history.push("/dashboard/"));
      }
    });
  };

  submitHandler = (userinfo, token, user_id) => {
    const fd = new formData();

    fd.append("avatar", userinfo.avatar);

    if (userinfo.avatar) {
      axios
        .patch(`http://localhost:3000/api/v1/users/${user_id}`, fd, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        .then(
          fetch(`http://localhost:3000/api/v1/users/${user_id}`, {
            method: "PATCH",
            headers: {
              Authorization: `${token}`,
              "content-type": "application/json",
              accepts: "application/json"
            },
            body: JSON.stringify({ user: userinfo })
          })
        )
        .then(this.props.history.push("/profile"));
    } else {
      fetch(`http://localhost:3000/api/v1/users/${user_id}`, {
        method: "PATCH",
        headers: {
          Authorization: `${token}`,
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ user: userinfo })
      })
        .then(res => res.json())
        .then(this.props.history.push("/profile"));
    }
  };


  photoSubmitHandler = () => {
      
  }
  //---------------------------------------------------------------------------------------

  // ShowServerError = (error) => {
  //     if (!error) {
  //         return null;
  //     }
  //     return (
  //         <div className="alert">
  //             {error instanceof window.Response ? (
  //                 <p>
  //                     <b>{error.status}</b> on <b>{error.url}</b>
  //                     <br />
  //                     <small>{error.statusText}</small>
  //                 </p>
  //             ) : (
  //                 <p>
  //                     <code>{error.toString()}</code>
  //                 </p>
  //             )}
  //         </div>
  //     );
  // }

  // function deepIterator(error) {
  //   if (typeof error === "object") {
  //     for (const message in error) {
  //       deepIterator(error[message]);
  //     }
  //   } else {
  //     console.log(error);
  //
  //     if (hasError) {
  //       alert(error);
  //     }
  //   }
  // }

  //----------------------------Small Event Handlers Should Go Here-----------------------

  handleEditClick = () => {
    this.props.history.push("/edit");
  };

  handleNewPhotoClick = () => {
    //should set new photo state to true and render new photo form component
    console.log('wowowowowow buddy')
    this.setState({
      displayPhotoForm: !this.state.displayPhotoForm
    });
  };

  handleNewPostClick = () => {
      console.log('wowowowowow')
    this.setState({
      displayPostForm: !this.state.displayPostForm
    });
  };

  handleNewStrainReviewClick = () => {
    console.log("from the new strain review click");
    this.setState({
      displayStrainReviewForm: !this.state.displayStrainReviewForm
    });
  };

  //---------------------------------------------------------------------------------------

  render() {
    const { hasError } = this.state;

    const { errors } = this.state;

    console.log("within the state", this.state);

    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/signup"
            render={props => {
              return (
                <GuestContainerLayout
                  submitHandler={this.signupSubmitHandler}
                />
              );
            }}
          />
          <Route
            path="/login"
            render={() => (
              <GuestContainerLayout loginHandler={this.loginSubmitHandler} />
            )}
          />
          {this.state.user ? (
            <Route
              path="/dashboard/"
              render={props => {
                if (this.state.user) {
                  return (
                    <UserDashboard
                      user={this.state.user}
                      avatar={this.state.avatar}
                      history={this.props.history}
                      handleNewPostClick={this.handleNewPostClick}
                      handleNewPhotoClick={this.handleNewPhotoClick}
                      handleNewStrainReviewClick={
                        this.handleNewStrainReviewClick
                      }
                    />
                  );
                } else {
                  return <GuestContainerLayout />;
                }
              }}
            />
          ) : null}
          <Route
            path="/edit"
            render={() => (
              <EditProfile
                user={this.state.user}
                avatar={this.state.avatar}
                submitHandler={this.submitHandler}
              />
            )}
          />
          <Route
            path="/profile/"
            render={() => (
              <Profile
                user={this.state.user}
                avatar={this.state.avatar}
                history={this.props.history}
                handleEditClick={this.handleEditClick}
                handleNewPostClick={this.handleNewPostClick}
                handleNewPhotoClick={this.handleNewPhotoClick}
                handleNewStrainReviewClick={this.handleNewStrainReviewClick}
              />
            )}
          />
          <Route path="/home" render={() => <Home user={this.state.user} />} />
          <Route path="/strains" render={() => <GuestContainerLayout />} />
          <Route path="/strains/new" render={() => <UserStrainContainer />} />
          <Route path="/" component={Error} />
        </Switch>
        {this.state.displayStrainReviewForm?
                <Card>
                    <StrainForm/>
                </Card>
            : null}
      </React.Fragment>
    );
  }
}

export default withRouter(App);
