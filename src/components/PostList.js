import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(p => {
      return (
        <div key={p.id} className="item">
          <i className="large middle aligned icon user"></i>

          <div className="content">
            <div className="description">
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </div>

            <UserHeader userId={p.userId} />
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui relaxed divided list">{this.renderList()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);