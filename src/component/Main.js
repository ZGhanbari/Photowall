import React , {Component} from 'react';
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import {Route,Link} from 'react-router-dom'
import Single from './Single'
import "../style/style.css"


class Main extends Component{
 render(){
     return(
        <div>
        <h1>
            <Link to="/">Photowall</Link>
        </h1>
        <Route exact path="/" render={()=>(
             <div>
        
             <Photowall {...this.props} />
             </div>
        )}/>
               <Route path="/AddPhoto" render={({history})=>(
                 
                     <AddPhoto {...this.props} history={history}/> 
        )} />
        <Route path="/single/:id" render={(params)=>(
            <Single  {...this.props} {...params}/>
     )}  />
        </div>
     )

 }



}

export default Main