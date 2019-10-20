import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchNews } from "../actions"
import NewsPage from "../components/NewsPage"
import Preloader from "../components/Preloader"
import TagsList from "../components/TagsList"


class NewsPageContainer extends Component {
  componentDidMount(){
    this.props.fetchNews()
  }
  render(){
    return (
      <div>
        <h1>NEWS</h1>
        {!this.props.isFetching
          ? null
          : <Preloader />}
        <TagsList tags={this.props.tags}/>
        <NewsPage news={this.props.news}/>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  news: state.news,
  isFetching: state.isFetching,
  tags: state.news.map(item => item.hashtag)
})

export default connect(mapStateToProps, { fetchNews })(NewsPageContainer)