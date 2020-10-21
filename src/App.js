import React, { Component, useState} from "react";
import formData from "form-data";
import axios from "axios";
import PhotoForm from "./Components/PhotoForm"
import StrainForm from "./Components/StrainForm"
import { Route, Link, Switch, withRouter, Redirect, Match} from "react-router-dom";
import "./App.css";
import GuestContainerLayout from "./GuestsContainer/GuestContainer";
import ExploreContainer from "./Components/ExploreContainer"
import Home from "./Components/Home";
import UserDashboard from "./Components/UserDashboard.js";
import Profile from "./Components/Profile.js";
import EditProfile from "./Components/EditProfile.js";
import { useAlert } from "react-alert";
import {Card, Segment, Menu, Sidebar, Icon, Button} from "semantic-ui-react"
import Modal from 'react-bootstrap/Modal'
import Error from "./Components/Error";
import StrainCard from "./Components/StrainCard"
import Quiz from 'react-quiz-component';
import { quiz } from './Components/quiz';
import "survey-react/survey.css"
import * as Survey from "survey-react";




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
    displayPostForm: false,
    otherUser: {},
    selectedStrain: {},
    show: true,
    showPersonality: false,
    personalityTestCompleted: false,
    firstTime: false,
    showAddPhoto: false
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
            user: { ...userData.user }
          });
        })
        .then(console.log(() => this.props.history.push("/dashboard/")));
    } else {

        fetch('http://localhost:3000/api/v1/strains/' , {
                  method: "GET",
                  headers: {
                    "content-type": "application/json",
                    accepts: "application/json"
                  }
                })
                .then(res => {
                    if(!res.ok) {
                        res.text().then(text => alert(text))
                    } else {
                        return res.json().then(strainData => {
                            this.setState({strains: strainData});
                        })
                    }
                })
}




let map;

fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyDVees6AhLJ4o0EfQfVXKQuUM7HvLP31ro&libraries=places&callback=initMap", {
 method: "GET",
 headers: {
   "content-type": "application/json",
   accepts: "application/json",

 }
}
).then(res => res.json()).then(console.log())


// var map;
//
// function initialize() {
// // Create a map centered in Pyrmont, Sydney (Australia).
// map = new google.maps.Map(document.getElementById('map'), {
// center: {lat: -33.8666, lng: 151.1958},
// zoom: 15
// });
//
// // Search for Google's office in Australia.
// var request = {
// location: map.getCenter(),
// radius: '500',
// query: 'Google Sydney'
// };
//
// var service = new google.maps.places.PlacesService(map);
// service.textSearch(request, callback);
// }
//
// // Checks that the PlacesServiceStatus is OK, and adds a marker
// // using the place ID and location from the PlacesService.
// function callback(results, status) {
// if (status == google.maps.places.PlacesServiceStatus.OK) {
// var marker = new google.maps.Marker({
// map: map,
// place: {
// placeId: results[0].place_id,
// location: results[0].geometry.location
// }
// });
// }
// }

                fetch('http://localhost:3000/api/v1/strains/' , {
                          method: "GET",
                          headers: {
                            "content-type": "application/json",
                            accepts: "application/json"
                          }
                        })
                        .then(res => {
                            if(!res.ok) {
                                res.text().then(text => alert(text))
                            } else {
                                return res.json().then(strainData => {
                                    this.setState({ strains: strainData});
                                })
                            }
                        })
  }










  //---------------------------------------------------------------------------------------




//------------------Strain Review Functions-----------------////


submitNewStrainReviewHandler = (newStrainReview) => {




    fetch("http://localhost:3000/api/v1/strain_reviews", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify({ strain_review: newStrainReview, user_id: this.state.user.id})
    }).then(res => {
        if (!res.ok) {
            res.text().then(text => alert(text));
        } else {
            return res
            .json()
            .then(() => this.props.history.goBack()).then(window.location.reload());
        }
    });


}





