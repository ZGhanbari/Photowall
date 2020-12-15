import { connect } from 'react-redux'
import Main from './Main'
import {bindActionCreators} from 'redux'
import * as action from '../redux/action'
import {withRouter} from 'react-router'


function mapState(state){
    return{
        posts: state.Posts,
        comments: state.comments
    }
}

function mapDispatch(dispatch){
   return bindActionCreators(action,dispatch)

}
const App=withRouter( connect(mapState,mapDispatch)(Main))

export default App