import React from 'react';




const Blogcomment = props => {
    
    return (
        props.passComment.map(item => {
            
            return (
             <div key={item.id}>
                    <p>Author: {item.author}</p>
                    <p>Comment:{item.comment}</p>
                    <hr className="bg-info"/>
              </div>
            );

        })
    );

}




export default Blogcomment;