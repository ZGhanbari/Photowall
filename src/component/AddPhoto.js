import React , {Component} from 'react';
import propTypes from 'prop-types'

import "../style/style.css"


class AddPhoto extends Component{
    constructor(){
        super()
        this.handle=this.handle.bind(this)
    }
    handle(event){
        console.log("handle")
        event.preventDefault();
        const imageLink1=event.target.elements.Link.value
        const description1=event.target.elements.description.value
        const post={
            id:Number(new Date()),
            description: description1,
            imageLink: imageLink1
        }
        if(imageLink1 && description1){
            
            this.props.addPost(post)
            this.props.history.push('/')
        }
    }
render(){
    return (
        <div>
            <div className="form">
                <form onSubmit={this.handle}>
                    <input type="text" placeholder="Link" name="Link"/>
                    <input type="text" placeholder="description"name="description" />
                    <button >Post</button>
                </form>
            </div>
        </div>



    )
}
}
AddPhoto.propTypes={
    
    onAdd: propTypes.func.isRequired
  }
export default AddPhoto