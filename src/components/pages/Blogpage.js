import React, { Component } from 'react'
import Profile from '../Profile/Profile'
import Scroll from '../Scroll/Scroll';
import {connect} from 'react-redux'
import Blogitem from '../Bloginfo/Blogitem';
import { addComment, fetchDispatch } from '../../redux/actionCreator';
import Spinner from '../Spinner/Spinner';


const mapToStateprops = state => {
    
    return {
        userPost: state.userPost,
        Usercomment : state.userComment
    }
}


const mapTodispatchProps = dispatch => {
    
    return {
        addComment: (author, comment) => dispatch(addComment(author, comment)),
        fetchDispatch : ()=>dispatch(fetchDispatch())
    }

} 


class Blogpage extends Component {
     

    componentDidMount() {
        this.props.fetchDispatch();
    }


    render() {


        if (this.props.userPost.isLoading) {
            return (
                <Spinner/>
            );
        }
        else {
                   // Make a post componet List 

        let DisplayBog = this.props.userPost.userPost.map(item => {
            
            return (
                <Blogitem
                    passPost={item}
                    passComment={this.props.Usercomment}
                    addComment = {this.props.addComment}
                    key={item.id}
                />
            );

        });



        return (
            <div className="container">
                <div className="row ">
                    <div className="col-4 mt-4 border-end">
                        <Profile/>
                    </div>
                    <div className="col-8  mt-4">
                        <Scroll>
                            {DisplayBog}
                        </Scroll>
                    </div>
                </div>
            </div>
        )
        }

 
    }
}



export default connect(mapToStateprops,mapTodispatchProps)(Blogpage);