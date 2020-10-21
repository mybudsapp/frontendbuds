import React, { Component } from "react";
import {Card, Segment, Menu, Image, Icon} from "semantic-ui-react"

import {Link, withRouter} from 'react-router-dom'
import DispensaryCard from "./DispensaryCard"
import StrainCard from "./StrainCard"
import PhotoCard from "./PhotoCard"
import StrainReviewCard from './StrainReviewCard'

class UserContentDisplay extends Component{



    state = {
    }


componentDidMount(){

}

galleryDisplay = () => {

                let gallery = []


                console.log(this.props)
                if(this.props.gallery){
                    gallery = this.props.gallery
                }else{
                    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                }
                return gallery.map(photo => {
              return <PhotoCard photo={photo} handleDeletePhoto={this.props.handleDeletePhoto}/> ;
            })
        }


buddiesDisplay = () => {

                let buddies = []



                if(this.props.buddies){
                    buddies = this.props.buddies
                }else{
                    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                }
                return buddies.map(buddy => {
              return <Card><h1>{buddy.name}</h1>

                    </Card>;
            })
        }


dispensariesDisplay = () => {

            let dispensaries = []

            if(this.props.dispensaries){
                dispensaries = this.props.dispensaries
            }else{
                return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
            }
            return dispensaries.map(dispensary => {
          return <DispensaryCard dispensary={dispensary} user={this.props.user} deleteDispensaryRequest={this.props.deleteDispensaryRequest} sendThisDispensaryToEdit={this.props.sendThisDispensaryToEdit} raised/>
        })
    }



strainsDisplay = () => {

        let strains = []

        if(this.props.strains){
            strains = this.props.strains
        }else{
            return <h1> No Strains Here Bud </h1>
        }
        return strains.map(strain => {
      return <StrainCard strain={strain} user={this.props.user} deleteStrainRequest={this.props.deleteStrainRequest}  raised/>;
    })
    }

    strainReviewsDisplay = () => {



            let strainReviews = []

            console.log("method", this.props.strainreviews)

            if(this.props.strainreviews){
                strainReviews = this.props.strainreviews
            }else{
                return <h1> No Strains Here Bud </h1>
            }
            return strainReviews.map(strainreview => {
          return <StrainReviewCard strainreview={strainreview} user={this.props.user} deleteStrainRequest={this.props.deleteStrainRequest}  raised/>;
        })
        }





render(){
    // const strains  = this.props.strains.map(strain => <Card><h1>strain.name{console.log("CONTENT DISP{LAY}", strains)}</h1></Card>)




    if(this.props.activeItem === 'Dispensaries'){

        const user = "/" + this.props.user.username

        return(
            <Card.Group itemsPerRow={3} doubling raised>
                {this.dispensariesDisplay()}
                <Segment
                    
                    circular style={ {width:80, height:80} }

                    >
                    <Link to={user + "/newdispensary"}  >
                        <Menu.Item as='a' onClick={(e) => console.log("ASDMNASDNASNDNASDN", this.props.user)}>
                        <i class="large icons">
                        <i class="building icon"></i>
                        <i class="top right corner add icon"></i>
                        </i>
                        </Menu.Item>
                        </Link>
                </Segment>
            </Card.Group>
        )
    } else if(this.props.activeItem === 'Gallery'){
        const user = "/" + this.props.user.username

            return(


                <Card.Group itemsPerRow={3}>
                    {this.galleryDisplay()}
                    <Segment
                        raised
                        circular style={ {width:80, height:80} }
                        >
                        <Link onClick={this.props.handleAddPhoto}>
                            <Menu.Item as='a' >
                            <i class="large icons">
                            <i class="camera icon"></i>
                            <i class="top right corner add icon"></i>


                            </i>
                            </Menu.Item>
                            </Link>
                    </Segment>
                </Card.Group>
    )
}else if(this.props.activeItem === 'Strains'){
        const user = "/" + this.props.user.username

            return(


                <Card.Group itemsPerRow={3} doubling raised>
                    {this.strainsDisplay()}
                    <Segment
                        raised
                        circular style={ {width:80, height:80} }
                        >
                        <Link to={user + "/newstrain"} onClick={e => console.log("the clickk", e)}>
                            <Menu.Item as='a' >
                            <i class="large icons">
                            <i class="tree icon"></i>
                            <i class="top right corner add icon"></i>

                            </i>
                            </Menu.Item>
                            </Link>
                    </Segment>
                </Card.Group>
    )
}else if(this.props.activeItem === 'StrainReviews'){

        const user = "/" + this.props.user.username

        return(
            <Card.Group itemsPerRow={3} doubling raised>
                {this.strainReviewsDisplay()}
            </Card.Group>
        )
    }else if(this.props.strains){
    return(
        <Card.Group itemsPerRow={3} doubling raised>
            {this.strainsDisplay()}
        </Card.Group>)
}else{
    return null
}


}
}


// if(strains.length > 1){


//some logic here to condionially render whatever the user has, dispensaries, strains, notifications
// pictures, strainreviews







export default withRouter(UserContentDisplay)
