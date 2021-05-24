import React, { Component } from 'react'
import {Form,FormGroup,Input,Col,Button} from 'reactstrap';
import { Heart } from 'react-bootstrap-icons';


class BlogForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            author:'',
            comment:''
        }
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.HandleInput = this.HandleInput.bind(this);
    }


    // Comment Submit Form handle 
    HandleSubmit = event => {

        this.props.addComment(this.state.author, this.state.comment);
        
        this.setState({
            author:'',  
            comment: ''
        });

        event.preventDefault();

    }



    //Form  Input Handle

    HandleInput = event => {
        
        this.setState({
            [event.target.name]:[event.target.value]
        })

    }



    render() {
        return (
            <Form onSubmit={this.HandleSubmit}>
                <FormGroup row>
                    <Col sm={5}>
                        <Input type="text" placeholder="Name" name="author" required
                         value={this.state.author} onChange={this.HandleInput}/>
                    </Col>
                    <Col sm={5}>
                        <Input type="textarea" placeholder="comment" name="comment" rows="1" required
                         value={this.state.comment} onChange={this.HandleInput}/>
                    </Col>
                    <Col sm={2}>
                    <Button outline color="success" size="sm">
                       <Heart/>
                    </Button>
                    </Col>
               </FormGroup>
            </Form>
        )
    }
}



export default BlogForm;