import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IdeaItem from './IdeaItem';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    return posts.map( post => {
      return (
              <IdeaItem key={post._id} post={post}/>
      )
        }
    );
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;
