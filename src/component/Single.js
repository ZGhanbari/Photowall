import React , {Component} from 'react'
import Photo from './photo'
import Comments from './Comments'


class Single extends Component{
    render(){
        const id= Number(this.props.match.params.id)
        const posts=this.props.posts
        const post=posts.find((post)=>post.id===id)
        const comments=this.props.comments[id] || []
        const index =this.props.posts.findIndex((post)=>post.id===id)
        if(post)return (
            <div className="single-photo">
                <Photo post={post} {...this.props}index={index}/>
                <Comments addComment={this.props.addComment} comments={comments} id={id} />
                
            </div>
        )

        else return <h1>... no post found</h1>
    }

}

export default Single