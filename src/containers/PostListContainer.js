import PostList from '../components/PostList';
import {getPosts} from '../actions';
import {connect} from 'react-redux';


var mapStateToProps = function(appState){
  return {
    posts: appState.posts,
  }
}
var mapDispatchToProps = function(dispatch){
  return {
    getPosts: function(){ dispatch(getPosts()); }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
