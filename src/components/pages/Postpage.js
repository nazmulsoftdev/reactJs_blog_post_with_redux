import React, { Component } from 'react'
import { Form, Input, FormGroup, Button } from 'reactstrap';
import { ChatLeftDots } from 'react-bootstrap-icons';
import {connect} from 'react-redux';


class Postpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            devName: '',
            devProfile: '',
            devPostText:''
        }
        this.HandleSubmitPost = this.HandleSubmitPost.bind(this);
        this.HandleInputpost = this.HandleInputpost.bind(this);
    }


     


  // Post Submit Form handle 
    
  HandleSubmitPost = event => {

    // dispatch method
    this.props.dispatch({
        type: "ADD_POST",
        payload: {
            devName: this.state.devName,
            devProfile: this.state.devProfile,
            devPostText:this.state.devPostText
        }
    });


    this.setState({
        devName: '',
        devProfile: '',
        devPostText:''
    });

    event.preventDefault();

}



//Formpost  Input Handle

HandleInputpost = event => {
    
    this.setState({
        [event.target.name]:[event.target.value]
    })

}




    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-4 m-auto">
                        <h4 className="text-center font-weight-bold ">Create your new post</h4>
                   </div>
                </div>
                <div className="row mt-5">
                    <div className="col-5 m-auto">
                        <Form onSubmit={this.HandleSubmitPost}>
                            <FormGroup className="mb-3">
                                <Input type="text" placeholder="Name" required name="devName" value={this.state.devName}
                                 onChange={this.HandleInputpost}
                                />
                           </FormGroup>
                            <FormGroup className="mb-3">
                                <Input type="url" placeholder="Image Link" required name="devProfile" value={this.state.devProfile}
                                onChange={this.HandleInputpost} />
                           </FormGroup>
                            <FormGroup className="mb-3">
                                <Input type="textarea" rows="5" placeholder="write your post" required name="devPostText"
                                    value={this.state.devPostText} onChange={this.HandleInputpost}/>
                            </FormGroup>
                            <FormGroup>
                                <Button outline color="danger" size="md">
                                     <ChatLeftDots/>
                                </Button>
                            </FormGroup>
                       </Form>
                     </div>
                </div>
            </div>
        )
    }
}



export default connect() (Postpage);