

export function removePost(index){
    return{
        type: 'REMOVE-POST',
        index:index
    }
}
export function addPost(post){
    return{
        type: 'ADD-POST',
        post:post
    }
}
export function addComment(comment,postId){
    return{
        type:'ADD-COMMENT',
        comment,
        postId
    }

}