logOutHandler = () => {
   localStorage.removeItem("token")
    this.props.history.push('/Home')
}












  //---------------------------Dispensary functions------------------------//
  editDispensaryHandler = (newDispensary, dispensary_id) => {

      // needs token, auth???

      if (newDispensary.avatar) {
          const fd = new formData();

         fd.append("avatar", newDispensary.avatar);

        axios.patch(`http://localhost:3000/api/v1/dispensaries/${dispensary_id}`, fd, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          })
          .then(
            fetch(`http://localhost:3000/api/v1/dispensaries/${dispensary_id}`, {
              method: "PATCH",
              headers: {
                // Authorization: `${token}`,
                "content-type": "application/json",
                accepts: "application/json"
              },
              body: JSON.stringify({ dispensary: newDispensary  })
          }, console.log("PATCHESSSS", newDispensary))
          )
          .then(console.log("PATCHESSS", newDispensary));
      } else {
        fetch(`http://localhost:3000/api/v1/dispensaries/${dispensary_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            accepts: "application/json"
          },
          body: JSON.stringify({ dispensary: newDispensary })
        })
          .then(res => res.json())
          .then(console.log("noPATTCHES", newDispensary));
      }
  };



  submitDispensaryHandler = (newDispensary, user_id) => {

      fetch("http://localhost:3000/api/v1/dispensaries", {
          method: "POST",
          headers: {
              "content-type": "application/json",
              accepts: "application/json"
          },
          body: JSON.stringify({ dispensary: newDispensary })
      }).then(res => {
          if (!res.ok) {
              res.text().then(text => alert(text));
          } else {
              return res
              .json()
              .then(dispensaryData => {
                  this.setState({dispensary: { ...dispensaryData.dispensary }})
              }).then(window.location.reload());
          }
      });
  };


  deleteDispensaryRequest = (e) => {

      let dispensary_id = e.target.parentElement.getAttribute("dispensary")

      return fetch(`http://localhost:3000/api/v1/dispensaries/${dispensary_id}`, {
          method: "DELETE",
          headers: {
              "content-type": "application/json",
              accepts: "application/json"
          }
      }).then(res => {
          if (!res.ok) {
              res.text().then(text => alert(text));
          } else {
              window.location.reload();
          }
      });
  }







//---------------------------Strain functions------------------------//
editStrainHandler = (newStrain, strain_id) => {

debugger
console.log("fucking debugger", strain_id)
    // needs token, auth???

    if (newStrain.avatar) {
        const fd = new formData();

       fd.append("avatar", newStrain.avatar);

      axios.patch(`http://localhost:3000/api/v1/strains/${strain_id}`, fd, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        .then(
          fetch(`http://localhost:3000/api/v1/strains/${strain_id}`, {
            method: "PATCH",
            headers: {
              // Authorization: `${token}`,
              "content-type": "application/json",
              accepts: "application/json"
            },
            body: JSON.stringify({ strain: newStrain  })
        }, console.log("PATCHESSSS", newStrain))
        )
        .then(console.log("PATCHESSS", newStrain));
    } else {


      fetch(`http://localhost:3000/api/v1/strains/${strain_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ strain: newStrain })
      })
        .then(res => res.json())
        .then(console.log("noPATTCHES", newStrain));
    }
};



submitStrainHandler = (newStrain, user_id) => {


    fetch("http://localhost:3000/api/v1/strains", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify({ strain: newStrain })
    }).then(res => {
        if (!res.ok) {
            res.text().then(text => alert(text));
        } else {
            return res
            .json()
            .then(strainData => {
                this.setState({strain: { ...strainData.strain }})
            }).then(window.location.reload());
        }
    });
};


deleteStrainRequest = (e) => {

    let strain_id = e.target.parentElement.getAttribute("strain")

    return fetch(`http://localhost:3000/api/v1/strains/${strain_id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        }
    }).then(res => {
        if (!res.ok) {
            res.text().then(text => alert(text));
        } else {
            window.location.reload();
        }
    });
}

handleViewStrainProfile = (e) => {

    console.log("is this shit even being hit")

    fetch(`http://localhost:3000/api/v1/strains/${e.target.id}`).then(res => res.json()).then(strainData =>

      this.setState({
          selectedStrain: {...strainData}})
      )
          // this.props.history.push("/explore/" + String(this.state.otherStrain.strain_name))


}






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


  submitPhotoHandler = (userInfo, token) => {

      const fd = new formData();

      let user_id = this.state.user.id



      fd.append('image', userInfo.image);
      fd.append('description', userInfo.description);


      axios.patch(`http://localhost:3000/api/v1/gallery/${user_id}`, fd, {
          headers: { "Content-Type": "application/x-www-form-urlencoded",
          'Authorization': token}
      }).then(window.location.reload())

  }


  deletePhotoRequest = (e) => {

      let token = localStorage.token


      let photo_id = e.target.parentElement.parentElement.parentElement.id


      return fetch(`http://localhost:3000/api/v1/photos/${photo_id}`, {
          method: "DELETE",
          headers: {
              Authorization : `${token}`,
              "content-type": "application/json",
              accepts: "application/json"
          }
      }).then(res => {
          if (!res.ok) {
              res.text().then(text => alert(text));
          } else {
              window.location.reload();
          }
      });
  }

  handleNewFriendRequest = (user_id, friend_id) => {

      fetch("http://localhost:3000/api/v1/friend_request", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ user_id: user_id }) //
      }).then(res => {
        if (!res.ok) {
          res.text().then(text => alert(text));
        } else {
          return res
            .json()
            .then(userData => {
              this.setState({
                user: { ...userData.user }
              });
            })

        }
      });
    };


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


  handleViewUserProfile = (e) => {

      fetch(`http://localhost:3000/api/v1/users/${e.target.id}`).then(res => res.json()).then(userData =>
        this.setState({
            otherUser: {...userData.user}}))
            this.props.history.push("/explore/" + String(this.state.otherUser.username))


  }

 handleClose = () => {
        this.setState({show: false, firstTime: false})
    }

 handleShow = () => {
     this.setState({show: true})
     }

  //---------------------------------------------------------------------------------------


  handleAddPhoto = () => {
      this.setState({ showAddPhoto: true })
  }


  handleShowPhotoclose = () => {
      this.setState({ showAddPhoto: !this.state.showAddPhoto })
  }


