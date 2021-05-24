import React, { Component } from 'react'
import {Card,CardBody,CardTitle,CardText} from 'reactstrap';
import { Trash,ArrowCounterclockwise} from 'react-bootstrap-icons';
import Blogcomment from './Blogcomment';
import BlogForm from './BlogForm';

class Blogitem extends Component {


    constructor(props) {
        super(props);
        this.state = {
            OpenComment:false
        }
    }
    

    ShowComment = () => {
        this.setState({
            OpenComment:!this.state.OpenComment
        })
    }



    render() {
        return (
            <Card className="mb-2">
                <CardBody>
                    <div className="row">
                        <div className="col-4">
                        <img src={this.props.passPost.devProfile} class="rounded-pill"
                        widt="70px"
                        height="70px"
                        alt="profile"
                        className="text-center"
                        /> 
                        </div>
                        <div className="row mt-2">
                            <div className="col-8">
                                <CardTitle>{this.props.passPost.devName}</CardTitle>
                            </div>
                            <div className="col-4">
                                <Trash size="20" className="text-danger" style={{cursor:'pointer'}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <CardText>{this.props.passPost.devPostText}</CardText>
                           </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-2">
                                <CardText className="text-info" style={{ cursor: 'pointer' }}
                                    onClick={this.ShowComment}>See Comment's <ArrowCounterclockwise/></CardText>
                           </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mt-2">
                                {this.state.OpenComment ? <Blogcomment passComment={this.props.passComment}/>:null}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mt-2">
                                <BlogForm addComment={this.props.addComment}/>
                            </div>
                        </div>

                    </div>
                </CardBody>
            </Card>
        )
    }
}

 

export default Blogitem;