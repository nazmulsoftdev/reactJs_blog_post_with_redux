import React, { Component } from 'react';
import {Card,CardBody,FormGroup,Label,Col,Button} from 'reactstrap';
import {Form,Control,Errors,actions} from 'react-redux-form';
import { connect} from 'react-redux';


const mapDispatchtoProps = dispatch => {
    
    return {
        
        resetFeedbackForm: () => {
            dispatch(actions.reset("Feedback"))
        }

    }

}



const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Contactpage extends Component{


// Form submit Handler
    
    HandleFormSubmit = vaule => {
    
        console.log(vaule);
        this.props.resetFeedbackForm()

    }


    render() {
        
        return (
            <div className="container">
               <div className="row mt-5">
                <div className="col-7 m-auto">
                    <Card className="p-3">
                        <CardBody>
                                <Form model="Feedback" onSubmit={value=>this.HandleFormSubmit(value)}>
                                    <FormGroup row className="mb-3">
                                        <Col sm={3}>
                                           <Label htmlFor="firstName">First Name</Label>
                                        </Col>
                                        <Col sm={9}>
                                            <Control.text
                                                model=".firstName"
                                                name="firstName"
                                                className="form-control"
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".firstName"
                                                show="touched"
                                                messages={{
                                                    required:"Required"
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>
                                    
                                    <FormGroup row className="mb-3">
                                        <Col sm={3}>
                                           <Label htmlFor="lastName">Last Name</Label>
                                        </Col>
                                        <Col sm={9}>
                                            <Control.text
                                                model=".lastName"
                                                name="lastName"
                                                className="form-control"
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".lastName"
                                                show="touched"
                                                messages={{
                                                    required:"Required"
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>
                                    
                                    <FormGroup row className="mb-3">
                                        <Col sm={3}>
                                           <Label htmlFor="emailName">Email address</Label>
                                        </Col>
                                        <Col sm={9}>
                                            <Control.text
                                                model=".emailName"
                                                name="emailName"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    validEmail
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".emailName"
                                                show="touched"
                                                messages={{
                                                    required: "Required",
                                                    validEmail:"provide valid Email"
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row className="mb-3">
                                        <Col sm={3}>
                                           <Label htmlFor="phoneNumber">Phone Number</Label>
                                        </Col>
                                        <Col sm={9}>
                                            <Control.text
                                                model=".phoneNumber"
                                                name="phoneNumber"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    isNumber
                                                }}
                                            />
                                              <Errors
                                                className="text-danger"
                                                model=".phoneNumber"
                                                show="touched"
                                                messages={{
                                                    required: "Required",
                                                    isNumber:"provide valid Number"
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row className="mb-3">
                                        <Col sm={3}>
                                           <Label htmlFor="userMessage">Message</Label>
                                        </Col>
                                        <Col sm={9}>
                                            <Control.textarea
                                                model=".userMessage"
                                                name="userMessage"
                                                className="form-control"
                                                rows="5"
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".userMessage"
                                                show="touched"
                                                messages={{
                                                    required:"Required"
                                                     
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row className="mb-3">
                                        <Col sm={3}>
                                           
                                        </Col>
                                        <Col sm={9}>
                                          <Button outline color="danger">Submit</Button>
                                        </Col>
                                    </FormGroup>
                               </Form>
                        </CardBody>
                    </Card>
              </div>
            </div>
            </div>
        );

    }

}



export default connect(null,mapDispatchtoProps) (Contactpage);