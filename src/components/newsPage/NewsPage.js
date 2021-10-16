import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux"
import * as newsActions from "../../redux/actions/newsActions"



class NewsPage extends Component {

  componentDidMount(){
    this.props.actions.getNews();
    
    
  }

  render() {
    return (
      <div>
 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    
    news:state.newsListReducer
  };
}
function mapDispatchToProps(dispatch){
  return{
      actions:{
        getNews:bindActionCreators(newsActions.getNews,dispatch),
          
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewsPage);