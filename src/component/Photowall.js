import React, { Component }  from 'react';
import Photo from './photo'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import "../style/style.css"



class Photowall extends Component{
    render(){
    return(
       <div>
           <Link className="addIcon"  to="/AddPhoto"></Link>
            <div className="photoGrid">
            {this.props.posts.sort(function(x,y){
                return y.id - x.id
            })
            .map((post,index)=><Photo key={index} post={post} index={index}
             {...this.props} />)}
            
        </div>
       </div>
    )
}
}

Photowall.propTypes={
    posts: propTypes.array.isRequired,
}

export default Photowall