handleShowPersonality = () => {
    this.setState({ showPersonality: true })
}

handleShowPersonalityclose = () => {
    this.setState({ showPersonality: !this.state.showPersonality })
}


takeTheTest = () => {
    this.setState({ personalityTest : true})
}


  render() {

     const sendDataToServer = (survey) => {
          //send Ajax request to your web server.

          let token = localStorage.token


          fetch("http://localhost:3000/api/v1/personalitytests", {
              method: "POST",
              headers: {
                  Authorization : `${token}`,
                  "content-type": "application/json",
                  accepts: "application/json"
              },
              body: JSON.stringify({ survey: survey.data })
          }).then(res => {
              if (!res.ok) {
                  res.text().then(text => alert(text));
              } else {
                  return res
                  .json()
                  .then(window.location.reload());
              }
          });

          console.log(survey.data, "this is the numeical score")



          alert("The results are:" + JSON.stringify(survey.data));
      }

      //change the first pages in the survey, explaining the points of the personalitytests

      var surveyJSON = { "title": "Why is This Important?", "pages":[{"name":"page1","elements":[{"type":"expression","name":"question1","title":"So why is this important?","description":"bn b nb nb nb nb nb nb nb nb ","hideNumber":true}, {"type":"expression","name":"question1","title":"So why is this important?","description":"bn b nb nb nb nb nb nb nb nb ","hideNumber":true}]},{"name":"page1","elements":[{"type":"boolean","name":"question2","indent":2,"title":"I show my feelings when I'm happy. ","description":"You let others know your happy, verbally or physically.","descriptionLocation":"underInput","hideNumber":true,"showTitle":true},{"type":"boolean","name":"question3","useDisplayValuesInTitle":false,"indent":2,"title":"I can't be bothered with other people's needs.","description":"You do not like to think of what someone else might need.","descriptionLocation":"underInput","hideNumber":true},{"type":"boolean","name":"question4","indent":2,"title":"I reveal little of myself.","description":"You keep most of your emotions and story to yourself. ","descriptionLocation":"underInput","hideNumber":true},{"type":"boolean","name":"question1","indent":2,"title":"I hate to seem pushy. ","description":"You go out of your way to seem NOT pushy.","descriptionLocation":"underInput","hideNumber":true}]},{"name":"page2","elements":[{"type":"boolean","name":"question6","indent":2,"title":"I see beauty in things that most people wouldn't notice. ","description":"You are no stranger to daydreams.","descriptionLocation":"underInput","hideNumber":true},{"type":"boolean","name":"question5","indent":2,"title":"I am not easily annoyed. ","description":"You have a tolerance for people's \"mistakes\".","descriptionLocation":"underInput","hideNumber":true},{"type":"boolean","name":"question8","indent":2,"title":"I take advantage of others.","description":"You take when you can.","descriptionLocation":"underInput","hideNumber":true},{"type":"boolean","name":"question7","indent":2,"title":"I take interest in other people's lives. ","description":"You care about their story.","descriptionLocation":"underInput","hideNumber":true}]},{"name":"page3","elements":[{"type":"boolean","name":"question11","indent":2,"title":"I'm up for anything, twice!","description":"You are less fearful of consequences.","descriptionLocation":"underInput","hideNumber":true},{"type":"boolean","name":"question10","indent":2,"title":"I'm hard to get to know.","description":"You wait for others to lead the way.","descriptionLocation":"underInput","hideNumber":true},{"type":"boolean","name":"question9","indent":2,"title":"I can easily be \"stirred-up\" or agitated.","description":"Your mood can swing, easily.","descriptionLocation":"underInput","hideNumber":true}]}]}


    const { hasError } = this.state;

    const { errors } = this.state;

    const { history } = this.props

    const { show } = this.state

    const {showPersonality} = this.state

    const {showAddPhoto} = this.state

    const {user} = this.state

    const {personalityTest} = this.state

    const {firstTime} = this.state

    const onCompleteAction = (obj) => {
   console.log(obj);
   // YOUR LOGIC GOES HERE
 }





    console.log("within the state", this.state);

    // const listOfFriends = {i need to fetch the user friends ID and match the friends id with list of users and bring to the app}


    return (
      <React.Fragment>


          <Modal centered={true} size="lg" show={showAddPhoto}>
              <Modal.Header>
                  <h3>Add Photo</h3>
              </Modal.Header>
        <Modal.Body>
            <PhotoForm submitPhotoHandler = {this.submitPhotoHandler}/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleShowPhotoclose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal centered={true} size="lg" show={showPersonality}>
          <Modal.Header>
              <h3>My Bud's Personality Test</h3>
              <div id="map"></div>

          </Modal.Header>
    <Modal.Body show={personalityTest}>
        <div id="surveyContainer">

            {!this.state.personalityTestCompleted? <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer }  /> : null}
        </div>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={this.handleShowPersonalityclose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {console.log("This is the new personality =>", this.state.user.personality_type)}









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
                      dispensaries={this.state.user.dispensaries}
                      strains={this.state.user.strains}
                      gallery={this.state.user.gallery}
                      handleViewUserProfile={this.handleViewUserProfile}
                      handleNewPostClick={this.handleNewPostClick}
                      handleNewPhotoClick={this.handleNewPhotoClick}
                      handleNewStrainReviewClick={this.handleNewStrainReviewClick}
                      deleteDispensaryRequest={this.deleteDispensaryRequest}
                      sendThisDispensaryToEdit={this.sendThisDispensaryToEdit}
                      deleteStrainRequest={this.deleteStrainRequest}
                      sendThisStrainToEdit={this.sendThisStrainToEdit}
                      handleShowPersonality={this.handleShowPersonality}
                      handleAddPhoto={this.handleAddPhoto}
                      handleDeletePhoto={this.deletePhotoRequest}
                      logOutHandler={this.logOutHandler}
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
            path="/profile"
            render={() => (
              <Profile
                user={this.state.user}
                avatar={this.state.avatar}
                history={this.props.history}
                strains={this.state.user.strains}
                gallery={this.state.user.gallery}
                handleEditClick={this.handleEditClick}
                handleNewPostClick={this.handleNewPostClick}
                handleNewPhotoClick={this.handleNewPhotoClick}
                handleNewStrainReviewClick={this.handleNewStrainReviewClick}
              />
            )}
          />
          {this.state.otherUser ? (
            <Route
              path="/explore/:username"
              exact={true}
              render={props => {
                if (this.state.otherUser) {
                  return (
                    <Profile
                      user={this.state.otherUser}
                      avatar={this.state.otherUser.avatar}
                      history={this.props.history}
                      handleViewUserProfile={this.handleViewUserProfile}
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
          <Route path="/home" render={() => <Home user={this.state.user} />} />
          <Route path="/explore" render={() =>
              <ExploreContainer
              user={this.state.user}
              avatar={this.state.avatar}
              handleViewUserProfile={this.handleViewUserProfile}
              handleNewFriendRequest={this.handleNewFriendRequest}
              handleViewStrainProfile={this.handleViewStrainProfile}
              logOutHandler={this.logOutHandler}
              /> } />
          <Route path="/strains" render={() => <GuestContainerLayout strains={this.state.strains} submitNewStrainReviewHandler={this.submitNewStrainReviewHandler}/>} />
          <Route path="/strains/:strain_name/:id" render={() => <GuestContainerLayout user={this.state.user} strains={this.state.strains} submitNewStrainReviewHandler={this.submitNewStrainReviewHandler}/>} />

      <Route path="/:username/newdispensary" render={() => <GuestContainerLayout
                  user={this.state.user}
                strains={this.state.strains}
                 user={this.state.user}
              submitHandler={this.submitDispensaryHandler}
              />} />
          <Route path="/:username/newstrain" render={() => <GuestContainerLayout
                      user={this.state.user}
                    strains={this.state.strains}
                     user={this.state.user}
                  submitHandler={this.submitStrainHandler}
                  />} />
          <Route path="/:namespace/editdispensary/:id" render={() => <GuestContainerLayout
                    strains={this.state.strains}
                     user={this.state.user}
                  editDispensaryHandler={this.editDispensaryHandler}
                  />} />
              <Route path="/:namespace/editstrain/:id" render={() => <GuestContainerLayout
                            strains={this.state.strains}
                             user={this.state.user}
                          editStrainHandler={this.editStrainHandler}
                          />} />
                      <Route path="/strains/:strain_name/strainreview/:id" render={() => <GuestContainerLayout
                              strains={this.state.strains}
                             submitNewStrainReviewHandler={this.submitNewStrainReviewHandler}
                              />} />
            <Route path="/newstrain" render={() => <GuestContainerLayout strains={this.state.strains} />} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
