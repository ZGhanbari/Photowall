import React  from 'react';
import "../style/style.css"

function Title(props){
    return(
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title